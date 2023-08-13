import React from "react";
import "./fileUpload.css";
const FileUpload = () => {
  return (
    <>
      <h1>Files Upload/Download </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Please choose file/files to upload
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="button" className="btn btn-primary">
          Upload
        </button>
      </form>
    </>
  );
};

export default FileUpload;
