import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  const [userName , setUserName] = useState();
  useEffect(() =>{
      const data = {
        name : "mukul"
      }
      setUserName(data.name)
  },[])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{loggedInUser : userName , setUserName}}>
    <div>    
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}
    
export default App;
