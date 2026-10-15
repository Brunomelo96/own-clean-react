import { SurveyResultModel } from '../models/survey-result-model';

export type Model = SurveyResultModel;

export interface UseCase {
  load: () => Promise<Model>;
}

export default UseCase;
