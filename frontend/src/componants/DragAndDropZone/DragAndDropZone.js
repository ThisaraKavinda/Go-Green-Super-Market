import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropZone = () => {
  const [images, setImages] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      );
    },
    accept: "image/*",
  });

  console.log(images);
  return (
    <>
      <div
        {...getRootProps()}
        className="border border-primary p-5 text-center d-flex align-items-center justify-content-center"
        style={{ height: "250px" }}
      >
        <input {...getInputProps()} multiple />
        {isDragActive ? (
          <p className="h5">Drop the files here ...</p>
        ) : (
          <p className="h5">
            Drag and drop files here, or click to select files
          </p>
        )}
      </div>
      {/* {images?.map((image) => (
        <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
      ))} */}
    </>
  );
};

export default DragAndDropZone;
