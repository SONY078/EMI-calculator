import React from 'react'

const EMitable = (props) => {
  return (
    <div>
         <button class="btn btn-primary mb-5 btn2" id='goback' onClick={props.goBack}>
          Go Back
        </button>
        <h2 id='tablecaption'>EMI Table</h2>
      <table className="table table-stripped" id='tabledata'>
        <tr>
          <th>Total Months</th>
          <th>EMI per month</th>
        </tr>
        {props.emitable.map((items, index) => (
          <tr >
            <td>Month {index + 1}</td>
            <td> {items.month}</td>
            {console.log(items)}
          </tr>
        ))}
      </table>

    </div>
  )
}

export default EMitable
