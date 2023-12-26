import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '12%',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '24px',

    zIndex: 10,
  };

  return (
    <div style={buttonStyle as React.CSSProperties} onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
      &nbsp;Back
    </div>
  );
};
