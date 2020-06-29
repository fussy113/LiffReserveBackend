#! /bin/bash

docker run --rm -it -v $PWD:/var/task:ro,delegated lambci/lambda:nodejs12.x $@
