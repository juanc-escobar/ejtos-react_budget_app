import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const decreaseExpense = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td><span>{currency}</span>{parseInt(props.cost)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={increaseAllocation}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={decreaseExpense}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
