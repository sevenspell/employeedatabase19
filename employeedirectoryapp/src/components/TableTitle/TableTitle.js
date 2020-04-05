import React from 'react';
import './TableTitle.css'

function TableTitle(props) {



    // sortedProducts.sort((a, b) => {
    //     if (a[props.children.id] < b[props.children.id]) {
    //       return sortConfig.direction === 'ascending' ? -1 : 1;
    //     }
    //     if (a[sortConfig.key] > b[sortConfig.key]) {
    //       return sortConfig.direction === 'ascending' ? 1 : -1;
    //     }
    //     return 0;
    //   });

    //   const requestSort = key => {
    //     let direction = 'ascending';
    //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    //       direction = 'descending';
    //     }
    //     setSortConfig({ key, direction });
    //   }


    return (

        <div className="table-responsive-sm tableWrapper" id="tableWrapper">
            <table className="table table-bordered table-hover table-sm" id="tableSort">
                <thead>
                    <tr className="w-auto table-danger" id="tableTitleWrapper">
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                {props.children}
            </table>

        </div>
    )
}

export default TableTitle;