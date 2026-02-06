import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from "./Layout"
import Edu from "./page/Edu"
import Home from "./page/Home"
import Voice from "./page/Voice"
import Shop from "./page/Shop"
import Profill from "./page/Profill"
export default function App() {
  return (
    <div className="app w-full px-3">
      <h1 className="hidden">UztozSi</h1>
      <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="/edu" element={<Edu />} />
              <Route path="/voice" element={<Voice />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/user" element={<Profill />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
