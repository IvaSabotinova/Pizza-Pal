import Offer from "./Offer";
import FavoritesList from "./FavoritesList";
import About from "./About";
import BookTable from "./BookTable";
import Clients from "./Clients";


const Home = () => {
    return (
        <>
            <Offer />
            <FavoritesList />
            <About />
            <BookTable />
            <Clients />
        </>
    );
}

export default Home;