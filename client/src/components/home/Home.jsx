import Offer from '../Offer';
import FavoritesList from "../FavoritesList";
import CustomPizzaMessage from '../custom-pizza-message/CustomPizzaMessage';
import BookTable from "../BookTable";
import Clients from '../clients/Clients';


const Home = () => {
    return (
        <>
            <Offer />
            <FavoritesList />
            <CustomPizzaMessage />
            <BookTable />
            <Clients />
        </>
    );
}

export default Home;