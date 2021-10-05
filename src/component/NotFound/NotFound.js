import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="my-5">
            <div className="">
                <h1 className=" text-class">Oops !</h1>
                <h3 className="text-danger">404 - PAGE NOT FOUND</h3>
                <p>The page you are looking for might Have been removed
                    <br />
                    had it's name changed or temporarily unavailable

                </p>
                <Link to='/home'>
                    <Button className="btn btn-primary">GO TO HOME PAGE</Button>
                </Link>
            </div>

        </div>
    );
};

export default NotFound;