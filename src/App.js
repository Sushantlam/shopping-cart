import "./App.css";
import Nav from "./Component/Nav";
import Card from "./Component/Card";
import Items from "./Component/Items";
import Cart from "./Component/Cart";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./Component/Footer";



function App() {

  const item = [
    {
      id: "1",
      image: "Project/Boot.png",
      price: "1500",
      para: "Mens summer boot/ Ghee color Shoes",
      btn: "Add To Cart",
      Qty:1,
    },

    {
      id: "3",
      image: "Project/converse.png",
      price: "1200",
      para: "Mens comfortable black color Shoes",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "4",
      image: "Project/cotrize.png",
      price: " 2500",
      para: "Cotrize outer jacket for Male",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "5",
      image: "Project/pant.png",
      price: " 1300",
      para: "Navy Color Pant/Attractive Pant",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "6",
      image: "Project/hodie.png",
      price: " 1700",
      para: "Hodie for all season",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "7", 
      image: "./Project/jeansJacket.png",
      price: " 2300",
      para: "Affordable jacket for all season",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "8",
      image: "Project/locket.png",
      price: "500",
      para: "Party wear locket for Male/Female",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "9",
      image: "Project/pant.png",
      price: " 1300",
      para: "Pant for Female",
      btn: "Add To Cart",
      Qty:1,
    },
    {
      id: "10",
      image: "Project/Boot.png",
      price: " 1500",
      para: "Boot ",
      btn: "Add To Cart",
      Qty:1,
    },
  ];
  const [data, setData]= useState([]);
  
//   const clickedItem = cartItems.find((el) => el.id === product.id);
//   if (clickedItem) {
//     alert("Item  Already Added to Cart");
//   } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   }
// };
 
  const handleSumbit=(id)=>
  {
    {
       const newData= item.find((element)=>
        {
            return (
              element.id===id
            )

           
        })
       
        window.alert('Item added to cart')
       
        setData([...data, {...newData, Qty: 1}])
      
     
        
    }
   
    
}
  
  return (
    <>
     {console.log("data", data)}
      <Nav image={"Project/logo (2)@2x.png"} img={"Project/cart.png"} />
      

      <Switch>
        <div className="container">
          <Route exact path="/cart">
            <Cart data={data} />
          </Route>

          <Route exact path="/">
            <Card card={"Project/card.png"} />
          </Route>
          <Route  exact path="/">
            
            <Items handleSumbit={handleSumbit} item={item} />
          </Route>
         

        </div>
      </Switch>
    </>
  );
}

export default App;
