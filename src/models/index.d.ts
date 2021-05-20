import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ModelPredictions {
  readonly id: string;
  readonly date?: string;
  readonly modeltype?: string;
  readonly AEC?: number;
  readonly AEE?: number;
  readonly AEN?: number;
  readonly AEP?: number;
  readonly AEU?: number;
  readonly AEZ?: number;
  readonly AGL?: number;
  readonly ALH?: number;
  readonly ALI?: number;
  readonly ALR?: number;
  readonly ALS?: number;
  readonly ALU?: number;
  readonly AMA?: number;
  readonly AMB?: number;
  readonly AMF?: number;
  readonly AMG?: number;
  readonly AMP?: number;
  readonly AMR?: number;
  readonly AMS?: number;
  readonly AMY?: number;
  readonly AMZ?: number;
  readonly APG?: number;
  readonly AUA?: number;
  readonly AUG?: number;
  readonly AZA?: number;
  readonly AZB?: number;
  readonly AZD?: number;
  readonly AZH?: number;
  readonly AZK?: number;
  readonly AZL?: number;
  readonly AZM?: number;
  readonly AZN?: number;
  readonly AZO?: number;
  readonly AZS?: number;
  readonly AZT?: number;
  readonly AZY?: number;
  readonly FYU?: number;
  readonly FYY?: number;
  readonly KOE?: number;
  constructor(init: ModelInit<ModelPredictions>);
  static copyOf(source: ModelPredictions, mutator: (draft: MutableModel<ModelPredictions>) => MutableModel<ModelPredictions> | void): ModelPredictions;
}

export declare class FundMetrics {
  readonly id: string;
  readonly FundGeneralInfo?: FundGeneralInfo;
  readonly date?: string;
  readonly volume?: number;
  readonly daily_yield?: number;
  readonly monthly_yield?: number;
  readonly three_monthly_yield?: number;
  readonly six_monthly_yield?: number;
  readonly yearly_yield?: number;
  readonly price?: number;
  readonly fundgeneralinfoID?: string;
  readonly code?: string;
  constructor(init: ModelInit<FundMetrics>);
  static copyOf(source: FundMetrics, mutator: (draft: MutableModel<FundMetrics>) => MutableModel<FundMetrics> | void): FundMetrics;
}

export declare class FundGeneralInfo {
  readonly id: string;
  readonly code?: string;
  readonly description?: string;
  readonly bes_group_name?: string;
  readonly PortfolioFunds?: (PortfolioFund | null)[];
  readonly FundMetrics?: (FundMetrics | null)[];
  constructor(init: ModelInit<FundGeneralInfo>);
  static copyOf(source: FundGeneralInfo, mutator: (draft: MutableModel<FundGeneralInfo>) => MutableModel<FundGeneralInfo> | void): FundGeneralInfo;
}

export declare class PortfolioFund {
  readonly id: string;
  readonly percentage?: number;
  readonly FundGeneralInfo?: FundGeneralInfo;
  readonly Portfolio?: Portfolio;
  readonly fundgeneralinfoID?: string;
  readonly portfolioID?: string;
  constructor(init: ModelInit<PortfolioFund>);
  static copyOf(source: PortfolioFund, mutator: (draft: MutableModel<PortfolioFund>) => MutableModel<PortfolioFund> | void): PortfolioFund;
}

export declare class Portfolio {
  readonly id: string;
  readonly group_name?: string;
  readonly total_capital?: number;
  readonly risk_ratio?: number;
  readonly User?: User;
  readonly userID?: string;
  readonly model?: string;
  readonly PortfolioFunds?: (PortfolioFund | null)[];
  constructor(init: ModelInit<Portfolio>);
  static copyOf(source: Portfolio, mutator: (draft: MutableModel<Portfolio>) => MutableModel<Portfolio> | void): Portfolio;
}

export declare class User {
  readonly id: string;
  readonly age?: number;
  readonly sex?: string;
  readonly name?: string;
  readonly surname?: string;
  readonly email?: string;
  readonly marriage_info?: string;
  readonly Surveys?: (Survey | null)[];
  readonly Portfolios?: (Portfolio | null)[];
  readonly budget?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Survey {
  readonly id: string;
  readonly risk_appetite?: string;
  readonly total_initial_money?: number;
  readonly monhly_pay?: number;
  readonly annual_pay?: number;
  readonly userID?: string;
  readonly User?: User;
  constructor(init: ModelInit<Survey>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}