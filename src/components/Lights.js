import React from "react";
import { Box } from "@mui/material";
import Time from "./Time";
import Background from "./Background";
import "../App.css";

export default function Lights() {
    return (
        <div className="Lights">
            <Background />
        <Box 
        mt={10}
        sx={{ flexGrow: 1 }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", md: "row" }}
        display={"flex"} >
            <Box width={{ xs: "35vh", md: "40vh" }} mr={10}>
                <h1>CONFIGURACIÓN AVANZADA</h1>
            </Box>
            <Box>
                <Time/>
            </Box>
        </Box>
        </div>
    );
}