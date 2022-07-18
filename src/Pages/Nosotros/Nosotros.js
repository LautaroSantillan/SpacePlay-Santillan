//IMPORTS
//Estilos
import "./Nosotros.css";
//Iconos
import { AiOutlineSafetyCertificate, AiFillShopping} from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

const Nosotros = () => {
    //Estilo en linea
    const styles = {
        div:{
            paddingTop: 120
        }
    };

    return (
        <div style={styles.div}>
            <h2 className="tituloUs">Sobre<span> Nosotros</span></h2>
            <div className="contenorTarjetas">
                <div className="tarjeta">
                    <AiFillShopping className="iconoT" />
                    <h3>ECOMMERCE</h3>
                    <p>Somos un e-commerce de jerarquia y con trayectoria en el mercado comprobable</p>
                </div>
                <div className="tarjeta">
                    <AiOutlineSafetyCertificate className="iconoT" />
                    <h3>TIENDA VERIFICADA</h3>
                    <p>Nuestra labor para satisfacer a los clientes se nos ha devuelto verificandonos como tienda lider</p>
                </div>
                <div className="tarjeta">
                    <MdAttachMoney className="iconoT" />
                    <h3>PRECIO CLARO</h3>
                    <p>Hacemos un análisis detallado de los productos para darte un precio definitivo</p>
                </div>
            </div>
            <div className='galeriaUs'>
                    <div className="galeriaImg">
                        <img src="https://static.lasprovincias.es/www/multimedia/202011/19/media/cortadas/ps5-kXwC-U120813853870uMD-1248x770@Las%20Provincias.jpg" alt="imagenTienda" />
                    </div>
                    <div className="galeriaP">
                        <h3>¡Servicio Responsable!</h3>
                        <p>Nos encargamos de que una vez hayas hecho tu compra, tu pedido sea despachado y entregado sin demoras.</p>
                        <p>Siempre nos preocupamos por ofrecer la mejor confortabilidad y la mejor experiencia de compra a nuestros clientes.</p>
                    </div>
            </div>
            <div className='galeriaUs'>
                    <div className="galeriaP">
                        <h3>¡Trabajamos junto con SONY!</h3>
                        <p>Nuestro catálogo está compuesto por los productos de primerisima calidad de la marca SONY.</p>
                        <p>Esto nos permite otorgar garantias y soporte técnico por 12 meses con tu compra en SPACEPLAY.</p>
                    </div>
                    <div className="galeriaImg">
                        <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/4PONc4OkigKskbdBrbBWsQa1pOk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/B75HBPIINFE6VJWVZEL5BQVVJQ.JPG" alt="imagenTienda" />
                    </div>
            </div>
        </div>
    );
};

export default Nosotros;