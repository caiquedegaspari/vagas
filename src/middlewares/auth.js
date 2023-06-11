const tokenKey = '4c99e1cc437a32ee6112ff97c56a02f8'

const auth = (req,res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const [_, token] = bearerToken.split(' ')

    if (token !== tokenKey) {
      res.status(401).send('Unauthorized.')
      return
    }  
    return next()
  } catch {
    res.status(401).send('Invalid Requisition.')
  }

}

module.exports = {
  auth
}