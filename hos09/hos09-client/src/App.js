import React from "react";
import { useState, useEffect } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
// App.js

const App = () => {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://127.0.0.1:8000/api/records`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);
  return (
    <div>
      {records.map((record) => {
        return (
          <div>
            <h1>{record.name}</h1>
            <p>{record.position}</p>
            <p>{record.level}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default App;
