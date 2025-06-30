import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountProvider } from './App.jsx'
import { AppMain } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <AppMain/>
  // </RecoilRoot>
)
