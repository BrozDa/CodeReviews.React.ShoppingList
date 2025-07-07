import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ListItemProvider } from "../context/ListItemProvider";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ListItemProvider>
            <App />
        </ListItemProvider>
  </StrictMode>,
)
