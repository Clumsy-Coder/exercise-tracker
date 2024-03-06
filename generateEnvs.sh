#!/bin/bash

# creates ENVs and puts them into .env.local file
# NOTE: this is ONLY used for development purposes only.

set -x
# generate ENVs

# if running vercel. it has `vercel.json` file OR if running github actions
#   return npm package version
# else
#   return value from npm script `generateVersion`
if [ -z "$(git status --porcelain)" ]; then
  BUILD_VERSION=$(npm pkg get version | tr -d '\"')
else
  BUILD_VERSION=$(npm run -s generateVersion)
fi

{
  echo "NEXT_PUBLIC_BUILD_VERSION=$BUILD_VERSION"
  echo "NEXT_PUBLIC_BUILD_ID=$(npm run -s generateBuildId)"
  echo "NEXT_PUBLIC_BUILD_TIME=$(date +%s)"                       # build date & time in unix time
  # ----------------------------------------------------------------------------------------------#
  # base url for fetching exercise data
  # for more info, check file `./src/types/env.d.ts`
  #
  # default: https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/development/.database/
  #
  # echo "NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL="
  # ----------------------------------------------------------------------------------------------#
} > .env

