#!/bin/sh
# What's your app name?
APP_NAME="<%= name %>"

REPO_NAME="<%= repoName %>"

# What's your project's Git repo?
GIT_URL="git://github.com/<%= owner %>/<%= repoName %>"

# IP or URL of the server you want to deploy to
APP_HOST="sv-nodedev01"

# Setup a listening port for your instance / default is 80
PORT=8000

# Sets mongod db the app uses
MONGO_DB="meteor"

# If you want a different ROOT_URL, when using a load balancer for instance, set it here
ROOT_URL="http://sv-nodedev01:8000"

#If you have an external service, such as Google SMTP, set this
#MAIL_URL=smtp://USERNAME:PASSWORD@smtp.googlemail.com:465

# Application path relative to the root of the git repository root
# If your app is not on the repository root, set this
APP_PATH=.

# If you would like to use a different branch, set it here
GIT_BRANCH=master

# Kill the forever and node processes, and deletes the bundle directory deploying
FORCE_CLEAN=true

# If you want to do something before forever starts Meteor, you can do it here
# NOTE: Don't forget to use a semi-colon at the end of every command
#PRE_METEOR_START="export ENVIRONMENT=prod;"