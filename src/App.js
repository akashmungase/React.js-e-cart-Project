import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/header';
import Routing from './pages/routing';

function App() {
  return (
    <div className="App"> 
      <Header />
      <Routing/>
    </div>
  );
}

export default App;
