const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route Does not exist")
}

export default notFoundMiddleware
