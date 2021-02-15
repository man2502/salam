
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/Navbar/NavBar';
import Contacts from './Components/Contacts/Contacts';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="App-wrapper">
          <Route path='/login' render={() => <Login />} />
          <Container>
            <div className="App-content">
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/contacts' render={() => <Contacts />} />
            </div>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
//  <div className="App-content">