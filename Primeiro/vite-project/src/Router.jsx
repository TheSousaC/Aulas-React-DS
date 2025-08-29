import { Routes, Route } from 'react-router-dom';

import { Inicial, PaginaError, SobreNos } from './Pages';
import { LayoutPadrao } from './layouts';

const Router = () => {
    return (
    <Routes>
       <Route path="/" element={<LayoutPadrao />}>
       <Route path="*" element={<PaginaError />}/>
       <Route path="/" element={<Inicial />} />
       <Route path="/sobre-nos" element={<SobreNos />} />
       </Route>
    </Routes>
 );
};

export { Router };