/** @type {import("syncpack").RcFile} */
const config = {
  semverGroups: [
    {
      label: 'Internal workspace deps',
      dependencies: ['@admin-app/**'],
      dependencyTypes: ['dev', 'prod', 'peer'],
      range: '*',
    },
    {
      label: 'Peer deps',
      dependencyTypes: ['peer'],
      range: '>=',
    },
    {
      label: 'Default deps',
      dependencies: ['**'],
      dependencyTypes: ['prod', 'dev'],
      range: '^',
    },
  ],
};

export default config;
