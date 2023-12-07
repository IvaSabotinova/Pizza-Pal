import Offer from '../offer/Offer';
import LatestProposals from '../latest-proposals/LatestProposals'
import CustomPizzaMessage from '../custom-pizza/CustomPizzaMessage';
import Clients from '../clients/Clients';


const Home = () => {
    return (
        <>
            <Offer />
            <LatestProposals />
            <CustomPizzaMessage />
            <Clients />
        </>
    );
}

export default Home;