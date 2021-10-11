
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Route,Switch} from 'react-router-dom'
import Add from './components/Add';
import ContactList from './components/ContactList';
import { Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {toggleFalse } from './Js/Actions/Contacts';
import{useDispatch} from "react-redux"
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
  <h1> Mern Application ContactList </h1>
  <Link to="/contact/add">
  <Button inverted color='red' onClick={()=>dispatch(toggleFalse())}>Add</Button>
  </Link>

  <Link to="/">
  <Button inverted color='red'>ContactList</Button>
  </Link>


<Switch>
  <Route exact path="/"  component={ContactList}/>
  <Route path={["/contact/add", "/contact/edit/:id"]} component={Add} />
</Switch>
    </div>
  );
}

export default App;
