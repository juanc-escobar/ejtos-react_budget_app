import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { budget, currency, remaining, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget); // Update local state when global budget changes
    }, [budget]);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);
    };

    const handleBudgetUpdate = () => {
        const totalExpenses = budget - remaining;
        if(Number(newBudget) < totalExpenses) {
            alert("Budget should not be lower than the spending");
            return;
        }
        dispatch({ type: 'SET_BUDGET', payload: Number(newBudget) });
    };

     
    const handleBudgetSubmit = (event) => {
        if(event.key === 'Enter' || event.type === 'blur') {
            handleBudgetUpdate();
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleBudgetSubmit} onKeyPress={handleBudgetSubmit}></input>
        </div>
    );
};

export default BudgetValue;
