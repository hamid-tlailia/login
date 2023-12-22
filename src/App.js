
import './App.css';
import Chat from './components/chat';
import Login from './components/login';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
<Switch>
  <Route exact path='/'><Login/></Route>
  <Route path='https://hamid-tlailia.github.io/nodejs/'><Login/></Route>
  <Route path="/chat"><Chat/></Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;
