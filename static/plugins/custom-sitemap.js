const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

module.exports = function customSitemapPlugin(context, options) {
  return {
    name: 'custom-sitemap-plugin',
    async postBuild({ siteConfig, routesPaths }) {
      const { url: siteUrl, trailingSlash } = siteConfig;
      const priorityMap = options.priorityMap || {};
      const excludePaths = options.excludePaths || [];

      const smStream = new SitemapStream({ hostname: siteUrl });

      // Генерация Sitemap
      routesPaths.forEach((route) => {
        if (excludePaths.includes(route)) {
          return;
        }

        const match = priorityMap[route] || priorityMap[route.replace(/\/$/, '')] || {};
        const { priority = 0.5, changefreq = 'weekly' } = match;

        smStream.write({
          url: route + (trailingSlash ? '/' : ''),
          changefreq,
          priority,
        });
      });

      smStream.end();

      try {
        const sitemap = await streamToPromise(smStream).then((data) => data.toString());
        const sitemapPath = path.join(context.outDir, 'sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap);
        console.log(`Custom Sitemap successfully generated at: ${sitemapPath}`);
      } catch (error) {
        console.error('Error while generating Sitemap:', error);
      }
    },
  };
};
