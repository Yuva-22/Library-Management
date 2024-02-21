import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Adminpage from './pages/booklist/adminpage';
import Addbook from './pages/addbook/addbook';
import Userpage from './pages/userpage/userpage';
import Borrowbook from './pages/borrowbook/borrowbook';

function App() {
  return (
    <div className="App">

       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path = "/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin">
              <Route index element = {<Adminpage />} />
              <Route path="addbook" element={<Addbook />} />
            </Route>
            <Route path="/user">
              <Route index element = {<Userpage />} />
              <Route path="borrowbook" element={<Borrowbook />} />            </Route>
          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
