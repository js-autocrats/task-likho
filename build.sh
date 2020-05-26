npm run build &&
echo "build success" &&
git checkout master &&
echo "moving to master-branch" &&
mv dist/task-likho/* ./ &&
echo "copied all files"
