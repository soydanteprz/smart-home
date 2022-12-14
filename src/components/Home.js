import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faGamepad,
    faPersonSwimming,
    faTableTennis,
    faUtensils,
    faCar,
    faCouch,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Background from "./Background";
import "../App.css";

export default function Home() {
    return (
        <div className="home">
            <Background />
        <Stack direction="vertical" gap={5} className="text-center">
            <div className="bg-light border">
                <NavLink
                    to="/bedroom"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faBed} size="2xl"  color="purple"/>
                </NavLink>
                <br></br>
                Recamaras
            </div>

            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faCouch} size="2xl" color="green" />
                </NavLink>
                <br></br>
                Sala
            </div>

            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faUtensils} size="2xl" color="turquoise"/>
                </NavLink>
                <br></br>
                Comedor
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faCar} size="2xl" color="silver" />
                </NavLink>
                <br></br>
                Garage
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faSun} size="2xl" color="orange" />
                </NavLink>
                <br></br>
                Roof Garden
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faGamepad} size="2xl" color="red" />
                </NavLink>
                <br></br>
                Sala de Juegos
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faPersonSwimming} size="2xl" color="lime"/>
                </NavLink>
                <br></br>
                Alberca
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faTableTennis} size="2xl" color="navy"/>
                </NavLink>
                <br></br>
                Cancha de tenis
            </div>
        </Stack>
        </div>
    );
}
