#!/bin/sh
export $(grep -v '^#' .env.local | xargs -0)
