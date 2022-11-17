import React from 'react'
import "./Style.css"
const Historyemi = (props) => {
    
  return (
    <div>
         <button class="btn btn-primary mb-5 btn2" id='goback' onClick={props.goBack}>
          Go Back
        </button><br/><br/><br/>
      <table className="table table-stripped" id='tabledata'>
        <tr>
          <th>Total Months</th>
          <th>EMI per month</th>
        </tr>
        {props.emitable.map((items, index) => (
          <tr >
            <td>Month {index + 1}</td>
            <td> {items}</td>
            {console.log(items)}
          </tr>
        ))}
      </table>

    </div>
  )
}

export default Historyemi
