import React from 'react'

const Transaction = (props) => {

  return (
    <tr>
      <td>{props.account.updated_at}</td>
      <td>{props.account.description}</td>
      <td>{props.account.category}</td>
      <td>{props.account.amount}</td>
    </tr>
  )
}

export default Transaction
