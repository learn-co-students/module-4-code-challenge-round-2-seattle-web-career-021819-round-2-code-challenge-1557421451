import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor(){
    super()
    this.state = {
      accounts: []
    }
  }

  componentDidMount(){
  fetch(URL)
  .then(res=>res.json())
  .then(data => {
    this.setState({
      accounts: data
    })
  })
  }

  handleChange = (event) => {
    let filteredResults = this.state.accounts.filter((aa)=>{
      if(aa.category.toLowerCase().includes(event.target.value) || aa.description.toLowerCase().includes(event.target.value)){
        console.log(event.target.value)
        return true;
      } else {
        return false
      }
    this.setState({
      accounts: filteredResults
    })
  })
  }


  render() {



const {accounts} = this.state

    return (
      <div>
        <Search
          accounts={accounts}
          handleChange={this.handleChange}
          />
        <TransactionsList accounts={accounts}/>
      </div>
    )
  }
}

export default AccountContainer
