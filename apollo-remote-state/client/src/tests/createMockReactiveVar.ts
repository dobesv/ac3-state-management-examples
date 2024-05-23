import { ReactiveVar } from "@apollo/client";
import type { ApolloCache } from "@apollo/client/core";
import { ReactiveListener } from "@apollo/client/cache/inmemory/reactiveVars";

// This is how to create a mock reactive variable.
// It's a good idea to do this because then we can test our
// interaction logic.

export function createMockReactiveVar<T>(defaultValue?: T): ReactiveVar<T> {
  let currentValue: T | undefined = defaultValue;

  return Object.assign(
    function mockReactiveVar(newValue?: T): T {
      if (newValue) {
        currentValue = newValue;
      }
      return currentValue as T;
    },
    {
      onNextChange(listener: ReactiveListener<T>): () => void {
        throw new Error("not implemented");
      },
      attachCache(cache: ApolloCache<any>): ReactiveVar<T> {
        throw new Error("not implemented");
      },
      forgetCache(cache: ApolloCache<any>): boolean {
        throw new Error("not implemented");
      },
    },
  );
}
