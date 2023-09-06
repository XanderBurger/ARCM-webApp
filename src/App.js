import './App.css';
import P5app from './sketch/sketch';
import logo from './images/ACRM-white.png'

function App() {
  return (
    <div className='outer'>
      <h1 className='header'>Come See the History of Progress </h1>
      <div className='sketch'>
        <P5app/>
      </div>
      <div className='spacer'></div>
      <h1 className='lowerHeader'>
        @ the ACRM
        <a href="https://acrmuseum.org/" className='link'>Plan your visit</a>
      </h1>
      <image src={logo} alt="logo" className='logo'/>
    </div>   
  );
}

export default App;
