import React from "react";
import "./fileTable.css";
import mime from "mime";
import byte from "byte-size";
import Dropdown from "react-bootstrap/Dropdown";

const FileTable = ({ files }) => {
  const handledelete = (id) => {
    fetch(`http://localhost:8005/api/v1/file/${id}`, {
      method: "delete",
    })
      .then(async (res) => {
        const data = await res.json();
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {files.length == 0 ? (
        <h1 className="tableHead">No files found</h1>
      ) : (
        <>
          <h1 className="tableHead">Recent Files</h1>

          <table className="table table-striped" id="table">
            <thead className="table-dark">
              <tr>
                <th>File Name</th>
                <th>
                  File Type
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <i className="fa-solid fa-filter"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Images</Dropdown.Item>
                      <Dropdown.Item>PDF'S</Dropdown.Item>
                      <Dropdown.Item>Text</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
                <th>
                  Size
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <i className="fa-solid fa-filter"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Smallest first</Dropdown.Item>
                      <Dropdown.Item>Biggest first</Dropdown.Item>
                      <Dropdown.Item>Top 5 smallest</Dropdown.Item>
                      <Dropdown.Item>Top 5 biggest</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
                <th>View</th>
                <th>Download</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => {
                return (
                  <tr key={index}>
                    <td>{file.filename}</td>
                    <td>{`${mime.getType(file.filename)}`}</td>
                    <td>{`${byte(file.length)}`}</td>
                    <td>
                      <i className="fa-solid fa-eye"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-download"></i>
                    </td>
                    <td>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => handledelete(file._id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default FileTable;
