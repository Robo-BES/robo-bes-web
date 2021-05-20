// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ModelPredictions, FundMetrics, FundGeneralInfo, PortfolioFund, Portfolio, User, Survey } = initSchema(schema);

export {
  ModelPredictions,
  FundMetrics,
  FundGeneralInfo,
  PortfolioFund,
  Portfolio,
  User,
  Survey
};