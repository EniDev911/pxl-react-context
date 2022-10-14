#!/usr/bin/env sh
set -e
# build
npm run buil
# change directory
cd dist

# init git
git init
git checkout -b main
git add .
git commit -m 'deploy'

git push -f git@github.com:enidev911/pxl-react-context.git main:gh-pages
cd -
