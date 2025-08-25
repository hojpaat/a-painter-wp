import './App.css'
import NavBar from './components/navBar/NavBar';
import { Outlet } from 'react-router';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className='test'>
        <Outlet />
      </div>
    </>
  )
}

export default App
