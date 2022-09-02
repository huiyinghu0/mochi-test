import view from './view.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='app-wrapper'>
        <div className='app-content'>
          <p className='app-title'>
            Scribbles AI
          </p>
          <div className='signup-wrapper'>
            <p className='signup-title'>Sign up to your account</p>
            <input className='input' placeholder='Your email' />
            <input className='input' placeholder='Your name' />
            <div>
              <input className='input' placeholder='Create Password' />
              <img src={view} className='ic-view' />
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
