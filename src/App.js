
import Homepage from './Homepage';
import Kontakt from './Kontakt';
import {Routes, Route} from 'react-router-dom'
import Hinnakiri from './Hinnakiri';
import Layout from './components/Layout';
import TehtudTööd from './TehtudTööd';

function App() {
  return (
    <Layout>
      <Routes>
        
          <Route path="/" element={<Homepage />} />
          <Route path="/hinnakiri" element={<Hinnakiri />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/tehtud-tood" element={<TehtudTööd />} />
        
      </Routes>
    </Layout>
  );
}

export default App;


