import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TableRow = ({ user, onEdit, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSelectRow = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tr className={isSelected ? 'selected' : ''}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleSelectRow}
        />
      </td>
      <td>{user.id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        ) : (
          user.email
        )}
      </td>
      <td>{user.role}</td>
      <td>
        {isEditing ? (
          <>
            <button className="edit-button" onClick={() => onEdit(editedUser)}>
              Save
            </button>
            <button className="edit-button" onClick={handleEditToggle}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditToggle}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(user.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
