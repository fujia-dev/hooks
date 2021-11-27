#!/usr/bin/env sh

set -e
echo "Enter relase version(should greater than current version): "
read VERSION
read -p "Releasing $VERSION - are you sure?(y/n)" -n 1 -r
echo # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  sed -i "" 's/\("version":"\).*/\1'"$VERSION"'",/g' ../package.json
  echo "Relasing $VERSION ..."

  # upgrade version
  git add -A
  git commit -m "feat: [build] $VERSION"
  npm version $VERSION --message "feat: [release] $VERSION"
  git push origin main

  # publish
  npm publish --access public
fi
