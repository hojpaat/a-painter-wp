import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './components/homePage/HomePage.tsx';
import ContactsPage from './components/contacts/ContactsPage.tsx';
import ReviewsPage from './components/reviews/ReviewsPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import GalleryComponent from './components/Gallery/Gallery.tsx';


const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="gallery" element={<GalleryComponent />} />
        <Route path="*" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

)

