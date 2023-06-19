import React from 'react';

const EmailButton = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:perdamisumbar2023@gmail.com';
  };

  return (
    <button className="btn btn-primary" type="button" onClick={handleButtonClick}>
      KIRIM
      <i className="fa-solid fa-paper-plane-top" style={{ color: "#0000ff" }}></i>
    </button>
  );
};

export default EmailButton;