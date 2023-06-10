import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './pages/Main'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route 
        path="/register"
        element={<Register/>}/>
      <Route
        path='/Login'
        element={<Login/>} 
      />
      <Route
        path='/'
        element={<Main/>}
      >

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
