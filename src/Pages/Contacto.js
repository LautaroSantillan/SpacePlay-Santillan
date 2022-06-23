import swal from 'sweetalert';

const Contacto = () => {
    const MostrarAlerta=()=>{
        swal({
            title: "ATENCIÓN!!!",
            text: "Usted ha ingresado a una página en construccion...",
            icon: "warning",
            button: "Continuar"
        })
    }

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