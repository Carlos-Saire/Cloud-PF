import MainBanner from "../common/MainBanner.tsx";
import banner3 from '../assets/images/Foto.png';

function Home() {
    return (
        <>
            <MainBanner />
            <section id="sobre-mi">
                <img src={banner3} alt="Foto" className="Foto" />
                <h1>Nombres: Carlos Enrique</h1>
                <h1>Apellidos: Saire Obregon</h1>
                <h3>Edad: 19</h3>
                <h4>Carrera: Diseño y Desarrollo de simuladores y videojuegos</h4>
            </section>
        </>
    );
}

export default Home;
