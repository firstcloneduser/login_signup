import './App.css';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App ">
        <div className='container'>
        <Routes>
          <Route path='/task_login' element={<Login />}/>
          <Route path='/' element={<Login />}/>

          <Route path='/signup' element={<Signup />}/>
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
