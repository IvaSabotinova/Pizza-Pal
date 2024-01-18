import './Loader.css'

import loader from '/images/preloader.gif'

export default function Loader({ fullPage }) {
    const loaderClass = fullPage ? 'full-page-loader' : 'loader'
    return (
        <div className={loaderClass}>
            <img src={loader} alt="loader" />
        </div>
    );

}