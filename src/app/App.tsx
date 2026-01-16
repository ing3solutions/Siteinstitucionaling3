import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Sobre, Servicos, Projetos, Conteudo, Contato } from '@/app/pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
