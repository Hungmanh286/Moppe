import {React,useContext} from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/main';
import Footer  from '../components/Footer';
import Products2 from "../components/Products2";
import slider1 from '../image/slider1.png';
import slider2 from '../image/slider2.png';
import slider3 from '../image/slider3.jpeg';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Main arrImages={[slider1, slider2, slider3]} />
      {isLoggedIn && <h2 className="text-center my-3"></h2>}
      <Products2 />
      <Footer />
    </div>
  );
};

export default Home;
