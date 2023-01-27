function Formulario () {
  return (
    <form>
      <fieldset>
        <legend>Marca</legend>
        <select>
          <option value=''>Seleccione una marca</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Año</legend>
        <select>
          <option value=''>-- Seleccione --</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Plan</legend>
        <input
          type='radio'
          name='plan'
          value='basico'
        />
        Basico
        <input
          type='radio'
          name='plan'
          value='completo'
        />
        Completo
      </fieldset>
      <button
        type='button'
      >
        Cotizar
      </button>
    </form>
  )
}
export default Formulario
