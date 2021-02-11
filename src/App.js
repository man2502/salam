
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-wrapper">
            <Route path='/login' render={()=><Login />}/>
            <Route path='/profile' render={()=><Profile/>}/>
  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
//  <div className="App-content">