//IMPORT
//Sweet Alert
import swal from 'sweetalert';
//DEVELOPING
const Contacto = () => {
    const MostrarAlerta=()=>{
        swal({
            title: "ATENCIÓN!!!",
            text: "Usted ha ingresado a una página en construccion...",
            icon: "warning",
            button: "Continuar"
        })
    }
    //Estilos en linea
    const styles = {
        div:{
            paddingTop: 150
        }
    }

    return (
    <div style={styles.div}>
        <button onClick={()=>MostrarAlerta()}>PRESIONE</button>
    </div>
    );
};

export default Contacto;