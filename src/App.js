import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{background: darkMode ? '#222' : 'white' , color: darkMode && 'white'}}>
      <Toggle/>
      <Home/>
      <About/>
      <ProductList/>
      <Contact/>   
    </div>
  );
}

export default App;
