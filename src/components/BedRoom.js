import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Background from "./Background";
import "../App.css";

export default function BedRoom() {
    return (
        <div className="bedroom">
            <Background />
        <Stack direction="vertical" gap={5} className="text-center">
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faBed} size="2xl" color="turquoise"/>
                </NavLink>
                <br></br>
                Cuarto de Daniel
            </div>
            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faBed} size="2xl" color="orange" />
                </NavLink>
                <br></br>
                Cuarto de Dante
            </div>            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faBed} size="2xl" color="turquoise" />
                </NavLink>
                <br></br>
                Cuarto de Blue
            </div>            <div className="bg-light border">
                <NavLink
                    to="/room"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <FontAwesomeIcon icon={faBed} size="2xl" color="orange"/>
                </NavLink>
                <br></br>
                Cuarto de Randu
            </div>
            </Stack>
        </div>
    );
}