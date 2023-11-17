import Offer from '../offer/Offer';
import FavoritesList from "../FavoritesList";
import CustomPizzaMessage from '../custom-pizza/CustomPizzaMessage';
import Clients from '../clients/Clients';


const Home = () => {
    return (
        <>
            <Offer />
            <FavoritesList />
            <CustomPizzaMessage />
            <Clients />
        </>
    );
}

export default Home;