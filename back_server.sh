#!/bin/dash
rm -rf ./public/static
npm run build --prefix ./public/frontend
php artisan serve