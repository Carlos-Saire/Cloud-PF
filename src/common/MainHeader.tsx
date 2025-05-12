import { Link } from "react-router-dom";

function MainHeader() {
    return (
        <header id="main-header" className="bg-info text-white py-3 px-4 d-flex justify-content-between align-items-center">
            <div>
                <h1 className="mb-1 fw-bold">Steven Universe</h1>
                <p className="mb-0">Desarrollo de Videojuegos en Soluciones Cloud</p>
            </div>
            <Link to="/login" className="text-white text-decoration-none fw-bold fs-4">
                Login
            </Link>
        </header>
    );
}

export default MainHeader;
