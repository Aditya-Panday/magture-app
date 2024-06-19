import React from 'react'
import { Box, Button, TextField } from '@mui/material'

export default function GetVerificationCode() {
    // const [error, setError] = useState('')
    // const [email, setEmail] = useState('')
    return (
        <div className='container-fluid log-page' >
            <Box
                display="grid"
                alignItems="center"
                className='bx-log'
                gap={2}
                p={2}
                borderRadius={3}
                sx={{ border: '1px solid black' }}
            >
                <div>
                    <h2 className='font-serif text-dark m-0'>Get Verification Code</h2>
                    <hr />
                </div>
                <div className='d-grid gap-3'>

                    <TextField id="outlined-basic" className='mb-2' label="Enter Email" variant="outlined" />
                    <Button variant="contained">Get Code</Button>

                </div>

            </Box>
        </div>
    )
}
