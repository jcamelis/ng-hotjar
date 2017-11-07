
cd src && npm version $1

git commit -am "project source version update"

cd ..

npm version $1 
