import React, { useEffect, useState } from "react";
import "./fileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  //Calling api to get all uploaded files from DB
  const getFiles = () => {
    fetch("http://localhost:8005/api/v1/files")
      .then(async (res) => {
        const data = await res.json();
        setFiles(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Calling an api to upload file to DB
  const upload = () => {
    const data = new FormData();
    data.append("file", file);

    fetch("http://localhost:8005/api/v1/upload", {
      method: "post",
      body: data,
    })
      .then(async (res) => {
        const data = await res.json();
        alert(data.message);
        getFiles();
      })
      .catch((err) => {
        console.error("err ", err);
      });
  };

  return (
    <>
      <h1>Files Upload/Download </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Please choose file/files to upload
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => upload()}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default FileUpload;
