'use client'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './success.module.css';
import Navigation from '../../components/Navigation/index.jsx';
import { TiTick } from "react-icons/ti";

export default function Success() {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/register');
      };

    const style = { color: "#11ec30"}


    return (
        <div className={classes.area}>
            <a href='/upload'>
                <Navigation />
            </a>
            <div className={classes.content}>
                <h1>Verification Successful</h1>
                <TiTick size={100} style={style} />
                <button className={classes.button} onClick={handleNextClick}>NEXT</button>    
            </div>
        </div>
    );
};