import React, { useContext, useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PizzaItem from "../components/PizzaItem.jsx";
import { PizzaContext } from "../context/PizzaProvider.jsx";
import "../styles/menu.css";

function Menu() {
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const { state } = useContext(PizzaContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const { data } = await response.json();
        setItems(data);
        setError("");
      } catch (e) {
        setError(
          "Some issues have occurred 😔 Please, contact us on 000 555 33 22"
        );
      } finally {
        setIsLoading(false);
      }
    };

    getItems();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header className="menu__header" />
      </div>
      <div className="pizza__wrapper">
        {error && <h1 className="error">{error}</h1>}
        {!error && (
          <>
            {isLoading ? (
              <div className="loader-wrapper">
                <Bars
                  height={120}
                  width={120}
                  color="rgb(120 113 108)"
                  ariaLabel="bars-loading"
                />
              </div>
            ) : (
              <ul className="pizza__wrapper_items">
                {items.map((item) => (
                  <PizzaItem key={item.id} pizza={item} />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      {state.items.length > 0 && <Footer />}
    </div>
  );
}

export default Menu;
