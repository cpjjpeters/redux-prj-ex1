import { useState } from "react";

import "./App.css";

function App() {
  //Actions
  const [count, setCount] = useState(0);
  const increment = { type: "INCREMENT", payload: 10 };
  //Reducers
  //Action --> reducer --> change state

  return <></>;
}

export default App;
