import React, { useState, useEffect } from "react";

const Selection = (props) => {
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategorydata] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const username = "user3472";
  const apiKey = "0f6aa487-0f3b-41dc-95be-86c19dd0b98d";

  //get brandlist and setting as options at rendered select element

  const getBrands = () => {
    const brandUrl = "https://size-calculator-api.sspinc.io/brands?limit=20";
    fetch(brandUrl, {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${username}:${apiKey}`),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.brands.length; i++) {
          brandData.push(data.brands[i].id);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getBrands();
  });
  //setting category related to brand

  const getCategory = (brandInput) => {
    brandInput = brandData;
    const categoryUrl = `https://size-calculator-api.sspinc.io/categories?brand_id=${brandInput}`;
    fetch(categoryUrl, {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${username}:${apiKey}`),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
  }, [brandData]);
  //getCategory();

  return (
    <div>
      <select onSelect={handleSelect}>
        <option value="default" hidden>
          Please select a brand
        </option>
        {brandData.map((item, index, array) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select>
        <option value="default" hidden>
          Please select a category
        </option>
        <option value={categoryData}>{categoryData}</option>
      </select>
      <div>
        <span>My size is</span>
        <input>{props.sizeInput}</input>
        <span>inches</span>
      </div>
    </div>
  );
};

export default Selection;
