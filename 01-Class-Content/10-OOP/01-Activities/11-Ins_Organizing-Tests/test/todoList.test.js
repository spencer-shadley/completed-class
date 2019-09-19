const TodoList = require("../todoList");
const Todo = require("../todo");

describe("TodoList", () => {
  describe("Initialization", () => {
    it("should create an object with a 'todos' property set to an empty array when called with the 'new' keyword", () => {
      const todoList = new TodoList();

      expect(todoList.todos).toEqual([]);
    });
  });

  describe("addTodo", () => {
    it("should add a new 'Todo' object to its 'todos' array", () => {
      const todoList = new TodoList();
      const todoText = "Mow Lawn";

      todoList.addTodo(todoText);

      expect(todoList.todos.length).toEqual(1);
      expect(todoList.todos[0] instanceof Todo).toEqual(true);
      expect(todoList.todos[0].text).toEqual(todoText);
    });

    it("should throw an error if not provided text", () => {
      const todoList = new TodoList();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );
      const cb = () => todoList.addTodo();

      expect(cb).toThrowError(err);
    });
  });

  describe("getNextTodo", () => {
    it("should return the 0th todo element in the 'todos' array without removing it", () => {
      const todoList = new TodoList();
      const text1 = "Exercise";
      const text2 = "Wash Car";
      let nextTodo;

      todoList.addTodo(text1);
      todoList.addTodo(text2);
      nextTodo = todoList.getNextTodo();

      expect(nextTodo instanceof Todo).toEqual(true);
      expect(nextTodo.text).toEqual(text1);
      expect(todoList.todos.length).toEqual(2);
    });

    it("should return undefined if there are no todos", () => {
      const todoList = new TodoList();
      let nextTodo;

      nextTodo = todoList.getNextTodo();

      expect(typeof nextTodo).toEqual("undefined");
    });
  });

  describe("completeNextTodo", () => {
    it("should return and remove the next todo in the list", () => {
      const todoList = new TodoList();
      const text1 = "Make Dinner";
      const text2 = "Wash Dishes";
      let nextTodo;

      todoList.addTodo(text1);
      todoList.addTodo(text2);
      nextTodo = todoList.completeNextTodo();

      expect(nextTodo instanceof Todo).toEqual(true);
      expect(nextTodo.text).toEqual(text1);
      expect(todoList.todos.length).toEqual(1);
      expect(todoList.getNextTodo().text).toEqual(text2);
    });
  });
});
