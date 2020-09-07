import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import generateStore from './redux/store'

let store = generateStore()
let WithStore = () => <Provider store={store}><App /></Provider>


ReactDOM.render(
  <React.StrictMode>
    <WithStore />
  </React.StrictMode>,
  document.getElementById('root')
);
