import {
  Routes,
  Route,} from "react-router-dom";
import DummyDesign from "./pages/DummyDesign";


function App() {


  return (
    <Routes>
      <Route path="/" element={<DummyDesign />} />
    </Routes>
  );
}
export default App;
