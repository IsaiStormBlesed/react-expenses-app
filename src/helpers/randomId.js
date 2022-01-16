const randomId = () => {
  const randNum = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)

  return randNum + date
}

export default randomId;

