# Toxicological Samples

An Express server that creates a medical report for toxicological samples

## Try it out!

1. Download the [Insomnia boilerplate](./docs/insomnia-routes.json)
2. Import it on your workspace
3. Select the "Prod" environment (or [build the project](#how-to-build-the-project) and try it locally with "Local")
4. Sign up with **POST /api/v1/auth/signup**
5. Log in with **POST /api/v1/auth/login**
6. Play with **POST /api/v1/toxicology/samples** and **GET /api/v1/toxicology/samples**

## How to build the project

1. Clone the repo to your local machine

```
git clone https://github.com/mbetim/toxicological-samples-api.git
# or
gh repo clone mbetim/toxicological-samples-api
```

2. Install the dependencies (the project is using [yarn](https://yarnpkg.com/))

```
yarn
```

3. Duplicate the .env.example with the name .env and fill it with your information

4. Compile the project from Typescript

```
yarn build
```

5. Run it!

```bash
yarn start
```
