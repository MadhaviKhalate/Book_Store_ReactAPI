import logo from './logo.svg';
import './App.css';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Forget from './Pages/Forget/Forget';
import Reset from './Pages/Reset/Reset';
import Book from './Components/Book/Book';
import RouterComponent from './Router/Router';
import MyCart from './Components/MyCart/MyCart';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';




function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <Forget/> */}
      {/* <Reset/> */}
      {/* <Home/> */}
      {/* <Book/> */}
      {/* <MyCart/> */}
      <RouterComponent/>
    </div>
  );
}

export default App;
