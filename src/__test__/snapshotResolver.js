module.exports = {
  // testがsnapshpotを作成する場所
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('src', 'src/__test__/__snapshots__') + snapshotExtension,

  // snapshpotがtestを探す場所
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('src/__test__/__snapshots__', 'src')
      .replace(snapshotExtension, ''),

  testPathForConsistencyCheck: 'test/pages/example.test.tsx'
}
