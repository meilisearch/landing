<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/main/assets/logos/logo.svg" alt="MeiliSearch logo" width="200" height="200" />
</p>

<h1 align="center">Landing</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://slack.meilisearch.com">Slack</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://github.com/meilisearch/landing-v2/blob/main/LICENCE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
</p>
<br/>

<p align="center" style="font-weight:bold;" >MeiliSearch's Landing</p>

**Table of Contents**:

- [Setup](#setup)
- [Run](#run)
- [Build](#build)
  - [Generate build](#generate-build)
  - [Run your build](#run-your-build)
- [Storybook](#storybook)

<br/>

## Setup

```bash
yarn
```

or

```bash
npm install
```

## Run

```bash
yarn dev
```

or

```bash
npm run dev
```

Go to `http://localhost:3000/` and enjoy ! 🎉

## Build

### Generate build

You can generate a build of this project with the following command:

```bash
yarn build
```

or

```bash
npm run build
```

### Run your build

The above commands will generate an optimized version of the app, inside the `.next` folder.

You can then serve it with:

```bash
yarn start
```

or

```bash
npm run start
```

Or serve it with any web server of your choice.

Example:

```bash
serve .next
```

## Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively test components.

```bash
yarn storybook
```

or

```bash
npm run storybook
```

## Internationalization

To add a new language, add it inside the `locales` array of the `next-i18next.config.js` file.
Then, the easiest way to add the translations is to duplicate one of the existing folder inside `public/locales` and translate its content.
For example, you might want to duplicate the `en` folder and rename it in `fr`. Then, you can translate its content.
Don't forget to restart your server to see your changes !

## Data folder

The `data` folder contains every useful data that can change over time like the header menu (order, title, links, ...), the footer or even the social links. This type of content is put in the `data` directory instead of directly in the components and / or pages themselves, in order to find and edit them easily. Furthermore, they can this way be reused in Storybook for components and blocks previews.
If your data has text (and therefore might be translated), you will need to pass the path to the text in the corresponding translation file (see above).

For example if you want to add a link inside the header, you need to add the title link inside the `public/locales/{lang}/header.json` like this:

```js
  "myKey": "My new link name",
```

Then, you need to go to the `data/header.js` file and add the following:

```js
  {
    title: t('myKey'),
    href: 'my-link-url',
  },
```

This way, we centralise in one place (inside the `data` folder) the header information (links names and urls, order of the links, submenus, ...), but we keep the ability to translate it if needed at the same time .
