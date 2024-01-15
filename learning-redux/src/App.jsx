import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCustomers } from './asyncAction/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }
  
  const addCustomer = (name) => {
    const customer = {
      name, 
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }
  

  return (
    <div className="App">
      <div>
        {cash}
      </div>
      <div
        style={{display:'flex'}}
      >
        <button onClick={() => addCash(Number(prompt()))}>
          add cash
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          get cash
        </button>
        <button onClick={() => addCustomer(prompt())}>
          add customer
        </button>
        <button onClick={() => dispatch(fetchCustomers())}>
          get customers from base
        </button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>  
          )}
        </div>
        :
        <div>
          no customers
        </div>
      }
    </div>
  );
}

export default App;
