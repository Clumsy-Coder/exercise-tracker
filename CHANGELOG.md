## [1.1.0-development.1](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0...v1.1.0-development.1) (2024-2-28)


### :sparkles: Features

* **api:auth:** add api endpoint to authenticate a user using `Google` ([3788593](https://github.com/Clumsy-Coder/exercise-tracker/commit/3788593f598a3816fe3699f2c4b9b338befee0c9)), closes [#99](https://github.com/Clumsy-Coder/exercise-tracker/issues/99)
* **components:userAuth:** add `UserAuthDropdown` component ([82894d1](https://github.com/Clumsy-Coder/exercise-tracker/commit/82894d175634547b099ddade0951481de3764bb7)), closes [#99](https://github.com/Clumsy-Coder/exercise-tracker/issues/99)
* **components:userAuth:** display `user's name` after logging in ([3267b3c](https://github.com/Clumsy-Coder/exercise-tracker/commit/3267b3c94591317845a699d418e7a6da44eecba6))
* **layout:home:** render `UserAuthDropdown` component on the navbar ([d2ba105](https://github.com/Clumsy-Coder/exercise-tracker/commit/d2ba105312233c97f99606903e91555bb8def9dc)), closes [#99](https://github.com/Clumsy-Coder/exercise-tracker/issues/99)


### :books: Documentation

* **readme:** add build instructions ([c483f89](https://github.com/Clumsy-Coder/exercise-tracker/commit/c483f89d0d9320a35095ef65a8ed31f6a6fa0eb1))
* **readme:** add markdown badges ([41e416d](https://github.com/Clumsy-Coder/exercise-tracker/commit/41e416d4acbb6112a6a00fa778eac604e84db93a))
* **types:** add NextAuth types for ENV ([db174e0](https://github.com/Clumsy-Coder/exercise-tracker/commit/db174e00abb094f7ba70549d4293e64b51609e2b))


### :octopus: Miscellaneous Chores

* **components:** export next-auth `SessionProvider` as a client component ([679c12b](https://github.com/Clumsy-Coder/exercise-tracker/commit/679c12b636d6dfd2512a243977f00ce1396d1307))
* **git:** add regex to handle multiple keywords to ignore in `generateEnvs.sh` ([8ab3921](https://github.com/Clumsy-Coder/exercise-tracker/commit/8ab3921f8c06fa7fc4859a1aff4443b88500e98c))
* **layout:home:** use `SessionProvider` from `next-auth` ([3905358](https://github.com/Clumsy-Coder/exercise-tracker/commit/3905358c67f509ccd953aa1c117012c8b98799ef))
* **markdownlint:** add `markdownlint` config ([40affc7](https://github.com/Clumsy-Coder/exercise-tracker/commit/40affc7b31110ec9d5158182422f5d2641bc15f0))


### :package: Build System

* **deps-dev:** bump undici from 5.28.2 to 5.28.3 ([5d489ab](https://github.com/Clumsy-Coder/exercise-tracker/commit/5d489ab13cf993ae0b243ce9cd6f3cfefd97599d))
* **deps:** bump lucide-react from 0.340.0 to 0.341.0 ([21eee27](https://github.com/Clumsy-Coder/exercise-tracker/commit/21eee27d9ca1b514fc772f58d1e7cc1853c56264))
* **devDep:** bump @types/node from 20.11.20 to 20.11.21 ([dfbea1c](https://github.com/Clumsy-Coder/exercise-tracker/commit/dfbea1c8d552bfadfcc5861fcc3b869cd92e9ebb))
* **devDep:** bump @types/react from 18.2.58 to 18.2.59 ([db8ee3d](https://github.com/Clumsy-Coder/exercise-tracker/commit/db8ee3d57c8f0885f71cc7f952ed41d09cbd04dd))
* **devDep:** bump @types/react from 18.2.59 to 18.2.60 ([63bf1b6](https://github.com/Clumsy-Coder/exercise-tracker/commit/63bf1b6f9a42207229b7fd6292bd22c08c4c1ec5))
* **npm:** add package `next-auth` ([7f535c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/7f535c9f32d7d792b5c823bc4ee033e30e235c5e))


### :construction_worker: Continuous Integration

* **workflows:** add workflow `addDeploymentAlias` ([b2e7198](https://github.com/Clumsy-Coder/exercise-tracker/commit/b2e71989ff2caf826fd580013c3edeae20c0a957)), closes [/github.com/orgs/vercel/discussions/132#discussioncomment-4270119](https://github.com/Clumsy-Coder//github.com/orgs/vercel/discussions/132/issues/discussioncomment-4270119)

## 1.0.0 (2024-2-26)


### :sparkles: Features

* **actions:** add server action for fetching a single exercise using `exerciseId` ([054de4d](https://github.com/Clumsy-Coder/exercise-tracker/commit/054de4d351238e64c42492e8aa37fc878133bde1))
* **actions:** add server action for fetching all exercises ([3fad3b4](https://github.com/Clumsy-Coder/exercise-tracker/commit/3fad3b45ab186cefc89f96ac044dcd531399e8a6)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **actions:** add server action for fetching exercise `body part` list ([04167b5](https://github.com/Clumsy-Coder/exercise-tracker/commit/04167b50d160fca773f3b26c6467111c3147dc36)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **actions:** add server action for fetching exercise `equipment list` ([687cf53](https://github.com/Clumsy-Coder/exercise-tracker/commit/687cf53ae9828ab1ff6dbee1f47fccc7a7b16cb1)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **actions:** add server action for fetching exercise `target list` ([c040abb](https://github.com/Clumsy-Coder/exercise-tracker/commit/c040abbd3254c993960577e7c26867ab68f43a72)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **actions:** add server action for fetching exercises by body part ([4e4f789](https://github.com/Clumsy-Coder/exercise-tracker/commit/4e4f7899c5b8a30197e430646c4cf0fc22577ae0)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **actions:** add server action for fetching exercises by equipment ([027d753](https://github.com/Clumsy-Coder/exercise-tracker/commit/027d753c196c5f3256b30c37348ca0d88ea760d8))
* **actions:** add server action for fetching exercises by target ([43177b2](https://github.com/Clumsy-Coder/exercise-tracker/commit/43177b2a7a95e2590a80948d613fd388efbe61e8)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* **api:exercises:bodyParts:** add endpoint for fetching `body part list` ([e5e1a9a](https://github.com/Clumsy-Coder/exercise-tracker/commit/e5e1a9ad3a9823f42064d70e32a48c2d1f2f9b88)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **api:exercises:bodyParts:** add endpoint for fetching exercises by bodyPart ([a424ff1](https://github.com/Clumsy-Coder/exercise-tracker/commit/a424ff100d5b9a6e0ce5ec918abf34f05b83e729)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **api:exercises:equipments:** add endpoint for fetching a single exercise by equipment ([213fe96](https://github.com/Clumsy-Coder/exercise-tracker/commit/213fe9696cea5ea729e8e892c007f522e5176711)), closes [#66](https://github.com/Clumsy-Coder/exercise-tracker/issues/66)
* **api:exercises:targets:** add endpoint for fetching exercises by target ([de5b268](https://github.com/Clumsy-Coder/exercise-tracker/commit/de5b268e8d7d1325abfb2c4abb385817be2da47c)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* **api:** add endpoint for fetching `equipment list` ([8195a17](https://github.com/Clumsy-Coder/exercise-tracker/commit/8195a17895affe71474382d71bbc5f0bb315ce19))
* **api:** add endpoint for fetching `target list` ([67aec4a](https://github.com/Clumsy-Coder/exercise-tracker/commit/67aec4a448f29f92519e324a794c7fdd5326bbef))
* **api:** add endpoint for fetching a single exercise using `exerciseId` ([42cd880](https://github.com/Clumsy-Coder/exercise-tracker/commit/42cd880cc60b585b67e19cc406a718042ef8b921)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **api:** add endpoint for fetching all exercises ([553d78c](https://github.com/Clumsy-Coder/exercise-tracker/commit/553d78cd300041e9ca5ca22981a09f5fada27251))
* **app:layout:** add ThemeProvider to NextJS app ([42b37b5](https://github.com/Clumsy-Coder/exercise-tracker/commit/42b37b55a2055771ef847c7b49b537bdb75153f7)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **components:exerciseGroup:** add ability to search exercises ([e13d98f](https://github.com/Clumsy-Coder/exercise-tracker/commit/e13d98f0f2377a4ef0c90e91ac2e807604a41cf7))
* **components:exercisesGroup:** add basic pagination ([83dbd1f](https://github.com/Clumsy-Coder/exercise-tracker/commit/83dbd1f57765590b640b18e07d03360ed79c54aa))
* **components:exercisesGroup:** add clear button for search input ([7b2be56](https://github.com/Clumsy-Coder/exercise-tracker/commit/7b2be562c8fbaa5ea855e659a41a6d814f384eed))
* **components:navbar:** add Drawer for smaller screens ([42ebd27](https://github.com/Clumsy-Coder/exercise-tracker/commit/42ebd2749e75db2519d13750265c5fa72bc81910)), closes [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19)
* **components:navbar:** hide nav links in smaller screen ([2f752b9](https://github.com/Clumsy-Coder/exercise-tracker/commit/2f752b9ef48200b38859c4a53d939ab85af95ee5)), closes [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19)
* **components:theme:** add component `darkmode-toggle` ([ccf24a8](https://github.com/Clumsy-Coder/exercise-tracker/commit/ccf24a8489635b530bd0ca5b5dbed0299c2ad259)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **components:theme:** add theme-provider component ([c0597ae](https://github.com/Clumsy-Coder/exercise-tracker/commit/c0597ae6cd5a7c646aad51db0a39fabfd82e748c)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **components:** add `Footer` component ([b90cdf3](https://github.com/Clumsy-Coder/exercise-tracker/commit/b90cdf3b77700143574d12ec22f08a9b3e5517d1))
* **components:** add component `ExerciseCard` ([12bb5ad](https://github.com/Clumsy-Coder/exercise-tracker/commit/12bb5ad35ffe4b20f1f4316d5bced541a13f4e97))
* **components:** add component `ExercisesGroup` ([686ce16](https://github.com/Clumsy-Coder/exercise-tracker/commit/686ce16bcee2494f6b473de2ad3dacc6fd959eea))
* **components:** add navbar component ([17756b1](https://github.com/Clumsy-Coder/exercise-tracker/commit/17756b187276ed96c76666b21532ef8b79dc3a4f)), closes [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17)
* **layout:exercises:** add layout for `/exercises` page ([461730f](https://github.com/Clumsy-Coder/exercise-tracker/commit/461730f1195485eda44d81de8d78993a28d14178))
* **page:exerciseId:** add error handling for invalid `exerciseId` ([74561c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/74561c94f7e486b0f2356004718686b11306154e)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exerciseId:** add page for `/exercises/[exerciseId]` ([45cd5c3](https://github.com/Clumsy-Coder/exercise-tracker/commit/45cd5c3e00895290479467caac6ede59ab625dc1)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exerciseId:** display gif in a model when clicking on gif ([108144b](https://github.com/Clumsy-Coder/exercise-tracker/commit/108144b1efb17528f5229e519fa79e3e28e4a6a8)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exercises:bodyParts:** add page for `/exercises/body-parts/[bodyPart]` ([8c8c65e](https://github.com/Clumsy-Coder/exercise-tracker/commit/8c8c65ea00248e190555afa3087c4d5123c2bc3c)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **page:exercises:equipments:** add page for `/exercises/equipments/[equipment]` ([ca757a5](https://github.com/Clumsy-Coder/exercise-tracker/commit/ca757a56ac133c7ba3fe4a5bab863d3621b80a2c))
* **page:exercises:targets:** add page for `/exercises/targets/[target]` ([8026c99](https://github.com/Clumsy-Coder/exercise-tracker/commit/8026c997287524343cbdba9864fd54c98fb2af13)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* **page:exercises:** add component to render exercises by links ([ed72733](https://github.com/Clumsy-Coder/exercise-tracker/commit/ed72733089fba75c4e458970cba4740727064023))
* **page:exercises:** display exercise `body part` list ([4b62ba7](https://github.com/Clumsy-Coder/exercise-tracker/commit/4b62ba733003fb4591c052371207ea8082ddf4de)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **page:exercises:** display exercise equipment list ([dcc2728](https://github.com/Clumsy-Coder/exercise-tracker/commit/dcc272883d86f8eec49372dfc4894d5658352614)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display exercise name and id ([9f649c1](https://github.com/Clumsy-Coder/exercise-tracker/commit/9f649c122f98ab7e1a7b5e0a130d77f85d557a03)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display exercise target list ([92b9096](https://github.com/Clumsy-Coder/exercise-tracker/commit/92b90965658482602334d920a8400ca885a01d22)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display links for exercise by target and equipment on larger screens ([93d9649](https://github.com/Clumsy-Coder/exercise-tracker/commit/93d96495d197b979d609d3a538c1e412b6a71a0c))
* **page:exercises:** display links for exercises by target and equipment using Accordion on smaller screens ([7d8ca92](https://github.com/Clumsy-Coder/exercise-tracker/commit/7d8ca92be4d84aae6bcd9a3dd0f1e84334531e34))
* **page:exercises:** render `ExercisesGroups` component ([4cc99d9](https://github.com/Clumsy-Coder/exercise-tracker/commit/4cc99d9947db5092a5fed5122520081b9a05f6df)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:home:** add content for home page ([ba187e3](https://github.com/Clumsy-Coder/exercise-tracker/commit/ba187e33e368a3aa850b5c2f54cd5d5da8812c85)), closes [#90](https://github.com/Clumsy-Coder/exercise-tracker/issues/90)
* **page:home:** add darkmode toggle ([ffda14d](https://github.com/Clumsy-Coder/exercise-tracker/commit/ffda14dc50a3add07fb5d1f0d0c8e017cab1a123)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)


### :bug: Bug Fixes

* **workflows:** using ENV for `jq` when extracting container ID ([50e53a3](https://github.com/Clumsy-Coder/exercise-tracker/commit/50e53a3d44100f068b3ba322347e7c46e700920d))


### :books: Documentation

* **components:exercisesGroup:** add docs for `ExercisesGroup` component ([138237b](https://github.com/Clumsy-Coder/exercise-tracker/commit/138237b58ad180f5774f391a6cb36e8457471b18))
* **docs:images:** add screenshots for `Exercise ID` page ([c227748](https://github.com/Clumsy-Coder/exercise-tracker/commit/c227748b03c9d4eac7662347786bcfeb451eb83c))
* **docs:images:** add screenshots for `Exercises` page ([9dd380c](https://github.com/Clumsy-Coder/exercise-tracker/commit/9dd380c74d3c882ce41cbfc191e90eddad98627f))
* **docs:images:** add screenshots for `Home` page ([5798277](https://github.com/Clumsy-Coder/exercise-tracker/commit/57982773aa5b7192ef28a82627f363f4922b72aa))
* **readme:** display screenshots of `Exercise Id` page ([ce9fce1](https://github.com/Clumsy-Coder/exercise-tracker/commit/ce9fce108b6a52a58f0feb67d20503493da70dcc))
* **readme:** display screenshots of `Exercises` page ([b36d8fa](https://github.com/Clumsy-Coder/exercise-tracker/commit/b36d8fa80fc77c4c483847cd0d1417afb432637e))
* **readme:** display screenshots of `Home` page ([41c48f2](https://github.com/Clumsy-Coder/exercise-tracker/commit/41c48f2ff56c0c75f0114fb765439bf85eb60de4))


### :lipstick: Styles

* **components:exerciseCard:** add a gap between exercise name and navigate button ([37c3f6d](https://github.com/Clumsy-Coder/exercise-tracker/commit/37c3f6d5f267ea35676d6babaf0e1d65f311a620))
* **components:exerciseCard:** add ability to extend `ExerciseCard` component ([d257bda](https://github.com/Clumsy-Coder/exercise-tracker/commit/d257bda94c203eb96ca77e82143b65f6ff39039a))
* **components:exerciseCard:** remove `ring` tailwindcss class on hover ([50675b3](https://github.com/Clumsy-Coder/exercise-tracker/commit/50675b3169065f7690b0e93caef39685732db55a))
* **components:exercisesGroups:** remove width style for search input ([24f46a5](https://github.com/Clumsy-Coder/exercise-tracker/commit/24f46a57ad1e7e874ba7780b9324785a1c110349))
* **components:navbar:** format code ([6b4486a](https://github.com/Clumsy-Coder/exercise-tracker/commit/6b4486a1f69b2ead396dc9a386786de37a51200c))
* **css:** add class `input-with-clear-button` ([e96cc59](https://github.com/Clumsy-Coder/exercise-tracker/commit/e96cc59b28b5e216f381d763b6e61bb14c991c6c))
* **css:** add custom tailwind classes ([708f2ea](https://github.com/Clumsy-Coder/exercise-tracker/commit/708f2eaf735001b3fcc419cbe347ea194b9defe1))
* format code ([4c05aa3](https://github.com/Clumsy-Coder/exercise-tracker/commit/4c05aa3e27a7ac7523267c79f4ce2d8fcca45801))
* format code ([ea2b4f9](https://github.com/Clumsy-Coder/exercise-tracker/commit/ea2b4f9faa8e416cfbfac8b318aaae08d67da4ce))
* **layout:** reorder imports ([738e8a5](https://github.com/Clumsy-Coder/exercise-tracker/commit/738e8a520e6105b7c7d8123ac7c98e13212bd97b))


### :octopus: Miscellaneous Chores

* add site config ([5540f8b](https://github.com/Clumsy-Coder/exercise-tracker/commit/5540f8b4d8e28b24f541dae19e52c50d05572d1e))
* **api:url:** add function to get `equipment list` url ([acc7c7c](https://github.com/Clumsy-Coder/exercise-tracker/commit/acc7c7cb4290c1944ae888bcc752802449b688a5))
* **api:url:** add function to get `single exercise` url ([f44b451](https://github.com/Clumsy-Coder/exercise-tracker/commit/f44b4511656a805529bc38d17ac9fa94368942c1))
* **api:url:** add function to get `target list` url ([ee1f15e](https://github.com/Clumsy-Coder/exercise-tracker/commit/ee1f15e0bee67856587348a07da2ede52931ea4f))
* **api:url:** add function to get all exercises ([7e44cbf](https://github.com/Clumsy-Coder/exercise-tracker/commit/7e44cbf9a5625138cdfd804d12953b85a643b561))
* **components:error:** add Error component ([95ee676](https://github.com/Clumsy-Coder/exercise-tracker/commit/95ee6768fd1f4913bc319bfcd23aa08e4bb9a220))
* **components:exerciseCard:** remove unused code ([10cf536](https://github.com/Clumsy-Coder/exercise-tracker/commit/10cf53673582be0021637414e38d5f94a10e597e))
* **components:** add `ReactQueryClientProvider` component ([553a016](https://github.com/Clumsy-Coder/exercise-tracker/commit/553a016ed80b234c5df0feb334abb0e9b44dac30))
* **data:** add all `body part` types ([cce0e4f](https://github.com/Clumsy-Coder/exercise-tracker/commit/cce0e4f4329f41d4ba225b2c1acdbdb7c947380c))
* **data:** add all `equipment` types ([19d4104](https://github.com/Clumsy-Coder/exercise-tracker/commit/19d410451ce3e1ea416076308167b108a4ec9475))
* **data:** add all `target` types ([8b5bbf2](https://github.com/Clumsy-Coder/exercise-tracker/commit/8b5bbf2205618f340b5822fa64fdbdf023c4a52c))
* **data:** add all exercises data ([22676a7](https://github.com/Clumsy-Coder/exercise-tracker/commit/22676a77428daef9bc31108156d8af18092e21e0))
* **git:** add git attribute to ignore exerciseDB from being committed ([da701d4](https://github.com/Clumsy-Coder/exercise-tracker/commit/da701d444e916f1021025abc443afaf814bd41d6))
* **gitignore:** add `.env*` to gitignore ([41b0f3a](https://github.com/Clumsy-Coder/exercise-tracker/commit/41b0f3ad29d310e958dca0a04ef3a1a81a69282c))
* **gitignore:** add `vercel.json` to gitignore ([50f6aa3](https://github.com/Clumsy-Coder/exercise-tracker/commit/50f6aa3d0b3f89f7a9e9b0e302d84a772bdd9986))
* **hooks:** add react-query hook to fetch a single exercise using `exerciseId` ([83a1ec2](https://github.com/Clumsy-Coder/exercise-tracker/commit/83a1ec2c0e5d803b8ca57a897f90d371460dd05e))
* **hooks:** add react-query hook to fetch all exercises ([a09c605](https://github.com/Clumsy-Coder/exercise-tracker/commit/a09c605252a0e653b9b3acc9be7ca78490dd3c72))
* **hooks:** add react-query hook to fetch exercise `target list` ([3ceb95c](https://github.com/Clumsy-Coder/exercise-tracker/commit/3ceb95c9fb733eee89f2ace5a1090135fc5abe36))
* **hooks:** add react-query hook to fetch exercise body part list ([5544e44](https://github.com/Clumsy-Coder/exercise-tracker/commit/5544e440b99e4182a2dd76bab6d3d98a7e71381d)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **hooks:** add react-query hook to fetch exercise equipment list ([228ba1a](https://github.com/Clumsy-Coder/exercise-tracker/commit/228ba1a62c85ccea82746801d857aa45c2d2ba97))
* **hooks:** add react-query hook to fetch exercises by body part ([91f6c4e](https://github.com/Clumsy-Coder/exercise-tracker/commit/91f6c4e229bea71ab20be31d41866dff5aeaa52e))
* **hooks:** add react-query hook to fetch exercises by equipment ([c77857c](https://github.com/Clumsy-Coder/exercise-tracker/commit/c77857ccabe1ba4cd4d5f9934dfa9206b18d3417))
* **hooks:** add react-query hook to fetch exercises by target ([8795954](https://github.com/Clumsy-Coder/exercise-tracker/commit/87959547b8abcc979ecf8665170e67d09606ffae))
* **layout:exerciseId:** add layout for `/exercises/[exerciseId]` page ([a462994](https://github.com/Clumsy-Coder/exercise-tracker/commit/a462994d85d4e71b2b17fa5b6e8402ec5ac42213))
* **layout:exercises:bodyParts:** add layout for `/exercises/body-parts/[bodyPart]` page ([2e011ee](https://github.com/Clumsy-Coder/exercise-tracker/commit/2e011ee8903f533e9f606718cf76aca3a282b9ff))
* **layout:exercises:equipments:** add layout for `/exercises/equipments/[equipment]` page ([1e19047](https://github.com/Clumsy-Coder/exercise-tracker/commit/1e19047325945a9d7dd50291f3d04ca04b958040))
* **layout:exercises:exerciseId:** add metadata for `/exercises/[exerciseId]` page ([a9b7157](https://github.com/Clumsy-Coder/exercise-tracker/commit/a9b715723b1c8c289064b8c4b96b57e8138e5b25))
* **layout:exercises:targets:** add layout for `/exercises/targets/[target]` page ([aa29bd9](https://github.com/Clumsy-Coder/exercise-tracker/commit/aa29bd909acd884d4851f9fcfbce69f5393b5972))
* **layout:exercises:** add metadata for `/exercises` page ([5f3b660](https://github.com/Clumsy-Coder/exercise-tracker/commit/5f3b660443ceb9bd0cf30c74f30a4095e36f566c))
* **layout:exercises:** prefetch from `/api/exercises/equipments` ([00a5ffe](https://github.com/Clumsy-Coder/exercise-tracker/commit/00a5ffe150d75364c89988a7db924c3fc1088b04))
* **layout:exercises:** prefetch from `/api/exercises/targets` ([109d5ce](https://github.com/Clumsy-Coder/exercise-tracker/commit/109d5ced520761bda1b4df8e4a2e36a2cf688b84))
* **layout:home:** use custom favicon ([50adcad](https://github.com/Clumsy-Coder/exercise-tracker/commit/50adcada8667ebd75048381688040e52681c9eeb))
* **layout:** add property `suppressHydrationWarning` ([9cc1197](https://github.com/Clumsy-Coder/exercise-tracker/commit/9cc119737247033616b52b3099370ed8dc288468))
* **layout:** add react-query to NextJS ([55eff22](https://github.com/Clumsy-Coder/exercise-tracker/commit/55eff221d4c3eb6b7e3d0f1e3d0e2dadf862b78d))
* **layout:** add vercel analytics ([4f68876](https://github.com/Clumsy-Coder/exercise-tracker/commit/4f68876e1f84208e7e0503681dbf57f83f0f1f7c))
* **layout:** display `Footer` component ([0c15d2f](https://github.com/Clumsy-Coder/exercise-tracker/commit/0c15d2fba45b1ef9fe908c0389e07633f7f7ab61))
* **layout:** render navbar component ([5ef7bbd](https://github.com/Clumsy-Coder/exercise-tracker/commit/5ef7bbd2167b1a0e4eda2070bcc9a01ec7ff94dc)), closes [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17)
* **loading:exercises:bodyParts:** add `Loading` component for `/exercises/body-parts/[bodyPart]` page ([1196343](https://github.com/Clumsy-Coder/exercise-tracker/commit/119634355e00d7abb19f5325f1c20f35d357b226))
* **loading:exercises:targets:** add `Loading` component for `/exercises/targets/[target]` page ([ba3ce79](https://github.com/Clumsy-Coder/exercise-tracker/commit/ba3ce79a05de55b0a1c082f81b50def5edc55c38))
* **loading:home:** add `Loading` component for `/` page ([85ad6aa](https://github.com/Clumsy-Coder/exercise-tracker/commit/85ad6aab1617a4df8e9c2274d3a9a4e425bcaa1b))
* **page:exerciseId:** add `Loading` component for `/exercises/[exerciseId]` page ([f4070ba](https://github.com/Clumsy-Coder/exercise-tracker/commit/f4070bae72633baccc4c18ca18a8011518b71861))
* **page:exerciseId:** display `Loading` component when fetching data ([9473f5d](https://github.com/Clumsy-Coder/exercise-tracker/commit/9473f5dd54485837cf689e39cc37cb3f1d4537d1))
* **page:exercises:equipments:** add `Loading` component for `/exercises/equipments/[equipment]` page ([fdcaf25](https://github.com/Clumsy-Coder/exercise-tracker/commit/fdcaf25e86eb5760b7cf43f5462f555c0238cad7))
* **page:exercises:exerciseId:** remove unused code ([05c6440](https://github.com/Clumsy-Coder/exercise-tracker/commit/05c64400d0142ba3be6ed20bc821f87046854a4a))
* **page:exercises:** add `Loading` component for `Exercises` page ([179d125](https://github.com/Clumsy-Coder/exercise-tracker/commit/179d12503968790628402b8b46a416fb06bef3a1))
* **page:exercises:** display `Loading` component when fetching data ([dfdc014](https://github.com/Clumsy-Coder/exercise-tracker/commit/dfdc014700d772ef6ffa5392669ee3f58948bbb3))
* **page:home:** display ENVs ([ea8ecdf](https://github.com/Clumsy-Coder/exercise-tracker/commit/ea8ecdf435e75dca7e199c87594c70288c509878))
* project init ([4e22a1c](https://github.com/Clumsy-Coder/exercise-tracker/commit/4e22a1ce33a7dfed2837230258fd3a5f4935b626))
* **public:** add exercise gifs ([125ff3d](https://github.com/Clumsy-Coder/exercise-tracker/commit/125ff3dc4cf2cf1becf0d2fd1031537dd1e81b81))
* **public:** add favicons ([afd803c](https://github.com/Clumsy-Coder/exercise-tracker/commit/afd803ca0dac3d92864819da23136c7389796ad5))
* **release:** 1.0.0-development.1 [skip ci] ([bd7569e](https://github.com/Clumsy-Coder/exercise-tracker/commit/bd7569e4d442448be528dabd534744c57d048a35)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15) [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15) [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15) [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15) [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **release:** 1.0.0-development.10 [skip ci] ([6390ba2](https://github.com/Clumsy-Coder/exercise-tracker/commit/6390ba2a27ba7755781cd2d5f9e1e3916e66076d)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67) [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **release:** 1.0.0-development.11 [skip ci] ([06e4a43](https://github.com/Clumsy-Coder/exercise-tracker/commit/06e4a43ff6c0c69542931e5132f2d28eba84cf8e)), closes [#90](https://github.com/Clumsy-Coder/exercise-tracker/issues/90)
* **release:** 1.0.0-development.2 [skip ci] ([438a2e7](https://github.com/Clumsy-Coder/exercise-tracker/commit/438a2e74a5bbdbd62c8be5644435094dd9187515)), closes [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17) [#17](https://github.com/Clumsy-Coder/exercise-tracker/issues/17) [github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts#L30-L39](https://github.com/Clumsy-Coder/github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts/issues/L30-L39)
* **release:** 1.0.0-development.3 [skip ci] ([74aa3b6](https://github.com/Clumsy-Coder/exercise-tracker/commit/74aa3b6662a4a9a3a10a0e898d28ff6baaafab54))
* **release:** 1.0.0-development.4 [skip ci] ([63e90ea](https://github.com/Clumsy-Coder/exercise-tracker/commit/63e90eae66a32ecd558b1d0bc9a0180978025cb5)), closes [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19) [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19)
* **release:** 1.0.0-development.5 [skip ci] ([2393577](https://github.com/Clumsy-Coder/exercise-tracker/commit/2393577085ae22493be340955c60f84f0d75d877)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22) [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **release:** 1.0.0-development.6 [skip ci] ([6e031ac](https://github.com/Clumsy-Coder/exercise-tracker/commit/6e031acac16eb13d92a7b0a2ffe822387bae04fe)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56) [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56) [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56) [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **release:** 1.0.0-development.7 [skip ci] ([09dde1b](https://github.com/Clumsy-Coder/exercise-tracker/commit/09dde1b3239859945f4fb1b714642460c1b3bbd7))
* **release:** 1.0.0-development.8 [skip ci] ([c810f10](https://github.com/Clumsy-Coder/exercise-tracker/commit/c810f10f80ca3239af8c4df465a4187366f1c788)), closes [#66](https://github.com/Clumsy-Coder/exercise-tracker/issues/66)
* **release:** 1.0.0-development.9 [skip ci] ([78995d1](https://github.com/Clumsy-Coder/exercise-tracker/commit/78995d1ff4208743d728a19c5fa48b708aa37dc6)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68) [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68) [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* remove old favicon ([001dd67](https://github.com/Clumsy-Coder/exercise-tracker/commit/001dd6799454c215a5f8c3f4313625cd4fcd81d1))
* **schema:** add schema for `/api/exercises/[exerciseId]` ([346d961](https://github.com/Clumsy-Coder/exercise-tracker/commit/346d9619d644871cac9a6903dc6ccf73968ae20d))
* **schema:** add schema for `/api/exercises/equipments/[equipment]` ([083cace](https://github.com/Clumsy-Coder/exercise-tracker/commit/083cace1be951f7d725715fc092943a64b7bf889))
* **schema:** add schema for `/exercises/body-parts/[bodyPart]` ([a6f508d](https://github.com/Clumsy-Coder/exercise-tracker/commit/a6f508d5bea380be37ca15d543cb4edd80375a61))
* **schema:** add schema for `/exercises/targets/[target]` ([1c30973](https://github.com/Clumsy-Coder/exercise-tracker/commit/1c30973edc398636b3fae6c96342cffacd552431))
* **types:** add type for nav link ([4b00b40](https://github.com/Clumsy-Coder/exercise-tracker/commit/4b00b402785410cd36f3379f7a359a2679784061))
* **types:** add type for NextJS envs ([9da6dc5](https://github.com/Clumsy-Coder/exercise-tracker/commit/9da6dc5d8f253fa6a2be329e591f0f79cb190430))
* **types:** add type for site config ([b77f319](https://github.com/Clumsy-Coder/exercise-tracker/commit/b77f31940eecd1c4cb2ee9899c277003f63ea069)), closes [/github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts#L30-L39](https://github.com/Clumsy-Coder//github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts/issues/L30-L39)
* **types:** add type for upstream API ([981e1ae](https://github.com/Clumsy-Coder/exercise-tracker/commit/981e1aeee6f137705621c6e8e301a182276f9780))
* **utils:links:** add link `Exercises` ([370693c](https://github.com/Clumsy-Coder/exercise-tracker/commit/370693c6938acb7829322d87837b65624beda5d4))
* **utils:** add a list of popular exercises ([986a9a8](https://github.com/Clumsy-Coder/exercise-tracker/commit/986a9a8e8ea5dbd27f86ae4f49bbcb1a042cecfe))
* **yamllint:** add yamllint config ([86b8609](https://github.com/Clumsy-Coder/exercise-tracker/commit/86b8609a60b1abd9a602da46652a77ab9019d816))
* **yamllint:** ignore line length ([06607a9](https://github.com/Clumsy-Coder/exercise-tracker/commit/06607a982a0e29a4eb033d470e9953107ec92b7b))


### :recycle: Code Refactoring

* **api:exercise:equipments:** use local data to fetch equipment list ([5ed95da](https://github.com/Clumsy-Coder/exercise-tracker/commit/5ed95da6663556a85a9239cf8e26ea0221f6b939))
* **api:exerciseId:** use local data for fetching an exercise with exerciseId ([72d3f90](https://github.com/Clumsy-Coder/exercise-tracker/commit/72d3f90869f5a1335a07725d42473f55ef695c6d))
* **api:exercises:targets:** use local data to fetch target list ([afdb953](https://github.com/Clumsy-Coder/exercise-tracker/commit/afdb95363594fc43ce7758e0a706a2ac02a2f05f))
* **api:exercises:** set limit when fetching all exercises ([d6a2b0a](https://github.com/Clumsy-Coder/exercise-tracker/commit/d6a2b0aba438a3aee8b7587e07f2d5e06bbcbe37))
* **api:exercises:** use local data for all exercises ([df986bc](https://github.com/Clumsy-Coder/exercise-tracker/commit/df986bc3961b4ea3ea2cb1c6a48ac94d09076083))
* **api:url:** increase number of elements returned for all exercises ([35628a3](https://github.com/Clumsy-Coder/exercise-tracker/commit/35628a3824797573734feac15259f723d03f4455))
* **api:url:** rename function `fetchAllExercises` to `fetchAllExercisesUrl` ([b2a63f3](https://github.com/Clumsy-Coder/exercise-tracker/commit/b2a63f32e099c3f4bb5c6c9bb12141292c925124))
* **components:exerciseCard:** fix url to target and equipment page ([a48589d](https://github.com/Clumsy-Coder/exercise-tracker/commit/a48589dc421ee7cf0075a5cbde549a234e7667b8))
* **components:exercisesGroup:** use constant when setting `showLimit` ([945cc0f](https://github.com/Clumsy-Coder/exercise-tracker/commit/945cc0f44f63fd473bec3c25e50b5497e8270da3))
* **layout:home:** update metadata ([60a5f72](https://github.com/Clumsy-Coder/exercise-tracker/commit/60a5f723070862007d6c0a67db55586be74830e7))
* **page:exercises:exercised:** fix url for `bodyPart` ([91703fd](https://github.com/Clumsy-Coder/exercise-tracker/commit/91703fd3d862f2f7e670c1abc166f826f5ea98a7))
* **page:exercises:** use component `ExercisesBy` for rendering exercises by target and equipment links ([eb779a2](https://github.com/Clumsy-Coder/exercise-tracker/commit/eb779a251e8cdaf238c409bd26f7490c3bc3a1b5))
* use gif from public folder ([eb6cffc](https://github.com/Clumsy-Coder/exercise-tracker/commit/eb6cffcdb8be3490ce240a9450c527ca218d8a8d))
* **utils:** move `links` array to `utils/index.ts` ([5c8a9a0](https://github.com/Clumsy-Coder/exercise-tracker/commit/5c8a9a0fcc3dd744b230f6470800d0d3f9683647))


### :package: Build System

* add script for generating ENVs ([50622e5](https://github.com/Clumsy-Coder/exercise-tracker/commit/50622e5f6582ac6f5aacc557b69c99585b18799e))
* add shadcn-ui ([54000ca](https://github.com/Clumsy-Coder/exercise-tracker/commit/54000ca2791560cac8dcc2a6cab30e53f6ae5401))
* **api:** add headers for fetching ExerciseDB ([4340ba2](https://github.com/Clumsy-Coder/exercise-tracker/commit/4340ba24aac19d20bba80c65cc3b7c8144a667de))
* **deps:** bump @tanstack/react-query from 5.21.7 to 5.22.2 ([d950cde](https://github.com/Clumsy-Coder/exercise-tracker/commit/d950cde9f6b382840fe01363a558db3a2298ae54))
* **deps:** bump @tanstack/react-query from 5.22.2 to 5.24.1 ([7693f23](https://github.com/Clumsy-Coder/exercise-tracker/commit/7693f2371aa7fe382e5808e092d94bd13fb9a797))
* **deps:** bump @tanstack/react-query-devtools from 5.17.21 to 5.21.3 ([b657c48](https://github.com/Clumsy-Coder/exercise-tracker/commit/b657c484f663e00dad0305dba0ab512ffa2df451))
* **deps:** bump @tanstack/react-query-devtools from 5.21.3 to 5.21.7 ([816f647](https://github.com/Clumsy-Coder/exercise-tracker/commit/816f647b9b93f610ddfbce245281e7e79a26f73c))
* **deps:** bump @tanstack/react-query-devtools from 5.21.7 to 5.24.0 ([237370b](https://github.com/Clumsy-Coder/exercise-tracker/commit/237370beac9d5f8d9a35147ce05b1c8963d34168))
* **deps:** bump @tanstack/react-query-devtools from 5.24.0 to 5.24.1 ([f4c250b](https://github.com/Clumsy-Coder/exercise-tracker/commit/f4c250b8459bd5458a33ddce6f5724bbabe7d47d))
* **deps:** bump @vercel/analytics from 1.1.1 to 1.1.2 ([29258e6](https://github.com/Clumsy-Coder/exercise-tracker/commit/29258e656f8623bcc44a6002f9dd8847e96b5c65))
* **deps:** bump @vercel/analytics from 1.1.2 to 1.1.3 ([118ef7d](https://github.com/Clumsy-Coder/exercise-tracker/commit/118ef7decbaff290b3e04f79dccbb020a8d48768))
* **deps:** bump @vercel/analytics from 1.1.3 to 1.2.0 ([6c04a6b](https://github.com/Clumsy-Coder/exercise-tracker/commit/6c04a6b914f433c7207b90d6435a793807236fd6))
* **deps:** bump @vercel/analytics from 1.2.0 to 1.2.1 ([b3ac89f](https://github.com/Clumsy-Coder/exercise-tracker/commit/b3ac89f5e17e5ff267eb5abcf40ad943076b4a02))
* **deps:** bump @vercel/analytics from 1.2.1 to 1.2.2 ([8c9d079](https://github.com/Clumsy-Coder/exercise-tracker/commit/8c9d079127c9fe5c86115af18a9ed195e5115542))
* **deps:** bump lucide-react from 0.314.0 to 0.315.0 ([7e13623](https://github.com/Clumsy-Coder/exercise-tracker/commit/7e136239380ff7ce75667e2f6add1c9f3f5ed2ac))
* **deps:** bump lucide-react from 0.315.0 to 0.316.0 ([24180b9](https://github.com/Clumsy-Coder/exercise-tracker/commit/24180b9a9cf6efabe4c706f08293a67cf4e9b34b))
* **deps:** bump lucide-react from 0.316.0 to 0.317.0 ([917382a](https://github.com/Clumsy-Coder/exercise-tracker/commit/917382a43b6510641f2dd714f66673efff0b5c7f))
* **deps:** bump lucide-react from 0.317.0 to 0.319.0 ([a9123f4](https://github.com/Clumsy-Coder/exercise-tracker/commit/a9123f4459c497501112f322aac72d6b9f5ed01f))
* **deps:** bump lucide-react from 0.319.0 to 0.320.0 ([85ca6ef](https://github.com/Clumsy-Coder/exercise-tracker/commit/85ca6ef4fcf5b83ec2227cb350dd5b6e4bb4fd7f))
* **deps:** bump lucide-react from 0.320.0 to 0.321.0 ([3fcf155](https://github.com/Clumsy-Coder/exercise-tracker/commit/3fcf1558eea373632f4adc732cd489277305b23f))
* **deps:** bump lucide-react from 0.321.0 to 0.323.0 ([cf535c4](https://github.com/Clumsy-Coder/exercise-tracker/commit/cf535c4845e80937c2fd9847db0fd7d0d1cf3a59))
* **deps:** bump lucide-react from 0.323.0 to 0.325.0 ([9bce927](https://github.com/Clumsy-Coder/exercise-tracker/commit/9bce927800f3c4397b100a4aad561f61fb6cfc6d))
* **deps:** bump lucide-react from 0.325.0 to 0.330.0 ([1d9be42](https://github.com/Clumsy-Coder/exercise-tracker/commit/1d9be42f3976f2ec9024150907156c3ade22e15f))
* **deps:** bump lucide-react from 0.330.0 to 0.331.0 ([4247602](https://github.com/Clumsy-Coder/exercise-tracker/commit/4247602261aa7a0714ba8daab05180a120409aeb))
* **deps:** bump lucide-react from 0.331.0 to 0.334.0 ([904c9d9](https://github.com/Clumsy-Coder/exercise-tracker/commit/904c9d950ee496dbdc20409708d342319b1fb4ba))
* **deps:** bump lucide-react from 0.334.0 to 0.335.0 ([dd1b8f0](https://github.com/Clumsy-Coder/exercise-tracker/commit/dd1b8f083abfd8ebb505735f0e5e8943d456c86a))
* **deps:** bump lucide-react from 0.335.0 to 0.336.0 ([7f408e0](https://github.com/Clumsy-Coder/exercise-tracker/commit/7f408e0e4e066aec42d6f572874382aa996e3957))
* **deps:** bump lucide-react from 0.336.0 to 0.340.0 ([189ccab](https://github.com/Clumsy-Coder/exercise-tracker/commit/189ccab66a89070e89cc114c1f6077ff4c91375c))
* **deps:** bump next from 14.0.4 to 14.1.0 ([cfeafc6](https://github.com/Clumsy-Coder/exercise-tracker/commit/cfeafc6a914d57d2e403b2e7d034d5f60d369e03))
* **deps:** bump tailwind-merge from 2.2.0 to 2.2.1 ([4c3f4b0](https://github.com/Clumsy-Coder/exercise-tracker/commit/4c3f4b0692af808e8be0f2601ed8101dbcad64f5))
* **deps:** bump vaul from 0.8.9 to 0.9.0 ([b1f8870](https://github.com/Clumsy-Coder/exercise-tracker/commit/b1f88709b132a5bfd8729fddfaa4484a14b8b854))
* **devDep:** bump @types/node from 20.11.10 to 20.11.13 ([71152b3](https://github.com/Clumsy-Coder/exercise-tracker/commit/71152b33a5ccd66c2ad284823724d25c1f1303f8))
* **devDep:** bump @types/node from 20.11.13 to 20.11.14 ([3bd1401](https://github.com/Clumsy-Coder/exercise-tracker/commit/3bd140141fa15d2feb5bd70286e30a060989c6d9))
* **devDep:** bump @types/node from 20.11.14 to 20.11.16 ([89c2933](https://github.com/Clumsy-Coder/exercise-tracker/commit/89c2933be3b958292e7867a90adb1552603ad64e))
* **devDep:** bump @types/node from 20.11.16 to 20.11.17 ([6fdb098](https://github.com/Clumsy-Coder/exercise-tracker/commit/6fdb09857e08107c08f5ed090f8c0612ca6a1be1))
* **devDep:** bump @types/node from 20.11.17 to 20.11.19 ([677f376](https://github.com/Clumsy-Coder/exercise-tracker/commit/677f37610c27484e18453890e65f168afdd619f7))
* **devDep:** bump @types/node from 20.11.19 to 20.11.20 ([47e9931](https://github.com/Clumsy-Coder/exercise-tracker/commit/47e99319fb6ffc75f98f35aeb05b9be18586a199))
* **devDep:** bump @types/node from 20.11.4 to 20.11.5 ([87ed426](https://github.com/Clumsy-Coder/exercise-tracker/commit/87ed426e83b43e50234986be70bda7639daf48b9))
* **devDep:** bump @types/node from 20.11.5 to 20.11.6 ([fe64b68](https://github.com/Clumsy-Coder/exercise-tracker/commit/fe64b688b72be87dc248011fbf853b700421ea4f))
* **devDep:** bump @types/node from 20.11.6 to 20.11.10 ([3e856a6](https://github.com/Clumsy-Coder/exercise-tracker/commit/3e856a6718e0d1eb9432f3bbd40501ed622695d3))
* **devDep:** bump @types/react from 18.2.48 to 18.2.51 ([ceb80ae](https://github.com/Clumsy-Coder/exercise-tracker/commit/ceb80ae06f3ed8d71f1a2c40c40d7b0d19cf23b6))
* **devDep:** bump @types/react from 18.2.51 to 18.2.53 ([7154de1](https://github.com/Clumsy-Coder/exercise-tracker/commit/7154de162806f8a2043429a495943e8bee972c77))
* **devDep:** bump @types/react from 18.2.53 to 18.2.54 ([84d949d](https://github.com/Clumsy-Coder/exercise-tracker/commit/84d949d883bc811abd95291e30f326bb9be5a416))
* **devDep:** bump @types/react from 18.2.54 to 18.2.55 ([05c1bb1](https://github.com/Clumsy-Coder/exercise-tracker/commit/05c1bb133de48fb8f73821b33208dc3d2cafb523))
* **devDep:** bump @types/react from 18.2.55 to 18.2.57 ([c66cc22](https://github.com/Clumsy-Coder/exercise-tracker/commit/c66cc22f9cb14e304f302449b064e365e75d024a))
* **devDep:** bump @types/react from 18.2.57 to 18.2.58 ([70840c2](https://github.com/Clumsy-Coder/exercise-tracker/commit/70840c2c6ab75508472e1ec66e78a5888d50d155))
* **devDep:** bump @types/react-dom from 18.2.18 to 18.2.19 ([6a1e723](https://github.com/Clumsy-Coder/exercise-tracker/commit/6a1e723fa478074c613aba73c9f6a58fe448b385))
* **devDep:** bump @typescript-eslint/eslint-plugin ([df1b846](https://github.com/Clumsy-Coder/exercise-tracker/commit/df1b846e3042f28fccf98bf706e68bbddc8fdd7d))
* **devDep:** bump @typescript-eslint/eslint-plugin ([db08eda](https://github.com/Clumsy-Coder/exercise-tracker/commit/db08edab6d66cd5fd73943e28002d0e68abc6e84))
* **devDep:** bump @typescript-eslint/eslint-plugin ([07cc81c](https://github.com/Clumsy-Coder/exercise-tracker/commit/07cc81ce9905938638877646e0f6ca3995216b18))
* **devDep:** bump @typescript-eslint/parser from 6.19.0 to 6.19.1 ([0f6ce83](https://github.com/Clumsy-Coder/exercise-tracker/commit/0f6ce83da6ba50799ec6c178d14b181a4084e2ee))
* **devDep:** bump @typescript-eslint/parser from 6.19.1 to 6.20.0 ([acc26a5](https://github.com/Clumsy-Coder/exercise-tracker/commit/acc26a5c35998b1933ebe7cc551b38169aa16393))
* **devDep:** bump @typescript-eslint/parser from 6.20.0 to 6.21.0 ([e03b3f2](https://github.com/Clumsy-Coder/exercise-tracker/commit/e03b3f21e6313e5ab49f6b08e081c3f5e1f53fb6))
* **devDep:** bump autoprefixer from 10.4.16 to 10.4.17 ([1ae4631](https://github.com/Clumsy-Coder/exercise-tracker/commit/1ae46314926be724860c46b3357e612b702fbd3d))
* **devDep:** bump eslint from 8.56.0 to 8.57.0 ([ee9bf2c](https://github.com/Clumsy-Coder/exercise-tracker/commit/ee9bf2cbf6279cbb03917df3751d498e89791e16))
* **devDep:** bump eslint-config-next from 14.0.4 to 14.1.0 ([5a4326d](https://github.com/Clumsy-Coder/exercise-tracker/commit/5a4326d0095d7f1688beecf285d245abfbe3a343))
* **devDep:** bump postcss from 8.4.33 to 8.4.34 ([1fd22f5](https://github.com/Clumsy-Coder/exercise-tracker/commit/1fd22f57a8e6c068c08734a984784f989bc85216))
* **devDep:** bump postcss from 8.4.34 to 8.4.35 ([94ed288](https://github.com/Clumsy-Coder/exercise-tracker/commit/94ed288a36606ee262e770da7a8703bbb71c29de))
* **devDep:** bump prettier from 3.2.2 to 3.2.4 ([787f14b](https://github.com/Clumsy-Coder/exercise-tracker/commit/787f14b96b46c04c6594e49800f85c6219b72b94))
* **devDep:** bump prettier from 3.2.4 to 3.2.5 ([2196148](https://github.com/Clumsy-Coder/exercise-tracker/commit/2196148afee95c56d13487e991f25e23b7249cda))
* **devDep:** bump semantic-release from 23.0.0 to 23.0.1 ([ccd2a21](https://github.com/Clumsy-Coder/exercise-tracker/commit/ccd2a21521a8e16449e96a4c2e3e4bd8e6d64b53))
* **devDep:** bump semantic-release from 23.0.1 to 23.0.2 ([72fa062](https://github.com/Clumsy-Coder/exercise-tracker/commit/72fa062fb43c41c25a20c8ad5c67c9a043ecd22f))
* **devDep:** bump tailwindcss from 3.4.0 to 3.4.1 ([ff26f39](https://github.com/Clumsy-Coder/exercise-tracker/commit/ff26f39d6cffb0e23fadfe1b683ae88ae369e960))
* **editorconfig:** add config file ([241bbdb](https://github.com/Clumsy-Coder/exercise-tracker/commit/241bbdb45ed60a5ff4ac4acfe3b95cce98de1470))
* **env:** change filename for env being generated ([33e8e57](https://github.com/Clumsy-Coder/exercise-tracker/commit/33e8e57fa1c4cc0824888eec303192013a8b4ceb))
* **env:** check git status when setting ENV BUILD_VERSION ([cefa449](https://github.com/Clumsy-Coder/exercise-tracker/commit/cefa4493e7da88701453dc041f35f588b45e45ca))
* **env:** provide BUILD_VERSION depending on build environment ([445e776](https://github.com/Clumsy-Coder/exercise-tracker/commit/445e776db7406b8aa58a339bd4171734aba10126))
* **eslint:** add `airbnb` eslint rules ([085eb32](https://github.com/Clumsy-Coder/exercise-tracker/commit/085eb32897edd65a95519041c53ea439da8d5b34))
* **eslint:** add `eslint-plugin-react` to eslint ([ecae22e](https://github.com/Clumsy-Coder/exercise-tracker/commit/ecae22e2a760fadaac6d0b2292a5ca466a986f51))
* **eslint:** add `eslint-plugin-tsdoc` to eslint ([b58a822](https://github.com/Clumsy-Coder/exercise-tracker/commit/b58a822f6824207c5430845455a620418c5206c2))
* **eslint:** add `parserOptions` ([0c5e3eb](https://github.com/Clumsy-Coder/exercise-tracker/commit/0c5e3ebd1bbfe8f468eb6e4b239d3fae6d655bff))
* **eslint:** add custom rules ([c4051df](https://github.com/Clumsy-Coder/exercise-tracker/commit/c4051df435bcfd2fb270f84d059e98021750fed6))
* **eslint:** add eslint typescript ([78417e2](https://github.com/Clumsy-Coder/exercise-tracker/commit/78417e2e68122a319100e901d771369d38d02c9a))
* **eslint:** add ignorefile ([fd663ce](https://github.com/Clumsy-Coder/exercise-tracker/commit/fd663ce6fd31cadb4b04e3d595fadd480110a893))
* **eslint:** disable eslint rules ([750f6e6](https://github.com/Clumsy-Coder/exercise-tracker/commit/750f6e60f9d316ce87f2379a8d56289338596075))
* **eslint:** extend `eslint-config-prettier` rules ([9b526db](https://github.com/Clumsy-Coder/exercise-tracker/commit/9b526db1c5b80a96d37a2d8ef61e4e884aef4f90))
* **eslint:** extend `eslint-plugin-prettier` rules ([86cc9d6](https://github.com/Clumsy-Coder/exercise-tracker/commit/86cc9d64bfcd51c15fc658bfe79c7b0eeadee6fd))
* **eslint:** mark `prettier/prettier` as eslint warnings ([a85fef9](https://github.com/Clumsy-Coder/exercise-tracker/commit/a85fef9de57138aa05b1882a7ee4a2e4320d2097))
* **nextjs:** add cross origin url to fetch exercise GIFs ([65c491c](https://github.com/Clumsy-Coder/exercise-tracker/commit/65c491c9aab17f77008b33085a0be6130ea2fcfe))
* **nextjs:** enable detail logging in dev mode ([c6a92ac](https://github.com/Clumsy-Coder/exercise-tracker/commit/c6a92ac7544a6274311aa04f88f000ab64adf6f3))
* **nextjs:** set build output to `standalone` ([b3104de](https://github.com/Clumsy-Coder/exercise-tracker/commit/b3104dea0640c45a0a9b4e6c86f21c2b4f0e58d6))
* **npm:** add npm script for prettier ([4b2447a](https://github.com/Clumsy-Coder/exercise-tracker/commit/4b2447a1b300af72de9d739bd9f43ed9f3b59f6f))
* **npm:** add npm scripts ([e1a6d10](https://github.com/Clumsy-Coder/exercise-tracker/commit/e1a6d101663a904f03b71a74b172525aa6a95b7d))
* **npm:** add package "lucide-react" ([b928855](https://github.com/Clumsy-Coder/exercise-tracker/commit/b92885571f3dbe33a6a7a15085562586c5e16a72))
* **npm:** add package `@tanstack/react-query-devtools` ([880c84c](https://github.com/Clumsy-Coder/exercise-tracker/commit/880c84c2169f994f6d7eaf74bce743072f61c8e6))
* **npm:** add package `@tanstack/react-query` ([264f1e2](https://github.com/Clumsy-Coder/exercise-tracker/commit/264f1e2000f3f99ce2b4e0a79043c2fe1ecd8b2a))
* **npm:** add package `@vercel/analytics` ([e1f0880](https://github.com/Clumsy-Coder/exercise-tracker/commit/e1f08808d03068b778c9c7bfdffb46d0e49ea680))
* **npm:** add package `axios` ([1f1a84d](https://github.com/Clumsy-Coder/exercise-tracker/commit/1f1a84d887995bc405180aeace2b0340c06dbc0e))
* **npm:** add package `eslint-config-prettier` ([5a5b65f](https://github.com/Clumsy-Coder/exercise-tracker/commit/5a5b65fd3941cb59b910491b542165c116d1e413))
* **npm:** add package `eslint-plugin-prettier` ([88a366b](https://github.com/Clumsy-Coder/exercise-tracker/commit/88a366b79564ce3ace2bdd58133b607d7feaac3a))
* **npm:** add package `eslint-plugin-tsdoc` ([444e38a](https://github.com/Clumsy-Coder/exercise-tracker/commit/444e38a8faf99b5221e28c3c79439b8d34df0e92))
* **npm:** add package `moment` ([36cc335](https://github.com/Clumsy-Coder/exercise-tracker/commit/36cc335372a28bb6d3b367e0295ca6ca117e4dd6))
* **npm:** add package `next-themes` ([2d28220](https://github.com/Clumsy-Coder/exercise-tracker/commit/2d282208591e3d298caa285fbb72fe3264bdd06a)), closes [#15](https://github.com/Clumsy-Coder/exercise-tracker/issues/15)
* **npm:** add package `prettier-plugin-tailwindcss` ([3a670a3](https://github.com/Clumsy-Coder/exercise-tracker/commit/3a670a33eedcf99d4de7777abfc923b5a4729989))
* **npm:** add package `prettier` ([a8511fd](https://github.com/Clumsy-Coder/exercise-tracker/commit/a8511fdad2cd3dbd3560dddceccc3370ee233298))
* **npm:** add package `zod` ([e91b89a](https://github.com/Clumsy-Coder/exercise-tracker/commit/e91b89a298de713cef4d74be4c1a63668f02788b))
* **npm:** add packages for airbnb eslint ([e9fdd9e](https://github.com/Clumsy-Coder/exercise-tracker/commit/e9fdd9e71a035aa0a56b03f578b7def0ad9821b3))
* **npm:** add packages for semantic-release ([cadd241](https://github.com/Clumsy-Coder/exercise-tracker/commit/cadd241d8f8e7f2f9a261b4cdc7c7de87db4bb16))
* **npm:** add packages for typescript-eslint ([0508bd9](https://github.com/Clumsy-Coder/exercise-tracker/commit/0508bd96a1cd77c5d0125b673c7fc5a58de6d740))
* **npm:** change npm script `dev` to run dev server ([ec16113](https://github.com/Clumsy-Coder/exercise-tracker/commit/ec161131ea7ed72e7747f50be5dc978e19e0faac))
* **npm:** upgrade package `tailwindcss` to `v3.4.0` ([33af095](https://github.com/Clumsy-Coder/exercise-tracker/commit/33af09566eafbe0e781ead0a624e9af4cc4c9c25))
* **prettier:** add config files ([8604f02](https://github.com/Clumsy-Coder/exercise-tracker/commit/8604f020ad59397c4cf20f00eb3ab09eec00f94e))
* **prettier:** add plugin `prettier-plugin-tailwindcss` ([935518e](https://github.com/Clumsy-Coder/exercise-tracker/commit/935518e34b9cef6a4872bc76751eb19d29116f9b))
* **shadcn:** add component `Accordion` ([a3a6aa2](https://github.com/Clumsy-Coder/exercise-tracker/commit/a3a6aa203f07b2487c7a075c2ecf094934e2aeaa))
* **shadcn:** add component `Badge` ([d49f124](https://github.com/Clumsy-Coder/exercise-tracker/commit/d49f124aaf1634f839a6f41ae56f04e2e1d37e79))
* **shadcn:** add component `Button` ([c7a93f0](https://github.com/Clumsy-Coder/exercise-tracker/commit/c7a93f05c13e4e76bc0261f67983e96f3d427d42))
* **shadcn:** add component `Card` ([7f29d11](https://github.com/Clumsy-Coder/exercise-tracker/commit/7f29d1172437a5d1969f934f4e63240f7d6d063a))
* **shadcn:** add component `Dialog` ([dbdc42f](https://github.com/Clumsy-Coder/exercise-tracker/commit/dbdc42f8776a781c11b2357a2dae272ab0ef373c))
* **shadcn:** add component `Drawer` ([f1a4d94](https://github.com/Clumsy-Coder/exercise-tracker/commit/f1a4d94491852893c4b032de7ac615c5bf108981))
* **shadcn:** add component `Dropdown-menu` ([04912f3](https://github.com/Clumsy-Coder/exercise-tracker/commit/04912f3a0a490d5c49c79212fb61d3d6ef7805bd))
* **shadcn:** add component `Input` ([8fb5848](https://github.com/Clumsy-Coder/exercise-tracker/commit/8fb5848c002765f8608d193d8ea60d335df12b90))
* **shadcn:** add component `Separator` ([bd90ae7](https://github.com/Clumsy-Coder/exercise-tracker/commit/bd90ae7c5de02256a93d3130c053b6886a790486))
* **shadcn:** add component `Skeleton` ([293fbe0](https://github.com/Clumsy-Coder/exercise-tracker/commit/293fbe024f8d3b2fee208813cf5d19db4cf56a7b))
* **shadcn:** add component `Tooltip` ([c6fc94e](https://github.com/Clumsy-Coder/exercise-tracker/commit/c6fc94e5169c49498b5c34a70c558cb9606ce833))
* **tailwind:** add some custom colours ([5028a69](https://github.com/Clumsy-Coder/exercise-tracker/commit/5028a6907ce3b43fc567c1519039600b97334283))
* **typescript:** add `next.config.js` to `includes` ([f2cc4e2](https://github.com/Clumsy-Coder/exercise-tracker/commit/f2cc4e29af2480eb6145c4ae42952050ab354765))
* **typescript:** exclude `.next/` folder ([4f1d112](https://github.com/Clumsy-Coder/exercise-tracker/commit/4f1d1122bcd563e46cf558bb872921312527146a))


### :construction_worker: Continuous Integration

* **action:dependabot:** add dependabot automerge workflow ([5031aab](https://github.com/Clumsy-Coder/exercise-tracker/commit/5031aab0a283bf50787fc03c7696a7b447843df5))
* **dependabot:** add config file ([b915457](https://github.com/Clumsy-Coder/exercise-tracker/commit/b9154578113738504cf995579649a38d082e8d88))
* **docker:** add `dockerfile` ([6f64df6](https://github.com/Clumsy-Coder/exercise-tracker/commit/6f64df6c442d0bd1eaed9af6d2fbf4508c5d69ec))
* **docker:** add `dockerignore` file ([ea0273f](https://github.com/Clumsy-Coder/exercise-tracker/commit/ea0273f8d9edf74a751ad42f25e9fd766060e94b))
* **github-action:** bump actions/cache from 3 to 4 ([9001862](https://github.com/Clumsy-Coder/exercise-tracker/commit/90018629d93994722ad1daa7bed5917a7566a45a))
* **github-action:** bump actions/delete-package-versions from 4 to 5 ([5190443](https://github.com/Clumsy-Coder/exercise-tracker/commit/519044353541f668a28075fa61e31f4b8ffec418))
* **github-action:** bump docker/metadata-action from 5.5.0 to 5.5.1 ([e17a7ed](https://github.com/Clumsy-Coder/exercise-tracker/commit/e17a7edaa225097d9eb0dfd92d49c61f17a8d2e1))
* **semantic-release:** add config file ([cf5fb37](https://github.com/Clumsy-Coder/exercise-tracker/commit/cf5fb3734c7de917a5cd09015279215b4a402579))
* **template:** add `bug report` template ([59632d4](https://github.com/Clumsy-Coder/exercise-tracker/commit/59632d478a0df88872d2e5191b9ac3b963197f66))
* **template:** add `feature request` template ([98d168b](https://github.com/Clumsy-Coder/exercise-tracker/commit/98d168bbb4c09f55ec3e7b06b77fba2f2168b54b))
* **template:** add `pull request` template ([8a4542f](https://github.com/Clumsy-Coder/exercise-tracker/commit/8a4542f70678b25afe76267570e3e517fa1ab577))
* **workflows:cleanup:** segment getting all container ID and filtering by branchname ([856d733](https://github.com/Clumsy-Coder/exercise-tracker/commit/856d73394c768529f548d22eae58b2726b4b6606))
* **workflows:** add env `EXERCISE_DB_API` when building docker image ([89c94a4](https://github.com/Clumsy-Coder/exercise-tracker/commit/89c94a404393eaa6e096fbcc85a4f11372ec5edf))
* **workflows:** add github action workflow `reusable-docker-build` ([c824c0d](https://github.com/Clumsy-Coder/exercise-tracker/commit/c824c0de6d8698d0c69cbcb9ca1120fc84d83644))
* **workflows:** add job `docker-build-image` for workflow `build.yaml` ([77fbddc](https://github.com/Clumsy-Coder/exercise-tracker/commit/77fbddc1abd0f97014d883a114a088f5ec29deb6))
* **workflows:** add job `install` for workflow `build.yaml` ([0207eb1](https://github.com/Clumsy-Coder/exercise-tracker/commit/0207eb1fc63caa8f42c7dddf589376e75f81ad78))
* **workflows:** add job `lint` for workflow `build.yaml` ([ad374d1](https://github.com/Clumsy-Coder/exercise-tracker/commit/ad374d17cccbb70c84915954e84251a7e813b6f4))
* **workflows:** add job `matrix-results` for workflow `build.yaml` ([86cd58f](https://github.com/Clumsy-Coder/exercise-tracker/commit/86cd58ff67c5613fac2322254762f2c84913945e))
* **workflows:** add job `prepare-docker-build` for workflow `build.yaml` ([d05b97f](https://github.com/Clumsy-Coder/exercise-tracker/commit/d05b97f2aaec150af7f9467233bcd46320fbebf6))
* **workflows:** add job `semantic-release` for workflow `build.yaml` ([d180bb2](https://github.com/Clumsy-Coder/exercise-tracker/commit/d180bb28f03147f6783510030e646711862c402d))
* **workflows:** add workflow `cleanup-docker-image` ([8b56165](https://github.com/Clumsy-Coder/exercise-tracker/commit/8b561656832e989240c751eb7baaa31c495a5135))
* **workflows:** add workflow `codeql` ([8bb1392](https://github.com/Clumsy-Coder/exercise-tracker/commit/8bb1392833057b5b367175f9c9bbbe1d63804d29))
* **workflows:** dispatch `cleanup-docker-image` manually ([f4119a9](https://github.com/Clumsy-Coder/exercise-tracker/commit/f4119a9f1e0d5704d59202e31284b91f498b061c))
* **workflows:** ignore error when removing untagged docker images ([7c03e74](https://github.com/Clumsy-Coder/exercise-tracker/commit/7c03e7411ac9f1a727f7c6f2f5acd26f9db33b5e))
* **workflows:** print api rate limit before running `semantic-release` ([162bcf6](https://github.com/Clumsy-Coder/exercise-tracker/commit/162bcf60a12e237f30cfb0b67f426cdfb968aa18))
* **workflows:** print the all docker image versions when cleaning up docker image ([ffac65e](https://github.com/Clumsy-Coder/exercise-tracker/commit/ffac65e8cef4f5365a75c1824aaef174a0e618c6))
* **workflows:** push docker image with tagname `latest` on `main` branch ([b12ed9e](https://github.com/Clumsy-Coder/exercise-tracker/commit/b12ed9e88f5f5e9c5bc4d0e3a0b81389aba1ea6d))
* **workflows:** store github_token in an env ([5b36682](https://github.com/Clumsy-Coder/exercise-tracker/commit/5b3668227f729afbc33eb21df7c28473bcd13b54))
* **workflows:** update CodeQL config ([25a7f39](https://github.com/Clumsy-Coder/exercise-tracker/commit/25a7f392a6a5d51b3513621c4b38c8aa09e64d56))
* **workflows:** use `SEMANTIC_RELEASE_TOKEN` for job `semantic-release` ([0a5286c](https://github.com/Clumsy-Coder/exercise-tracker/commit/0a5286c9dd8d4d7af72248123fe9ff587018da81))
* **workflows:** use bash style env for `HEAD_REF` ([b3738f5](https://github.com/Clumsy-Coder/exercise-tracker/commit/b3738f54f47fd46686d538450b2303296f4ae0b9))
* **workflows:** use bash style env for `VERSION_ID` ([e8f8409](https://github.com/Clumsy-Coder/exercise-tracker/commit/e8f84097c0255f824c2f29a315df75a778107c8b))
* **workflows:** use bash style env for PACKAGE_NAME ([c7968e4](https://github.com/Clumsy-Coder/exercise-tracker/commit/c7968e4e991be2976b7fbdc0f95c6412df35dccc))

## [1.0.0-development.11](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.10...v1.0.0-development.11) (2024-2-26)


### :sparkles: Features

* **page:home:** add content for home page ([8f4be29](https://github.com/Clumsy-Coder/exercise-tracker/commit/8f4be29d7f65551334f948bb93c27ad3d435f7d9)), closes [#90](https://github.com/Clumsy-Coder/exercise-tracker/issues/90)


### :books: Documentation

* **docs:images:** add screenshots for `Home` page ([be6b8ef](https://github.com/Clumsy-Coder/exercise-tracker/commit/be6b8ef834240f2b84892c413eaf7ec8cb10c020))
* **readme:** display screenshots of `Home` page ([300fdc9](https://github.com/Clumsy-Coder/exercise-tracker/commit/300fdc9c6d96ed0de805512d18141f8ab64efdb0))


### :lipstick: Styles

* **components:exerciseCard:** add ability to extend `ExerciseCard` component ([2d004ef](https://github.com/Clumsy-Coder/exercise-tracker/commit/2d004ef83ff60b77864cdce05a30afdee0ade665))
* **components:exerciseCard:** remove `ring` tailwindcss class on hover ([395adc6](https://github.com/Clumsy-Coder/exercise-tracker/commit/395adc6c0b3e7f8adf5108ba4ee75412aa06ea29))
* **components:navbar:** format code ([07ebdca](https://github.com/Clumsy-Coder/exercise-tracker/commit/07ebdca09db5d4fb0a1bdf793a3799da47d4f0dd))


### :octopus: Miscellaneous Chores

* **components:exerciseCard:** remove unused code ([2f338db](https://github.com/Clumsy-Coder/exercise-tracker/commit/2f338db663449f1915f61de8ff49f5d665f98de1))
* **loading:home:** add `Loading` component for `/` page ([916630a](https://github.com/Clumsy-Coder/exercise-tracker/commit/916630a4987e8633be2a2ff0626bc2dcb36d7d87))
* **page:exercises:exerciseId:** remove unused code ([43a33b6](https://github.com/Clumsy-Coder/exercise-tracker/commit/43a33b6663d9ab8e2a29141440a024e42fa5f477))
* **utils:** add a list of popular exercises ([107e150](https://github.com/Clumsy-Coder/exercise-tracker/commit/107e15099f6b07358f5c2428f98d39d8ce3c9e78))


### :recycle: Code Refactoring

* **layout:home:** update metadata ([3eeb26e](https://github.com/Clumsy-Coder/exercise-tracker/commit/3eeb26efc2d048a3064ba701c37bf87f0a7f15f0))


### :package: Build System

* **deps:** bump @tanstack/react-query from 5.22.2 to 5.24.1 ([b0bce13](https://github.com/Clumsy-Coder/exercise-tracker/commit/b0bce13aa2009fb479c625300d6515a8cd5e0aeb))
* **deps:** bump @tanstack/react-query-devtools from 5.24.0 to 5.24.1 ([e027890](https://github.com/Clumsy-Coder/exercise-tracker/commit/e02789038e455d1510e77b08bfc050d170e231de))
* **deps:** bump lucide-react from 0.336.0 to 0.340.0 ([2ce426f](https://github.com/Clumsy-Coder/exercise-tracker/commit/2ce426fb7628026f84a480f7bf47058ffeb2e76f))
* **devDep:** bump @types/react from 18.2.57 to 18.2.58 ([2448fbf](https://github.com/Clumsy-Coder/exercise-tracker/commit/2448fbf067b9c60a4bc98c75a433df31a97c9c7d))
* **devDep:** bump eslint from 8.56.0 to 8.57.0 ([4fb0ef3](https://github.com/Clumsy-Coder/exercise-tracker/commit/4fb0ef361d752a2e401e32bd724758cf989854ea))

## [1.0.0-development.10](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.9...v1.0.0-development.10) (2024-2-24)


### :sparkles: Features

* **actions:** add server action for fetching exercise `body part` list ([544c9d5](https://github.com/Clumsy-Coder/exercise-tracker/commit/544c9d5b41dbaaf1ec96ca15e93839f68aa36ac1)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **actions:** add server action for fetching exercises by body part ([04780c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/04780c9d8d1c1d9a48f5e815dc96dfe87b219a41)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **api:exercises:bodyParts:** add endpoint for fetching `body part list` ([8580768](https://github.com/Clumsy-Coder/exercise-tracker/commit/8580768f93eb4097b289651b26be37703619fb81)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **api:exercises:bodyParts:** add endpoint for fetching exercises by bodyPart ([cd9a964](https://github.com/Clumsy-Coder/exercise-tracker/commit/cd9a964b342a3d8e4014bfe12e7b86099e783b18)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **page:exercises:bodyParts:** add page for `/exercises/body-parts/[bodyPart]` ([7cad028](https://github.com/Clumsy-Coder/exercise-tracker/commit/7cad028ca75ad0454e6ae4d2b54875cfac23460f)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **page:exercises:** display exercise `body part` list ([0d50e59](https://github.com/Clumsy-Coder/exercise-tracker/commit/0d50e594794be9c6b4336765047ffa8863fc6c0c)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)


### :octopus: Miscellaneous Chores

* **hooks:** add react-query hook to fetch exercise body part list ([6e77f7a](https://github.com/Clumsy-Coder/exercise-tracker/commit/6e77f7a20d484d7937d0c0bde2def66c9d00145d)), closes [#67](https://github.com/Clumsy-Coder/exercise-tracker/issues/67)
* **hooks:** add react-query hook to fetch exercises by body part ([abc40ab](https://github.com/Clumsy-Coder/exercise-tracker/commit/abc40abdbfe3573a82f496d97690061306720a7e))
* **layout:exercises:bodyParts:** add layout for `/exercises/body-parts/[bodyPart]` page ([0e277f0](https://github.com/Clumsy-Coder/exercise-tracker/commit/0e277f053d0e801fcf6277008b63e9948dde8acb))
* **loading:exercises:bodyParts:** add `Loading` component for `/exercises/body-parts/[bodyPart]` page ([18c9cd6](https://github.com/Clumsy-Coder/exercise-tracker/commit/18c9cd647a61c50dfd4a04caf5caf699df82903e))
* **schema:** add schema for `/exercises/body-parts/[bodyPart]` ([847fe03](https://github.com/Clumsy-Coder/exercise-tracker/commit/847fe03f966c52795230b2d52970f99adf955954))


### :recycle: Code Refactoring

* **page:exercises:exercised:** fix url for `bodyPart` ([3d4bce9](https://github.com/Clumsy-Coder/exercise-tracker/commit/3d4bce98a47b72abf5276de03b4aaafef4c76646))


### :package: Build System

* **devDep:** bump @types/node from 20.11.19 to 20.11.20 ([981986d](https://github.com/Clumsy-Coder/exercise-tracker/commit/981986d69fe240f7533982f91e68a6cc1f31caaf))

## [1.0.0-development.9](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.8...v1.0.0-development.9) (2024-2-22)


### :sparkles: Features

* **actions:** add server action for fetching exercises by target ([552ca8c](https://github.com/Clumsy-Coder/exercise-tracker/commit/552ca8cca9220a4664549494be91582b3b928c1f)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* **api:exercises:targets:** add endpoint for fetching exercises by target ([5660dab](https://github.com/Clumsy-Coder/exercise-tracker/commit/5660dab073429b0da3194dbe4ae1a7fecd855ce9)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)
* **page:exercises:targets:** add page for `/exercises/targets/[target]` ([52d9cbf](https://github.com/Clumsy-Coder/exercise-tracker/commit/52d9cbf8803e3c9ae36529bc76054f83bb409d77)), closes [#68](https://github.com/Clumsy-Coder/exercise-tracker/issues/68)


### :lipstick: Styles

* **components:exerciseCard:** add a gap between exercise name and navigate button ([0a99e5a](https://github.com/Clumsy-Coder/exercise-tracker/commit/0a99e5a2d1c7299503546490bd37e690af74e511))


### :octopus: Miscellaneous Chores

* **hooks:** add react-query hook to fetch exercises by target ([f4ba292](https://github.com/Clumsy-Coder/exercise-tracker/commit/f4ba2929414e4683c2d702b7173ef358046d3aa3))
* **layout:exercises:targets:** add layout for `/exercises/targets/[target]` page ([305a822](https://github.com/Clumsy-Coder/exercise-tracker/commit/305a822f6a28b44ef5d75274324415d84460b09f))
* **loading:exercises:targets:** add `Loading` component for `/exercises/targets/[target]` page ([63eecc8](https://github.com/Clumsy-Coder/exercise-tracker/commit/63eecc8a0bcbdd143b2a5a37ecc02ee92a12e4dd))
* **schema:** add schema for `/exercises/targets/[target]` ([cef95f2](https://github.com/Clumsy-Coder/exercise-tracker/commit/cef95f2d86399cd99d7173f5a620f453c73cba90))


### :recycle: Code Refactoring

* **components:exerciseCard:** fix url to target and equipment page ([68ed5b8](https://github.com/Clumsy-Coder/exercise-tracker/commit/68ed5b89baa3967e1768e61ca4c6a99d32cd1dbf))


### :package: Build System

* **deps:** bump lucide-react from 0.335.0 to 0.336.0 ([3bbfd7e](https://github.com/Clumsy-Coder/exercise-tracker/commit/3bbfd7e81fefa117dea4cb69d3c120be57495750))
* **devDep:** bump tailwindcss from 3.4.0 to 3.4.1 ([89d6282](https://github.com/Clumsy-Coder/exercise-tracker/commit/89d6282e12b225000ffe099fef564fe47a0fdd54))
* **npm:** upgrade package `tailwindcss` to `v3.4.0` ([3797af8](https://github.com/Clumsy-Coder/exercise-tracker/commit/3797af8329f31040c4fbbcaf99764fc9a6383b75))

## [1.0.0-development.8](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.7...v1.0.0-development.8) (2024-2-21)


### :sparkles: Features

* **actions:** add server action for fetching exercises by equipment ([a93fb88](https://github.com/Clumsy-Coder/exercise-tracker/commit/a93fb88343618c8705931d051f5bed70f4260dc4))
* **api:exercises:equipments:** add endpoint for fetching a single exercise by equipment ([5d7e4c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/5d7e4c90c4bc47a11d46517de2f87b528474d348)), closes [#66](https://github.com/Clumsy-Coder/exercise-tracker/issues/66)
* **page:exercises:equipments:** add page for `/exercises/equipments/[equipment]` ([92a43ed](https://github.com/Clumsy-Coder/exercise-tracker/commit/92a43edd716e92244613672b8c734cdec842afca))


### :octopus: Miscellaneous Chores

* **data:** add all `body part` types ([2d7082b](https://github.com/Clumsy-Coder/exercise-tracker/commit/2d7082b6bdf77886d481c39d810139b671768a05))
* **data:** add all `equipment` types ([aa692d3](https://github.com/Clumsy-Coder/exercise-tracker/commit/aa692d302bfba0707793b9a29a1402c722df8489))
* **data:** add all `target` types ([e0a1af8](https://github.com/Clumsy-Coder/exercise-tracker/commit/e0a1af8da760bc3d7d4d95a1876100642cedfdd6))
* **data:** add all exercises data ([aa5003d](https://github.com/Clumsy-Coder/exercise-tracker/commit/aa5003db619eb5bb49661a0cde9acdb7ab636cec))
* **hooks:** add react-query hook to fetch exercises by equipment ([cc31325](https://github.com/Clumsy-Coder/exercise-tracker/commit/cc31325537543f837452dd3eb35b2c4dfc97b39f))
* **layout:exercises:equipments:** add layout for `/exercises/equipments/[equipment]` page ([e92fa8d](https://github.com/Clumsy-Coder/exercise-tracker/commit/e92fa8d340b62feb32947582f264a0b21b2e808f))
* **page:exercises:equipments:** add `Loading` component for `/exercises/equipments/[equipment]` page ([a087402](https://github.com/Clumsy-Coder/exercise-tracker/commit/a087402085fdd8d390c26239a13827b6dc380cc5))
* **public:** add exercise gifs ([cbe8992](https://github.com/Clumsy-Coder/exercise-tracker/commit/cbe8992dbf523b3e1348638c6a63fdadcd844840))
* **schema:** add schema for `/api/exercises/equipments/[equipment]` ([d7a844e](https://github.com/Clumsy-Coder/exercise-tracker/commit/d7a844ed58bae843b4a33b81fd7fcae97c24bab7))


### :recycle: Code Refactoring

* **api:exercise:equipments:** use local data to fetch equipment list ([51ee3e7](https://github.com/Clumsy-Coder/exercise-tracker/commit/51ee3e7df3e1f60fb1f86cbc3d15ebea9a404051))
* **api:exerciseId:** use local data for fetching an exercise with exerciseId ([a17423a](https://github.com/Clumsy-Coder/exercise-tracker/commit/a17423a67501f47e657e7ba26f291c99c3619284))
* **api:exercises:targets:** use local data to fetch target list ([f6bb281](https://github.com/Clumsy-Coder/exercise-tracker/commit/f6bb28126bd8afa43f72f7e434ccf347f3404d55))
* **api:exercises:** use local data for all exercises ([08b5454](https://github.com/Clumsy-Coder/exercise-tracker/commit/08b5454d0b5abe94b6dba8852a6ab241ee7e55d4))
* use gif from public folder ([38d694d](https://github.com/Clumsy-Coder/exercise-tracker/commit/38d694d705877022518d595253664be0f8119606))


### :package: Build System

* **deps:** bump @tanstack/react-query from 5.21.7 to 5.22.2 ([bced85c](https://github.com/Clumsy-Coder/exercise-tracker/commit/bced85cadf9b75db251ad51a0a9e870647730d34))
* **deps:** bump @tanstack/react-query-devtools from 5.21.3 to 5.21.7 ([5ad4cb4](https://github.com/Clumsy-Coder/exercise-tracker/commit/5ad4cb42367d6582d7417c98fdb05faa8d2e6ecb))
* **deps:** bump @tanstack/react-query-devtools from 5.21.7 to 5.24.0 ([e1850bf](https://github.com/Clumsy-Coder/exercise-tracker/commit/e1850bfd63dd922814d25dad26572b688c5bdca5))
* **deps:** bump @vercel/analytics from 1.2.0 to 1.2.1 ([5f1c2b5](https://github.com/Clumsy-Coder/exercise-tracker/commit/5f1c2b5266ead57d4d81d0db9239f9e10288216b))
* **deps:** bump @vercel/analytics from 1.2.1 to 1.2.2 ([88a86c6](https://github.com/Clumsy-Coder/exercise-tracker/commit/88a86c64ded85fa7516448842d3342b03ed6be4b))
* **deps:** bump lucide-react from 0.331.0 to 0.334.0 ([ed73bb7](https://github.com/Clumsy-Coder/exercise-tracker/commit/ed73bb76abd087ab3d09d58bdea8dab30da0f7f5))
* **deps:** bump lucide-react from 0.334.0 to 0.335.0 ([fb7672c](https://github.com/Clumsy-Coder/exercise-tracker/commit/fb7672c097ab29d10388ca4ba2dedaf7178d43b8))
* **devDep:** bump @types/react from 18.2.55 to 18.2.57 ([a79b1c9](https://github.com/Clumsy-Coder/exercise-tracker/commit/a79b1c93b1b92abf51e18306e289976b868795cc))

## [1.0.0-development.7](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.6...v1.0.0-development.7) (2024-2-17)


### :sparkles: Features

* **components:** add `Footer` component ([46e3942](https://github.com/Clumsy-Coder/exercise-tracker/commit/46e39425720ee90c92d32ecb5a3a286c9f5d5a10))


### :lipstick: Styles

* **layout:** reorder imports ([a1a70c6](https://github.com/Clumsy-Coder/exercise-tracker/commit/a1a70c6b1877afd615bb16684e2418e292b6e71b))


### :octopus: Miscellaneous Chores

* **layout:** display `Footer` component ([a70ac5b](https://github.com/Clumsy-Coder/exercise-tracker/commit/a70ac5b3d09eb642bbc342f75a227b89f72366f7))


### :package: Build System

* **deps:** bump @tanstack/react-query-devtools from 5.17.21 to 5.21.3 ([5c84c95](https://github.com/Clumsy-Coder/exercise-tracker/commit/5c84c958d63496139af2811ae6a218286714adcb))
* **deps:** bump @vercel/analytics from 1.1.3 to 1.2.0 ([32ff403](https://github.com/Clumsy-Coder/exercise-tracker/commit/32ff40352c1b5ef119f4a86a0982799216455df7))
* **deps:** bump lucide-react from 0.330.0 to 0.331.0 ([486e555](https://github.com/Clumsy-Coder/exercise-tracker/commit/486e555be6a45f83e1c836cd267f896038692770))
* **devDep:** bump @types/node from 20.11.17 to 20.11.19 ([70bc247](https://github.com/Clumsy-Coder/exercise-tracker/commit/70bc247ee1ae498e755a9255d4bc24063defba4c))
* **npm:** add package `moment` ([2358e40](https://github.com/Clumsy-Coder/exercise-tracker/commit/2358e4099746e08a0e4f86744d2ddc6e9d0367df))

## [1.0.0-development.6](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.5...v1.0.0-development.6) (2024-2-17)


### :sparkles: Features

* **actions:** add server action for fetching a single exercise using `exerciseId` ([247208b](https://github.com/Clumsy-Coder/exercise-tracker/commit/247208b5d6d5d92733e5c847fe5acfda40459bef))
* **api:** add endpoint for fetching a single exercise using `exerciseId` ([937e9db](https://github.com/Clumsy-Coder/exercise-tracker/commit/937e9db285a222f885150fad17771fdd35b2d217)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exerciseId:** add error handling for invalid `exerciseId` ([5be8bee](https://github.com/Clumsy-Coder/exercise-tracker/commit/5be8bee886a18d957ea68372bec205aacf717e27)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exerciseId:** add page for `/exercises/[exerciseId]` ([ba47dbe](https://github.com/Clumsy-Coder/exercise-tracker/commit/ba47dbe39ed1cfe1ea2c7545da84427948d4e2de)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)
* **page:exerciseId:** display gif in a model when clicking on gif ([2e311cc](https://github.com/Clumsy-Coder/exercise-tracker/commit/2e311ccfa5a00283affcce57821d4bc2023dd9cc)), closes [#56](https://github.com/Clumsy-Coder/exercise-tracker/issues/56)


### :books: Documentation

* **docs:images:** add screenshots for `Exercise ID` page ([40be6d1](https://github.com/Clumsy-Coder/exercise-tracker/commit/40be6d17d70c088aa49ab1df26a4779d3d6de762))
* **readme:** display screenshots of `Exercise Id` page ([5beb283](https://github.com/Clumsy-Coder/exercise-tracker/commit/5beb2830628af27c2c200eee6179039b74c70bd5))


### :octopus: Miscellaneous Chores

* **api:url:** add function to get `single exercise` url ([5a7b6d3](https://github.com/Clumsy-Coder/exercise-tracker/commit/5a7b6d3167e92a622e5f4ec2d2fcbda045f25975))
* **components:error:** add Error component ([17c8900](https://github.com/Clumsy-Coder/exercise-tracker/commit/17c89002db9fea6f209b8f7766ddae8f866194ac))
* **hooks:** add react-query hook to fetch a single exercise using `exerciseId` ([952b15c](https://github.com/Clumsy-Coder/exercise-tracker/commit/952b15c8213667b3b900eaa6f87b2af3e242b915))
* **layout:exerciseId:** add layout for `/exercises/[exerciseId]` page ([951d60f](https://github.com/Clumsy-Coder/exercise-tracker/commit/951d60fee35d5534e07347a9bcc55b6230d7a5d2))
* **page:exerciseId:** add `Loading` component for `/exercises/[exerciseId]` page ([eb10031](https://github.com/Clumsy-Coder/exercise-tracker/commit/eb1003184ae88d520063bfd01945722a87c832e9))
* **page:exerciseId:** display `Loading` component when fetching data ([b040a5e](https://github.com/Clumsy-Coder/exercise-tracker/commit/b040a5e0de54b8aca21539606b581b5f6802ece8))
* **schema:** add schema for `/api/exercises/[exerciseId]` ([d307312](https://github.com/Clumsy-Coder/exercise-tracker/commit/d307312419c2b130264f62a259a18f5a98b4df14))


### :package: Build System

* **npm:** add package `zod` ([8dd74e1](https://github.com/Clumsy-Coder/exercise-tracker/commit/8dd74e1e00bf4589e416b00063c2f099bb640338))
* **shadcn:** add component `Dialog` ([f182a5b](https://github.com/Clumsy-Coder/exercise-tracker/commit/f182a5b25a23dee7e5e2ae0b7cae7afff2fa7ee2))

## [1.0.0-development.5](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.4...v1.0.0-development.5) (2024-2-15)


### :sparkles: Features

* **actions:** add server action for fetching all exercises ([b20a9d5](https://github.com/Clumsy-Coder/exercise-tracker/commit/b20a9d595882f0792e28f576a43faa40b4e1f73d)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **actions:** add server action for fetching exercise `equipment list` ([61ab7d7](https://github.com/Clumsy-Coder/exercise-tracker/commit/61ab7d76cb70a6cae2feaa7d111d72efda2488fe)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **actions:** add server action for fetching exercise `target list` ([55e387d](https://github.com/Clumsy-Coder/exercise-tracker/commit/55e387d546f53891cfae0a80db1f8eed1cb9df83)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **api:** add endpoint for fetching `equipment list` ([f57dccd](https://github.com/Clumsy-Coder/exercise-tracker/commit/f57dccd4fdd653c729a1bff1d3dff635c4aaf8e5))
* **api:** add endpoint for fetching `target list` ([abbdf80](https://github.com/Clumsy-Coder/exercise-tracker/commit/abbdf80249cdc02b4464425cd64501060426d052))
* **api:** add endpoint for fetching all exercises ([8902354](https://github.com/Clumsy-Coder/exercise-tracker/commit/890235476750bc6210222f9067cfea00103ee876))
* **components:exerciseGroup:** add ability to search exercises ([cb23d5f](https://github.com/Clumsy-Coder/exercise-tracker/commit/cb23d5f5c4a219b1feb972c08132addfa5d86367))
* **components:exercisesGroup:** add basic pagination ([8d6b687](https://github.com/Clumsy-Coder/exercise-tracker/commit/8d6b687771ff0c5ecd674c44654266dcaabf86ea))
* **components:exercisesGroup:** add clear button for search input ([7f2bd6f](https://github.com/Clumsy-Coder/exercise-tracker/commit/7f2bd6fdfe0a11ba8d9a2504209395a0fb5f3485))
* **components:** add component `ExerciseCard` ([1d25252](https://github.com/Clumsy-Coder/exercise-tracker/commit/1d252523fd799026c4aa790e8fa97bd477cbc1c3))
* **components:** add component `ExercisesGroup` ([552f703](https://github.com/Clumsy-Coder/exercise-tracker/commit/552f7031e91869b37518b09841f59518fc91370a))
* **layout:exercises:** add layout for `/exercises` page ([012b05b](https://github.com/Clumsy-Coder/exercise-tracker/commit/012b05b9c8649d681d3781690b3641b4483c4469))
* **page:exercises:** add component to render exercises by links ([feabf04](https://github.com/Clumsy-Coder/exercise-tracker/commit/feabf0450f201ef17b3effbe7d8b683d5c52294c))
* **page:exercises:** display exercise equipment list ([c8cebb3](https://github.com/Clumsy-Coder/exercise-tracker/commit/c8cebb398a70411feba2ba5a379c1a98c195f06e)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display exercise name and id ([c268305](https://github.com/Clumsy-Coder/exercise-tracker/commit/c268305b1a32687d7d333e6ddde368f974028f6b)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display exercise target list ([6b94c7f](https://github.com/Clumsy-Coder/exercise-tracker/commit/6b94c7f8f81d8d98bed422a60e8515ac405762d2)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)
* **page:exercises:** display links for exercise by target and equipment on larger screens ([abfaedf](https://github.com/Clumsy-Coder/exercise-tracker/commit/abfaedf0090ff8f0cf7c62432bec68e50c62d598))
* **page:exercises:** display links for exercises by target and equipment using Accordion on smaller screens ([adb2ed9](https://github.com/Clumsy-Coder/exercise-tracker/commit/adb2ed9f17435d3deaf3c1178fdeea231a6e980b))
* **page:exercises:** render `ExercisesGroups` component ([0237497](https://github.com/Clumsy-Coder/exercise-tracker/commit/02374979186dc5c2493c284d1566901edf79204c)), closes [#22](https://github.com/Clumsy-Coder/exercise-tracker/issues/22)


### :books: Documentation

* **components:exercisesGroup:** add docs for `ExercisesGroup` component ([dffeb26](https://github.com/Clumsy-Coder/exercise-tracker/commit/dffeb261dff6e57d2516153c457eed0c4b9f5ed2))
* **docs:images:** add screenshots for `Exercises` page ([d19fb4d](https://github.com/Clumsy-Coder/exercise-tracker/commit/d19fb4db6776b200f5bbf74b009f90c66c23a08f))
* **readme:** display screenshots of `Exercises` page ([bd6722b](https://github.com/Clumsy-Coder/exercise-tracker/commit/bd6722b84677dd14efc902072eee142c0b12e70c))


### :lipstick: Styles

* **components:exercisesGroups:** remove width style for search input ([7d10dd3](https://github.com/Clumsy-Coder/exercise-tracker/commit/7d10dd367bd8716919452b2e28207d50fdb06578))
* **css:** add class `input-with-clear-button` ([dad6b62](https://github.com/Clumsy-Coder/exercise-tracker/commit/dad6b62c98db89ec8f90cb04fff82631bea8aba1))
* **css:** add custom tailwind classes ([5aeef1d](https://github.com/Clumsy-Coder/exercise-tracker/commit/5aeef1df46515e17462fca08072d0f52c1f5167f))


### :octopus: Miscellaneous Chores

* **api:url:** add function to get `equipment list` url ([d21816c](https://github.com/Clumsy-Coder/exercise-tracker/commit/d21816c9ef60cdf76e5092d5e0e3b0b36eff1c94))
* **api:url:** add function to get `target list` url ([3c60f68](https://github.com/Clumsy-Coder/exercise-tracker/commit/3c60f68de4004ada2636e631b73e5cb3dc16c43d))
* **api:url:** add function to get all exercises ([5e0e5e4](https://github.com/Clumsy-Coder/exercise-tracker/commit/5e0e5e42b9912de6a8fd717a8e48992786f1cedd))
* **components:** add `ReactQueryClientProvider` component ([ef08215](https://github.com/Clumsy-Coder/exercise-tracker/commit/ef082150f1f1b639d48546e37188f5e50d2c2c82))
* **hooks:** add react-query hook to fetch all exercises ([1c21341](https://github.com/Clumsy-Coder/exercise-tracker/commit/1c213417b06324d5d15c4aacd0fff9d1921cf8b5))
* **hooks:** add react-query hook to fetch exercise `target list` ([b3a5c18](https://github.com/Clumsy-Coder/exercise-tracker/commit/b3a5c1881ebc104eed8d1b8de324915f43248b5d))
* **hooks:** add react-query hook to fetch exercise equipment list ([79a6014](https://github.com/Clumsy-Coder/exercise-tracker/commit/79a60149ed6851c24d08788c8f858380e9cc3e86))
* **layout:exercises:** prefetch from `/api/exercises/equipments` ([e8093bb](https://github.com/Clumsy-Coder/exercise-tracker/commit/e8093bb5c65c5338ef6b59af36467c3688b6a46d))
* **layout:exercises:** prefetch from `/api/exercises/targets` ([cda53e7](https://github.com/Clumsy-Coder/exercise-tracker/commit/cda53e7143c642977c20ff61e3e2e31e66484a95))
* **layout:** add property `suppressHydrationWarning` ([731bbc8](https://github.com/Clumsy-Coder/exercise-tracker/commit/731bbc8ed3dcd791b052f2cc199f645b8057cf0f))
* **layout:** add react-query to NextJS ([c271400](https://github.com/Clumsy-Coder/exercise-tracker/commit/c2714001969c52392246e9606d7896e0a223193b))
* **page:exercises:** add `Loading` component for `Exercises` page ([944144f](https://github.com/Clumsy-Coder/exercise-tracker/commit/944144f03ffcb2849fafa378107f453d0a2be042))
* **page:exercises:** display `Loading` component when fetching data ([c7d40f4](https://github.com/Clumsy-Coder/exercise-tracker/commit/c7d40f449979797a88fe4834dd3f98988d5846a2))
* **types:** add type for NextJS envs ([40efd1a](https://github.com/Clumsy-Coder/exercise-tracker/commit/40efd1a7c2a6b1b095f107d1f838a6bce1e7c5ca))
* **types:** add type for upstream API ([4685f89](https://github.com/Clumsy-Coder/exercise-tracker/commit/4685f893dcf130427a85729ceddca631f4d2c581))
* **utils:links:** add link `Exercises` ([70d799d](https://github.com/Clumsy-Coder/exercise-tracker/commit/70d799dd76ddd230ba970bb7b198d6c3b834af0c))


### :recycle: Code Refactoring

* **api:exercises:** set limit when fetching all exercises ([a1bafa0](https://github.com/Clumsy-Coder/exercise-tracker/commit/a1bafa0ba0530044708d24ad0bdd89c2172ffe5a))
* **api:url:** increase number of elements returned for all exercises ([4226f14](https://github.com/Clumsy-Coder/exercise-tracker/commit/4226f14e5609a7874f606a6e4850690dc2737fa8))
* **api:url:** rename function `fetchAllExercises` to `fetchAllExercisesUrl` ([24414e5](https://github.com/Clumsy-Coder/exercise-tracker/commit/24414e502a2834aa1aee38849aa184a1c80715eb))
* **components:exercisesGroup:** use constant when setting `showLimit` ([8dce5cc](https://github.com/Clumsy-Coder/exercise-tracker/commit/8dce5cc0ce8a9b188fca7f86e986d346cb728444))
* **page:exercises:** use component `ExercisesBy` for rendering exercises by target and equipment links ([f13fc5b](https://github.com/Clumsy-Coder/exercise-tracker/commit/f13fc5ba02ab8ac35f1bd00a64df2ddb3ea99a73))


### :package: Build System

* **api:** add headers for fetching ExerciseDB ([49dd3bf](https://github.com/Clumsy-Coder/exercise-tracker/commit/49dd3bfe66f3fb16b40fb4d3dd4117229a5a931e))
* **deps:** bump @vercel/analytics from 1.1.2 to 1.1.3 ([8ce002b](https://github.com/Clumsy-Coder/exercise-tracker/commit/8ce002bfbc903e3bbc15c119ec6526cfa9a02f3c))
* **deps:** bump lucide-react from 0.314.0 to 0.315.0 ([6c98361](https://github.com/Clumsy-Coder/exercise-tracker/commit/6c98361ca7b9069ac59872adbbe732ac70fb9db1))
* **deps:** bump lucide-react from 0.315.0 to 0.316.0 ([5e5aaa9](https://github.com/Clumsy-Coder/exercise-tracker/commit/5e5aaa9bce7aced6f0bab7f400c6b2b6b4d77fd8))
* **deps:** bump lucide-react from 0.316.0 to 0.317.0 ([4461e97](https://github.com/Clumsy-Coder/exercise-tracker/commit/4461e973cfe64dfef9dd28d8c4a26c3dd2c71314))
* **deps:** bump lucide-react from 0.317.0 to 0.319.0 ([10f2e40](https://github.com/Clumsy-Coder/exercise-tracker/commit/10f2e404b63214675124032af863cdc830a7509b))
* **deps:** bump lucide-react from 0.319.0 to 0.320.0 ([a01b12b](https://github.com/Clumsy-Coder/exercise-tracker/commit/a01b12bdcf90c25a549086a1822d24d8cbd679b9))
* **deps:** bump lucide-react from 0.320.0 to 0.321.0 ([ac2b90d](https://github.com/Clumsy-Coder/exercise-tracker/commit/ac2b90d17f2e17574e1b6cac3ad21b8c9721a09a))
* **deps:** bump lucide-react from 0.321.0 to 0.323.0 ([15f2d14](https://github.com/Clumsy-Coder/exercise-tracker/commit/15f2d14071222694cbc5b12682e5eb8dcd6f0a23))
* **deps:** bump lucide-react from 0.323.0 to 0.325.0 ([194e799](https://github.com/Clumsy-Coder/exercise-tracker/commit/194e799aac666fff016825e38b827a9423757118))
* **deps:** bump lucide-react from 0.325.0 to 0.330.0 ([808c1e4](https://github.com/Clumsy-Coder/exercise-tracker/commit/808c1e45b381bf0a5b664812fa4438c7e0ecfefb))
* **deps:** bump vaul from 0.8.9 to 0.9.0 ([30f0206](https://github.com/Clumsy-Coder/exercise-tracker/commit/30f020644573d87399e61f1803809a9cfe5d0071))
* **devDep:** bump @types/node from 20.11.10 to 20.11.13 ([c7a7193](https://github.com/Clumsy-Coder/exercise-tracker/commit/c7a71939baacab30c20510a42cb72b08f30dbcc7))
* **devDep:** bump @types/node from 20.11.13 to 20.11.14 ([a50bf50](https://github.com/Clumsy-Coder/exercise-tracker/commit/a50bf50f75d7d0245d4fdbaf9ae444f7c0c5a4b1))
* **devDep:** bump @types/node from 20.11.14 to 20.11.16 ([9e70440](https://github.com/Clumsy-Coder/exercise-tracker/commit/9e70440ccb283158858e6fac6ff67453d25e53fc))
* **devDep:** bump @types/node from 20.11.16 to 20.11.17 ([43fcf0a](https://github.com/Clumsy-Coder/exercise-tracker/commit/43fcf0a1c46cbf7bb32a4b9f8a7a91997c6249a1))
* **devDep:** bump @types/node from 20.11.5 to 20.11.6 ([4f8da40](https://github.com/Clumsy-Coder/exercise-tracker/commit/4f8da406e01941bbe5c605159c748fdd3dc75f09))
* **devDep:** bump @types/node from 20.11.6 to 20.11.10 ([b6bcbcb](https://github.com/Clumsy-Coder/exercise-tracker/commit/b6bcbcb2f7d59f963fcef0f5d5614ee77ccc5444))
* **devDep:** bump @types/react from 18.2.48 to 18.2.51 ([1ab2ae4](https://github.com/Clumsy-Coder/exercise-tracker/commit/1ab2ae4cfaf2b6e1977ffc9adcd7a1717a73ef8d))
* **devDep:** bump @types/react from 18.2.51 to 18.2.53 ([b5d85a9](https://github.com/Clumsy-Coder/exercise-tracker/commit/b5d85a93b851eafdf0f185d5929f60ddf8ac2f8f))
* **devDep:** bump @types/react from 18.2.53 to 18.2.54 ([5a30516](https://github.com/Clumsy-Coder/exercise-tracker/commit/5a305166dc681a0778677dcadacbd6f7bd15adbe))
* **devDep:** bump @types/react from 18.2.54 to 18.2.55 ([e3068ac](https://github.com/Clumsy-Coder/exercise-tracker/commit/e3068acfd0d1cf2f0ecf74ad92264eea5957fced))
* **devDep:** bump @types/react-dom from 18.2.18 to 18.2.19 ([c736841](https://github.com/Clumsy-Coder/exercise-tracker/commit/c7368418716e4217b1d8e7c3f41c426e49483ebc))
* **devDep:** bump @typescript-eslint/eslint-plugin ([b4ce0de](https://github.com/Clumsy-Coder/exercise-tracker/commit/b4ce0de81bf5ef0d23919d0c29d72b4b3276ad4b))
* **devDep:** bump @typescript-eslint/eslint-plugin ([dde1805](https://github.com/Clumsy-Coder/exercise-tracker/commit/dde1805207ee0d08fdd8d444aa5181b6aabaa00b))
* **devDep:** bump @typescript-eslint/parser from 6.19.1 to 6.20.0 ([f380eb2](https://github.com/Clumsy-Coder/exercise-tracker/commit/f380eb24e233e6a2997c55bec5c25ec58780aecc))
* **devDep:** bump @typescript-eslint/parser from 6.20.0 to 6.21.0 ([4e85ab8](https://github.com/Clumsy-Coder/exercise-tracker/commit/4e85ab8ee5f82dcfeafbb51f64bb79152a14f195))
* **devDep:** bump postcss from 8.4.33 to 8.4.34 ([2db83e3](https://github.com/Clumsy-Coder/exercise-tracker/commit/2db83e3ed5deb6cb2e201ec5d5e65cd8b42d0670))
* **devDep:** bump postcss from 8.4.34 to 8.4.35 ([a347f7c](https://github.com/Clumsy-Coder/exercise-tracker/commit/a347f7c6d6c1092c3c8ef439a2f265c649e73d0f))
* **devDep:** bump prettier from 3.2.4 to 3.2.5 ([8227b1f](https://github.com/Clumsy-Coder/exercise-tracker/commit/8227b1f4dd2ca7d35b15e5044b8b1d7767fb627a))
* **devDep:** bump semantic-release from 23.0.0 to 23.0.1 ([18537ee](https://github.com/Clumsy-Coder/exercise-tracker/commit/18537eec84383b74dd79d6f89d0be3013d9c5f93))
* **devDep:** bump semantic-release from 23.0.1 to 23.0.2 ([363c7cd](https://github.com/Clumsy-Coder/exercise-tracker/commit/363c7cdcac10962d72261ce3b619b1a55b7ad57d))
* **nextjs:** add cross origin url to fetch exercise GIFs ([8732ec8](https://github.com/Clumsy-Coder/exercise-tracker/commit/8732ec87e3d5301b8b0d6315389e52e959695796))
* **nextjs:** enable detail logging in dev mode ([a341a16](https://github.com/Clumsy-Coder/exercise-tracker/commit/a341a16e80eec2d47753a000026b03845eba23f4))
* **npm:** add package `@tanstack/react-query-devtools` ([00adbbf](https://github.com/Clumsy-Coder/exercise-tracker/commit/00adbbf4ecdf39d8e0505c2cbf55d5caee0d96cc))
* **npm:** add package `@tanstack/react-query` ([9f2ad68](https://github.com/Clumsy-Coder/exercise-tracker/commit/9f2ad68151e4ba0a263e5f50059ab0d8e91b3f1b))
* **npm:** add package `axios` ([5343754](https://github.com/Clumsy-Coder/exercise-tracker/commit/534375429db80cc1622fced70135f519660ec74f))
* **npm:** change npm script `dev` to run dev server ([aba8eab](https://github.com/Clumsy-Coder/exercise-tracker/commit/aba8eab9efd51804c991a5e4302be2e48144e5c2))
* **shadcn:** add component `Accordion` ([a8eef2a](https://github.com/Clumsy-Coder/exercise-tracker/commit/a8eef2a0a8c091805e1e1c0b74efb4a5c91fede3))
* **shadcn:** add component `Badge` ([92ac566](https://github.com/Clumsy-Coder/exercise-tracker/commit/92ac566eabda49d40d74cd3a59b335aefa1e4b65))
* **shadcn:** add component `Card` ([d997c30](https://github.com/Clumsy-Coder/exercise-tracker/commit/d997c3006e72d46d99f91843b424827898a0df48))
* **shadcn:** add component `Input` ([987dc60](https://github.com/Clumsy-Coder/exercise-tracker/commit/987dc6053072c93dbfe9ec4791c51c3e7a271a12))
* **shadcn:** add component `Separator` ([e845a3d](https://github.com/Clumsy-Coder/exercise-tracker/commit/e845a3d7ed1694c1dfdf7c63d36d9e21ae26882f))
* **shadcn:** add component `Skeleton` ([1804911](https://github.com/Clumsy-Coder/exercise-tracker/commit/18049113301aa703c2e0ab60338ce6e5b7a8704b))
* **shadcn:** add component `Tooltip` ([eccd471](https://github.com/Clumsy-Coder/exercise-tracker/commit/eccd4718759f8ebfd572bfd2a8970c61186fd592))
* **tailwind:** add some custom colours ([19b194e](https://github.com/Clumsy-Coder/exercise-tracker/commit/19b194e9e47f095b3be3a74ee858ca2de1495f71))


### :construction_worker: Continuous Integration

* **github-action:** bump actions/delete-package-versions from 4 to 5 ([80213c3](https://github.com/Clumsy-Coder/exercise-tracker/commit/80213c3fb848c18cbf66324d595e372884294835))
* **github-action:** bump docker/metadata-action from 5.5.0 to 5.5.1 ([4eb7c85](https://github.com/Clumsy-Coder/exercise-tracker/commit/4eb7c8596009e3f53f2afe6fe4325ead7de1c454))
* **workflows:** add env `EXERCISE_DB_API` when building docker image ([6477af3](https://github.com/Clumsy-Coder/exercise-tracker/commit/6477af3034a0801918e486c54ac13e9e44804514))

## [1.0.0-development.4](https://github.com/Clumsy-Coder/exercise-tracker/compare/v1.0.0-development.3...v1.0.0-development.4) (2024-1-25)


### :sparkles: Features

* **components:navbar:** add Drawer for smaller screens ([46245b4](https://github.com/Clumsy-Coder/exercise-tracker/commit/46245b4627c0c95c70f8715f4273bf5e16030a1f)), closes [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19)
* **components:navbar:** hide nav links in smaller screen ([9047117](https://github.com/Clumsy-Coder/exercise-tracker/commit/9047117d51e1c16939d710bfb32e7bfff552e295)), closes [#19](https://github.com/Clumsy-Coder/exercise-tracker/issues/19)


### :recycle: Code Refactoring

* **utils:** move `links` array to `utils/index.ts` ([97f489f](https://github.com/Clumsy-Coder/exercise-tracker/commit/97f489f2737a8d0d94447b90ad51907642218293))


### :package: Build System

* **shadcn:** add component `Drawer` ([4f10056](https://github.com/Clumsy-Coder/exercise-tracker/commit/4f10056ce1443101eaf56f378a8a8cba0ae663ad))


### :construction_worker: Continuous Integration

* **workflows:cleanup:** segment getting all container ID and filtering by branchname ([fcd1165](https://github.com/Clumsy-Coder/exercise-tracker/commit/fcd116535d1018d3f5eb0ee6d9df4306fd40b389))

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
