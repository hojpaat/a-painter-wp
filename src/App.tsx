import './App.css'
import ContactsPage from './components/ContactsPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Outlet, Route, Routes } from 'react-router';
import ReviewsPage from './components/ReviewsPage';
import ServicesPage from './components/ServicesPage';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  )
}

export default App
