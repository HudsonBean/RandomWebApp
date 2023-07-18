import React, { useState, useEffect } from "react";

function App() {
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    fetch("/api/dev")
      .then((res) => res.json())
      .then((data) => setServerMessage(data.body));
  }, []);

  return <div>{serverMessage}</div>;
}

export default App;
