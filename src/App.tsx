import { Container, CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router'
import { JokePage } from './pages/JokePage/JokePage'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <CssBaseline/>
      <Container maxWidth='md' style={{paddingLeft: 300}}>
        <Routes>
          <Route path='/' element={
            <div> Select Category</div>
          } />
          <Route path='/:category' element={<JokePage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
