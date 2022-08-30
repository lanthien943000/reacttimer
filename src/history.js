import React from "react";

function HistoryTime({ history }) {
  return (
    <div className="history">
      <h4>History Time:</h4>
      <ul>
        {history.map((record) => {
          const des = record
            ? `Time ${history.indexOf(record) + 1}: ` + record
            : "Record:";
          return (
            <li key={record}>
              <p>{des}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HistoryTime;
