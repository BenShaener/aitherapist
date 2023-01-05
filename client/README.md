# Automatically build a container image

- Install commandline utility "pack" following this guide https://buildpacks.io/docs/tools/pack/
- Install Docker using appropriate steps for your OS https://docker-docs.netlify.app/install/#supported-platforms
- Build your app from commandline at same directory where package.json is located
`pack build aitherapist-ui --buildpack paketo-buildpacks/nodejs --builder paketobuildpacks/builder:full`
- output should end with similar output

`Lots of stuff.... then
===> EXPORTING
Reusing layer 'paketo-buildpacks/ca-certificates:helper'
Reusing layer 'paketo-buildpacks/node-engine:node'
Adding layer 'paketo-buildpacks/npm-install:launch-modules'
Adding layer 'launch.sbom'
Adding 1/1 app layer(s)
Reusing layer 'launcher'
Adding layer 'config'
Reusing layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving aitherapist-ui...
*** Images (9613c251aae9):
      aitherapist-ui
Reusing cache layer 'paketo-buildpacks/node-engine:node'
Adding cache layer 'paketo-buildpacks/npm-install:build-modules'
Adding cache layer 'paketo-buildpacks/npm-install:npm-cache'
Reusing cache layer 'paketo-buildpacks/node-module-bom:cyclonedx-node-module'
Adding cache layer 'cache.sbom'
Successfully built image aitherapist-ui` 

# Run your application

`docker run -p 3000:3000 -d -e MODELS_URL=http://localhost:3080 aitherapist-ui`



