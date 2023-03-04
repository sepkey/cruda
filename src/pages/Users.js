import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Users = ({ apiUrl }) => {
  const [users, setUsers] = useState({ result: { data: [], total: 0 } });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

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
          onPageChange={(params) => {
            setPage(params.page);
          }}
          onPageSizeChange={(params) => {
            setSize(params.pageSize);
          }}
          rowsPerPageOptions={[3, 5]}
          rowCount={parseInt(users.result.total)}
        />
      </div>
    </>
  );
};

export default Users;
