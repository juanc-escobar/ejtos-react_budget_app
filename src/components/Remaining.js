import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { remaining, currency } = useContext(AppContext);
    
    return (
        <div className='alert alert-success'>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default ExpenseTotal;

