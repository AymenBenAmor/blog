// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = withMDX(
  withCSS({
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = { fs: 'empty' };
      }

      return config;
    },
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  })
);
