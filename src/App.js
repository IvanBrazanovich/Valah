
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Principal from "./components/principal/Principal.jsx"
import Inicio from "./components/inicio/Inicio.jsx"
import Registrar from "./components/Registrar/Registrar.jsx"



//Redux
import { Provider } from "react-redux"
import store from "./store"
function App() {
  return (
    <Router>
      <Provider store={[store]} >
      <div className="container1">
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/registrar" component={Registrar}/>

      </Switch>

      </div>


      
      </Provider>
    </Router>
  );
}

export default App;
