import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { budget, currency } = useContext(AppContext);
    const totalBudget = budget;

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{totalBudget}</span>
        </div>
    );
};

export default BudgetValue;
