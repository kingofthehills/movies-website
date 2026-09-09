import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

const App = () => {
  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
