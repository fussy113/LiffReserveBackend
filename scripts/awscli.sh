#! /bin/bash

docker run --rm -it -v ~/.aws:/root/.aws -v $PWD:/aws amazon/aws-cli:2.0.24 $@
