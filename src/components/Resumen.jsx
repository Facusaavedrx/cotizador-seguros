import styled from '@emotion/styled'
import { primerMayuscula } from '../helper'

const ContenedorResumen = styled.section`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`
function Resumen ({ datos }) {
  const { marca, year, plan } = datos
  if (marca === '' || year === '' || plan === '') return null
  return (
    <ContenedorResumen>
      <h2> Resumen de cotizacion </h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)} </li>
        <li>Año del auto: {year} </li>
      </ul>
    </ContenedorResumen>
  )
}
export default Resumen
