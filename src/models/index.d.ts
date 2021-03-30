import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Survey {
  readonly id: string;
  readonly risk_appetite?: string;
  readonly total_initial_money?: number;
  readonly monhly_pay?: number;
  readonly annual_pay?: number;
  readonly userID?: string;
  constructor(init: ModelInit<Survey>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
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
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}