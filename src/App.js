import React from "react";
import About from "./routes/About";
import Home from "./routes/Home"
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail"
import {HashRouter,Route} from"react-router-dom";


function App(){
    return (
    <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/home/introduction" >
            <h1>introduction</h1>
        </Route>
        <Route path="/about" exact={true} component={About} />
        <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
    );
}
export default App; 