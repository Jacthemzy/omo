import si from '../css/welcome.module.css';
import { Link } from 'react-router-dom';
import { FaAngleLeft} from 'react-icons/fa';


const Welcome = () => {
  return (
            <div className={si.change}>
            <div className={si.main}>
                <h3 className={si.h3}>
                    
                    <Link to="/"><FaAngleLeft /> Home</Link>
                </h3>
        <div className={si.tit}>
          <h1>WELCOME</h1>
          <h2>Proceed to SIGN UP</h2>
          <Link to="/signup">
            <button type='submit' className={si.but} >SIGN UP</button>
          </Link>
                </div>
    </div>
    </div>
  )
}

export default Welcome