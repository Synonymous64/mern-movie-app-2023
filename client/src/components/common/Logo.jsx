import { Typography, useTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
const Logo = () => {
    const theme = useTheme();
    return (
        <Link to="/" style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
            <Typography fontWeight="700" fontSize="1.7rem">
                BINGE<span style={{ color: theme.palette.primary.main }}>FLIX</span>
            </Typography>
        </Link>
    )
}

export default Logo;