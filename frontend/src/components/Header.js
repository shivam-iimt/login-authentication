import React from 'react';
import { useDispatch } from 'react-redux';
import {signOut} from '../redux';


function Header() {
    const dispatch = useDispatch();

    function signOutAdmin(params) {
        dispatch(signOut());
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">LMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-5">
                        <a className="nav-link" href="/category">Category</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/question">Question</a>
                    </li>
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={signOutAdmin}>Sign Out</button>
                </div>
                </nav>
        </>
    )
}

export default Header