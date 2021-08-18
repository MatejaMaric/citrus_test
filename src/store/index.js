import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    todos: [],
    selectedUserId: null,
  },
  getters: {
    getAllUsers(state) {
      return state.users.map((user) => {
        const { id, name, username } = user;
        return { id, name, username };
      });
    },
    getSelectedUser(state) {
      return state.users.find((user) => user.id == state.selectedUserId);
    },
    getAllTodosForSelectedUser(state) {
      return state.todos.filter((todo) => {
        if (todo.userId === state.selectedUserId) {
          return true;
        } else {
          return false;
        }
      });
    },
    getCompletedTodosForSelectedUser(state) {
      return state.todos.filter((todo) => {
        if (todo.userId === state.selectedUserId && todo.completed === true) {
          return true;
        } else {
          return false;
        }
      });
    },
    getUncompletedTodosForSelectedUser(state) {
      return state.todos.filter((todo) => {
        if (todo.userId === state.selectedUserId && todo.completed === false) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    selectUser(state, id) {
      state.selectedUserId = id;
    },
  },
  actions: {
    async pullUsersAndTodos(context) {
      let users = [];
      let todos = [];

      try {
        users = await fetch("https://jsonplaceholder.typicode.com/users").then(
          (res) => res.json()
        );
        todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
          (res) => res.json()
        );
      } catch (error) {
        console.error("Error fetching data from API!", error);
        users = [];
        todos = [];
      }

      context.commit("setUsers", users);
      context.commit("setTodos", todos);
    },
  },
});
