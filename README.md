# Intern React Project

## Project Overview

A listing website focused on animated films and series, the platform also includes a forum where users can discuss specific topics and a news section that provides the latest animation-related updates. Users can explore various lists created by others to discover different tastes and preferences.
Once logged in, users can add films to their lists, rate them, and customize their profiles. The platform allows users to create their lists, write reviews, and add characters, voice actors, and animations to their favorites.

**!!** Since the project does not have a backend, changes to user profiles won't persist, and all data is fetched from .json files.

## Features and Website Overview

### Homepage 
- Animated welcome message for an engaging user experience
- Enhanced interactivity with cursor changes, increased shadow effects on hover, and animations for the login and create free account buttons; the "view more" section changes color and cursor style on hover
- Showcases the top 10 most popular recent films, with the total number of films in the database displayed on the right
- Clicking on films and animations directs users to a detailed information page
- The "view more" section leads to the corresponding category page when clicked

<img src="https://github.com/user-attachments/assets/e4568110-bbda-4046-a46d-2dcdeef6ad94" alt="image1" width="500">
<img src="https://github.com/user-attachments/assets/bfcd856a-be90-45d2-8455-53c214db9d79" alt="image2" width="500">

### Search
- Expandable and collapsible search interface for user convenience
- Filtering options available for Movies, Series, Characters, Staff, and Users
- An "All" section presents a categorized view for easy navigation
- Clicking on Series and Movies directs users to the corresponding detail pages

<img src="https://github.com/user-attachments/assets/04ad06ca-2daa-4760-ae86-2e870f272ad3" alt="Screenshot 2024-10-22 162222" width="500">
<img src="https://github.com/user-attachments/assets/daf69f59-74d7-4b06-9b43-f863f74188bd" alt="Screenshot 2024-10-22 161944" width="500">

### Popular Section
- Organized layout categorized by ascending popularity for easy browsing
- Displays a maximum of 10 content items per page for a streamlined experience
- Clicking on Movies and Series redirects users to their respective detail pages
- Hover effects on containers enhance user interaction and engagement.
- An underline appears beneath the filtered category to indicate the selected option, enhancing user navigation and awareness of their current selection.

<img src="https://github.com/user-attachments/assets/4573557d-a9a8-4c51-a4c2-8e7496dc4d30" alt="Screenshot 2024-10-22 162529" width="500">

### Lists Section
- Features separate categories for the most liked lists of the week, recently updated lists, and the users' favourite lists
- Each list displays up to four films or animations; if there are fewer than four, a gray placeholder image is shown to maintain visual consistency and avoid clutter
- Hover effects on containers
<img src="https://github.com/user-attachments/assets/1feaea67-db67-441c-a2ab-75de2ce9216a" alt="Screenshot 2024-10-22 162815" width="500">
<img src="https://github.com/user-attachments/assets/da300e6e-610c-4dc8-b709-23dd56b38b71" alt="Screenshot 2024-10-22 162826" width="500">

### Forum Section
- An underline appears beneath the filtered category to indicate the selected option, enhancing user navigation and awareness of their current selection.
- Pinned important forum topics are displayed for easy access.
- Ability to create new forum topics, with data stored in Local Storage.
- Filtering functionality is also available by clicking on the category within the container that displays the forum name.
- Hover effects on containers to improve interactivity and user engagement.

<img src="https://github.com/user-attachments/assets/01f0a69d-c7da-4823-8195-330a7dd12f9b" alt="Screenshot 2024-10-22 163417" width="500">
<img src="https://github.com/user-attachments/assets/0816c575-8a19-4be1-b150-4c7b6e119b5c" alt="Screenshot 2024-10-22 163427" width="500">

### News Section
- An underline appears beneath the filtered category to indicate the selected option, enhancing user navigation and awareness of their current selection.
- Filtering functionality is also available by clicking on the category within the container that displays the news name.
- Hover effects on containers to improve interactivity and user engagement.

<img src="https://github.com/user-attachments/assets/f58a7621-554c-44ce-bd8c-54005febf0b7" alt="Screenshot 2024-10-22 163849" width="500">

### Movies & Series Detail Page
- Displays the film's title, cover image, and a brief description prominently at the top
- Clicking on the film's image expands it to full-screen view
- "Add to list" section opens as a dropdown, with a notification appearing in the same color at the bottom right based on the selection, and the dropdown updates to reflect the chosen option
- When adding to favorites, the heart icon changes color, and a notification appears in the same color at the bottom right
- Users can rate the film interactively by clicking on stars (out of 5), with the option to reset the rating by clicking a cross icon
- Shows a bar chart distribution based on the given ratings
- Displays a limited number of characters, staff, and reviews on the main page, with an option to view all by clicking their respective categories

<img src="https://github.com/user-attachments/assets/830acc9d-e6b6-4bd0-b2da-0c96c7b87dd9" alt="Screenshot 2024-10-22 164037" width="500"><br>
<img src="https://github.com/user-attachments/assets/c0865662-8bb7-443e-8fed-02e42d792535" alt="Screenshot 2024-10-22 164106" width="500"><br>
<img src="https://github.com/user-attachments/assets/a8899e75-9dd8-48e3-8698-2566c2a0a0ed" alt="Screenshot 2024-10-22 164204" width="500">
<img src="https://github.com/user-attachments/assets/fbe9db30-4527-4923-b37b-24b5040466c4" alt="Screenshot 2024-10-22 164314" width="500">
<img src="https://github.com/user-attachments/assets/cf243632-046e-416f-ab63-7aa7a369ec22" alt="Screenshot 2024-10-22 164127" width="500">

### Profile 
- Customizable profile and cover images for a personalized touch
- Displays user information, including pronouns, last online date, and account creation date
- Editable biography to further personalize the profile
- Friends list to manage social connections
- Favorites Section: Organized into categories for easy browsing
- Movies and Series Lists: Separate lists for Movies and Series, categorized by status (completed, on-hold, dropped, plan to watch, watching), showing the number of items in each category, and displaying recently added series
- Lists Tab: Displays the lists created by the user
- Stats Tab: Shows the user’s ratings as a bar chart; clicking on a score reveals the related series below
- Journal Section: Lists the user’s activities in chronological order
- Features for writing comments, replying to discussions, and reporting inappropriate content

<img src="https://github.com/user-attachments/assets/f6ea27b8-b6b8-470f-a70c-ce837fe4d462" alt="Screenshot 2024-10-22 165547" width="500"><br>
<img src="https://github.com/user-attachments/assets/e1fbc826-91e1-4088-8b39-35220dafab0b" alt="Screenshot 2024-10-22 165614" width="500"><br>
<img src="https://github.com/user-attachments/assets/e9f85654-990f-4780-858f-4e4778eaa532" alt="Screenshot 2024-10-22 165736" width="500">
<img src="https://github.com/user-attachments/assets/37c42f88-5615-41da-bf4b-3deb8841f0a1" alt="Screenshot 2024-10-22 165745" width="500">
<img src="https://github.com/user-attachments/assets/2b2f4879-cc4a-4e45-b97c-9d1a1970e583" alt="Screenshot 2024-10-22 165751" width="500">


___

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

