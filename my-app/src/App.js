import { useEffect, useState } from "react";

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
