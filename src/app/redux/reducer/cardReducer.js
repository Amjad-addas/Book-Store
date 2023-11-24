import { data } from '@/app/data'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  card:JSON.parse(sessionStorage.getItem("card"))||[],
  price:JSON.parse(sessionStorage.getItem("price"))||0,
}
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
        addToCard(state,actions){

            state.card.push({
              id:actions.payload.id,
              image:actions.payload.image,
              title:actions.payload.title,
              desc:actions.payload.desc,
              price:actions.payload.price
            })
            if(actions.payload.price=='free'){
              actions.payload.price=0
            }else{
              actions.payload.price=parseInt(actions.payload.price.slice(0,-1))
            }
            
            state.price=state.price+actions.payload.price
            const priceSaved=JSON.stringify(state.price)
            sessionStorage.setItem('price',priceSaved)

            const cardSaved=JSON.stringify(state.card)
            sessionStorage.setItem('card',cardSaved)
        },
        removeFromCard (state,actions){
            
            state.card = state.card.filter(
              (product) =>
                product.id !==actions.payload.id
            );
            if(actions.payload.price=='free'){
              actions.payload.price=0
            }else{
              actions.payload.price=parseInt(actions.payload.price.slice(0,-1))
            }
            state.price=state.price-actions.payload.price
            const priceSaved=JSON.stringify(state.price)
            sessionStorage.setItem('price',priceSaved)

           const cardSaved = JSON.stringify(state.card);
           sessionStorage.setItem("card", cardSaved);
        }
  },
})


export const {addToCard,removeFromCard} = cardSlice.actions

export default cardSlice.reducer