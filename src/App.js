import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;
