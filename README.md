![image](https://github.com/user-attachments/assets/bc80dd34-aaaa-4042-a382-3c29974ea919)

# Movie App React

A web application built with React.js for browsing and searching movies.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (version 14.0.0 or higher)
- npm (usually comes with Node.js)
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/seragasantri/movieapp-react.git
```

2. Navigate to project directory
```bash
cd movieapp-react
```

3. Install dependencies
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm start
```

The application will open automatically in your default browser at `http://localhost:3000`

## Build for Production

To create a production build:
```bash
npm run build
```

The build files will be created in the `build` folder.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:
```
REACT_APP_BASEURL=https://api.themoviedb.org/3
REACT_APP_BASEIMGURL=https://image.tmdb.org/t/p/
REACT_APP_APIKEY=1fdfd0ff490e300536a6d3849d6d5527
REACT_APP_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmRmZDBmZjQ5MGUzMDA1MzZhNmQzODQ5ZDZkNTUyNyIsInN1YiI6IjY1MGJkZTI1NGRhM2Q0MDBjOWRjYTZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GCKueV-iFnLrVwvcGEQzqPbZIwG9FrHMVsFNFKFn40w
```

## Features

- Browse popular movies
- Search for movies
- View movie details
- Responsive design for mobile and desktop

## Project Structure

```
movieapp-react/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── services/
  │   ├── styles/
  │   ├── App.js
  │   └── index.js
  ├── .env
  ├── package.json
  └── README.md
```

## Technologies Used

- React.js
- React Router DOM
- Axios
- CSS Modules
- The Movie Database (TMDB) API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
