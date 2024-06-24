import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { put } from '../utils/CustomAxios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function EditBanner({ open, handleClose, bannerId, getData }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleEditBanner = async () => {
        toast.info("Processing please wait...", {
            autoClose: 1000,
        });
        try {
            const updatedData = {
                name,
                description
            };
            await put(process.env.REACT_APP_BASE_URL + `/banner/cdn/${bannerId}`, updatedData);
            handleClose();
            toast.success("Details updated succesfully", {
                autoClose: 2000,
            });
            getData();
            setName('');
            setDescription('');
        } catch (error) {
            toast.success(error.error, {
                autoClose: 2000,
            });
        }
    };

    return (
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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Banner</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='w-full my-2'>
                                <TextField id='text' label='Banner Name' value={name} onChange={(e) => setName(e.target.value)} className='w-100' variant='outlined' />
                            </div>
                            <div className='w-full my-2'>
                                <TextField id='text' label='Description' value={description} onChange={(e) => setDescription(e.target.value)} className='w-100' variant='outlined' />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button variant="contained" color="primary" onClick={handleEditBanner}>Submit</Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
