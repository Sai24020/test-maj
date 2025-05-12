

import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
