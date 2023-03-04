import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ResetCss} from './ResetCss.js'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'

function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
