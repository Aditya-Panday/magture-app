import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function Login() {

    return (
        <div className='container-fluid log-page' >
            <Box
                display="grid"
                alignItems="center"
                className='bx-log'
                gap={2}
                p={2}
                borderRadius={3}
                sx={{ border: '2px solid black' }}
            >
                <div>
                    <h2 className='font-serif text-log m-0'>Mageture Admin Panel</h2>
                    <hr />
                </div>
                <div className='d-grid gap-3'>

                    <TextField id="outlined-basic" label="Email" variant="outlined" />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />

                    <Button variant="contained">Login</Button>
                </div>

            </Box>
        </div>
    );
}
