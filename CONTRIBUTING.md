# Contributing <!-- omit in toc -->

---

First of all, thank you for contributing to Meilisearch! The goal of this document is to provide everything you need to know in order to contribute to Meilisearch and its different integrations.

- [Hacktoberfest](#hacktoberfest-2022)
- [Assumptions](#assumptions)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Git Guidelines](#git-guidelines)

## Hacktoberfest 2022

It's [Hacktoberfest month](https://hacktoberfest.com)! 🥳

Thanks so much for participating with Meilisearch this year!

1. We will follow the quality standards set by the organizers of Hacktoberfest (see detail on their [website](https://hacktoberfest.digitalocean.com/resources/qualitystandards)). Our reviewers will not consider any PR that doesn’t match that standard.
2. PRs reviews will take place from Monday to Thursday, during usual working hours, CEST time. If you submit outside of these hours, there’s no need to panic; we will get around to your contribution.
3. There will be no issue assignment as we don’t want people to ask to be assigned specific issues and never return, discouraging the volunteer contributors from opening a PR to fix this issue. We take the liberty to choose the PR that best fixes the issue, so we encourage you to get to it as soon as possible and do your best!

You can check out the longer, more complete guideline documentation [here](https://github.com/meilisearch/.github/blob/main/Hacktoberfest_2022_contributors_guidelines.md).

## Assumptions

1. **You're familiar with [GitHub](https://github.com) and the [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)(PR) workflow.**
2. **You've read the Meilisearch [documentation](https://docs.meilisearch.com) and the [README](/README.md).**
3. **You know about the [Meilisearch community](https://docs.meilisearch.com/learn/what_is_meilisearch/contact.html). Please use this for help.**

## How to Contribute

1. Make sure that the contribution you want to make is explained or detailed in a GitHub issue! Find an [existing issue](https://github.com/meilisearch/landing/issues) or [open a new one](https://github.com/meilisearch/landing/issues/new).
2. Once done, [fork the landing repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) in your own GitHub account. Ask a maintainer if you want your issue to be checked before making a PR.
3. [Create a new Git branch](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).
4. Review the [Development Workflow](#workflow) section that describes the steps to maintain the repository.
5. Make the changes on your branch.
6. [Submit the branch as a PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) pointing to the `main` branch of the main landing repository. A maintainer should comment and/or review your Pull Request within a few days. Although depending on the circumstances, it may take longer.<br>
   We do not enforce a naming convention for the PRs, but **please use something descriptive of your changes**.

## Development Workflow

### Setup <!-- omit in toc -->

```bash
yarn
```

### Run

```bash
yarn dev
```

### Generate build

You can generate a build of this project with the following command:

```bash
yarn build
```

### Run your build

The above commands will generate an optimized version of the app, inside the `.next` folder.

You can then serve it with:

```bash
yarn start
```

Or serve it with any web server of your choice.

Example:

```bash
serve .next
```

### Tests and Linter <!-- omit in toc -->

Each PR should pass the linter to be accepted.

```bash
yarn lint
```


### Storybook <!-- omit in toc -->

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively test components.

This project's components and blocks are in Storybook. If you edit one of the components, please make sure that storybook is still up-to-date.

```bash
yarn storybook
```

### Data folder

The `data` folder contains every text and data that can change over time like the header menu (order, title, links, ...), the footer or even the social links. This type of content is put in the `data` directory instead of directly in the components and / or pages themselves, in order to find and edit them easily. Furthermore, they can this way be reused in Storybook for components and blocks previews.

## Git Guidelines

### Git Branches <!-- omit in toc -->

All changes must be made in a branch and submitted as PR.
We do not enforce any branch naming style, but please use something descriptive of your changes.

### Git Commits <!-- omit in toc -->

As minimal requirements, your commit message should:

- be capitalized
- not finish by a dot or any other punctuation character (!,?)
- start with a verb so that we can read your commit message this way: "This commit will ...", where "..." is the commit message.
  e.g.: "Fix the home page button" or "Add more tests for create_index method"

We don't follow any other convention, but if you want to use one, we recommend [this one](https://chris.beams.io/posts/git-commit/).

### GitHub Pull Requests <!-- omit in toc -->

Some notes on GitHub PRs:

- [Convert your PR as a draft](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request) if your changes are a work in progress: no one will review it until you pass your PR as ready for review.<br>
  The draft PR can be very useful if you want to show that you are working on something and make your work visible.
- The branch related to the PR must be **up-to-date with `main`** before merging. Fortunately, this project [integrates a bot](https://github.com/meilisearch/integration-guides/blob/main/guides/bors.md) to automatically enforce this requirement without the PR author having to do it manually.
- All PRs must be reviewed and approved by at least one maintainer.
- The PR title should be accurate and descriptive of the changes.

<hr>

Thank you again for reading this through, we can not wait to begin to work with you if you made your way through this contributing guide ❤️
