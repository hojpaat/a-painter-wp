import './App.css'
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  )
}

export default App
