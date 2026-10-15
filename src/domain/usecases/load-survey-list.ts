import { SurveyListModel } from '@/domain/models/survey-list-model';

export type Params = {};

export type Model = SurveyListModel;

export interface LoadSurveyList {
  loadAll: () => Promise<Model[]>;
}
