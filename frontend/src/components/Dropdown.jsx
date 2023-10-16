import React, { useState } from "react";

const obj = [
  {
    id: 1,
    name: "india",
    states: ["gujarat", "maharashtra"],
  },
  {
    id: 2,
    name: "united states",
    states: ["new york", "los angeles"],
  },
];

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset the selected state when the country changes
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleObj = () => {   
   const states  =  obj.find((country)=>country.name === selectedCountry).states;
   const value =  Object.values(states);
   console.log(value);
   console.log('click')
//    setSelectedState(value);   
   }

  return (
    <>
      <select name="selectCountry" id="countryDropdown" onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {obj.map((country) => (
          <option key={country.id} value={country.name} >
            {country.name}
          </option>
        ))}
      </select>
     {selectedCountry && (
        <select name="" id="ok" onChange={handleStateChange}>
            {Object.values(obj.find((country)=>country.name === selectedCountry).states).map((state, index)=> (
                <option value={state} key={index}> {state} </option>
            ))}
        </select>
     )}
    </>
  );
};

export default Dropdown;
