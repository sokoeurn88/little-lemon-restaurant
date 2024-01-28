import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import OrderOnline from "./components/OrderOnline";
import ReservationsConfirm from "./components/ReservationsConfirm";


function App() {
  return (
    <>
      <p>Homepage</p>
      <Header />
      <Nav />
      <Main />
      <Footer />
      <About />
      <Home />
      <Login />
      <OrderOnline />
      <ReservationsConfirm />
    </>
  );
}

export default App;
