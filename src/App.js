import React, { useState, useEffect } from "react";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import axios from "axios";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((data) => setCards(data.data));
  }, []);

  return (
    <div>
      <Navbar />
      <Cards props={cards} />
    </div>
  );
};

export default App;
