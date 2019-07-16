#!/bin/sh

npm run database migrate:latest && \
node index.js
