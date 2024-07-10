import React from 'react'
import { Link } from 'react-router-dom';
import './EstimateButton.css';

export default function Estimate() {
    return (
        <>
            <Link to='/estimate' className='button'>
                    <h2>Get Your Free Estimate</h2>
            </Link>
        </>
    )
}
