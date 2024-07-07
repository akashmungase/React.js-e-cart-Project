import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/header';
import Routing from './pages/routing';
// import Home from './pages/home'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Header />
      <Routing/>
    </div>
  );
}

export default App;
