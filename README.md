# Exercise-Tracker

View exercises and able to add entries to track them

<!--
obtained from

https://shields.io/badges/git-hub-release
https://forthebadge.com/#/search

-->
[![GitHub Release](https://img.shields.io/github/v/release/clumsy-coder/exercise-tracker?include_prereleases&style=for-the-badge)](https://github.com/Clumsy-Coder/exercise-tracker/releases)
[![forthebadge](https://forthebadge.com/images/badges/made-with-next-13.svg)](https://forthebadge.com)

<!--
obtained from

https://shields.io/badges/git-hub-deployments
-->
| Branch | Deployment status |
|---|---|
| [`development`](https://github.com/Clumsy-Coder/exercise-tracker/tree/development) | [![GitHub deployments](https://img.shields.io/github/deployments/clumsy-coder/exercise-tracker/Preview?style=for-the-badge&label='Preview'%20deployment)](https://vercel.live/link/exercise-tracker-git-development-clumsy-coder.vercel.app) |
| [`main`](https://github.com/Clumsy-Coder/exercise-tracker/tree/main) | [![GitHub deployments](https://img.shields.io/github/deployments/clumsy-coder/exercise-tracker/Production?style=for-the-badge&label='Production'%20deployment)](https://exercise-tracker-one.vercel.app/) |

<!--
obtained from

https://shields.io/badges/git-hub-actions-workflow-status
-->
| Branch | Build status |
|--------|--------------|
| [`development`](https://github.com/Clumsy-Coder/exercise-tracker/tree/development) | [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/clumsy-coder/exercise-tracker/.github%2Fworkflows%2Fbuild.yaml?branch=development&style=for-the-badge&label='development'%20branch%20build)](https://github.com/Clumsy-Coder/exercise-tracker/actions/workflows/build.yaml?query=branch%3Adevelopment) |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Screenshots

<details>
<summary>Show screenshots</summary>

### Home page

#### Desktop

![Home page desktop](docs/images/page-home-desktop.png)

#### Mobile

![Home page mobile](docs/images/page-home-mobile.png)

### Exercises page `/exercises`

#### Desktop

![Exercises page desktop](docs/images/page-exercises-desktop.png)

#### Mobile

##### Accordion Closed

![Exercises page mobile Accordion closed](docs/images/page-exercises-mobile-accordion-closed.png)

##### Accordion Opened

![Exercises page mobile Accordion opened](docs/images/page-exercises-mobile-accordion-opened.png)

### Exercise ID page `/exercises/[exerciseId]`

#### Desktop

![Exercises ID page desktop](docs/images/page-exerciseId-desktop.png)

#### Mobile

![Exercises Id  page mobile](docs/images/page-exerciseId-mobile.png)

</details>
