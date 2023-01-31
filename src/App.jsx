import { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

const Contenedor = styled.main`
  max-width: 600px;
  margin: 0 auto;
`
const ContenedorFormulario = styled.article`
  background-color: #FFF;
  padding: 3rem;
`
function App () {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })
  const { cotizacion, datos } = resumen
  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />
        <Resumen
          datos={datos}
        />
        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  )
}

export default App
