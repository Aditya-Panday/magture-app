import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import AdminHome from './AdminHome';
import CommonSetting from './CommonSetting';
import ArticleIcon from '@mui/icons-material/Article';
import LayersIcon from '@mui/icons-material/Layers';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Tooltip from '@mui/material/Tooltip';
import ManageBanner from './ManageBanner';
import ManageUsers from './ManageUsers';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LeadsEnquiry from './LeadsEnquiry';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../../Context/DataContext';

export default function AdminDashboard() {
    const { token, setToken } = useContext(DataContext)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const username = userInfo.user.email.split('@')[0];

    const [side, setSide] = useState(false);
    const [activeMenu, setActiveMenu] = useState("dashboard");

    const handleClick = () => {
        setSide(!side);
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo')
    }
    useEffect(() => {
        if (userInfo) {
            setToken(userInfo.token)
            return;
        }
        else {
            window.location.href = '/'; // Redirect to '/' if token does not exist
        }
    }, [token]);
    return (

        <div className='container-fluid'>

            {/* <!-- SIDEBAR --> */}
            <section id="sidebar" className={side ? 'hide' : ''}>
                <a href="/" className="brand tptp">
                    <img src='Avatar1.png' alt='' className='dash-avt' />
                </a>
                <ul className="side-menu top">
                    <li className={activeMenu === 'dashboard' ? 'active' : ''}>
                        <Tooltip title="Dashboard" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('dashboard')}>
                                <DashboardIcon />
                                <span className="text mx-2">{side ? '' : 'Dashboard'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    {userInfo.user.home === true && (

                        <li className={activeMenu === 'home' ? 'active' : ''}>
                            <Tooltip title="Home" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('home')}>
                                    <HomeIcon />
                                    <span className="text mx-2 ">{side ? '' : 'Home '}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.commonsetting === true && (
                        <li className={activeMenu === 'commonsetting' ? 'active' : ''}>
                            <Tooltip title="CommonSetting" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('commonsetting')}>
                                    <SettingsIcon />
                                    <span className="text mx-2">{side ? '' : 'CommonSetting'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.banner === true && (
                        <li className={activeMenu === 'banner' ? 'active' : ''}>
                            <Tooltip title="Banner" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('banner')}>
                                    <ArticleIcon />
                                    <span className="text mx-2">{side ? '' : 'Banner'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.pages === true && (

                        <li className={activeMenu === 'pages' ? 'active' : ''}>
                            <Tooltip title="Pages" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('pages')}>
                                    <LayersIcon />
                                    <span className="text mx-2">{side ? '' : 'Pages'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.blogs === true && (
                        <li className={activeMenu === 'blogs' ? 'active' : ''}>
                            <Tooltip title="Blogs" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('blogs')}>
                                    <DescriptionIcon />
                                    <span className="text mx-2">{side ? '' : 'Blogs'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.leads === true && (
                        <li className={activeMenu === 'leads' ? 'active' : ''}>
                            <Tooltip title="Leads" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('leads')}>
                                    <LocalLibraryIcon />
                                    <span className="text mx-2">{side ? '' : 'LeadsEnquiry'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    {userInfo.user.Role === 'admin' && (
                        <li className={activeMenu === 'users' ? 'active' : ''}>
                            <Tooltip title="Manage Users" placement="right">
                                <Link to="" className='tptp' onClick={() => setActiveMenu('users')}>
                                    <PeopleAltIcon />
                                    <span className="text mx-2">{side ? '' : 'ManageUsers'}</span>
                                </Link>
                            </Tooltip>
                        </li>
                    )}
                    <li >
                        <Tooltip title="Logout" placement="right">
                            <Link to="/" className="logout tptp" onClick={handleLogout}>
                                <LogoutIcon />
                                <span className="text mx-2">{side ? '' : 'Logout'}</span>
                            </Link>
                        </Tooltip>
                    </li>

                </ul>
            </section>
            {/* <!-- SIDEBAR --> */}


            {/* <!-- CONTENT --> */}
            <section id="content">

                {/* <!-- NAVBAR --> */}
                <nav className='nav-nav'>
                    <DensityMediumIcon onClick={handleClick} />
                    <h5 className='pt-2 mx-3'>Welcome {username ? username : ''}</h5>

                </nav>
                {/* <!-- NAVBAR --> */}

                {/* <!-- MAIN --> */}
                <main>
                    {activeMenu === "dashboard" && (
                        <div className='dimdom my-2 '>
                            <div className="left">
                                <h1>Dashboard</h1>

                            </div>

                            <ul className="box-info">
                                <li onClick={() => setActiveMenu('dashboard')}>
                                    <DashboardIcon className='bx bxs-calendar-check' />
                                    <span className="text">
                                        <h5>Dashboard</h5>
                                    </span>
                                </li>
                                {userInfo.user.leads === true && (
                                    <li onClick={() => setActiveMenu('home')}>
                                        <HomeIcon className='bx bxs-group' />
                                        <span className="text">
                                            <h5>Home</h5>
                                            <p>Manage Home </p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.commonsetting === true && (
                                    <li onClick={() => setActiveMenu('commonsetting')}>
                                        <SettingsIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>CommonSetting</h5>
                                            <p>Manage Common </p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.banner === true && (
                                    <li onClick={() => setActiveMenu('banner')}>
                                        <ArticleIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>Banner</h5>
                                            <p>Manages Banner</p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.pages === true && (
                                    <li onClick={() => setActiveMenu('pages')}>
                                        <LayersIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>Pages</h5>
                                            <p>Manages Pages </p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.blogs === true && (
                                    <li onClick={() => setActiveMenu('blogs')}>
                                        <DescriptionIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>Blogs</h5>
                                            <p>Manage Blogs </p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.leads === true && (
                                    <li onClick={() => setActiveMenu('leads')}>
                                        <LocalLibraryIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>Leads</h5>
                                            <p>Manage Leads </p>
                                        </span>
                                    </li>
                                )}
                                {userInfo.user.Role === 'admin' && (
                                    <li onClick={() => setActiveMenu('users')}>
                                        <PeopleAltIcon className='bx bxs-dollar-circle' />
                                        <span className="text">
                                            <h5>Users</h5>
                                            <p>Manage Users </p>
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    {activeMenu === "home" && (
                        <AdminHome />
                    )}
                    {activeMenu === "commonsetting" && (
                        <CommonSetting
                        />
                    )}
                    {activeMenu === "banner" && (
                        <ManageBanner
                        />
                    )}
                    {activeMenu === "blogs" && (
                        <ManageBanner
                        />
                    )}
                    {activeMenu === "users" && (
                        <ManageUsers
                        />
                    )}
                    {activeMenu === "leads" && (
                        <LeadsEnquiry
                        />
                    )}
                </main>
                {/* <!-- MAIN --> */}
            </section>
            {/* <!-- CONTENT --> */}
            <ToastContainer />

        </div>
    )
}
