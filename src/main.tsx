import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes'
import App from './components/login'
import RegisterUser from './components/register'
import FileUpload from './components/upload'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/upload" element={
          <ProtectedRoute>
            <FileUpload />
          </ProtectedRoute>
        } />

        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)