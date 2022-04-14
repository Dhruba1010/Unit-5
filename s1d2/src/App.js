// import logo from './logo.svg';
import './App.css';

const stylesMap = {
  square : "squarelist",
  square2 : "squarelist",
  normal : "none",
  circle : "circlelist",
}

function App() {
  const data1 = [ 'Android', 'BlackBerry', 'iPhone', 'Windows Phone' ]
  const data2 = [{name:'Samsung', style:'square'},{name:'HTC', style:'square'},{name:'Micromax', style:'disk'},{name:'Apple', style:'circle'}]
  return (
    <div className="app">
      <div className="firLists">
         <h2>Mobile Operating System</h2>

         <ul>
           {data1.map(e => {
             return <li>{e}</li>
           })}
         </ul>
      </div>
      <div className="secLists">
        <h2>Mobile Manufacturers</h2>
        <ul>
          {data2.map(e => {
            return <li className={e.style}>{e.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;
