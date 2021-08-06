# MWattez - CV as a React app

This project was made to gain some insights about React. It was created with the base of the bootstrapped project [Create React App](https://github.com/facebook/create-react-app).

Please note that all the data used for this project have been ignored from the commits. To run the project locally, you will have to rebuild the `/src/components/data/` directory.

## To run locally

This will set up a development environment.

1. Install Node.js
2. Run

```bash
git clone https://github.com/Nootaku/mwattez-cv.git
cd mwattez-cv
npm install

# if necessary fix vulnerabilities
npm audit fix

npm start
```

3. Go to localhost:3000 to see the website.

## Build production environment

```bash
npm run build
serve -s build
```
