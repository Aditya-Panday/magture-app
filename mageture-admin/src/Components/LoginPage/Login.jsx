import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function Login() {
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
                    <Button variant="contained">Login</Button>
                    <div className=' text-center p-0  '>
                        <Link className="forgetbtn " to="/password-verification" >Forget Password</Link>
                    </div>
                </div>

            </Box>
        </div>
    );
}
