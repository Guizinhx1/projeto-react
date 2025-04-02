import React from 'react';
import './taskList.css'

function TaskItem({ nome, descricao }) {
  return (
    <div className="taskItem">
      <p>Nome: {nome}</p>
      <p>Descrição: {descricao}</p>
    </div>
  );
}

export default TaskItem;