import "./Navigation.css";

const Navigation = () => {
    return (
        <div class="header">
            <a href="index.html" class="logo">
                <img src="https://cdn.dribbble.com/users/1787323/screenshots/12057610/media/8e7e8e869bf389fb727ac393c42e6b27.png?compress=1&resize=400x300" alt="icono" class="icono"/>
                <h1 class="nombre"><span>Space</span>Play´s</h1>
            </a>
            <nav>
                <input type="checkbox" id="menu"/>
                <label for="menu" class="nav--hamburguesa">
                <i class="fas fa-bars"></i>
                </label>
                <ul class="header--nav nav--animaciones">
                <li><a href="">INICIO</a></li>
                <li><a href="">PRODUCTOS</a></li>
                <li><a href="">GALERIA</a></li>
                <li><a href="">CONTACTO</a></li>
                </ul>
            </nav>
            <div class="carrito">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    );
};

export default Navigation;