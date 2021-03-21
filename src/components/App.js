import React, { useEffect, useState } from "react";
import "../css/App.css";
import AddApointment from "./AddApointment";
import ListAppointments from "./ListAppointments";
import ContactMe from "./ContactMe";

import { without } from "lodash";

function App() {
  const [petList, setPets] = useState([]);
  const [formDisplay, setDisplay] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => data.json())
      .then(setPets);
  }, []);

  function deleteAppointment(pet) {
    let tempApts = petList;
    //without will take array and return it without apt
    tempApts = without(petList, pet);
    setPets(tempApts);
  }

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddApointment formDisplay={formDisplay} />
              <ListAppointments
                pets={petList}
                deleteAppointment={deleteAppointment}
              />
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
