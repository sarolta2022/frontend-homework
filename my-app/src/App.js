import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Selection from "./components/Selection";
import Result from "./components/Result";

function App() {
  const [form, setForm] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    setForm(!form);
  };

  const username = "sarolta2022";
  const apiKey = "<your api key>";
  const promise = fetch("https://size-calculator-api.sspinc.io/brands", {
    mode: "cors",
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(`${username}:${apiKey}`),
    },
  });

  promise.then((response) => response.json()).then((data) => console.log(data));

  return (
    <div className="App">
      <Card>
        {form ? (
          <Form buttonText="CALCULATE" onSubmit={onSubmit}>
            <Selection />
          </Form>
        ) : (
          <Form buttonText="OK" onSubmit={onSubmit}>
            <Result />
          </Form>
        )}
      </Card>
    </div>
  );
}

export default App;
