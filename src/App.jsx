import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ResetCss} from './ResetCss.js'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import { AuthProvider } from "./contexts/auth.context.jsx";

function App() {
  
  
  return (
    <BrowserRouter>
      <ResetCss/>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
