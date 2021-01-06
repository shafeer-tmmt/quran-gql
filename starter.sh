#!/bin/bash
echo "Set project folder as current directory"
cd "$(dirname "$0")"

echo "Stash the un committed files"
git stash save "tbd"

echo "Pull latest changes"
git pull origin master

echo "Stoping the App"
sudo pm2 stop "Quran-gql"

echo "Deleting the App"
sudo pm2 delete "Quran-gql"

echo "Building the App"
npm run build

echo "Starting the App"
sudo pm2 start npm --no-automation --name Quran-gql -- run "start:prod"