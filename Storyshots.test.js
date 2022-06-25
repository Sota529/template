import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter
} from '@storybook/addon-storyshots'

initStoryshots({
  test: multiSnapshotWithOptions(),
  integrityOptions: {
    integrityOptions: { cwd: __dirname } // it will start searching from the current directory
  },
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.snap.js'
  })
})
