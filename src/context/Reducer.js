import { act } from "react-dom/test-utils"

export const cartReducer=(state,action)=>{
    switch(action.type){
        case 'Add_To_Cart':
            return {...state,products:[...state.products.map((p)=>{if(p.id===action.payload.id)
            return p.instock=p.instock-1; else return p})],cart:[...state.cart,{...action.payload, qty:1}]}
        case 'Remove_From_Cart':
            return {...state,cart:state.cart.filter((c)=>c.id!==action.payload)}
        case 'Change_Cart_Item_Qty':
            return {...state,cart:state.cart.map((c)=>{
                if(c.id===action.payload.id)
                  return {...c,qty:action.payload.qty}
                else
                  return {...c}
            })}
        default:
            return state;
    }

}
export const productReducer=(state,action)=>{
    switch(action.type){
        case'Sort_By_Price':
          return {...state,sort:action.payload}
        case'Filter_By_Stock':
          return {...state,byStock:!state.byStock}
        case'Filter_By_Delivery':
          return {...state,byFastDelivery:!state.byFastDelivery}
        case'Filter_By_Rating':
          return {...state,byRating:action.payload}
        case'Filter_By_Search_Query':
          return {...state,bySearchQuery:action.payload}
        case'Clear_Filters':
          return { byStock:false,
            byFastDelivery:false,
            byRating:0,
            sort:'',
            bySearchQuery:''}
        default:
            return state;
    }
}