import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onDrop }: { onDrop: (acceptedFiles: File[]) => void }) => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? 'active' : ''}`}
      style={dropzoneStyle}
    >
      <input {...getInputProps()} />
      <i className="fa-solid fa-cloud-arrow-up fa-3x" style={iconStyle}></i>
      <p style={textStyle}>Drag And Drop Image</p>
      <button type="button" style={buttonStyle}>Browse File</button>
    </div>
  )
}

const dropzoneStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #E3E3E3',
    borderRadius: '20px',
    width: '221px',
    height: '212px',
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    cursor: 'pointer',
  };
  
  const iconStyle = {
    color: 'rgba(108, 108, 108, 1)',
  };
  
  const textStyle = {
    margin: '30px 0px 10px 0px',
    fontSize: '15px',
    fontWeight:'700',
    lineHeight:'17.61px'
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#4070f4',
    color: '#fff',
    cursor: 'pointer',
  };
  

export default FileUpload