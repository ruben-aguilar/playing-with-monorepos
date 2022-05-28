# Name Service

This is a micro service based on [hapi](https://hapi.dev/) that exposes a single endpoint to be consumed by the frontend app. 

## Interesting notes
- It uses `nohoist` prop in `package.json`, so all modules are always copied to the internal `node_modules` folder. 
  - This makes easier to create the final Docker image
  - Since this is an isolated service, there is no problem on having different versions of the packages in different services
  - When an internal package is used, yarn workspaces creates a symlink to that package in the internal `node_modules` folder
    - Symlinks does not work well with Docker `ADD` and `COPY` commands, that's why there is son "dereferenciation" code in `build.sh`