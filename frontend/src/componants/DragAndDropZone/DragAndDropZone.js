import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropZone = () => {
  const [images, setImages] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages([
        ...images,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
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
      <div>
        {images?.map((image) => (
          <div key={image.name}>
            <div>
              <img src={image.preview} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DragAndDropZone;
