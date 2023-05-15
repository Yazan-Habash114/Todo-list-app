import React, { useState } from "react";

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(props.text);

  const handleDeleteClick = () => {
    props.onDelete(props.id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    props.onEdit(props.id, newText);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setNewText(props.text);
    setEditMode(false);
  };

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  if (editMode) {
    return (
      <div>
        <input type="text" value={newText} onChange={handleTextChange} />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <span>{props.text}</span>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }
};

export default TodoItem;
