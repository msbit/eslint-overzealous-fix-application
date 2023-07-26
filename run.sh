#!/usr/bin/env bash

npx eslint test.js
npx eslint --fix test.js
git checkout -- test.js
