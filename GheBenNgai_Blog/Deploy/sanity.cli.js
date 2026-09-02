import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gd6oa01a',
    dataset: 'production'
  },
  // deployment: {
  //   /**
  //    * Enable auto-updates for studios.
  //    * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
  //    */
  //   autoUpdates: true,
  //   appId: 'rr44tuvcvd7nfqqkm8fej90',
  // },
})
