import React, { useEffect, useState } from "react";
import "../css/App.css";
import AddApointment from "./AddApointment";
import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";

import { without } from "lodash";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [formDisplay, setDisplay] = useState(true);
  const [orderBy, setOrderBy] = useState("petName");
  const [orderDir, setOrderDir] = useState("asc");
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then(setAppointments);
  }, []);

  const toggleForm = () => {
    setDisplay(!formDisplay);
  };

  const addApointment = (apt) => {
    let tempApts = appointments;
    tempApts.unshift(apt);
    setAppointments(tempApts);
  };

  const deleteAppointment = (apt) => {
    let tempApts = appointments;
    //without will take array and return it without apt
    tempApts = without(appointments, apt);
    setAppointments(tempApts);
  };

  //Sorting logic
  let order;
  let filteredApts = appointments;
  orderDir === "asc" ? (order = 1) : (order = -1);

  //convert to lowecase so it doesnt affect searching
  //order will decide asc or desc
  filteredApts = filteredApts
    .sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })
    .filter((eachItem) => {
      return (
        eachItem["petName"]
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase()) ||
        eachItem["ownerName"]
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase()) ||
        eachItem["aptNotes"]
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase())
      );
    });

  const changeOrder = (oBy, oDir) => {
    setOrderBy(oBy);
    setOrderDir(oDir);
  };

  const updateInfo = (name, value, id) => {
    let tempApts = appointments;
    tempApts[id][name] = value;
    setAppointments(tempApts);
  };

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddApointment
                formDisplay={formDisplay}
                toggleForm={toggleForm}
                addApointment={addApointment}
              />
              <SearchAppointments
                orderBy={orderBy}
                orderDir={orderDir}
                changeOrder={changeOrder}
                setQueryText={setQueryText}
              />
              <ListAppointments
                appointments={filteredApts}
                deleteAppointment={deleteAppointment}
                updateInfo={updateInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
