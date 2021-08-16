export const generateMonths = () =>
  Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString('pt-BR', { month: 'long' }),
  )
