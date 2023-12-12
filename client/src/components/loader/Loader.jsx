import './Loader.css'

import loader from '/images/preloader.gif'

export default function Loader() {
    return (
        <div className='loader'>
            <img src={loader} alt="loader" />
        </div>
    );

}