import React, { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/dev")
      .then((res) => res.json())
      .then((data) => setMessage(data.body));
  }, []);
  return <div>{message}</div>;
}

export default App;
