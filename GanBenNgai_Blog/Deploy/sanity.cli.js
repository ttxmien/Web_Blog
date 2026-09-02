import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gd6oa01a',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'xrlr7n4of2c32yirg4dsmv1w',
  },
  studioHost: 'ganbenngai'
})
