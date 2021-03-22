import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

function ListAppointments({ appointments, deleteAppointment, updateInfo }) {
  return (
    <div className="appointment-list item-list mb-3">
      {appointments.map((apt, i) => (
        <div className="pet-item col media py-3" key={i}>
          <div className="mr-3">
            <button
              className="pet-delete btn btn-sm btn-danger"
              onClick={() => deleteAppointment(apt)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span
                className="pet-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateInfo("petName", e.target.innerText, i)}
              >
                {apt.petName}
              </span>
              <span className="apt-date ml-auto">
                <Moment
                  date={apt.aptDate}
                  parse="YYYY-MM-DD hh:mm"
                  format="MMM-D h:mma"
                />
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateInfo("ownerName", e.target.innerText, i)}
              >
                {apt.ownerName} {i}
              </span>
            </div>
            <div
              className="apt-notes"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateInfo("aptNotes", e.target.innerText, i)}
            >
              {apt.aptNotes}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListAppointments;
