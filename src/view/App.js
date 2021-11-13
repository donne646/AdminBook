
import { BrowserRouter } from 'react-router-dom';
import '../assets/App.scss';
import NavAdmin from "../components/NavAdmin";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavAdmin/>
    </div>
    </BrowserRouter>
  );
}

export default App;
