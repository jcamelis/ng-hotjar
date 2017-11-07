
cd src && npm version $1

git commit -am "project source version update"

npm version $1 
