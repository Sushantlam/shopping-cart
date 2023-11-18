import { createSlice } from "@reduxjs/toolkit";
import item from "../data";

const initialState={
    cart:[],
    productItem: item,
    totalProduct: 0,
    totalPriceBeforeTax: 0,
}

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
           let find= state.cart.findIndex((e)=>e.id===action.payload.id)

         if(find>=0){
           state.cart[find].Qty+=1
            }
         else{
            
            state.cart.push(action.payload)
            alert("Items added to cart")
         }
    
        }, getCartTotal: (state) => {
            let { totalPriceBeforeTax, totalProduct } = state.cart.reduce(
              (cartTotal, cartItem) => {
               
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, Qty } = cartItem;
                console.log(price, Qty);
                const itemTotal = price * Qty;
                cartTotal.totalPriceBeforeTax += itemTotal;
                
                cartTotal.totalProduct += Qty;
                return cartTotal;
              },
              {
                totalPriceBeforeTax: 0,
                totalProduct: 0,

              }
            );
            state.totalPriceBeforeTax = parseInt(totalPriceBeforeTax.toFixed(2));
            state.totalProduct = totalProduct;
          },
        decreaseQuantity:(state, action)=>{
            state.cart= state.cart.map((e)=>{
                if(e.id===action.payload)
                {
                    if(e.Qty>=2){
                        return {...e, Qty: e.Qty-1}
                    }
                   
                }
                return e
            })
        },
        increaseQuantity:(state, action)=>{
            state.cart= state.cart.map((e)=>{
                if(e.id===action.payload)
                {
                     return {...e, Qty: e.Qty+1}
                     }
                return e
            })
        },

        removeItem:(state, action)=>{
            state.cart= state.cart.filter((e)=> 
                e.id!==action.payload)
        },
        checkout:(state)=>{
            
            state.cart=[]
        }
       
    }
})

export const {addToCart, checkout, decreaseQuantity,increaseQuantity, removeItem, getCartTotal}= cartSlice.actions

export default cartSlice.reducer