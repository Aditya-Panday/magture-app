import React, { useEffect, useState } from 'react'
import { AppBar, Button, Checkbox, FormControlLabel, Modal, TextField, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormControl } from '@mui/material';
import { post, get, del } from '../utils/CustomAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ManageUsers() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])

    const [selectedOptions, setSelectedOptions] = useState({
        home: false,
        commonsetting: false,
        banner: false,
        pages: false,
        blogs: false,
        leads: false
    });

    const handleSelectChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions({
            ...selectedOptions,
            [name]: checked
        });
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
    const handleSubmit = async () => {
        if (!email || !password) {
            toast.error("Please fill email or password!", {
                autoClose: 2000,
            });
            return
        }
        if (!email.endsWith('@gmail.com')) {
            toast.error("Please add @gmail.com!", {
                autoClose: 1500,
            });
            return
        }
        toast.info("Please Wait...", {
            autoClose: 1000,
        });
        handleClose();
        try {
            const postData = {
                email,
                password,
                ...selectedOptions
            };
            await post(process.env.REACT_APP_BASE_URL + "/auth/signup", postData);
            toast.success("User Created Successfully!", {
                autoClose: 2000,
            });
            getData();
            setEmail('')
            setPassword('');
            setSelectedOptions({
                home: false,
                commonsetting: false,
                banner: false,
                pages: false,
                blogs: false,
                leads: false
            });
        } catch (error) {
            console.log("error", error)
            toast.error(error.error, {
                autoClose: 2000,
            });
        }


    }
    const getData = async () => {
        try {
            const response = await get(process.env.REACT_APP_BASE_URL + "/auth/users");
            setData(response.data)
            console.log("response", response.data)
        } catch (error) {
            toast.error(error.error, {
                autoClose: 2500,
            });
        }
    }
    const deleteUser = async (id) => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete the user?");

            if (!confirmed) {
                return;
            }
            await del(process.env.REACT_APP_BASE_URL + `/auth/delete/${id}`);
            getData();
            toast.success("User Deleted Successfully!", {
                autoClose: 2000,
            });
        } catch (error) {
            toast.error(error.error, {
                autoClose: 2500,
            });
            console.log("error", error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
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
                                            <TextField id='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-100' variant='outlined' />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <TextField
                                                id="outlined-password-input"
                                                label="Password"
                                                value={password} onChange={(e) => setPassword(e.target.value)}
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
                                            <div>

                                                <b>Options</b>
                                            </div>
                                            <FormControl component="fieldset">
                                                <div className='mt-2'>
                                                    {Object.entries(selectedOptions).map(([key, value]) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox checked={value} onChange={handleSelectChange} name={key} />}
                                                            label={key}
                                                        />
                                                    ))}
                                                </div>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Button variant="contained" onClick={handleSubmit} color="primary">Create User</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </AppBar>
            </div>
            <div className="container my-4" style={{ overflow: "scroll" }}>
                {data.length > 0 ? (
                    <table className="table table-striped" >
                        <thead style={{ backgroundColor: "black", color: "white" }}>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Home</th>
                                <th scope="col">Banner</th>
                                <th scope="col">CommonSetting</th>
                                <th scope="col">Blogs</th>
                                <th scope="col">Leads</th>
                                <th scope="col">Pages</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='p-3'>{item.email}</td>
                                        <td>{item.Role}</td>
                                        <td style={{ color: item.home ? 'green' : 'red' }}>{item.home ? 'Access' : 'False'}</td>
                                        <td style={{ color: item.banner ? 'green' : 'red' }}>{item.banner ? 'Access' : 'False'}</td>
                                        <td style={{ color: item.commonsetting ? 'green' : 'red' }}>{item.commonsetting ? 'Access' : 'False'}</td>
                                        <td style={{ color: item.blogs ? 'green' : 'red' }}>{item.blogs ? 'Access' : 'False'}</td>
                                        <td style={{ color: item.leads ? 'green' : 'red' }}>{item.leads ? 'Access' : 'False'}</td>
                                        <td style={{ color: item.pages ? 'green' : 'red' }}>{item.pages ? 'Access' : 'False'}</td>

                                        <td >
                                            <span className='m-2 my-4 p-1' style={{ border: "2px solid red", borderRadius: "10px", color: "red" }} title='Delete'><DeleteIcon onClick={() => deleteUser(item._id)} /></span>
                                        </td>
                                    </tr>
                                })
                            }




                        </tbody>
                    </table>
                ) : (
                    <div className='text-center'><b>
                        No Record Found
                    </b>
                    </div>
                )}
            </div>
            <ToastContainer />

        </div >
    )
}
