import React from "react";
import "./fileTable.css";

const FileTable = () => {
  return (
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
      </table>
    </>
  );
};

export default FileTable;
