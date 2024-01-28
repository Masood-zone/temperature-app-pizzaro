import React, { useState } from "react";
import { celcToFahr, farenToCelcius } from "../../utils/temparetureConverter";
import { temp_options } from "../../utils/units";

function ConvertForm() {
  const [value, setValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("Celcius");
  const [celciusValue, setCelciusValue] = useState("");
  const [farenValue, setFarenValue] = useState("");

  //Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Validating the input
    if (!value && selectedUnit) {
      alert("You need to provide a value!");
    }
    //Displaying the results based on conditions
    let results;
    if (selectedUnit === "Celcius") {
      setFarenValue("");
      results = celcToFahr(value);
      setCelciusValue(results);
    } else if (selectedUnit === "Fahrenheit") {
      setCelciusValue("");
      results = farenToCelcius(value);
      setFarenValue(results);
    } else {
      return results;
    }
  }

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      {/* For tempreture value */}
      <div className=" mb-6 flex flex-col">
        <label htmlFor="temperature">Enter Temperature</label>
        <input
          type="number"
          name="tempareture"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Temperature"
          className="py-3 px-2 mt-2 rounded-md"
        />
      </div>

      {/* For unit select option */}
      <div className="flex flex-col">
        <label htmlFor="unit">Choose Unit:</label>
        <select
          className="mt-2 py-3 px-2"
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          {temp_options.map((unit) => (
            <option key={unit.id} value={unit.value}>
              {unit.value}
            </option>
          ))}
        </select>
      </div>

      {/* Button for submission and results */}
      <div className="flex items-center justify-between">
        <button
          className="bg-[#007BFF] text-white mt-6 py-2 px-5 rounded text-lg"
          type="submit"
        >
          Convert
        </button>

        <span className="text-xl p-3 mt-5 rounded-md bg-gray-300 font-medium">
          {selectedUnit === "Celcius" && value ? (
            `${celciusValue}°C
`
          ) : selectedUnit === "Fahrenheit" && value ? (
            `${farenValue}F`
          ) : (
            <span className="text-base font-normal py-1">
              Convert for results
            </span>
          )}
        </span>
      </div>
    </form>
  );
}

export default ConvertForm;
