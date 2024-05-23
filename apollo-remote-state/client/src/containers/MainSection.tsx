import React from 'react'
import MainSection from '../components/MainSection'
import { gql, useQuery } from '@apollo/client'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos'
import { GET_VISIBILITY_FILTER } from '../operations/queries/getVisibilityFilter'
import { GetAllTodosQuery } from '../generated/graphql'
import { useClearCompletedTodos } from '../operations/mutations/clearCompletedTodos'
import { useCompleteAllTodos } from '../operations/mutations/completeAllTodos'
import setVisibilityFilter from '../operations/mutations/setVisibilityFilter/setVisibilityFilter'

const GET_LAST_TODOS = gql`
  query GetLastTodos {
    todos (last: 1) {
      edges {
        node {
          id
          text
          completed
        }
      }
    }
  }
`

export default function Main () {
  const result = useQuery(GET_LAST_TODOS);
  console.log('result', result)

  const { loading: isTodosLoading, data: todosConnection, error: todosError } = useQuery<GetAllTodosQuery>(GET_ALL_TODOS);
  const { data: visibilityFilter } = useQuery<VisiblityFilter>(GET_VISIBILITY_FILTER);

  const { mutate: clearCompletedTodos } = useClearCompletedTodos();
  const { mutate: completeAllTodos } = useCompleteAllTodos();

  if (isTodosLoading) return <div>Loading...</div>
  if (todosError) return <div>An error occurred {JSON.stringify(todosError)}</div>
  if (!todosConnection) return <div>None</div>;
  const todos = todosConnection.todos.edges.map((t) => t?.node)

  return (
    <MainSection
      activeVisibilityFilter={visibilityFilter as VisiblityFilter}
      todosCount={todosConnection.todos.edges.length}
      completedCount={todos.filter(t => t ? t.completed : false).length}
      actions={{
        completeAllTodos,
        setVisibilityFilter,
        clearCompletedTodos,
      }}
    />
  );
};

