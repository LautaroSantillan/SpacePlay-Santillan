import "./CartWidget.css";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart">
            <FaShoppingCart />
            <p className="contadorCart">6</p>
        </div>
    );
};

export default CartWidget; 