<h1>React Recipes</h1>

By: Ethan Vander Wiel

Link: https://ambient-antenna-229504.appspot.com/ Note: Please don't search more than 5 times per minute.

A simple recipe search web app that uses the Edamam API to gather the recipe data.

To help me learn more React as well as how to gather data from an API, I decided to make a recipe app that the user can search ingredients 
and recipes using those ingredients will return. I found similar projects online that helped to teach me how to use the API, 
but I entirely programmed and designed the project myself.

I also wanted to use this project to help teach me some beginner git techniques. While I have used github in the past, I have 
never actually used traditional git to manage my projects. I was able to connect git to VSCode, and from there connect my project to 
github desktop which connects to the github site. I made some mistakes along the way as well as wanted to test, so my git history of 
this project looks a bit strange. 


<h3>Components</h3>
This project uses 3 main components as well as an API class like file.

The first component is App. This component is the base rendering component that manages the other 2 as well as the api call.

The second component is Search, which is a component for the search bar at the top of the page. This component focuses on the
search bar as well as onSubmit and onChange features of the search, but does not call the API itself.

The last component is the Recipes component. This formats and displays the individual recipes along with
any information given.


<h3>Features I want to add</h3>
When I set out, I mostly just wanted to practice react on a simple project. The Edamam api allows a wide range of search features which
means I could add many ways the user can interact with the search. Here are some things I would like to add:

1. Redesigning/Reformatting in gereral. Currently very basic and experimental designing

2. Ability to search for foods using calorie count (would be very simple to add)

3. Ability to search for foods using health labels (easy as well)

4. For fun, changing the formatting at the click of a button, similar to a file explorer where you can choose from
blocked, lined, etc. (Unsure on difficulty but pretty sure I could do it)

5. Add some sort of home page the user can interact with that takes them to different search/browsing options. (Longer term)


<h2>Auto Generated Info:</h2>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
