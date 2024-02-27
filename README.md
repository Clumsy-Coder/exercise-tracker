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
| [`main`](https://github.com/Clumsy-Coder/exercise-tracker/tree/main) | [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/clumsy-coder/exercise-tracker/.github%2Fworkflows%2Fbuild.yaml?branch=main&style=for-the-badge&label='main'%20branch%20build)](https://github.com/Clumsy-Coder/exercise-tracker/actions/workflows/build.yaml?query=branch%3Amain) |

---

## Getting Started

1. Clone repo

```bash
git clone https://github.com/Clumsy-Coder/exercise-tracker.git
```

```bash
git clone git@github.com:Clumsy-Coder/exercise-tracker.git
```

2. install npm packages

```bash
npm install
```

3. add ENVs. check `ENVs` section

4. build NextJS and run

```bash
npm run generateEnv && npm run build && npm run start
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
