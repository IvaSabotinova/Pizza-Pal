import ScrollToTop from "react-scroll-up";

import './ScrollUp.css';

export default function ScrollUp() {
    return (
        <ScrollToTop showUnder={160}>
            <div className="scroll-up">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </ScrollToTop>
    );
}