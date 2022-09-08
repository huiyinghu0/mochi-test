import google from './google.svg';
import './App.css';
import { useState, useMemo } from 'react';
import SignupTitle from './components/SignupTitle';

const WEAK = 'Weak'
const MEDIUM = 'Medium'
const STRONG = 'Strong'
const STRONGER = 'Stronger'
const BEST = 'Best'
const METER_DISABLED = 'meter-bar'
const METER_ACTIVE = 'meter-bar active'

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pswd, setPswd] = useState('')
  const [pswdStatus, setPswdStatus] = useState('Weak')

  const meterMedium = useMemo(() => {
    if (pswdStatus != WEAK)
      return METER_ACTIVE
    else
      return METER_DISABLED
  }, [pswdStatus])

  const meterStrong = useMemo(() => {
    if (pswdStatus == STRONG || pswdStatus == STRONGER || pswdStatus == BEST)
      return METER_ACTIVE
    else
      return METER_DISABLED
  })

  const meterStronger = useMemo(() => {
    if (pswdStatus == STRONGER || pswdStatus == BEST)
      return METER_ACTIVE
    else
      return METER_DISABLED
  })

  const meterBest = useMemo(() => {
    if (pswdStatus == BEST)
      return METER_ACTIVE
    else
      return METER_DISABLED
  })

  const handleCreatePswd = (e) => {
    const newPswd = e.target.value
    const pswdLength = newPswd.length
    setPswd(newPswd)
    if (pswdLength <= 3) {
      setPswdStatus(WEAK)
    } else if (pswdLength >= 4 && pswdLength <= 6) {
      setPswdStatus(MEDIUM)
    } else if (pswdLength >= 7 && pswdLength <= 9) {
      setPswdStatus(STRONG)
    } else if (pswdLength >= 10 && pswdLength <= 12) {
      setPswdStatus(STRONGER)
    } else {
      setPswdStatus(BEST)
    }
  }

  return (
    <div className="App">
      <header className='app-wrapper'>
        <div className='app-content'>
          <p className='app-title'>
            Scribbles AI
          </p>
          <div className='signup-wrapper'>
            <SignupTitle />
            <input className='input' placeholder='Your email' value={email} onChange={e => { setEmail(e.target.value) }} />
            <input className='input' placeholder='Your name' value={name} onChange={e => { setName(e.target.value) }} />
            <div className='input-wrapper'>
              <input className='input' placeholder='Create Password' value={pswd} onChange={e => handleCreatePswd(e)} />
              <i className='ic-view' />
            </div>

            <div className='meter'>
              <div className={METER_ACTIVE}></div>
              <div className={meterMedium}></div>
              <div className={meterStrong}></div>
              <div className={meterStronger}></div>
              <div className={meterBest}></div>
              <span className='meter-status'>{pswdStatus}</span>
            </div>

            <p className='policy'>By signing up, you confirm that you’ve read and<br />
              accepted our
              <span className='highlight'> User Notice </span>
              and
              <span className='highlight'> Privacy Policy.</span>
            </p>
            <button className='reg-btn' onClick={() => { console.log(`Email: ${email}\nName: ${name}\nPswd: ${pswd}`) }}>Register</button>
            <p>or</p>
            <button className='google-btn'>
              <img className='ic-google' src={google}></img>
              <a className='link-google' href='https://www.google.com/'>Continue with Google</a>
            </button>
            <p className='highlight login'>Already have a Scribbles AI account? Log in</p>

          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
