# [Living Dictionaries](https://livingdictionaries.app/)

A mobile-first community focused web app built by [Living Tongues Institute for Endangered Languages](https://livingtongues.org/).

## Tech stack

[<img src="https://img.shields.io/badge/SvelteJS-3-orange.svg"></a>](https://svelte.dev/)
[<img src="https://img.shields.io/badge/SvelteKit-@next-orange.svg"></a>](https://kit.svelte.dev/)
[<img src="https://img.shields.io/badge/TailwindCSS-2-blue.svg"></a>](https://tailwindcss.com/)
[<img src="https://img.shields.io/badge/Firebase-9-orange.svg"></a>](https://firebase.google.com/)
[<img src="https://img.shields.io/badge/Vercel-SSR-black.svg"></a>](https://vercel.com/)
[<img src="https://img.shields.io/badge/Algolia-Instantsearch.js-blue.svg"></a>](https://www.algolia.com/)

Firebase is used for:

- Authentication
- Cloud Firestore (database)
- Storage
- Cloud Functions, see [functions-unit-tests](docs/functions-unit-tests.md) and [functions-emulator](docs/functions-emulator.md) to learn how to emulate functions locally

## Contributing

Choose an already approved task from the [Development Roadmap](https://github.com/jwrunner/Living-Dictionaries/projects/1) or [create an issue](https://github.com/jwrunner/Living-Dictionaries/issues) to propose a new feature (please await discussion before creating a pull request). Read [CONTRIBUTING.md](docs/CONTRIBUTING.md) to understand how to commit your changes using Git flow and then follow the instructions in _Developing_ to get started.

Beginning developers, here are some general [development environment setup tips](docs/setup-tips-for-beginner-devs.md).

Note that you will need to ask for our dev Mapbox and Firebase API keys or bring your own by adding `VITE_mapboxAccessToken=...` and
`VITE_FirebaseDevApiKey=...` to a `.env.local` file on the root level.

## Developing

Install dependencies with `npm install` and then run `npm run dev` to automatically open on [localhost:3051](http://localhost:3051). The app will hot reload as you make changes. As an alternative to have a dev environment set up you can use the Gitpod button here to open a ready-built dev environment w/ npm dependencies already installed:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jwrunner/Living-Dictionaries)

\*_Note that on localhost you will not see the live (prod) site's data, but rather the data from the dev database, which allows us to develop and make changes freely without worrying about deleting or corrupting important data._
