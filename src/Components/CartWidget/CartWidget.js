import "./CartWidget.css";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart">
            <FaShoppingCart />
            <p className="contadorCart">5</p>
        </div>
    );
};

export default CartWidget; 