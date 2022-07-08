//IMPORTS
//Componentes
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import Navbar from "../../Components/NavBar/NavBar";
//DEVELOPING
const Home = () => {
    //Estilos en linea
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
    </div>
    );
};

export default Home;