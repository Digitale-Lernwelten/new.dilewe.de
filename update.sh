#!/bin/sh
cd "$(dirname "$0")" # To make sure pwd is set correctly
git pull && npm run build && chown -R www-data:www-data ./