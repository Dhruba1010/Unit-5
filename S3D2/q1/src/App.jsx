
import './App.css';
import { HomeButt, Login, SignUp} from './components/navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div><HomeButt>Home</HomeButt></div>
        <div className='right'>
          <Login >Login</Login>
          <SignUp >Sign Up</SignUp>
        </div>
      </div>
    </div>
  );
}

export default App;
