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

| Branch                                                                             | Deployment status                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`development`](https://github.com/Clumsy-Coder/exercise-tracker/tree/development) | [![GitHub deployments](https://img.shields.io/github/deployments/clumsy-coder/exercise-tracker/Preview?style=for-the-badge&label='Preview'%20deployment)](https://vercel.live/link/exercise-tracker-git-development-clumsy-coder.vercel.app) |
| [`main`](https://github.com/Clumsy-Coder/exercise-tracker/tree/main)               | [![GitHub deployments](https://img.shields.io/github/deployments/clumsy-coder/exercise-tracker/Production?style=for-the-badge&label='Production'%20deployment)](https://exercise-tracker-one.vercel.app/)                                    |

<!--
obtained from

https://shields.io/badges/git-hub-actions-workflow-status
-->

| Branch                                                                             | Build status                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`development`](https://github.com/Clumsy-Coder/exercise-tracker/tree/development) | [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/clumsy-coder/exercise-tracker/.github%2Fworkflows%2Fbuild.yaml?branch=development&style=for-the-badge&label='development'%20branch%20build)](https://github.com/Clumsy-Coder/exercise-tracker/actions/workflows/build.yaml?query=branch%3Adevelopment) |
| [`main`](https://github.com/Clumsy-Coder/exercise-tracker/tree/main)               | [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/clumsy-coder/exercise-tracker/.github%2Fworkflows%2Fbuild.yaml?branch=main&style=for-the-badge&label='main'%20branch%20build)](https://github.com/Clumsy-Coder/exercise-tracker/actions/workflows/build.yaml?query=branch%3Amain)                      |

---

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
pnpm install
```

3. add ENVs. check [`ENVs` section](#adding-envs)

4. build NextJS and run

```bash
pnpm run generateEnv && pnpm run build && pnpm run start
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ENVs

This nextjs app uses some ENVs for it to work.

| ENV                                                     | required                                                      | example                                                                  | description                                                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [NEXT_PUBLIC_BUILD_VERSION](#next_public_build_version) | yes                                                           | 1.0.0                                                                    | App version                                                                                                      |
| [NEXT_PUBLIC_BUILD_ID](#next_public_build_id)           | yes                                                           | d4ce960                                                                  | latest git commit ID                                                                                             |
| [NEXT_PUBLIC_BUILD_TIME](#next_public_build_time)       | yes                                                           | 1709761645                                                               | date and time on when it was built. Uses unix time. run command `date +%s`                                       |
| [GOOGLE_CLIENT_ID](#google_client_id)                   | yes                                                           |                                                                          | Google OAuth2.0 client ID. [creating Google OAuth token](https://www.youtube.com/watch?v=XmmMQfpQh40&t=279s)     |
| [GOOGLE_CLIENT_SECRET](#google_client_secret)           | yes                                                           |                                                                          | Google OAuth2.0 client secret. [creating Google OAuth token](https://www.youtube.com/watch?v=XmmMQfpQh40&t=279s) |
| [NEXTAUTH_SECRET](#nextauth_secret)                     | yes                                                           |                                                                          | Next-auth secret for encrypting JWT                                                                              |
| [NEXTAUTH_URL](#nextauth_url)                           | yes (**no** if deploying on vercel, it will provided for you) |                                                                          | URL redirect callback                                                                                            |
| [DATABASE_URL](#database_url)                           | yes                                                           | `postgresql://username:password@localhost:5432/exerciseDb?schema=public` | PostgreSQL database connection string                                                                            |

### Adding ENVs

The ENVs are set in the file `generateEnvs.sh`. After setting them run the script `./generateEnvs.sh`

To add ENVs:

1. add the value of an ENV in `generateEnv.sh` file
2. uncomment line containing the ENV
3. run command

```bash
./generateEnvs.sh
```

Example:

<details>
<summary>Show example images</summary>

1. add the value of an ENV in `generateEnv.sh` file
   ![Adding env step 1](docs/images/adding-env-step-1.png)
2. uncomment line containing the ENV
   ![Adding env step 2](docs/images/adding-env-step-2.png)
3. run command

```bash
./generateEnvs.sh
```

</details>

---

### ENVs in vercel

If you're deploying the app on vercel, then there's no need to add the envs in `./generateEnvs.sh` file.

You can add the ENVs in vercel to manage

Go to

- Your Vercel project
- Go to `settings`
- Go to `Environment variables`
- Add the ENVs and make sure they're available in `preview` and `production` deployments

---

### ENV details

#### NEXT_PUBLIC_BUILD_VERSION

The version of the app.

Derived from running command

```bash
npm run -s generateVersion
```

#### NEXT_PUBLIC_BUILD_ID

The latest git commit ID of the app build

Derived from running command

```bash
npm run -s generateBuildId
```

#### NEXT_PUBLIC_BUILD_TIME

Build time of the app

Derived from command

```bash
date +%s
```

#### GOOGLE_CLIENT_ID

Google OAuth2.0 client ID credentials

check

- <https://next-auth.js.org/providers/google>
- <https://support.google.com/cloud/answer/6158849?hl=en>
- [creating Google OAuth2.0 credentials](https://www.youtube.com/watch?v=XmmMQfpQh40&t=279s)

##### adding authorized URIs for redirect

NOTE: make sure to set the `Authorized redirect URIs` to
`base-url/api/auth/callback/google`

Ex: `http://localhost:3000/api/auth/callback/google`

1. Google cloud console
2. `APIs & Services`
3. `Credentials`
4. Select the credential you want to use
5. Go to section `Authorized redirect URIs`
6. Add entry for next auth callback url

#### GOOGLE_CLIENT_SECRET

Google OAuth2.0 client secret

check

- <https://next-auth.js.org/providers/google>
- <https://support.google.com/cloud/answer/6158849?hl=en>
- [creating Google OAuth2.0 credentials](https://www.youtube.com/watch?v=XmmMQfpQh40&t=279s)

#### NEXTAUTH_SECRET

Next auth secret for encrypting JWT

Use command to generate random encryption key

```bash
openssl rand -base64 100
```

#### NEXTAUTH_URL

Next auth callback base URL

NOTE: not required if deploying on vercel (vercel provides this ENV automatically)

#### DATABASE_URL

PostgreSQL database connection string

Ex:

```
postgresql://username:password@localhost:5432/exerciseDb?schema=public
```

---
