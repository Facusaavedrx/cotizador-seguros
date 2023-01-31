export function obtenerDiferenciaYear (year) {
  return new Date().getFullYear() - year
}

export function calcularMarca (marca) {
  let incremento
  if (marca === 'europeo') {
    incremento = 1.30
  } else if (marca === 'americano') {
    incremento = 1.15
  } else if (marca === 'asiatico') {
    incremento = 1.05
  }
  return incremento
}

export function obtenerPlan (plan) {
  return (plan === 'basico') ? 1.20 : 1.50
}

export function primerMayuscula (texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}
