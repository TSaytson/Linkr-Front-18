import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ResetCss} from './ResetCss.js'
import SignIn from './pages/signIn.jsx'

function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
