import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAddDomainNameMutation } from "../redux/feature/domainTrackApi";
import Spinner from "../ui/Spinner";

const AddDomain = ({setDomainAddedName}:{
  setDomainAddedName: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [domainName, setDomainName] = useState(null);
  const [maxCrawlPages, setMaxCrawlPages] = useState(10);
  const [addDomainNameFn, { isLoading }] = useAddDomainNameMutation();

  if(isLoading) {
    return <Spinner />
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddDomainName = async () => {
    setLoading(true);
    const payload = {
      domainName,
      maxCrawlPages: Number(maxCrawlPages)
    };
    try {
      console.log(payload);
      let response:any = await addDomainNameFn(payload);
      if (response?.error) {
        const message = response.error?.data?.message;
        return toast.error(message);
      }
      if (response?.data?.data) {
        toast.success(response?.data?.message, { duration: 3000 });
        setDomainAddedName(payload.domainName || "");
      }
      handleClose();
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClickOpen}
        className="button-style"
      >
        Add Domain
      </button>
      <Dialog open={open} onClose={handleClose}>
        <div style={{padding: '30px'}}>
          <DialogTitle sx={{fontSize: "16px"}}>Add New Domain</DialogTitle>
          <DialogContent sx={{ minWidth: "500px", fontSize: "1.5rem" }}>
            <TextField
              autoFocus
              margin="dense"
              id="domainName"
              label="Domain Name"
              type="text"
              placeholder="seotracker.com"
              fullWidth
              value={domainName}
              onChange={(e: any) => setDomainName(e?.target?.value)}
              InputProps={{
                style: { fontSize: "1.6rem" },
              }}
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              margin="dense"
              id="maxCrawlPages"
              label="Maximum Crawl Pages"
              type="number"
              fullWidth
              value={maxCrawlPages}
              onChange={(e: any) => setMaxCrawlPages(e?.target?.value)}
              InputProps={{
                style: { fontSize: "1.6rem" },
              }}
              InputLabelProps={{
                shrink: true,
                style: { fontSize: "1.5rem" },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              sx={{ fontSize: "1.3rem" }}
            >
              Cancel
            </Button>

            <LoadingButton
              onClick={handleAddDomainName}
              sx={{ fontSize: "1.3rem" }}
              loading={loading}
              loadingPosition="start"
              variant="contained"
            >
              Add Domain
            </LoadingButton>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default AddDomain;
