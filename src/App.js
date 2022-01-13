import './App.css';
import './index.css';
import GetData from './components/GetData';
import SendData from './components/SendData';
import { getList } from './components/GetData';

function App() {
  return (
    <div className="App">
      <div className='head'><h1>ELECTRICAL POWER SYSTEM PROTECTION</h1></div>
      <div className='SubDiv-1'>
        <h2>FOURTH INDUSTRIAL REVOLUTION PROTECTION SYSTEM</h2>
        <h3>By: Syed Muhammad Mooazam</h3>
      </div>
      <div className='SubDiv-2'>
      <SendData />
      <GetData />
      </div>
    </div>
  );
}

export default App;
