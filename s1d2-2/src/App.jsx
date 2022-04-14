// import logo from './logo.svg';
import './App.css';

function App() {
  const compos = ["Services", "Projects", "About"];
  return (
    <div className="container">
      <div className="navbar">
        <div className='main'><h3>LOGOBAKERY</h3></div>
        <div className='paraDiv'>
          {compos.map((e) => {
            return  <p className="para"><Compo compo={e}/></p>;
          })}
        </div>
        <div className='contact'>
          <button className='button'>Contact</button>
        </div>
      </div>
    </div>
    
  );
}

let Compo = ({compo}) => {
  return (<p>{compo}</p>)
}

export default App;
