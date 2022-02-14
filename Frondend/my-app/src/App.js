import Homepage from './Pages/Homepage';
import Navbar from './Pages/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Routes/Cart';
import Account from './Routes/Account';
import Login from './Routes/Login';
function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/account' element={<Account/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   </Router>
  );
}

export default App;
