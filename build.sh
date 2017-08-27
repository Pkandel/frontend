#!/bin/bash
docker ps -a | awk '{ print $1,$2 }' | grep pkandel/frontend:latest | awk '{print $1 }' | xargs -I {} docker rm {} -f
docker build --no-cache -t pkandel/frontend:latest .
