module.exports = {
  branches: ['main', { name: 'development', prerelease: true }],
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      },
    ],
    'semantic-release-export-data',
  ],
  // use https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits
  // release rules: https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-rules.js
  preset: 'conventionalcommits',

  // git emoji obtained from
  //    https://gist.github.com/parmentf/035de27d6ed1dce0b36a
  //    https://github.com/caiyongji/emoji-list
  //    https://github.com/pvdlg/conventional-changelog-metahub#commit-types
  // preset config for generating release notes and changelogs
  //    https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.0.0/README.md#type
  // prettier-ignore
  presetConfig: {
    types: [
      { type: "feat",     section: ":sparkles: Features",                          }, // MINOR
      { type: "fix",      section: ":bug: Bug Fixes",                              }, // PATCH
      { type: "perf",     section: ":zap: Performance Improvements",               }, // PATCH
      { type: "revert",   section: ":rewind: Reverts",                             }, // NO_RELEASE
      { type: "docs",     section: ":books: Documentation",                        }, // NO_RELEASE
      { type: "style",    section: ":lipstick: Styles",                            }, // NO_RELEASE
      { type: "chore",    section: ":octopus: Miscellaneous Chores",               }, // NO_RELEASE
      { type: "refactor", section: ":recycle: Code Refactoring",                   }, // NO_RELEASE
      { type: "test",     section: ":white_check_mark: Tests",                     }, // NO_RELEASE
      { type: "build",    section: ":package: Build System",                       }, // NO_RELEASE
      { type: "ci",       section: ":construction_worker: Continuous Integration", }, // NO_RELEASE
    ],
  },
};
