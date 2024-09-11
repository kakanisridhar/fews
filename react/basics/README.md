# Learning react

## Template project downloaded from
https://github.com/your-username/react-vite-template.git

### Prerequisites

-   Node.js (>= 12.x)
-   npm or yarn
-   Docker (optional, for containerization)

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

1. `npm run start` or `yarn start`

    - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. `npm run build` or `yarn build`

    - Builds the app for production to the `dist` folder.

3. `npm run serve` or `yarn serve`

    - Serves the built app in the `dist` folder.

4. `npm run lint` or `yarn lint`

    - Lints the project using ESLint.

5. `npm run lint:fix` or `yarn lint:fix`

    - Lints the project and automatically fixes problems using ESLint.

6. `npm run test` or `yarn test`

    - Runs the tests using Jest.

7. `npm run coverage` or `yarn coverage`

    - Runs the tests and generates a coverage report.

8. `npm run deploy` or `yarn deploy`

    - Deploys the app to GitHub Pages.

## ESLint Configuration

This project uses the following ESLint configurations:

-   `eslint:recommended`
-   `plugin:react/recommended`
-   `plugin:@typescript-eslint/recommended`
-   `airbnb`
-   `plugin:import/errors`
-   `plugin:jsx-a11y/recommended`
-   `plugin:prettier/recommended`

You can find the ESLint configuration in the `.eslintrc` file.

## Prettier Configuration

Prettier is used for code formatting. You can find the configuration in the `.prettierrc` file.

## Docker Configuration

This project includes a `Dockerfile` for containerizing the application. The Dockerfile uses `node:18-alpine` as the base image. To build and run the Docker container, use the following commands:

```bash
docker build -t react-vite-template .
docker run -p 3000:3000 react-vite-template
```
