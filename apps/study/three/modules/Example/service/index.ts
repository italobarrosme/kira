export const getExample = async () => {
  try {
    const response = await fetch('/api/example', {
      method: 'GET'
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Você pode tratar o erro ou relançá-lo para cima, dependendo do que deseja fazer
  }
}
