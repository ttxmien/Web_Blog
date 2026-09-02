import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gd6oa01a',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'rr44tuvcvd7nfqqkm8fej90',
  },
})
