import { createStore } from "redux";
import root from "./Redux/Reducers/main";


const store = createStore(
    root
);


export default store;