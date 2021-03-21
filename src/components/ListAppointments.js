import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

function ListAppointments({ pets, deleteAppointment }) {
  return (
    <div className="appointment-list item-list mb-3">
      {pets.map((pet, i) => (
        <div className="pet-item col media py-3" key={i}>
          <div className="mr-3">
            <button
              className="pet-delete btn btn-sm btn-danger"
              onClick={() => deleteAppointment(pet)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span className="pet-name">{pet.petName}</span>
              <span className="apt-date ml-auto">
                <Moment
                  date={pet.aptDate}
                  parse="YYYY-MM-DD hh:mm"
                  format="MMM-D h:mma"
                />
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span>{pet.ownerName}</span>
            </div>
            <div className="apt-notes">{pet.aptNotes}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListAppointments;
