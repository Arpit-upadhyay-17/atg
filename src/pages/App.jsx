import Navbar from '../Cmp/Navbar'
import Wrapper from '../Context/Wrapper'
import Home from './Home'
import "../Style/index.css"

const App = () => {
  return (
    <Wrapper>
        <div className='Atg-container px-0' >
          <Navbar />
          <Home />
        </div>
    </Wrapper>
  )
}

export default App