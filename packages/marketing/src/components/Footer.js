import React from 'react';
import { Link as MaterialLink, Typography } from "@material-ui/core"
import { Link } from "react-router-dom/"

export default () => {
    return <Typography variant="body2" color="textSecondary" align="center">
         &copy;
        <MaterialLink component={Link} to='/' color="inherit">
            The Website
        </MaterialLink>{' '}
        { new Date().getFullYear()}
        {'.'}
    </Typography>
}