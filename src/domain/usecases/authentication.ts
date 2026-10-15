import { AccountModel } from '../models/account-model';

export type Params = {
  email: string;
  password: string;
};

export type Model = AccountModel;

export interface UseCase {
  auth: (params: Params) => Promise<AccountModel>;
}

export default UseCase;
