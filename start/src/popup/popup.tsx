import React from 'react'
import ReactDOM from 'react-dom/client'
import './popup.css'

const App: React.FC = () => {
  return (
    <>
      <h1>This is Popup!</h1>
      <img src="icon.png" />
    </>
  )
}

const root = document.createElement('div')
root.className = 'container'
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root)
rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
