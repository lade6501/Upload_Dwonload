import React from "react";
import "./fileTable.css";
import mime from "mime-types";
import byte from "byte-size";

const FileTable = ({ files }) => {
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
                <th>File Type</th>
                <th>Size</th>
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
                    <td>{`To be added`}</td>
                    <td>{`${byte(file.length)}`}</td>
                    <td>
                      <i className="fa-solid fa-eye"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-download"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-trash"></i>
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
