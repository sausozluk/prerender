#!/usr/bin/env bash
docker build -t prerender .
docker tag prerender:latest erayarslan/prerender:prod
docker push erayarslan/prerender:prod