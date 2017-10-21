import * as ActionTypes from './ActionTypes';
import Helpers from '../Helpers';

const initialState = {
  products: [
    {
      name: "John Deere Farm Tractor with Loader",
      price: 31,
      id: 1,
      description: "Pedal Powered vehicles provide a fun and exciting way to exercise while helping to develop fine motor skills.",
      creationdate: "07/27/2017"
    },
    {
      name: "Ematic EBB9224PN Bluetooth CD Boombox - Pink",
      price: 35,
      id: 2,
      description: "The Ematic EBB9224PN CD Boombox with Bluetooth Audio and Speaker phone lets you enjoy great sound from CDs, your smart phone, or the radio whenever and wherever. ",
      creationdate: "07/27/2017"
    },
    {
      name: "Razor Hovertrax 2.0 Self-Balancing Smart Scooter - Red",
      price: 42,
      id: 3,
      description: "Step on the deck and go with Razor Hovertrax 2.0, the world's smartest self-balancing electric scooter.",
      creationdate: "07/27/2017"
    },
    {
      name: "Melissa & Doug Deluxe Wooden ABC/123 Blocks Set With Storage Pouch (50 pcs; colors may vary)",
      price: 12.99,
      id: 4,
      description: "These classic building blocks provide endless hours of building, balancing, counting, comparing, and all kinds of hands-on early learning!",
      creationdate: "10/06/2017"
    },
    {
      name: "Imaginarium 300-Piece Timber Log Set",
      price: 29.99,
      id: 5,
      description: "Travel back through time and use your imagination to build your own frontier town including homesteads and a city - center with the exclusive Toys \"R\" Us, Wooden Timber Log Set!",
      creationdate: "10/09/2017"
    },
    {
      name: "Lincoln Logs Grand Pine Lodge",
      price: 34.99,
      id: 6,
      description: "K'NEX Lincoln Logs Have been a classic since 1913. The Grand Pine Lodge is a 103 piece set and will provide little builders with hours of fun!",
      creationdate: "10/09/2017"
    }
  ]
};


export default function Product(state=initialState, action) {	
    
    switch(action.type){
      case ActionTypes.ADD_PRODUCT: {
        state.products.push({ ...action.product, id:new Helpers().getNextId(state.products) });
        return state;
       }
       case ActionTypes.EDIT_PRODUCT: {
        for (let i = 0; i < state.products.length; i++) {
          let p = state.products[i];
          if (p.id === +action.product.id) {
            p.name = action.product.name;
            p.description = action.product.description;
            p.price = action.product.price;
            p.creationdate = action.product.creationdate;
          }
        }
        return state;
       }
      case ActionTypes.REMOVE_PRODUCT: {
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id === +action.id) {
            state.products.splice(+i, 1);
          }
        }
        return state;
      }
  
      case ActionTypes.VIEW_PRODUCT:
        return {
          ...state,
          selectedPlayerIndex: action.id
        };
  
      default:
        return state;
    }
  }