import React from 'react';
import './EmployeeTable.css'

function EmployeeTable(props) {

    const dateStr = props.dob.date;
    const newDateStr = dateStr.split('T', 1)[0];

    return (

        <tbody>
            <tr className="w-auto" id={props.id}>
                <td><img alt={props.name.first + props.name.last} src={props.src.medium} /></td>
                <td>{props.name.first} {props.name.last}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{newDateStr}</td>
            </tr>
        </tbody>

    )
}

export default EmployeeTable;