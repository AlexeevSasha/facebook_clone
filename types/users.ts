export interface IUsersModel {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  picture?: string;
  cover?: string;
  gender?: string;
  bYear?: number;
  bMonth?: number;
  bDay?: number;
  verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IUser = Omit<IUsersModel, 'id' | 'createdAt' | 'updatedAt'>;
