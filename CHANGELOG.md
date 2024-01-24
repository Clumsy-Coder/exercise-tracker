## [1.0.0-development.3](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.2...v1.0.0-development.3) (2024-1-24)


### :bug: Bug Fixes

* **workflows:** using ENV for `jq` when extracting container ID ([cb57bda](https://github.com/Clumsy-Coder/exercise-tracker/commit/cb57bda71eb059a8418eb2593256e236e60809d7))

## [1.0.0-development.2](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.1...v1.0.0-development.2) (2024-1-24)


### :sparkles: Features

* **components:** add navbar component ([4e6a9b5](https://github.com/Clumsy-Coder/exercise-tracker/commit/4e6a9b5ddc86591ea005d8c587040aa9ea6e1bd2)), closes [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17)


### :octopus: Miscellaneous Chores

* add site config ([9e4bd29](https://github.com/Clumsy-Coder/exercise-tracker/commit/9e4bd2933b4944fb5392b2617e3f8d6245b20302))
* **layout:** render navbar component ([1eabb06](https://github.com/Clumsy-Coder/exercise-tracker/commit/1eabb0638c5533943ac565db58018f81cb68b007)), closes [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17)
* **types:** add type for nav link ([8954dcc](https://github.com/Clumsy-Coder/exercise-tracker/commit/8954dcca7ebbcd8a6165a9355fdd6cf6f006cfe8))
* **types:** add type for site config ([392f627](https://github.com/Clumsy-Coder/exercise-tracker/commit/392f62707fcfb9d50a46e695d339eb4e3e14d54d)), closes [/github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts#L30-L39](https://github.com/Clumsy-Coder//github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts/issues/L30-L39)


### :package: Build System

* **typescript:** exclude `.next/` folder ([cab4327](https://github.com/Clumsy-Coder/exercise-tracker/commit/cab4327194c034d4a21ab0e2526429c2641ea655))


### :construction_worker: Continuous Integration

* **workflows:** dispatch `cleanup-docker-image` manually ([7504d92](https://github.com/Clumsy-Coder/exercise-tracker/commit/7504d92ccf2299d2b563293bf04228fccf02e462))
* **workflows:** push docker image with tagname `latest` on `main` branch ([addc1a1](https://github.com/Clumsy-Coder/exercise-tracker/commit/addc1a1ec873a67884acf9472827e556f85ba3fa))
* **workflows:** update CodeQL config ([f1e9417](https://github.com/Clumsy-Coder/exercise-tracker/commit/f1e94178c907322ae242c2c7147ffa6a38b61172))

## 1.0.0-development.1 (2024-1-23)


### :sparkles: Features

* **app:layout:** add ThemeProvider to NextJS app ([3ed2cd6](https://github.com/Clumsy-Coder/exercise-tracker/commit/3ed2cd6ccdea7dcf9e443e775be50e510ee9db5c)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **components:theme:** add component `darkmode-toggle` ([b7d3a6a](https://github.com/Clumsy-Coder/exercise-tracker/commit/b7d3a6a43c19768d5832b487bc0c51543335a6e0)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **components:theme:** add theme-provider component ([05423c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/05423c9b571c6d460f9200d1d7482314937cfed2)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **page:home:** add darkmode toggle ([c0f7414](https://github.com/Clumsy-Coder/exercise-tracker/commit/c0f74146dd9c2476143b6b55a5da9c1e1c0c545d)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)


### :lipstick: Styles

* format code ([4c05aa3](https://github.com/Clumsy-Coder/exercise-tracker/commit/4c05aa3e27a7ac7523267c79f4ce2d8fcca45801))
* format code ([ea2b4f9](https://github.com/Clumsy-Coder/exercise-tracker/commit/ea2b4f9faa8e416cfbfac8b318aaae08d67da4ce))


### :octopus: Miscellaneous Chores

* **gitignore:** add `.env*` to gitignore ([864efc6](https://github.com/Clumsy-Coder/exercise-tracker/commit/864efc6014af227f5c51066ef421900ccea4652d))
* **gitignore:** add `vercel.json` to gitignore ([4b27a15](https://github.com/Clumsy-Coder/exercise-tracker/commit/4b27a157bf9a4584ef1806917b5d90339ad26de7))
* **layout:** add vercel analytics ([4f68876](https://github.com/Clumsy-Coder/exercise-tracker/commit/4f68876e1f84208e7e0503681dbf57f83f0f1f7c))
* **page:home:** display ENVs ([3d288c0](https://github.com/Clumsy-Coder/exercise-tracker/commit/3d288c08b6a34a76e93b7ac06043e2e79d598976))
* project init ([4e22a1c](https://github.com/Clumsy-Coder/exercise-tracker/commit/4e22a1ce33a7dfed2837230258fd3a5f4935b626))
* **yamllint:** add yamllint config ([7ef521b](https://github.com/Clumsy-Coder/exercise-tracker/commit/7ef521b20a91ceec4a68bac6d1f39e3eed359d96))
* **yamllint:** ignore line length ([47eb6c1](https://github.com/Clumsy-Coder/exercise-tracker/commit/47eb6c10a4f7e4aaf76e7e41441538dd1643b7ec))


### :package: Build System

* add script for generating ENVs ([b71c9cc](https://github.com/Clumsy-Coder/exercise-tracker/commit/b71c9ccfc9be99579e76a4107a46d0fffa84917c))
* add shadcn-ui ([54000ca](https://github.com/Clumsy-Coder/exercise-tracker/commit/54000ca2791560cac8dcc2a6cab30e53f6ae5401))
* **deps:** bump @vercel/analytics from 1.1.1 to 1.1.2 ([7075026](https://github.com/Clumsy-Coder/exercise-tracker/commit/70750268cb64a2615ea9a635674afa1c7dbcefe9))
* **deps:** bump next from 14.0.4 to 14.1.0 ([3dd48b3](https://github.com/Clumsy-Coder/exercise-tracker/commit/3dd48b30ac4599ffd4dd2c0d3ca388e27b2adbdc))
* **deps:** bump tailwind-merge from 2.2.0 to 2.2.1 ([222d68a](https://github.com/Clumsy-Coder/exercise-tracker/commit/222d68ab88f808f2d896f8f872748f5c35113218))
* **devDep:** bump @types/node from 20.11.4 to 20.11.5 ([a574e28](https://github.com/Clumsy-Coder/exercise-tracker/commit/a574e2818c0c416fb42dd87d9f00caf838b8531e))
* **devDep:** bump @typescript-eslint/eslint-plugin ([774d56e](https://github.com/Clumsy-Coder/exercise-tracker/commit/774d56e55de3c5c3d39c345736c58ec72f46cb40))
* **devDep:** bump @typescript-eslint/parser from 6.19.0 to 6.19.1 ([46ea342](https://github.com/Clumsy-Coder/exercise-tracker/commit/46ea342a6274dd4a2245b95bcdb2baa1e1106ed4))
* **devDep:** bump autoprefixer from 10.4.16 to 10.4.17 ([c8d1779](https://github.com/Clumsy-Coder/exercise-tracker/commit/c8d17792b505f9c248d752f9979061515581d6da))
* **devDep:** bump eslint-config-next from 14.0.4 to 14.1.0 ([9c175ca](https://github.com/Clumsy-Coder/exercise-tracker/commit/9c175ca9b3df7e5571c0c3b26ecfbaca78164424))
* **devDep:** bump prettier from 3.2.2 to 3.2.4 ([e12fe83](https://github.com/Clumsy-Coder/exercise-tracker/commit/e12fe83d0c97d844dac162b84ef26cef3b7a12ff))
* **editorconfig:** add config file ([241bbdb](https://github.com/Clumsy-Coder/exercise-tracker/commit/241bbdb45ed60a5ff4ac4acfe3b95cce98de1470))
* **env:** change filename for env being generated ([451bd4b](https://github.com/Clumsy-Coder/exercise-tracker/commit/451bd4b3e98b0d12c14102e2d463eb2669e3e16e))
* **env:** check git status when setting ENV BUILD_VERSION ([c538ba8](https://github.com/Clumsy-Coder/exercise-tracker/commit/c538ba88f6093b5df7c312c31adccd0ea258374e))
* **env:** provide BUILD_VERSION depending on build environment ([573fc54](https://github.com/Clumsy-Coder/exercise-tracker/commit/573fc541eb3bf26f82bcf68952a9b83a4b8533ba))
* **eslint:** add `airbnb` eslint rules ([085eb32](https://github.com/Clumsy-Coder/exercise-tracker/commit/085eb32897edd65a95519041c53ea439da8d5b34))
* **eslint:** add `eslint-plugin-react` to eslint ([ecae22e](https://github.com/Clumsy-Coder/exercise-tracker/commit/ecae22e2a760fadaac6d0b2292a5ca466a986f51))
* **eslint:** add `eslint-plugin-tsdoc` to eslint ([b58a822](https://github.com/Clumsy-Coder/exercise-tracker/commit/b58a822f6824207c5430845455a620418c5206c2))
* **eslint:** add `parserOptions` ([0c5e3eb](https://github.com/Clumsy-Coder/exercise-tracker/commit/0c5e3ebd1bbfe8f468eb6e4b239d3fae6d655bff))
* **eslint:** add custom rules ([c4051df](https://github.com/Clumsy-Coder/exercise-tracker/commit/c4051df435bcfd2fb270f84d059e98021750fed6))
* **eslint:** add eslint typescript ([78417e2](https://github.com/Clumsy-Coder/exercise-tracker/commit/78417e2e68122a319100e901d771369d38d02c9a))
* **eslint:** add ignorefile ([8b6f455](https://github.com/Clumsy-Coder/exercise-tracker/commit/8b6f455ab81fe77cfbcfea44f43664cbc7d09665))
* **eslint:** disable eslint rules ([750f6e6](https://github.com/Clumsy-Coder/exercise-tracker/commit/750f6e60f9d316ce87f2379a8d56289338596075))
* **eslint:** extend `eslint-config-prettier` rules ([9b526db](https://github.com/Clumsy-Coder/exercise-tracker/commit/9b526db1c5b80a96d37a2d8ef61e4e884aef4f90))
* **eslint:** extend `eslint-plugin-prettier` rules ([86cc9d6](https://github.com/Clumsy-Coder/exercise-tracker/commit/86cc9d64bfcd51c15fc658bfe79c7b0eeadee6fd))
* **eslint:** mark `prettier/prettier` as eslint warnings ([a85fef9](https://github.com/Clumsy-Coder/exercise-tracker/commit/a85fef9de57138aa05b1882a7ee4a2e4320d2097))
* **nextjs:** set build output to `standalone` ([98b386b](https://github.com/Clumsy-Coder/exercise-tracker/commit/98b386b0ff7af7e7dc8be295d4ac49620026b0ed))
* **npm:** add npm script for prettier ([4b2447a](https://github.com/Clumsy-Coder/exercise-tracker/commit/4b2447a1b300af72de9d739bd9f43ed9f3b59f6f))
* **npm:** add npm scripts ([e7d47ef](https://github.com/Clumsy-Coder/exercise-tracker/commit/e7d47efbfa7399dd354fd9df47d217021dfe1b48))
* **npm:** add package "lucide-react" ([0d4bc3e](https://github.com/Clumsy-Coder/exercise-tracker/commit/0d4bc3e4f6666a2d9cd09c5a6625c3fb66e7f177))
* **npm:** add package `@vercel/analytics` ([e1f0880](https://github.com/Clumsy-Coder/exercise-tracker/commit/e1f08808d03068b778c9c7bfdffb46d0e49ea680))
* **npm:** add package `eslint-config-prettier` ([5a5b65f](https://github.com/Clumsy-Coder/exercise-tracker/commit/5a5b65fd3941cb59b910491b542165c116d1e413))
* **npm:** add package `eslint-plugin-prettier` ([88a366b](https://github.com/Clumsy-Coder/exercise-tracker/commit/88a366b79564ce3ace2bdd58133b607d7feaac3a))
* **npm:** add package `eslint-plugin-tsdoc` ([444e38a](https://github.com/Clumsy-Coder/exercise-tracker/commit/444e38a8faf99b5221e28c3c79439b8d34df0e92))
* **npm:** add package `next-themes` ([a678c5f](https://github.com/Clumsy-Coder/exercise-tracker/commit/a678c5f237bfe0fa8bcf55ff4b2840d1ab55ef6a)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **npm:** add package `prettier-plugin-tailwindcss` ([3a670a3](https://github.com/Clumsy-Coder/exercise-tracker/commit/3a670a33eedcf99d4de7777abfc923b5a4729989))
* **npm:** add package `prettier` ([a8511fd](https://github.com/Clumsy-Coder/exercise-tracker/commit/a8511fdad2cd3dbd3560dddceccc3370ee233298))
* **npm:** add packages for airbnb eslint ([e9fdd9e](https://github.com/Clumsy-Coder/exercise-tracker/commit/e9fdd9e71a035aa0a56b03f578b7def0ad9821b3))
* **npm:** add packages for semantic-release ([8282249](https://github.com/Clumsy-Coder/exercise-tracker/commit/8282249e224cb4bd582233bb811d40d719ad4bd5))
* **npm:** add packages for typescript-eslint ([0508bd9](https://github.com/Clumsy-Coder/exercise-tracker/commit/0508bd96a1cd77c5d0125b673c7fc5a58de6d740))
* **prettier:** add config files ([8604f02](https://github.com/Clumsy-Coder/exercise-tracker/commit/8604f020ad59397c4cf20f00eb3ab09eec00f94e))
* **prettier:** add plugin `prettier-plugin-tailwindcss` ([935518e](https://github.com/Clumsy-Coder/exercise-tracker/commit/935518e34b9cef6a4872bc76751eb19d29116f9b))
* **shadcn:** add component `Button` ([406a111](https://github.com/Clumsy-Coder/exercise-tracker/commit/406a111d6259009080458578c14cf7f84d35892d))
* **shadcn:** add component `Dropdown-menu` ([23c02ce](https://github.com/Clumsy-Coder/exercise-tracker/commit/23c02cef29a75b694b6998acdafa1fcdbc76b472))
* **typescript:** add `next.config.js` to `includes` ([425af37](https://github.com/Clumsy-Coder/exercise-tracker/commit/425af37164e576345b029bea2c6f4316ba2f1e6c))


### :construction_worker: Continuous Integration

* **action:dependabot:** add dependabot automerge workflow ([5031aab](https://github.com/Clumsy-Coder/exercise-tracker/commit/5031aab0a283bf50787fc03c7696a7b447843df5))
* **dependabot:** add config file ([b915457](https://github.com/Clumsy-Coder/exercise-tracker/commit/b9154578113738504cf995579649a38d082e8d88))
* **docker:** add `dockerfile` ([024d9f8](https://github.com/Clumsy-Coder/exercise-tracker/commit/024d9f88f6f584ee8058c51a135c5b45d6ebbd62))
* **docker:** add `dockerignore` file ([bd73ab3](https://github.com/Clumsy-Coder/exercise-tracker/commit/bd73ab39baa860685f2eaff999969cf006e9f702))
* **github-action:** bump actions/cache from 3 to 4 ([a1a9fec](https://github.com/Clumsy-Coder/exercise-tracker/commit/a1a9fecc51b0997133337c13d95de214219c6ac1))
* **semantic-release:** add config file ([1926503](https://github.com/Clumsy-Coder/exercise-tracker/commit/1926503d5fd78f7acce848a4faaea6e15d60e4a1))
* **template:** add `bug report` template ([59632d4](https://github.com/Clumsy-Coder/exercise-tracker/commit/59632d478a0df88872d2e5191b9ac3b963197f66))
* **template:** add `feature request` template ([98d168b](https://github.com/Clumsy-Coder/exercise-tracker/commit/98d168bbb4c09f55ec3e7b06b77fba2f2168b54b))
* **template:** add `pull request` template ([8a4542f](https://github.com/Clumsy-Coder/exercise-tracker/commit/8a4542f70678b25afe76267570e3e517fa1ab577))
* **workflows:** add github action workflow `reusable-docker-build` ([790ecff](https://github.com/Clumsy-Coder/exercise-tracker/commit/790ecfff9679a478ff132ad683486c159e77b10f))
* **workflows:** add job `docker-build-image` for workflow `build.yaml` ([f68f8bd](https://github.com/Clumsy-Coder/exercise-tracker/commit/f68f8bdcce7102f9538eff594d6ecc0f7650a548))
* **workflows:** add job `install` for workflow `build.yaml` ([0585590](https://github.com/Clumsy-Coder/exercise-tracker/commit/058559021a84172121a6ae8378ef822d4bda86d7))
* **workflows:** add job `lint` for workflow `build.yaml` ([3d315a3](https://github.com/Clumsy-Coder/exercise-tracker/commit/3d315a3c00a51182923b5238034ab848816a886e))
* **workflows:** add job `matrix-results` for workflow `build.yaml` ([dd9527f](https://github.com/Clumsy-Coder/exercise-tracker/commit/dd9527f646b65914a99ba9e9c0e12ee5c418f471))
* **workflows:** add job `prepare-docker-build` for workflow `build.yaml` ([74b7b81](https://github.com/Clumsy-Coder/exercise-tracker/commit/74b7b8162c9eb6a387bbe20cef73e0743b2e0be3))
* **workflows:** add job `semantic-release` for workflow `build.yaml` ([e0917cf](https://github.com/Clumsy-Coder/exercise-tracker/commit/e0917cf5b87240c083701a6badfc498b9c9d28fc))
* **workflows:** add workflow `cleanup-docker-image` ([265b1f0](https://github.com/Clumsy-Coder/exercise-tracker/commit/265b1f00eba9e3149d061c57c0bf03c9e01f37b3))
* **workflows:** add workflow `codeql` ([d7b4a3e](https://github.com/Clumsy-Coder/exercise-tracker/commit/d7b4a3eb97a809a8d347fd021b4e3f8d23463b0d))
* **workflows:** ignore error when removing untagged docker images ([c8ec8b9](https://github.com/Clumsy-Coder/exercise-tracker/commit/c8ec8b97371dfa28bdf3441f3dc074b10035fe3a))
* **workflows:** print the all docker image versions when cleaning up docker image ([b188985](https://github.com/Clumsy-Coder/exercise-tracker/commit/b18898535d6f8f8cd232c09f3d03118fb0de63df))
* **workflows:** store github_token in an env ([3882f29](https://github.com/Clumsy-Coder/exercise-tracker/commit/3882f29d58d8c667ec743b6555cb54feeb35314f))
* **workflows:** use `SEMANTIC_RELEASE_TOKEN` for job `semantic-release` ([ec98401](https://github.com/Clumsy-Coder/exercise-tracker/commit/ec984017de9b7aef11dbe3059b9aa59fbe7c6d3a))
* **workflows:** use bash style env for `HEAD_REF` ([1892572](https://github.com/Clumsy-Coder/exercise-tracker/commit/18925729a81eed5c9b399190a828d0b0fabe98ed))
* **workflows:** use bash style env for `VERSION_ID` ([ec057d1](https://github.com/Clumsy-Coder/exercise-tracker/commit/ec057d1b5d64172db504d1b72723cbe25bb9fce3))
* **workflows:** use bash style env for PACKAGE_NAME ([f4dd473](https://github.com/Clumsy-Coder/exercise-tracker/commit/f4dd4730677ab303c8fcce0cc0a2515e9c466476))
