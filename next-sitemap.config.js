/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kimdarren.com', 
  generateRobotsTxt: true,  
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/secret-page'],
//   additionalPaths: async (config) => [
//   await config.transform(config, '/about'),
//   await config.transform(config, '/projects'),
//   await config.transform(config, '/contact'),
// ],
};