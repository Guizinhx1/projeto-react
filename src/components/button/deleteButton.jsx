import React from 'react';
import './button.css'

function DeleteButton({ onDelete }) {
  return (
    <button className="delete-button" onClick={onDelete}>
      Remover
    </button>
  );
}

export default DeleteButton;