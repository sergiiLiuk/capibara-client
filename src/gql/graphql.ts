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
  registerInput: RegisterInput;
};


export type MutationUpdateProjectArgs = {
  ID: Scalars['ID'];
  projectInput: ProjectInput;
};

export type Project = {
  __typename?: 'Project';
  company?: Maybe<Array<Maybe<Company>>>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ProjectInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company: Company;
  currentUser: User;
  project: Project;
  projects: Array<Project>;
  user: User;
  users: Array<User>;
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
  email: Scalars['String'];
  password: Scalars['String'];
  role: RoleType;
  username: Scalars['String'];
};

export enum RoleType {
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  role: RoleType;
  token: Scalars['String'];
  username: Scalars['String'];
};
