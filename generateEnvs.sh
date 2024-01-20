#!/bin/bash

# creates ENVs and puts them into .env.local file
# NOTE: this is ONLY used for development purposes only.

set -x
# generate ENVs

{
  echo "NEXT_PUBLIC_BUILD_VERSION=$(npm run -s generateVersion)"
  echo "NEXT_PUBLIC_BUILD_ID=$(npm run -s generateBuildId)"
  echo "NEXT_PUBLIC_BUILD_TIME=$(date +%s)"                       # build date & time in unix time
} > .env.local

