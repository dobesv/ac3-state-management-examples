import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddTodoResult = {
  __typename?: 'AddTodoResult';
  error?: Maybe<TodoValidationError>;
  success: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type ClearCompletedTodosResult = {
  __typename?: 'ClearCompletedTodosResult';
  success: Scalars['Boolean']['output'];
  todos: Array<Maybe<Todo>>;
};

export type CompleteAllTodosResult = {
  __typename?: 'CompleteAllTodosResult';
  success: Scalars['Boolean']['output'];
  todos: Array<Maybe<Todo>>;
};

export type CompleteTodoError = TodoAlreadyCompletedError | TodoNotFoundError;

export type CompleteTodoResult = {
  __typename?: 'CompleteTodoResult';
  error?: Maybe<CompleteTodoError>;
  success: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type DeleteTodoResult = {
  __typename?: 'DeleteTodoResult';
  error?: Maybe<TodoNotFoundError>;
  success: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type EditTodoError = TodoNotFoundError | TodoValidationError;

export type EditTodoResult = {
  __typename?: 'EditTodoResult';
  error?: Maybe<EditTodoError>;
  success: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: AddTodoResult;
  clearCompletedTodos: ClearCompletedTodosResult;
  completeAllTodos: CompleteAllTodosResult;
  completeTodo: CompleteTodoResult;
  deleteTodo: DeleteTodoResult;
  editTodo: EditTodoResult;
};


export type MutationAddTodoArgs = {
  text: Scalars['String']['input'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditTodoArgs = {
  id: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  todo: TodoResult;
  todos: TodosConnection;
};


export type QueryTodoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTodosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type TodoAlreadyCompletedError = {
  __typename?: 'TodoAlreadyCompletedError';
  message: Scalars['String']['output'];
};

export type TodoNotFoundError = {
  __typename?: 'TodoNotFoundError';
  message: Scalars['String']['output'];
};

export type TodoResult = Todo | TodoNotFoundError;

export type TodoValidationError = {
  __typename?: 'TodoValidationError';
  message: Scalars['String']['output'];
};

export type TodosConnection = {
  __typename?: 'TodosConnection';
  edges: Array<Maybe<TodosEdge>>;
  pageInfo: PageInfo;
};

export type TodosEdge = {
  __typename?: 'TodosEdge';
  cursor: Scalars['String']['output'];
  node: Todo;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  CompleteTodoError: ( TodoAlreadyCompletedError ) | ( TodoNotFoundError );
  EditTodoError: ( TodoNotFoundError ) | ( TodoValidationError );
  TodoResult: ( Todo ) | ( TodoNotFoundError );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddTodoResult: ResolverTypeWrapper<AddTodoResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ClearCompletedTodosResult: ResolverTypeWrapper<ClearCompletedTodosResult>;
  CompleteAllTodosResult: ResolverTypeWrapper<CompleteAllTodosResult>;
  CompleteTodoError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CompleteTodoError']>;
  CompleteTodoResult: ResolverTypeWrapper<Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversTypes['CompleteTodoError']> }>;
  DeleteTodoResult: ResolverTypeWrapper<DeleteTodoResult>;
  EditTodoError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['EditTodoError']>;
  EditTodoResult: ResolverTypeWrapper<Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversTypes['EditTodoError']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoAlreadyCompletedError: ResolverTypeWrapper<TodoAlreadyCompletedError>;
  TodoNotFoundError: ResolverTypeWrapper<TodoNotFoundError>;
  TodoResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TodoResult']>;
  TodoValidationError: ResolverTypeWrapper<TodoValidationError>;
  TodosConnection: ResolverTypeWrapper<TodosConnection>;
  TodosEdge: ResolverTypeWrapper<TodosEdge>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddTodoResult: AddTodoResult;
  Boolean: Scalars['Boolean']['output'];
  ClearCompletedTodosResult: ClearCompletedTodosResult;
  CompleteAllTodosResult: CompleteAllTodosResult;
  CompleteTodoError: ResolversUnionTypes<ResolversParentTypes>['CompleteTodoError'];
  CompleteTodoResult: Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['CompleteTodoError']> };
  DeleteTodoResult: DeleteTodoResult;
  EditTodoError: ResolversUnionTypes<ResolversParentTypes>['EditTodoError'];
  EditTodoResult: Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['EditTodoError']> };
  Int: Scalars['Int']['output'];
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String']['output'];
  Todo: Todo;
  TodoAlreadyCompletedError: TodoAlreadyCompletedError;
  TodoNotFoundError: TodoNotFoundError;
  TodoResult: ResolversUnionTypes<ResolversParentTypes>['TodoResult'];
  TodoValidationError: TodoValidationError;
  TodosConnection: TodosConnection;
  TodosEdge: TodosEdge;
};

export type AddTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTodoResult'] = ResolversParentTypes['AddTodoResult']> = {
  error?: Resolver<Maybe<ResolversTypes['TodoValidationError']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClearCompletedTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClearCompletedTodosResult'] = ResolversParentTypes['ClearCompletedTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteAllTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteAllTodosResult'] = ResolversParentTypes['CompleteAllTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoError'] = ResolversParentTypes['CompleteTodoError']> = {
  __resolveType: TypeResolveFn<'TodoAlreadyCompletedError' | 'TodoNotFoundError', ParentType, ContextType>;
};

export type CompleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoResult'] = ResolversParentTypes['CompleteTodoResult']> = {
  error?: Resolver<Maybe<ResolversTypes['CompleteTodoError']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTodoResult'] = ResolversParentTypes['DeleteTodoResult']> = {
  error?: Resolver<Maybe<ResolversTypes['TodoNotFoundError']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoError'] = ResolversParentTypes['EditTodoError']> = {
  __resolveType: TypeResolveFn<'TodoNotFoundError' | 'TodoValidationError', ParentType, ContextType>;
};

export type EditTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoResult'] = ResolversParentTypes['EditTodoResult']> = {
  error?: Resolver<Maybe<ResolversTypes['EditTodoError']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<ResolversTypes['AddTodoResult'], ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'text'>>;
  clearCompletedTodos?: Resolver<ResolversTypes['ClearCompletedTodosResult'], ParentType, ContextType>;
  completeAllTodos?: Resolver<ResolversTypes['CompleteAllTodosResult'], ParentType, ContextType>;
  completeTodo?: Resolver<ResolversTypes['CompleteTodoResult'], ParentType, ContextType, RequireFields<MutationCompleteTodoArgs, 'id'>>;
  deleteTodo?: Resolver<ResolversTypes['DeleteTodoResult'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  editTodo?: Resolver<ResolversTypes['EditTodoResult'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'id' | 'text'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todo?: Resolver<ResolversTypes['TodoResult'], ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>;
  todos?: Resolver<ResolversTypes['TodosConnection'], ParentType, ContextType, Partial<QueryTodosArgs>>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoAlreadyCompletedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoAlreadyCompletedError'] = ResolversParentTypes['TodoAlreadyCompletedError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoNotFoundErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoNotFoundError'] = ResolversParentTypes['TodoNotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoResult'] = ResolversParentTypes['TodoResult']> = {
  __resolveType: TypeResolveFn<'Todo' | 'TodoNotFoundError', ParentType, ContextType>;
};

export type TodoValidationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoValidationError'] = ResolversParentTypes['TodoValidationError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosConnection'] = ResolversParentTypes['TodosConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['TodosEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosEdge'] = ResolversParentTypes['TodosEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddTodoResult?: AddTodoResultResolvers<ContextType>;
  ClearCompletedTodosResult?: ClearCompletedTodosResultResolvers<ContextType>;
  CompleteAllTodosResult?: CompleteAllTodosResultResolvers<ContextType>;
  CompleteTodoError?: CompleteTodoErrorResolvers<ContextType>;
  CompleteTodoResult?: CompleteTodoResultResolvers<ContextType>;
  DeleteTodoResult?: DeleteTodoResultResolvers<ContextType>;
  EditTodoError?: EditTodoErrorResolvers<ContextType>;
  EditTodoResult?: EditTodoResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoAlreadyCompletedError?: TodoAlreadyCompletedErrorResolvers<ContextType>;
  TodoNotFoundError?: TodoNotFoundErrorResolvers<ContextType>;
  TodoResult?: TodoResultResolvers<ContextType>;
  TodoValidationError?: TodoValidationErrorResolvers<ContextType>;
  TodosConnection?: TodosConnectionResolvers<ContextType>;
  TodosEdge?: TodosEdgeResolvers<ContextType>;
};

