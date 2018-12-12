# Mock Data Pattern

This project showcases how to use centralized mock data using React. A centralized mock data file drives three different use cases:

1. Storybook stories
2. Automated tests
3. The app

## Quick start

```js
npm install
npm start           // Run app
npm t               // Run tests
npm run storybook   // Run storybook
```

## Benefits

- Experiment with data structures before creating an actual API
- Start coding before the API is completed
- Avoid redundant hard coding for each scenario above, or the maintainance of standing up a mock DB.
- High performance since the data is local
- No network connection needed for development of tests, stories, or the real app

Don't want to create hard coded data? Want to simulate creates, updates, and deletes? [Create a mock API using json-server and json-schema-faker](https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066).

## Looking for more on JavaScript and React?

[Check out my Pluralsight courses](https://app.pluralsight.com/profile/author/cory-house).
