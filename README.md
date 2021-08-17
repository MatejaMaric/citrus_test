## About this project:

This project was given to me as part of the selection process for a Front End
Developer position at Citrus Systems.

## How to run this project:

```
npm install
npm run serve
```

## Front End Developer assignment:

Create a page which will display a list of users and their todos. The layout
can be split into two parts. The top part will consist of a list of users,
while the bottom one will be filled with selected user's todos. Initially, no
user will be selected, meaning that no todos will be shown.

Upon clicking a user in the list, their todos will appear in the bottom
section. The top part of the todos section will have 3 buttons which will act
as filters in a way so that you can show all todos, completed todos and
uncompleted ones, depending on what button is selected (active).

You need to highlight which user is selected with styles, and also highlight
the filter button which is currently active.

You will use two APIs:
- Users: <https://jsonplaceholder.typicode.com/users>
- Todos: <https://jsonplaceholder.typicode.com/todos>

The connection between users and todos should be straightforward:
- Inside users it's the "id" property
- Inside todos it's the "userId"

Design:
- <https://www.figma.com/file/yvrAInRdjUl4pXtpilNXRv/Developer-test?node-id=0%3A1&viewport=756%2C563%2C0.2662522792816162>

The finalized work doesn't have to follow the design perfectly, but we would
appreciate it if you could match it as much as possible.

---

*Summary:*
- Display users in a list (showing their names or usernames would suffice)
- Show todos in the bottom section upon clicking a user
- Add filtering options with working logic for showing "all", "completed" and
  "uncompleted" todos accordingly
- Add "selected" styles for the selected user and selected filter button

*Requirements:*
- Use Vue, React or vanilla JavaScript
- Write pure CSS or SASS
- Ideally use BEM for class naming
- Don't use any CSS frameworks such as Materialize, Bulma or Bootstrap

*Lastly:*
- Put the finished source code in a public Github or Gitlab repository. Make
  sure to commit more often than you usually would, with meaningful commit
  messages, so we can understand your thought process
- Call the repository "citrus_test"
- Time to complete is 48 hours starting from the moment that you received the
  test. After 48 hours have passed, send what you have done in the time limit
