import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoProfilePicture,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../Utils/Constace";

export default function ChannelCard({channerldetail, marginTop}) {
    
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channerldetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channerldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channerldetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channerldetail?.snippet?.title}{' '}
          <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channerldetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channerldetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
  )
}
