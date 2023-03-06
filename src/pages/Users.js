import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";

const StyledBox = styled(Box)({
  height: 40,
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 10,
});
const Users = ({ apiUrl }) => {
  const [users, setUsers] = useState({ result: { data: [], total: 0 } });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  let userIdSelected = 0;

  const fetchUsers = React.useCallback(
    async function () {
      let response = await fetch(`${apiUrl}?_page=${page + 1}&_limit=${size}`);
      const json = await response.json();
      response = {
        total: response.headers.get("x-total-Count"),
        data: json,
      };
      setUsers({ result: { data: response.data, total: response.total } });
    },
    [page, size, apiUrl]
  );

  const handleDelete = async function () {
    if (userIdSelected === 0) {
      setAlertMsg("Select a row before pressing delete button!");
      setShowAlert(true);
      return;
    }
    setLoading(true);
    await fetch(`${apiUrl}/${userIdSelected}`, { method: "DELETE" });

    setLoading(false);
    setAlertMsg("User deleted successfully!");
    setShowAlert(true);

    fetchUsers();
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 180, editable: true },
    { field: "username", headerName: "UserName", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 250, editable: true },
  ];

  return (
    <>
      <div style={{ height: 420, width: "100%" }}>
        <DataGrid
          rows={users.result.data}
          columns={columns}
          pageSize={size}
          paginationMode="server"
          page={page}
          rowsPerPageOptions={[3, 5]}
          rowCount={parseInt(users.result.total)}
          onPageChange={(params) => {
            setPage(params.page);
          }}
          onPageSizeChange={(params) => {
            setSize(params.pageSize);
          }}
          onRowSelected={(e) => (userIdSelected = e.data.id)}
        />
        <div>
          <StyledBox>
            <Button variant="contained" color="primary" onClick={handleDelete}>
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                "Delete Selected User"
              )}
            </Button>
          </StyledBox>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
        >
          <Alert severity="success">{alertMsg}</Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Users;

// const fetchUsers = async function () {
//   let response = await fetch(`${apiUrl}?_page=${page + 1}&_limit=${size}`);
//   const json = await response.json();
//   response = {
//     total: response.headers.get("x-total-Count"),
//     data: json,
//   };
//   setUsers({ result: { data: response.data, total: response.total } });
// };

// useEffect(() => {
//   fetchUsers();
// }, [page, size]);
