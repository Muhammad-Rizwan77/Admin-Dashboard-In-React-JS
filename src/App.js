import { Table } from '@mui/material';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="app">
        <div className="appGlass">
          <Sidebar />
          <MainDash />
          <RightSide/>
        </div>
    </div>
  );
}

export default App;
