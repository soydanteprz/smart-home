import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,
    faGamepad,
    faPersonSwimming, 
    faTableTennis,
    faUtensils,
    faCar,
    faCouch,
    faSun} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <Stack direction="vertical" gap={5}>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faBed} size = "2xl" /><br></br>
                Recamaras
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faCouch} size = "2xl" /><br></br>
                Sala
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faUtensils} size = "2xl"/><br></br>
                Comedor
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faCar} size = "2xl"/><br></br>
                Garage
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faSun} size = "2xl"/><br></br>
                Roof Garden
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faGamepad} size = "2xl"/><br></br>
                Sala de Juegos
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faPersonSwimming} size = "2xl"/><br></br>
                Alberca
                </div>
            <div className="bg-light border">
                <FontAwesomeIcon icon={faTableTennis}size = "2xl"/><br></br>
                Cancha de tenis
                </div>
        </Stack>
    );
};

export default Home;
