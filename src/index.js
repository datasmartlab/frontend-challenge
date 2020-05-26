import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import rootReducer from './store/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ed2d2d',
    },
    secondary: {
      main: '#1a3cc7',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
