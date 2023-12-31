import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
  <div>
    <Header/>
   <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/WatchHistory' element={<WatchHistory/>}/>
   </Routes>
   <hr/>
  <Footer/>
  </div>
  );
}

export default App;
