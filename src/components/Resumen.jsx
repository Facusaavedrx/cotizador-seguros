function Resumen ({ datos }) {
  const { marca, year, plan } = datos
  if (marca === '' || year === '' || plan === '') return null
  return (
    <>
      <h2> Resumen de cotizacion </h2>
      <ul>
        <li>Marca: </li>
        <li>Plan: </li>
        <li>Año del auto: </li>
      </ul>
    </>
  )
}
export default Resumen
