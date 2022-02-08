import React from "react";

import Header from "./components/HEADER";
import Cards from "./components/CARDS";
import Footer from "./components/FOOTER";

import data from "./data.json";

function App() {
  const cardElements = data.map(item => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <section>{cardElements}</section>
      <Footer />
    </div>
  );
}

export default App;
