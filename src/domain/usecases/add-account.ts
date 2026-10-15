import { AccountModel } from '@/domain/models/account-model';

export type Params = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type Model = AccountModel;

export interface UseCase {
  add: (params: Params) => Promise<Model>;
}

export default UseCase;
