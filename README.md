# Spotify Search Client

This is the client application for a Spotify search application.

## To run the program

__*Execute the commands below in the project directory.*__


#### Install dependencies

`npm install`

#### Run the application

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

__*If the client does not start on port 3000, then follow the "Set Client URI" instructions in the backend README.*__


## Project Details

__Overview__

This was built using React and Reactstrap. Two major design choices I chose were to not use React-Redux or React-Router. I chose not to use Redux for state management becuase the component hierachy was simple and wanted to avoid unnecessary complexity. Also, I chose not to use React-Router in order to avoid unnecessary complexity. If the project required pages beyond the search form and results, then I may have chosen to use a state management system and client side routing.

__If I had more time__

First, I would implement some more thorough error handling for API calls and a loading spinner.

Second, I would like to add a feature where a user can click on an artist, album, or track in the results list and view more details about that item. This would make the component hierarchy much wider so I would use Redux for sharing state and I would use redux-thunk for managing state with async API calls. Also, client side routing would be necessary for displaying single and multiple artist, album, and track resources.

Third, if I had more time I would work on styling. The artist card images should have a max size, the image is too large on large window sizes.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).