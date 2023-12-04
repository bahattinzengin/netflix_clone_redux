import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from './pages/MainPage';
import Header from './Components/Header';
import DetailPages from "./pages/DetailPages";

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/detay/:id" element={<DetailPages/>}/>
      <Route path="*" element={<h1>Yol Bulunamadı</h1>}/>
     
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
