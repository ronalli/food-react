import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import './App.css';
import { About, Contact, Home, NotFount, Category } from './pages';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='*' element={<NotFount />} />
            <Route path='/' element={<Home />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
