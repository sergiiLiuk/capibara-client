/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Company = {
  __typename?: 'Company';
  cvr: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  deleteProject: Project;
  deleteUser: User;
  loginUser: User;
  registerUser: User;
  updateProject: Project;
  updateUser: User;
};


export type MutationCreateProjectArgs = {
  projectInput: ProjectInput;
};


export type MutationDeleteProjectArgs = {
  ID: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  ID: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterUserArgs = {
  userInput: UserInput;
};


export type MutationUpdateProjectArgs = {
  ID: Scalars['ID'];
  projectInput: ProjectInput;
};


export type MutationUpdateUserArgs = {
  ID: Scalars['ID'];
  userInput: UserInput;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  userId: Scalars['ID'];
};

export type ProjectInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  companies?: Maybe<Array<Company>>;
  company?: Maybe<Company>;
  currentUser: User;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCompanyArgs = {
  ID: Scalars['ID'];
};


export type QueryProjectArgs = {
  ID: Scalars['ID'];
};


export type QueryProjectsArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  ID: Scalars['ID'];
};

export enum RoleType {
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  projects?: Maybe<Array<Maybe<Project>>>;
  role: RoleType;
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  username: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleType>;
  username: Scalars['String'];
};
