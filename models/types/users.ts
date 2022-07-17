export interface IUsersModel {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    picture?: string;
    cover?: string;
    gender?: string;
    bYear?: number;
    bMonth?: number;
    bDay?: number;
    verified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}