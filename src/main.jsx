import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
         {/* <div className='text-5xl flex justify-center px-7 py-4 items-center h-screen'>कार्यक्रम संपला आहे. पुढच्या वर्षी भेटूया!🎉  </div> */}
    <App />
  </StrictMode>,
)
