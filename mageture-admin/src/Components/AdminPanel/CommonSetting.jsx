import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Button, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { post, get, del } from '../utils/CustomAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadImageToCloudinary } from '../utils/Func';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function CommonSetting() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [work, setWork] = useState(false);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile); // Update state with the selected file
        } else {
            setFile(''); // Handle case where no file is selected
        }
    };
    const createCommon = async () => {
        if (!content || !description || !title || !phone || !file) {
            toast.error("Please fill all the fields!", {
                autoClose: 2000,
            });
            return;
        }
        if (!file.type.includes("jpeg") && !file.type.includes("png") && !file.type.includes("jpg")) {
            toast.error("Please select only jpg, jpeg, png format file!", { autoClose: 1500 });
            return;
        }

        setWork(true)
        try {
            toast.info("Processing please wait...", {
                autoClose: 500,
            });
            const imageFile = file;
            const imgurl = await uploadImageToCloudinary(imageFile);

            const postData = {
                phone,
                description,
                title,
                imgurl,
                content
            };
            await post(process.env.REACT_APP_BASE_URL + "/home", postData);
            toast.success("CommonData Created Successfully", {
                autoClose: 1500,
            });
            // getData();
            setTitle('');
            setDescription('');
            setContent('');
            setPhone('');
            setFile('');
        } catch (error) {
            if (error.error) {
                toast.error(error.error, {
                    autoClose: 2000,
                });
            } else {
                toast.error('Server Error', {
                    autoClose: 2000,
                });
            }
        }
        finally {
            setWork(false)
        }
    };

    return (
        <div>
            <div className="tit">
                <h1>Manage CommonSetting</h1>
            </div>
            <hr />
            <div className='form-home container-fluid p-2'>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            className='w-100'
                            onChange={handleFileChange}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        {file && (
                            <p><b>Selected file:</b> {file.name}</p>
                        )}
                    </div>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-num' label='Enter Mob Num' value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className='w-100' variant='outlined' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <TextField
                            id='description'
                            label='Description'
                            multiline
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='w-100'
                            fullWidth
                            variant='outlined'
                            placeholder='Enter description'
                        />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-title' value={title} onChange={(e) => setTitle(e.target.value)} label='Page Title' className='w-100' variant='outlined' />
                    </div>
                </div>
                <div >
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onChange={(newContent) => setContent(newContent)}
                    />
                </div>
                <div className='my-3 w-100 p-2' >
                    <Button variant="contained" className='w-100' onClick={createCommon} disabled={work}
                    >Submit</Button>
                </div>
            </div>
            <ToastContainer />
        </div >
    )
}
