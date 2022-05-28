# build.sh
#!/bin/bash

# We dereference the symlinks in node_modules using the -h option
tar -zchf node_modules.tar.gz node_modules

docker build --target prod -t name-service .

rm node_modules.tar.gz 