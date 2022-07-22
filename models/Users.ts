import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import { db } from '../database/database';
import { IUsersModel, IUser } from '../types/users';

class Users extends Model<IUsersModel, IUser> {
  declare id: string;
  declare firstname: string;
  declare email: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare verified: boolean;
}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    firstname: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true, notEmpty: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    cover: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    bYear: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: true }
    },
    bMonth: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: true }
    },
    bDay: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: true }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize: db,
    freezeTableName: true,
    modelName: 'Users',
    hooks: {
      beforeValidate: async (user) => {
        console.log(user.password);
        if (!user.password) return;
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    scopes: {
      withPassword: { attributes: { exclude: [] } }
    }
  }
);

export default Users;
