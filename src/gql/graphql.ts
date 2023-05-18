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
};

export type Company = {
  __typename?: 'Company';
  cvr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  deleteProject?: Maybe<Project>;
  loginUser?: Maybe<User>;
  registerUser?: Maybe<User>;
  updateProject?: Maybe<Project>;
};


export type MutationCreateProjectArgs = {
  projectInput?: InputMaybe<ProjectInput>;
};


export type MutationDeleteProjectArgs = {
  ID: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  loginInput?: InputMaybe<LoginInput>;
};


export type MutationRegisterUserArgs = {
  RegisterInput?: InputMaybe<RegisterInput>;
};


export type MutationUpdateProjectArgs = {
  ID: Scalars['ID'];
  projectInput?: InputMaybe<ProjectInput>;
};

export type Project = {
  __typename?: 'Project';
  company?: Maybe<Array<Company>>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  companies?: Maybe<Array<Maybe<Company>>>;
  company: Company;
  project: Project;
  projects?: Maybe<Array<Maybe<Project>>>;
  user: User;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCompanyArgs = {
  ID: Scalars['ID'];
};


export type QueryProjectArgs = {
  ID: Scalars['ID'];
};


export type QueryUserArgs = {
  ID: Scalars['ID'];
};

export type RegisterInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};
