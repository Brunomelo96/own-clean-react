import { SurveyResultModel } from '../models/survey-result-model';

export type Params = {
  answer: string;
};

export type Model = SurveyResultModel;

export interface UseCase {
  save: (params: Params) => Promise<Model>;
}

export default UseCase;
