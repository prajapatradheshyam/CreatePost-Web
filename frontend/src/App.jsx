import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'




const App = () => {
  return (

      <Routes>
        <Route path='/'element={<Feed />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>


  )
}

export default App
