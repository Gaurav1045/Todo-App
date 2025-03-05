import React from "react";
import { MdDeleteForever } from "react-icons/md";


export default function TodoItem({todoName,todoDate,onDeleteClick}) {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg1-button" onClick={() => onDeleteClick(todoName)}>
            <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
