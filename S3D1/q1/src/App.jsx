
import './App.css';
// import Button from '@mui/material/Button';
import {Button} from './components/button';

function App() {
  const theme = ['Primary Button', 'Default Button', 'Dashed Button', 'Text Button', 'Link Button'];

  return (
    <div className="App">
      {theme.map(t => {
        return (
          <Button t={t}>{t}</Button>
        )
      })}
    </div>
  );
}

export default App;
