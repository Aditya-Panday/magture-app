import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Button, TextField } from '@mui/material';
import { post, get, del } from '../utils/CustomAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'; // Import moment

export default function AdminHome() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [heading, setHeading] = useState('');
    const [title, setTitle] = useState('');
    const [keyword, setKeyword] = useState('');
    const [description, setDescription] = useState('');
    const [work, setWork] = useState(false);
    const [data, setData] = useState([]);


    const createHome = async () => {
        if (!content || !description || !title || !heading || !keyword) {
            toast.error("Please fill all the fields!", {
                autoClose: 2000,
            });
            return;
        }

        setWork(true)
        try {
            toast.info("Processing please wait...", {
                autoClose: 500,
            });
            const postData = {
                heading,
                description,
                title,
                keyword,
                content
            };
            await post(process.env.REACT_APP_BASE_URL + "/home", postData);
            toast.success("Home Created Successfully", {
                autoClose: 1500,
            });
            getData();
            setTitle('');
            setDescription('');
            setContent('');
            setKeyword('');
            setHeading('');
        } catch (error) {
            toast.error(error.error, {
                autoClose: 1500,
            });
        }
        finally {
            setWork(false)
        }
    };

    const getData = async () => {
        try {
            const response = await get(process.env.REACT_APP_BASE_URL + "/home/dt");
            setData(response.data)
            console.log("responseHome", response.data)
        } catch (error) {
            toast.error(error.error, {
                autoClose: 2500,
            });
        }
    }
    const deleteHome = async (id) => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete the banner?");
            if (!confirmed) {
                return;
            }
            await del(process.env.REACT_APP_BASE_URL + `/home/${id}`);
            getData();
            toast.success(" Deleted Successfully", {
                autoClose: 2500,
            });
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
    };
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="tit">
                <h1>Manage Home</h1>
            </div>
            <hr />
            <div className='form-home container-fluid p-2'>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-heading' label='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} className='w-100' variant='outlined' />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-title' label='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-100' variant='outlined' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <TextField
                            id='description'
                            label='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            className='w-100'
                            fullWidth
                            variant='outlined'
                            placeholder='Description'
                        />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <TextField id='page-keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)} label='Keyword' className='w-100' variant='outlined' />
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
                    <Button variant="contained" className='w-100' onClick={createHome} disabled={work}
                    >Submit</Button>
                </div>
            </div>
            <div className="container my-4" style={{ overflow: "scroll" }}>
                {data.length > 0 ? (
                    <table className="table table-striped" >
                        <thead style={{ backgroundColor: "black", color: "white" }}>
                            <tr>
                                <th scope="col">Heading</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Keyword</th>
                                <th scope="col">Content</th>
                                <th scope="col">CreatedDate</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((item, index) => {
                                    const formattedCreatedDate = moment(item.createdDate).format('YYYY-MM-DD HH:mm:ss');

                                    return <tr key={index}>
                                        <td className='p-3'>{item.heading}</td>
                                        <td>{item.title}</td>
                                        <td >{item.description}</td>
                                        <td >{item.keyword}</td>
                                        <td >{item.content}</td>
                                        <td >{formattedCreatedDate}</td>
                                        <td >
                                            <span className='m-2 my-4 p-1' style={{ border: "2px solid red", borderRadius: "10px", color: "red" }} title='Delete'><DeleteIcon onClick={() => deleteHome(item._id)} /></span>
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
        </div>
    )
}
