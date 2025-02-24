#!/bin/bash

if [ $# -ne 1 ]; then
  echo "You must include exactly one parameter."
  echo "Please provide the docker hub repository this project should be published to."
  exit 1
fi

repo=$1

docker build --push -t $repo/web-server:latest .