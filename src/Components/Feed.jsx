import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromapi } from "../Utils/fetchFromapli";

export default function Feed() {
  const [selectedcategory, setselectedcategory] = useState("New");
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    fetchFromapi(`search?part=snippet&q=${selectedcategory}`).then((data)=> {setVideosData(data.items)})

  }, [selectedcategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} />
        
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedcategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videosData={videosData} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Senai
        </Typography>
      </Box>
    </Stack>
  );
}
