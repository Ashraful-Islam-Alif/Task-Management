import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/completedtask" className='p-2 text-lg font-bold'>Completed Tasks</Link>
                        <Link to="/todo" className='p-2 text-lg font-bold'>To-Do</Link>
                        <Link to="/calender" className='p-2 text-lg font-bold'>Calender</Link>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Tasks</Link>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to="/completedtask" className='p-2 text-lg font-bold'>Completed Tasks</Link>
                    <Link to="/todo" className='p-2 text-lg font-bold'>To-Do</Link>
                    <Link to="/calender" className='p-2 text-lg font-bold'> Calender</Link>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;