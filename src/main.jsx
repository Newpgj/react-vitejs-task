import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './context/TaskContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode/> es para ayudar a corregir errores que el propio entorno de vitejs te da y es recomendable y una buena practica de desarollo
  <React.StrictMode>
    <TaskContextProvider>
    <App/>
    </TaskContextProvider>
  </React.StrictMode>
)
