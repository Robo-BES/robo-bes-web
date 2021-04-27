// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FundMetrics, FundGeneralInfo, PortfolioFund, Portfolio, User, Survey } = initSchema(schema);

export {
  FundMetrics,
  FundGeneralInfo,
  PortfolioFund,
  Portfolio,
  User,
  Survey
};