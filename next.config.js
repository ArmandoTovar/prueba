/** @type {import('next').NextConfig} */
// eslint-disable-next-line
const nextConfig = {
  reactStrictMode: true
} 
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
});