import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    {/* {console.log("App.js")} */}
    <Header/>
    <Outlet/>
    </>
  );
}
    
export default App;
