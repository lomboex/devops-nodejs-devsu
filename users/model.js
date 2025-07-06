import { Model, DataTypes } from 'sequelize'
import sequelize from '../shared/database/database.js' // Asegúrate de que esta ruta sea correcta

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false
})

export { User }
