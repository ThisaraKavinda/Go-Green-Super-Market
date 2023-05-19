import React from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropZone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();
  return (
    <div
      {...getRootProps()}
      className="border border-primary p-5 text-center d-flex align-items-center justify-content-center"
      style={{ height: "250px" }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="h5">Drop the files here ...</p>
      ) : (
        <p className="h5">Drag and drop files here, or click to select files</p>
      )}
    </div>
  );
};

export default DragAndDropZone;
