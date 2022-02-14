import AdminRoute from "./Admin/AdminRoute/AdminRoute";
import UserSection from "./UserRoute/UserSection";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

/* import Homepage from './Pages/Homepage';
import Navbar from './Pages/Navbar';
import Cart from './Routes/Cart';
import Account from './Routes/Account';
import Login from './Routes/Login';
import AdminNavbar from './Admin/Pages/AdminNavbar'; */
function App() {
  return (
  /*  <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/account' element={<Account/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/admin' element={<AdminNavbar/>}/>
     </Routes>
   </Router> */
   
   <div>
     <UserSection/>
     <Router>
       <Routes>
         
       </Routes>
     </Router>
     <AdminRoute/>
   </div>
  );
}

export default App;
