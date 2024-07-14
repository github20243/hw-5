import './App.css'
import AllCompleted from './components/AllCompleted'
import Checkbox from './components/Checkbox'
import CloseOpen from './components/CloseOpen'
import Counter from './components/Counter'
import HomeAbout from './components/HomeAbout'
import Item from './components/Item'
import OpenClose from './components/OpenClose'
import Spinner from './components/Spinner'

function App() {

  return (
    <>
    <OpenClose/>
    <Counter/>
    <Checkbox/>
    <CloseOpen/>
    <Spinner/>
    <br />
    <HomeAbout/>
    <br />
    <Item/>
    <br />
    <AllCompleted/>
    </>
  )
}

export default App
