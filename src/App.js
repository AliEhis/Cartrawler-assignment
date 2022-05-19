import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
