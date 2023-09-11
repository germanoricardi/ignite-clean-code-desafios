const visitor = {
  name: 'Diego Fernandes',
  heightInCentimeters: 190,
  hasParkTicket: true,
}

const minimumHeightRequiredForToy = 130

const currentHourOfDay = new Date().getHours()

const isParkOpen = currentHourOfDay > 9 && currentHourOfDay < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const hasValidTicket = visitor.hasParkTicket

if (!hasValidTicket) {
  throw new Error('O Diego não possui um bilhete válido para entrar no parque!')
}

const canEnterToy = visitor.heightInCentimeters >= minimumHeightRequiredForToy

if (!canEnterToy) {
  throw new Error('O Diego não atende à altura mínima para entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')
