import React from 'react'
import ReactDOM from 'react-dom/client'
import './options.css'
const App: React.FC = () => {
  return <h1>Options Page</h1>
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
