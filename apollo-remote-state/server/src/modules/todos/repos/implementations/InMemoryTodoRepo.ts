import { TodoRepo } from "../todoRepo";
import { Todo } from "../../../../generated/graphql";

export class InMemoryTodoRepo implements TodoRepo {
  private todos: Todo[] = [
    { id: 1, text: "Getting started", completed: false },
    { id: 2, text: "Second todo", completed: false },
    { id: 3, text: "Third todo", completed: false },
  ];

  private lastTodoId: number = this.todos.length;

  constructor() {}

  public async addTodo(text: string): Promise<void> {
    if (text.length < 3)
      throw new Error("Todo needs to be longer than 3 characters.");
    this.lastTodoId++;
    this.todos.push({ id: this.lastTodoId, text, completed: false });
    console.log("addTodo ->", this.todos);
  }

  public async completeTodo(id: number): Promise<void> {
    this.todos = this.todos.map((t) =>
      t.id === id ? { ...t, completed: true } : t,
    );
    console.log("completeTodo ->", this.todos);
  }

  public async clearCompletedTodos(): Promise<void> {
    this.todos = this.todos.filter((t) => t.completed !== true);
    console.log("clearCompletedTodos ->", this.todos);
  }

  public async deleteTodo(id: number): Promise<void> {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    console.log("deleteTodo ->", this.todos);
  }

  public async editTodo(id: number, text: string): Promise<void> {
    if (text.length < 3)
      throw new Error("Todo needs to be longer than 3 characters.");
    const found = this.todos.findIndex((t) => t.id === id);
    if (found === -1) {
      throw new Error("Todo not found for editing");
    }

    this.todos[found].text = text;
    console.log("editTodo ->", this.todos);
  }

  public async getAllTodos(): Promise<Todo[]> {
    return this.todos;
  }

  public async getTodoById(id: number): Promise<Todo> {
    const found = this.todos.findIndex((t) => t.id === id);
    if (found === -1) {
      throw new Error("Todo not found");
    }
    return this.todos[found];
  }

  public async getLastTodo(): Promise<Todo> {
    return this.todos[this.todos.length - 1];
  }

  public async completeAllTodos(): Promise<void> {
    this.todos = this.todos.map((t) => ({ ...t, completed: true }));
    console.log("completeAllTodos ->", this.todos);
  }
}
