import express from 'express'
import setupRoutes from './routes'

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
setupRoutes(app)

try {
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
} catch (error) {
  console.log('Server not running')
  console.log(error)
}
