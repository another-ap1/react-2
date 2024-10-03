import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MenuItem from "./MenuItem";
import FoodMenu from "./FoodMenu";
import AddItem from "./AddItem"

function App() {
  //setting up all of our useState
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //getting data from API both the drinks and snacks
  useEffect(() => {
    async function getMenuItems() {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();

      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }
    getMenuItems();
  }, []);

  //this will show if the data is still being collected
  if (isLoading) {
    return <p>Loading...</p>;
  }

  //function for adding a new item to the API
  const addItem = async (formData, type) => {
    try{
      const newItem = await SnackOrBoozeApi.addItem(formData, type);
      alert("Item added:", newItem);
    }catch(e){
      console.error(e)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} title="Snacks" />
            </Route>

            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <FoodMenu drinks={drinks} title="Drinks" />
            </Route>

            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/addSnack">
              <AddItem addItem={addItem} type="snacks"/>
            </Route>

            <Route path="/addDrink">
              <AddItem addItem={addItem} type="drinks"/>
            </Route>
            
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
