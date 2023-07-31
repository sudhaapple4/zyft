// import './App.css'
import Zyft from './components/Zyft'
import { MyContextProvider } from './components/MyContext'
function App() {
  return (
    <MyContextProvider>
    <Zyft/>
    </MyContextProvider>
  )
}

export default App
