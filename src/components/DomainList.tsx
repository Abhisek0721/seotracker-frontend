import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

import { Toaster } from "react-hot-toast";
import { formatTimestamp } from "../utils/tableUtils";
import { useGetDomainListQuery } from "../redux/feature/domainTrackApi";
import React, { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

const DomainList = ({domainAddedName}:{domainAddedName: string}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const { data: domainListData, isLoading, refetch } = useGetDomainListQuery({
    limit,
    pageNumber: currentPage,
  });

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    event?.preventDefault();
    setCurrentPage(page);
  };

  useEffect(() => {
    refetch();
  }, [domainAddedName])

  if (isLoading) {
    return <Spinner />;
  }

  const domainList = domainListData?.data?.domains || [];
  const totalPages = Math.ceil(domainListData?.data?.domainCount / limit);

  return (
    <div className="max-w-full overflow-auto mt-10">
      <div>
        <Toaster />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "120px" }}>
                <span className="text-3xl font-semibold">Domain Name</span>
              </TableCell>
              <TableCell style={{ width: "150px" }} align="center">
                <span className="text-3xl font-semibold">Crawl Progress</span>
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                <span className="text-3xl font-semibold">IP Address</span>
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                <span className="text-3xl font-semibold">Server</span>
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                <span className="text-3xl font-semibold">Added On</span>
              </TableCell>
              <TableCell style={{ width: "120px" }} align="center">
                <span className="text-3xl font-semibold">View More</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {domainList.map((eachDomain: any) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={eachDomain?._id}
              >
                <TableCell align="left">
                  <span className="text-3xl text-wrap">
                    {eachDomain?.domainName}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-3xl">
                    {eachDomain?.DomainInfo?.crawl_progress || "N/A"}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-3xl">
                    {eachDomain?.DomainInfo?.ip || "N/A"}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-3xl">
                    {eachDomain?.DomainInfo?.server || "N/A"}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-3xl">
                    {formatTimestamp(eachDomain?.createdAt)}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <button className="w-28 py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)] text-xl tracking-[1px]">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPages > 1 && (
        <div className="mt-5 flex justify-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            size="large"
            siblingCount={2}
          />
        </div>
      )}
    </div>
  );
};

export default DomainList;
