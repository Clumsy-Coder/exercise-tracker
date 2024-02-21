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
