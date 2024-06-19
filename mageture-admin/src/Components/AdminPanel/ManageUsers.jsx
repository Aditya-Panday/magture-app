import React, { useState } from 'react'
import { AppBar, Button, Modal, TextField, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ManageUsers() {
    const options = [
        { label: 'Home', selected: false },
        { label: 'CommonSetting', selected: false },
        { label: 'Banner', selected: false },
        { label: 'Pages', selected: false },
        { label: 'Blogs', selected: false },
        { label: 'Leads', selected: false }
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        const updatedSelectedOptions = options.map(option =>
            ({ ...option, selected: value.includes(option.label) })
        );
        setSelectedOptions(value);
        console.log(updatedSelectedOptions); // Log updated options array to console

    };

    const [open, setOpen] = useState(false); // State to manage modal open/close
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleOpen = () => {
        setOpen(true); // Function to open the modal
    };

    const handleClose = () => {
        setOpen(false); // Function to close the modal
    };
    return (
        <div>
            <div className="tit">
                <h1>Manage Users</h1>
            </div>
            <hr />
            <div className='w-100'>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Add Users
                        </Typography>
                        <AddIcon onClick={handleOpen} />
                    </Toolbar>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        zIndex={9000}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Users</h5>
                                    <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className='row'>
                                        <div className='col-md-6 mb-3'>
                                            <TextField id='email' label='Email' className='w-100' variant='outlined' />
                                        </div>


                                        <div className='col-md-6 mb-3'>
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
                                        </div>
                                        <div >
                                            <FormControl fullWidth>
                                                <InputLabel id="select-label">Select Options</InputLabel>

                                                <Select
                                                    labelId="select-label"
                                                    id="select"
                                                    variant='outlined'
                                                    multiple
                                                    value={selectedOptions}
                                                    input={<OutlinedInput label="Select Options" />}

                                                    onChange={handleSelectChange}
                                                    renderValue={(selected) => selected.join(', ')}
                                                >
                                                    {options.map((option) => (
                                                        <MenuItem key={option.label} value={option.label}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Button variant="contained" onClick={handleClose} color="primary">Add Banner</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </AppBar>
            </div>
            <div className="container my-4" style={{ overflow: "scroll" }}>
                <table class="table table-striped" >
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className='d-flex p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='d-flex' style={{ flexWrap: "nowrap" }}>
                                <span className='mx-2 p-1 ' style={{ border: "2px solid black", borderRadius: "10px", color: "blue", borderColor: 'blue' }}><EditIcon /></span>
                                <span className=' p-1' style={{ border: "2px solid black", borderRadius: "10px", color: "red", borderColor: 'red' }}><DeleteIcon /></span>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div >
    )
}
