# Reactive Manual - Native

Native data-driven components for building Maps and Search UIs

Reactive Manual - Native contains the docs for all the React Native components for [reactivesearch](https://github.com/appbaseio/reactivesearch).

## Contributing

### Prerequisites

1. Git
1. Node: install version 8.4 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A clone of the [repo](https://github.com/appbaseio/native-reactive-manual) on your local machine
1. A fork of the repo (for any contributions)

### Installation

1. `cd native-reactive-manual` to go into the project root
1. `yarn` to install the website's npm dependencies

### Running locally

1. `yarn start` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` to open the site in your favorite browser

## Contributing

### Create a branch

1. `git checkout master` from any folder in your local `native-reactive-manual` repository
1. `git pull origin master` to ensure you have the latest main code
1. `git checkout -b my-awesome-branch` (replacing `my-awesome-branch` with a suitable name) to create a branch

### Make the change

1. Follow the "Running locally" instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload
  1. Changes to markdown files in `content` will hot-reload
  1. If working with plugins, you may need to remove the `.cache` directory and restart the server

### Tips

- For highlighting specific section of a code use the following format **```js{8-11}**

### Test the change

1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.
1. Run `yarn check-all` from the project root. (This will run Prettier, ESLint, and Flow.)

### Push it

1. `git add -A && git commit -m "My awesome message"` (replacing `My awesome message` with a commit message, such as `Fixed a really awesome bug with UI`) to stage and commit your changes
1. `git push my-fork my-awesome-branch`
1. Go to the [repo](https://github.com/appbaseio/native-reactive-manual) and you should see recently pushed branches.
1. Follow GitHub's instructions.

## Troubleshooting

- `yarn reset` to clear the local cache
