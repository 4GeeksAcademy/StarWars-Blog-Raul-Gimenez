import { useState } from 'react'
import Card from './components/Cards'
import GeneralDiv from './components/GeneralDiv'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <GeneralDiv title="Characters" height="auto">
          <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </GeneralDiv>
        <GeneralDiv title="Characters" height="auto">
          <Card></Card>
        </GeneralDiv>
      </div>
    </>
  )
}

export default App
