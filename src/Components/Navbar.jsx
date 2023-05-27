import { Stack } from "@mui/material";
import React from "react";

import { logo } from "../Utils/Constace";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
export default function Navbar() {
  return (
    <Stack
    
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        
        position: "sticky",
        zIndex:3,
        backgroundColor: "black",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="" height={45} />
      </Link>
      <Searchbar/>
    </Stack>
  );
}
