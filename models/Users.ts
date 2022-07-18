import {Model, DataTypes} from 'sequelize';
import bcrypt from 'bcryptjs';
import {db} from '../database/database';
import {IUsersModel, IUser} from '../types/users';


class Users extends Model<IUsersModel, IUser> {
    declare id: string;

    declare password: string;

    declare createdAt: Date;

    declare updatedAt: Date;
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
            validate: {notEmpty: true}
        },
        lastname: {
            type: DataTypes.STRING,
            validate: {notEmpty: true}
        },
        username: {
            type: DataTypes.STRING,
            validate: {notEmpty: true},
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {isEmail: true, notEmpty: true},
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            validate: {notEmpty: true}
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
            validate: {notEmpty: true}
        },
        bYear: {
            type: DataTypes.INTEGER,
            validate: {notEmpty: true}
        },
        bMonth: {
            type: DataTypes.INTEGER,
            validate: {notEmpty: true}
        },
        bDay: {
            type: DataTypes.INTEGER,
            validate: {notEmpty: true}
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
                if (!user.password) return;
                user.password = await bcrypt.hash(process.env.SECRET_KEY as string, 10);
            }
        }
    }
);

export default Users;
