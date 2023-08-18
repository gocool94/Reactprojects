import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  


function App() {
    //const x = "gokul";
    return <div className='container'>
        <Header/>
        <Menu />
        <Footer/>
        </div>
}




function Header() {
    return <header  className = 'header'> 
        <h1>The Gokul's Company</h1>
        </header>
}
function Menu() {
    return <main className='menu'>
        <h2>Our Menu</h2>
        <ul className='pizzas'>
            {pizzaData.map(pizza => (<Pizza pizzaObj = {pizza} key= {pizza.name}/>))}
        </ul>
        {/* <Pizza name= "Pizza Prosciutto"
              ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
            price= {18}
      photoName= "pizzas/prosciutto.jpg"/>
        <Pizza name= "Pizza Salamino"
              ingredients= "Tomato, mozarella, and pepperoni    e"
            price= {18}
      photoName= "pizzas/salamino.jpg"/> */}
    </main>
}


function Pizza(props) {
    return <li className='pizza'>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
        <div>
        <h3>{props.pizzaObj.name}</h3>
        <br></br>
        <p>{props.pizzaObj.ingredients}</p>
        <br></br>
        <span>{props.pizzaObj.price + 3}</span>    
        </div>
    </li>
}




function Footer() {

    const hour = new Date().getHours();
    const openhour = 12;
    const closinghour = 22;
    console.log(hour)
    let string_val = "";
    if(hour < closinghour){
        string_val = "open"
    } else {
        string_val = "Closed"
    }
    console.log(string_val)
    return <footer className='footer'> Made with love by himself, the time is {new Date().toLocaleTimeString()} & we are now {string_val}</footer>
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);

