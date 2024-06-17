import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Button, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

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
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </div>  
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-num' label='Enter Mob Num' type="number" className='w-100' variant='outlined' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <TextField
                            id='description'
                            label='Description'
                            multiline
                            className='w-100'
                            fullWidth
                            variant='outlined'
                            placeholder='Enter description'
                        />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-title' label='Page Title' className='w-100' variant='outlined' />
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
                    <Button variant="contained" size="medium" className='w-100'>Submit</Button>

                </div>
            </div>
        </div >
    )
}
