import { Model,Optional,InferCreationAttributes, DataTypes } from 'sequelize';
import { db } from '../database/database';
import {IUsersModel} from "./types/users";

type UserCreationAttributes = Optional<IUsersModel, 'id'>;

class Users extends Model<IUsersModel, UserCreationAttributes> {
    declare id: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}
Users.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        username: {
            type: DataTypes.STRING,
            validate: { notEmpty: true },
            unique: true
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
    updatedAt: DataTypes.DATE,

}, {  sequelize: db, freezeTableName: true, modelName: 'Users' });

export default  Users;
