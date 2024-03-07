import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home, Sobre } from './pages';

function App()
{
  return (
    <>
    <Header />
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/jogos' element={<Sobre />} />
     <Route path='/sobre' element={<Sobre />} />
     <Route path='/jogo/:nomeJogo' element={<Sobre />} />
    </Routes>
    </>
  )
}

export default App;
