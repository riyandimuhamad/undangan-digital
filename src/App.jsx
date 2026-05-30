import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import InvitationTemplate from './pages/InvitationTemplate'
import LinkGenerator from './pages/LinkGenerator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invite/:slug" element={<InvitationTemplate />} />
        <Route path="/generator/:slug" element={<LinkGenerator />} />
        {/* Redirect root to a sample invitation for testing */}
        <Route path="/" element={<Navigate to="/invite/sample-wedding" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
