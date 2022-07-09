//IMPORT
//Sweet Alert
import swal from 'sweetalert';
//DEVELOPING
const Contacto = () => {
    const MostrarAlerta=()=>{
        swal({
            title: "ATENCIÓN!!",
            text: "Usted ha ingresado a una página en construccion... Vuelva al HOME",
            icon: "warning",
            button: "Continuar"
        })
    }
    //Estilos en linea
    const styles = {
        div:{
            paddingTop: 150
        },
        button:{
            fontWeight: "bolder",
            textTransform: "uppercase",
            border: "1px solid black",
            padding: 7,
            backgroundColor: "#3ddac4",
        }
    }

    return (
    <div style={styles.div}>
        <button style={styles.button} onClick={()=>MostrarAlerta()}>PRESIONE</button>
    </div>
    );
};

export default Contacto;