import React from 'react';
import {connect, Provider} from "react-redux";
import {store} from "./redux/store";
import Index from "./components/Index";

const App = ()=>{
    return(
        <Provider store={store}>
            <Index />
        </Provider>
    )
}

export default App;
