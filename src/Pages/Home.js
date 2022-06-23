import '../App.css';
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Navbar from "../Components/NavBar/NavBar";

const Home = () => {
    const styles = {
		MainSection: {
            width: "100%",
            paddingRight: 15,
            paddingLeft: 15,
            marginRight: "auto",
            marginLeft: "auto",
            paddingTop: 100
		}
	}
    
    return (
    <div className='MainSection' style={styles.MainSection}>
        <Navbar />
        <ItemListContainer />
        <ItemDetailContainer />
    </div>
    );
};

export default Home;