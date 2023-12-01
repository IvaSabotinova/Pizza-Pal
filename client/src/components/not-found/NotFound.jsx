import { Link } from 'react-router-dom';
import './NotFound.css'
import Paths from '../../constants/Paths';

export default function NotFound() {
   return (
      <div className='not-found-wrapper'>
         <h3 className='not-found-para'>Oops! Something went wrong!!!</h3>
         <img className='not-found-img' src="../../images/error404.png" />     
         <p className='to-home'>Back to <Link to={Paths.Home}><span>home page!</span></Link></p>
      </div>
   );
}