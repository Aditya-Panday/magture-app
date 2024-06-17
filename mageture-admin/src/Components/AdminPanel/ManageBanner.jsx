import { AppBar, Button, Modal, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function ManageBanner() {
    const [open, setOpen] = useState(false); // State to manage modal open/close

    const handleOpen = () => {
        setOpen(true); // Function to open the modal
    };

    const handleClose = () => {
        setOpen(false); // Function to close the modal
    };

    return (
        <div>
            <div className="tit">
                <h1>Manage Banner</h1>
            </div>
            <hr />
            <div className='w-100'>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Add Banner
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
                                    <h5 className="modal-title" id="exampleModalLabel">Add Banner</h5>
                                    <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal Body Content</p>
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
