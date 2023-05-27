import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromapi } from "../Utils/fetchFromapli";
import { useParams } from "react-router-dom";

export default function Searchfeed() {
  const [videosData, setVideosData] = useState([]);
  const {searchTerm}=useParams()

  useEffect(() => {
    fetchFromapi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideosData(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      > 
        Search result for  <span style={{ color: "#F31503" }}> {searchTerm}</span> Videos
      </Typography>
      <Videos videosData={videosData} />
    </Box>
  );
}
