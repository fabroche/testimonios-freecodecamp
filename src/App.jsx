import './App.css'
import Testimonio from './components/Testimonios'
import { testimonios } from './data/testimonios-db.jsx'

function App() {

  return (
    <div className="App">

      <div className='title-testimonio-container'>

        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {testimonios.map((testimonio) => (

          <Testimonio {...testimonio} />

        ))}

      </div>
    </div>

  )
}

export default App;
