Application Link / Живая ссылка на проект: https://annadorosheva.github.io/planning-app/

Tasks creator.
This app is written in React (https://github.com/facebook/create-react-app). The code uses hooks and the Component class. LocalStorage is used to store notes on the client side. The styles use css modules, responsive icons, and the @emotion library to write styled components. CreatePortal from react-dom used for a modal window.
The drag&drop logic is also used for dragging and dropping notes.
In a special window, you can create a note, it will be added to the field for all notes. Notes can be filtered by a given word or part of a word in a special filter field.
When you click on the created note, a modal window with the note opens and the text can be edited. You can close the modal window by clicking on the Close button, Escape button or by clicking in the box around the note.
Notes can be swapped by dragging the mouse, you can mark completed by clicking on the existing icon in the note, after which the background color of the completed note will change.
You can delete a note by clicking on the "delete" button in the note.
To delete all created notes, you need to click on the "delete all" button under the notes.

Приложение планировщик написано на React (https://github.com/facebook/create-react-app). В коде использованы hooks и class Component. Для хранения заметок на стороне клиента использован localStorage. В стилях использовалны css modules, react-icons и библиотека @emotion для написания стилизированых компонентов. CreatePortal from react-dom использован дня модального окна. Так-же использована логика drag&drop для перетаскивания заметок.
В специальном окне можно создать заметку, она добавится в поле для всех заметок. Заметки можно фильтровать по заданному слову или части слова в специальном поле фильтра.
При клике на созданую заметку открывается модальное окно с заметкой и текст можно отредактировать. Закрыть модальное окно можно при клике на кнопку Close, Escape или кликнув в поле вокруг заметки.
Заметки можно менять местами перетаскивая мышью, можно отмечать выполненные кликнув на сществующий значок в заметке, после чего изменится цвет фона выполненной заметки.
Удалить заметку можно кликнув по кнопке "удалить" в заметке.
Что бы удалить все созданные заметки, нужно кликнуть на кнопку "удалить все" под заметками.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
