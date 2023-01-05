export const getCharacters = async () => {
  return await fetch(`${import.meta.env.VITE_API_URL}`, {
    method: 'GET',
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
