export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type AddTodoResult = {
  __typename?: 'AddTodoResult';
  error?: Maybe<TodoValidationError>;
  success: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

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
  visibilityFilter?: Maybe<VisibilityFilter>;
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

export type VisibilityFilter = {
  __typename?: 'VisibilityFilter';
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type GetLastTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastTodosQuery = { __typename?: 'Query', todos: { __typename?: 'TodosConnection', edges: Array<{ __typename?: 'TodosEdge', node: { __typename?: 'Todo', id: number, text: string, completed: boolean } } | null> } };

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'AddTodoResult', success: boolean, todo?: { __typename?: 'Todo', id: number, text: string, completed: boolean } | null, error?: { __typename?: 'TodoValidationError', message: string } | null } };

export type ClearCompletedTodosMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCompletedTodosMutation = { __typename?: 'Mutation', clearCompletedTodos: { __typename?: 'ClearCompletedTodosResult', success: boolean, todos: Array<{ __typename?: 'Todo', id: number, text: string, completed: boolean } | null> } };

export type CompleteAllTodosMutationVariables = Exact<{ [key: string]: never; }>;


export type CompleteAllTodosMutation = { __typename?: 'Mutation', completeAllTodos: { __typename?: 'CompleteAllTodosResult', success: boolean, todos: Array<{ __typename?: 'Todo', id: number, text: string, completed: boolean } | null> } };

export type CompleteTodoMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CompleteTodoMutation = { __typename?: 'Mutation', completeTodo: { __typename?: 'CompleteTodoResult', success: boolean, todo?: { __typename?: 'Todo', id: number, text: string, completed: boolean } | null, error?: { __typename?: 'TodoAlreadyCompletedError', message: string } | { __typename?: 'TodoNotFoundError', message: string } | null } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'DeleteTodoResult', success: boolean, todo?: { __typename?: 'Todo', id: number, text: string, completed: boolean } | null, error?: { __typename?: 'TodoNotFoundError', message: string } | null } };

export type EditTodoMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  text: Scalars['String']['input'];
}>;


export type EditTodoMutation = { __typename?: 'Mutation', editTodo: { __typename?: 'EditTodoResult', success: boolean, todo?: { __typename?: 'Todo', id: number, text: string, completed: boolean } | null, error?: { __typename?: 'TodoNotFoundError', message: string } | { __typename?: 'TodoValidationError', message: string } | null } };

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = { __typename?: 'Query', todos: { __typename?: 'TodosConnection', edges: Array<{ __typename?: 'TodosEdge', node: { __typename?: 'Todo', id: number, text: string, completed: boolean } } | null> } };

export type GetVisibilityFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVisibilityFilterQuery = { __typename?: 'Query', visibilityFilter?: { __typename?: 'VisibilityFilter', id: string, displayName: string } | null };
