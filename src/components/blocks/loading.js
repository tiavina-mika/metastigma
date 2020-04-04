import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
        <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
        </Box>
    );

export default Loading;