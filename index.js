import sequelize from './shared/database/database.js'
import { usersRouter } from "./users/router.js"
import express from 'express'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/api/users', usersRouter)

sequelize.sync({ force: true }).then(() => {
  console.log('db is ready')

  // Solo levantamos el servidor si NO estamos corriendo tests
  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  }
})

export default app
