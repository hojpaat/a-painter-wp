import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './components/HomePage.tsx';
import ContactsPage from './components/ContactsPage.tsx';
import ReviewsPage from './components/ReviewsPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';


const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

)

