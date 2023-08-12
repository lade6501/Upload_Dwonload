import { useState } from "react";
import "./App.css";
import FileUpload from "./components/fileUpload/fileUpload";
import FileTable from "./components/fileTable/fileTable";

function App() {
  const [files, setFiles] = useState([]);
  return (
    <>
      <FileUpload />
      {files.length > 0 && <FileTable />}
    </>
  );
}

export default App;
