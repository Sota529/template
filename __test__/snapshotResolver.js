module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('src', '__test__/__snapshots__') + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace('__tests__/', '').replace(snapshotExtension, ''),

  testPathForConsistencyCheck: 'test/pages/example.test.tsx'
}
