
npm --no-git-tag-version version $1

git commit -am "project version update"

cd src && npm version $1 
