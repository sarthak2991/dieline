import react from "react";
import  ReactDOM  from "react-dom";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Parameters from "./parameters";
import './index.css'

import Nesting from "./nesting";
import Dieline from "./dieline";

function App(){
    return (
    <>
    {/*Setting up of router */}
    <BrowserRouter>
    <Switch>
        {/*routes for router */}
        <Route exact path="/"><Parameters/></Route>
        <Route path = "/dieline"><Dieline /></Route>
        <Route path="/nesting"><Nesting/></Route>
    </Switch>
    </BrowserRouter>
    
    </>
    )
}
// rendering main component
ReactDOM.render(<App/>,document.getElementById('root'))