import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const DomainDetailsModal = ({
  isOpen,
  setOpenModal,
  domain,
}: {
  isOpen: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  domain: any;
}) => {
  return (
    <Dialog open={isOpen} onClose={()=> setOpenModal(!isOpen)} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h4" component="div" color="primary">
          Domain Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {domain ? (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Domain Name:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13} >{domain.domainName}</Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Crawl Progress:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.crawl_progress || "N/A"}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>IP Address:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.ip || "N/A"}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Server:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.server || "N/A"}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Added On:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {formatDate(domain?.createdAt)}
              </Typography>
            </Box>

            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Total Pages:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.total_pages}
              </Typography>
            </Box>

            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>SSL Expriation Date:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {formatDate(domain?.DomainInfo?.ssl_certificate_expiration_date)}
              </Typography>
            </Box>

            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>External Links:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.links_external}
              </Typography>
            </Box>

            
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>Internal Links:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.links_internal}
              </Typography>
            </Box>

            
            <Divider />
            <Box>
              <Typography variant="body1" fontSize={15} color="textSecondary">
                <strong>SEO Friendly URLs:</strong>
              </Typography>
              <Typography variant="body1" fontSize={13}>
                {domain?.DomainInfo?.seo_friendly_url}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No details available.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenModal(false)} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DomainDetailsModal;
