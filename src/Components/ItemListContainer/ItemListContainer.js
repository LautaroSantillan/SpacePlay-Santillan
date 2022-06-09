

const Eccomerce = 'SPACE PLAY'

const ItemListContainer = () => {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>BIENVENIDO!</strong> Usted esta en {Eccomerce} - Heche un vistazo al catalogo
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
};

export default ItemListContainer;