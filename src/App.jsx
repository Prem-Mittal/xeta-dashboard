import { MainPage } from "./components/MainPage"
import { Sidebar } from "./components/Sidebar"
export default function App() {
  return (
  <div className="flex">
    <Sidebar/>
    <MainPage/>
  </div>
  )
}