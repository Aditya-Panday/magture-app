import React, { useState } from 'react'

import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, TextField } from '@mui/material';

export default function VerifyCode() {
    // const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
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
                minWidth={350}
            >
                <div>
                    <h2 className='font-serif text-dark m-0'>Change Password</h2>
                    <hr />
                </div>
                <div className='d-grid gap-3'>

                <TextField id='page-num' label='Enter Code' type="number" className='w-100' variant='outlined' />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className='w-100'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        className='w-100'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained">Submit</Button>

                </div>

            </Box>
        </div>
    )
}
