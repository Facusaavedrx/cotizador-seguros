import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'

const Contenedor = styled.main`
  max-width: 600px;
  margin: 0 auto;
`
const ContenedorFormulario = styled.article`
  background-color: #FFF;
  padding: 3rem;
`
function App () {
  return (
    <Contenedor>
      <Header
        titulo='Hola mundo'
      />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  )
}

export default App
