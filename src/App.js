import React from "react";
import Foods from "./components/Foods/Foods";

// components
import Header from "./components/Layout/Header/Header";

//styles
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Foods />
      </main>
    </>
  );
}

export default App;
