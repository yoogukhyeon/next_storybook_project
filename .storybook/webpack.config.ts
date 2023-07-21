import path from 'path';

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@/components': path.resolve(__dirname, '../components'),
    '@/styles': path.resolve(__dirname, '../styles'),
    '@/utils': path.resolve(__dirname, '../utils'),
    '@/constants': path.resolve(__dirname, '../constants'),
    public: path.resolve(__dirname, '../public'),
  };
  return config;
};
