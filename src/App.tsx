import './App.css'
import NavBar from './components/NavBar';
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
