import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
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
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<BooleanFilter>;
};

export type CloudImageFieldOutput = ImageFieldOutput & {
  __typename?: 'CloudImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  jobs: Maybe<Job>;
  logo: Maybe<ImageFieldOutput>;
  name: Maybe<Scalars['String']>;
  sponsored: Maybe<Scalars['Boolean']>;
  website: Maybe<Scalars['String']>;
};

export type CompanyCreateInput = {
  jobs: InputMaybe<JobRelateToOneForCreateInput>;
  logo: InputMaybe<ImageFieldInput>;
  name: InputMaybe<Scalars['String']>;
  sponsored: InputMaybe<Scalars['Boolean']>;
  website: InputMaybe<Scalars['String']>;
};

export type CompanyOrderByInput = {
  id: InputMaybe<OrderDirection>;
  name: InputMaybe<OrderDirection>;
  sponsored: InputMaybe<OrderDirection>;
  website: InputMaybe<OrderDirection>;
};

export type CompanyRelateToOneForCreateInput = {
  connect: InputMaybe<CompanyWhereUniqueInput>;
  create: InputMaybe<CompanyCreateInput>;
};

export type CompanyRelateToOneForUpdateInput = {
  connect: InputMaybe<CompanyWhereUniqueInput>;
  create: InputMaybe<CompanyCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type CompanyUpdateArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateInput = {
  jobs: InputMaybe<JobRelateToOneForUpdateInput>;
  logo: InputMaybe<ImageFieldInput>;
  name: InputMaybe<Scalars['String']>;
  sponsored: InputMaybe<Scalars['Boolean']>;
  website: InputMaybe<Scalars['String']>;
};

export type CompanyWhereInput = {
  AND: InputMaybe<Array<CompanyWhereInput>>;
  NOT: InputMaybe<Array<CompanyWhereInput>>;
  OR: InputMaybe<Array<CompanyWhereInput>>;
  id: InputMaybe<IdFilter>;
  jobs: InputMaybe<JobWhereInput>;
  name: InputMaybe<StringFilter>;
  sponsored: InputMaybe<BooleanFilter>;
  website: InputMaybe<StringFilter>;
};

export type CompanyWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
};

export type CreateInitialUserInput = {
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<DateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<DateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals: InputMaybe<Scalars['ID']>;
  gt: InputMaybe<Scalars['ID']>;
  gte: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<Scalars['ID']>>;
  lt: InputMaybe<Scalars['ID']>;
  lte: InputMaybe<Scalars['ID']>;
  not: InputMaybe<IdFilter>;
  notIn: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  ref: InputMaybe<Scalars['String']>;
  upload: InputMaybe<Scalars['Upload']>;
};

export type ImageFieldOutput = {
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Job = {
  __typename?: 'Job';
  author: Maybe<User>;
  company: Maybe<Company>;
  content: Maybe<Job_Content_Document>;
  endDate: Maybe<Scalars['DateTime']>;
  html: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startDate: Maybe<Scalars['DateTime']>;
  status: Maybe<Scalars['String']>;
  tags: Maybe<Array<Tag>>;
  tagsCount: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type JobTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type JobTagsCountArgs = {
  where?: TagWhereInput;
};

export type JobCreateInput = {
  author: InputMaybe<UserRelateToOneForCreateInput>;
  company: InputMaybe<CompanyRelateToOneForCreateInput>;
  content: InputMaybe<Scalars['JSON']>;
  endDate: InputMaybe<Scalars['DateTime']>;
  html: InputMaybe<Scalars['String']>;
  startDate: InputMaybe<Scalars['DateTime']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<TagRelateToManyForCreateInput>;
  title: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type JobManyRelationFilter = {
  every: InputMaybe<JobWhereInput>;
  none: InputMaybe<JobWhereInput>;
  some: InputMaybe<JobWhereInput>;
};

export type JobOrderByInput = {
  endDate: InputMaybe<OrderDirection>;
  html: InputMaybe<OrderDirection>;
  id: InputMaybe<OrderDirection>;
  startDate: InputMaybe<OrderDirection>;
  status: InputMaybe<OrderDirection>;
  title: InputMaybe<OrderDirection>;
  url: InputMaybe<OrderDirection>;
};

export type JobRelateToManyForCreateInput = {
  connect: InputMaybe<Array<JobWhereUniqueInput>>;
  create: InputMaybe<Array<JobCreateInput>>;
};

export type JobRelateToManyForUpdateInput = {
  connect: InputMaybe<Array<JobWhereUniqueInput>>;
  create: InputMaybe<Array<JobCreateInput>>;
  disconnect: InputMaybe<Array<JobWhereUniqueInput>>;
  set: InputMaybe<Array<JobWhereUniqueInput>>;
};

export type JobRelateToOneForCreateInput = {
  connect: InputMaybe<JobWhereUniqueInput>;
  create: InputMaybe<JobCreateInput>;
};

export type JobRelateToOneForUpdateInput = {
  connect: InputMaybe<JobWhereUniqueInput>;
  create: InputMaybe<JobCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type JobUpdateArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};

export type JobUpdateInput = {
  author: InputMaybe<UserRelateToOneForUpdateInput>;
  company: InputMaybe<CompanyRelateToOneForUpdateInput>;
  content: InputMaybe<Scalars['JSON']>;
  endDate: InputMaybe<Scalars['DateTime']>;
  html: InputMaybe<Scalars['String']>;
  startDate: InputMaybe<Scalars['DateTime']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<TagRelateToManyForUpdateInput>;
  title: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type JobWhereInput = {
  AND: InputMaybe<Array<JobWhereInput>>;
  NOT: InputMaybe<Array<JobWhereInput>>;
  OR: InputMaybe<Array<JobWhereInput>>;
  author: InputMaybe<UserWhereInput>;
  company: InputMaybe<CompanyWhereInput>;
  endDate: InputMaybe<DateTimeNullableFilter>;
  html: InputMaybe<StringFilter>;
  id: InputMaybe<IdFilter>;
  startDate: InputMaybe<DateTimeFilter>;
  status: InputMaybe<StringNullableFilter>;
  tags: InputMaybe<TagManyRelationFilter>;
  title: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
};

export type JobWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type Job_Content_Document = {
  __typename?: 'Job_content_Document';
  document: Scalars['JSON'];
};


export type Job_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex: Maybe<Scalars['Int']>;
  fieldMeta: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  __typename?: 'LocalImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword: Maybe<UserAuthenticationWithPasswordResult>;
  createCompanies: Maybe<Array<Maybe<Company>>>;
  createCompany: Maybe<Company>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createJob: Maybe<Job>;
  createJobs: Maybe<Array<Maybe<Job>>>;
  createTag: Maybe<Tag>;
  createTags: Maybe<Array<Maybe<Tag>>>;
  createUser: Maybe<User>;
  createUsers: Maybe<Array<Maybe<User>>>;
  deleteCompanies: Maybe<Array<Maybe<Company>>>;
  deleteCompany: Maybe<Company>;
  deleteJob: Maybe<Job>;
  deleteJobs: Maybe<Array<Maybe<Job>>>;
  deleteTag: Maybe<Tag>;
  deleteTags: Maybe<Array<Maybe<Tag>>>;
  deleteUser: Maybe<User>;
  deleteUsers: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateCompanies: Maybe<Array<Maybe<Company>>>;
  updateCompany: Maybe<Company>;
  updateJob: Maybe<Job>;
  updateJobs: Maybe<Array<Maybe<Job>>>;
  updateTag: Maybe<Tag>;
  updateTags: Maybe<Array<Maybe<Tag>>>;
  updateUser: Maybe<User>;
  updateUsers: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateCompaniesArgs = {
  data: Array<CompanyCreateInput>;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateJobArgs = {
  data: JobCreateInput;
};


export type MutationCreateJobsArgs = {
  data: Array<JobCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCompaniesArgs = {
  where: Array<CompanyWhereUniqueInput>;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteJobArgs = {
  where: JobWhereUniqueInput;
};


export type MutationDeleteJobsArgs = {
  where: Array<JobWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCompaniesArgs = {
  data: Array<CompanyUpdateArgs>;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpdateJobsArgs = {
  data: Array<JobUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem: Maybe<AuthenticatedItem>;
  companies: Maybe<Array<Company>>;
  companiesCount: Maybe<Scalars['Int']>;
  company: Maybe<Company>;
  job: Maybe<Job>;
  jobs: Maybe<Array<Job>>;
  jobsCount: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  tag: Maybe<Tag>;
  tags: Maybe<Array<Tag>>;
  tagsCount: Maybe<Scalars['Int']>;
  user: Maybe<User>;
  users: Maybe<Array<User>>;
  usersCount: Maybe<Scalars['Int']>;
};


export type QueryCompaniesArgs = {
  orderBy?: Array<CompanyOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: CompanyWhereInput;
};


export type QueryCompaniesCountArgs = {
  where?: CompanyWhereInput;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryJobArgs = {
  where: JobWhereUniqueInput;
};


export type QueryJobsArgs = {
  orderBy?: Array<JobOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: JobWhereInput;
};


export type QueryJobsCountArgs = {
  where?: JobWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  jobs: Maybe<Array<Job>>;
  jobsCount: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};


export type TagJobsArgs = {
  orderBy?: Array<JobOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: JobWhereInput;
};


export type TagJobsCountArgs = {
  where?: JobWhereInput;
};

export type TagCreateInput = {
  jobs: InputMaybe<JobRelateToManyForCreateInput>;
  name: InputMaybe<Scalars['String']>;
};

export type TagManyRelationFilter = {
  every: InputMaybe<TagWhereInput>;
  none: InputMaybe<TagWhereInput>;
  some: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id: InputMaybe<OrderDirection>;
  name: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect: InputMaybe<Array<TagWhereUniqueInput>>;
  create: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect: InputMaybe<Array<TagWhereUniqueInput>>;
  create: InputMaybe<Array<TagCreateInput>>;
  disconnect: InputMaybe<Array<TagWhereUniqueInput>>;
  set: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  jobs: InputMaybe<JobRelateToManyForUpdateInput>;
  name: InputMaybe<Scalars['String']>;
};

export type TagWhereInput = {
  AND: InputMaybe<Array<TagWhereInput>>;
  NOT: InputMaybe<Array<TagWhereInput>>;
  OR: InputMaybe<Array<TagWhereInput>>;
  id: InputMaybe<IdFilter>;
  jobs: InputMaybe<JobManyRelationFilter>;
  name: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  password: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email: InputMaybe<OrderDirection>;
  id: InputMaybe<OrderDirection>;
  name: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  create: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  create: InputMaybe<UserCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  email: InputMaybe<StringFilter>;
  id: InputMaybe<IdFilter>;
  name: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export type GetJobQueryVariables = Exact<{
  jobId: Scalars['ID'];
}>;


export type GetJobQuery = { __typename?: 'Query', job: { __typename?: 'Job', title: string, url: string, startDate: any, endDate: any, html: string, content: { __typename?: 'Job_content_Document', document: any }, company: { __typename?: 'Company', id: string, name: string, website: string }, tags: Array<{ __typename?: 'Tag', name: string }> } };

export type GetJobsQueryVariables = Exact<{
  endDate: InputMaybe<Scalars['DateTime']>;
}>;


export type GetJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'Job', id: string, title: string, url: string, startDate: any, endDate: any, content: { __typename?: 'Job_content_Document', document: any }, company: { __typename?: 'Company', id: string, name: string, website: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };


export const GetJobDocument = gql`
    query GetJob($jobId: ID!) {
  job(where: {id: $jobId}) {
    title
    url
    content {
      document
    }
    startDate
    endDate
    html
    company {
      id
      name
      website
    }
    tags {
      name
    }
  }
}
    `;
export const GetJobsDocument = gql`
    query GetJobs($endDate: DateTime) {
  jobs(orderBy: {startDate: desc}, where: {endDate: {gt: $endDate}}) {
    id
    title
    url
    content {
      document
    }
    startDate
    endDate
    company {
      id
      name
      website
    }
    tags {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetJob(variables: GetJobQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobQuery>(GetJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetJob');
    },
    GetJobs(variables?: GetJobsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobsQuery>(GetJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetJobs');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;