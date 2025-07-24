import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import AskPage from './Pages/AskPage';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import GetHelp from './Pages/GetHelp';
import Heatmap from './Pages/Heatmap';       
import RandomFacts from './Pages/RandomFacts'; 
import MalariaTable from "./Components/MalariaTable";
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-help" element={<GetHelp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/heatmap" element={<Heatmap />} />         
        <Route path="/random-facts" element={<RandomFacts />} /> 
        <Route path="/table" element={<MalariaTable />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
