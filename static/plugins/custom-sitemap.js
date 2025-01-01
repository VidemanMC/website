const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

module.exports = function customSitemapPlugin(context, options) {
  return {
    name: 'custom-sitemap-plugin',
    async postBuild({ siteConfig, routesPaths }) {
      const { url: siteUrl, trailingSlash } = siteConfig;
      const priorityMap = options.priorityMap || {};

      // Создаём поток Sitemap
      const smStream = new SitemapStream({ hostname: siteUrl });

      // Генерация Sitemap
      routesPaths.forEach((route) => {
        // Пытаемся найти соответствие в priorityMap, проверяя с/без завершающего слэша
        const match = priorityMap[route] || priorityMap[route.replace(/\/$/, '')] || {};
        const { priority = 0.5, changefreq = 'weekly' } = match;

        // Лог для проверки корректности значений
        console.log({
          route,
          priority,
          changefreq,
          url: route + (trailingSlash ? '/' : ''),
        });

        // Запись данных в поток Sitemap
        smStream.write({
          url: route + (trailingSlash ? '/' : ''),
          changefreq,
          priority,
        });
      });

      // Закрываем поток
      smStream.end();

      try {
        // Преобразуем поток в строку
        const sitemap = await streamToPromise(smStream).then((data) => data.toString());

        // Сохраняем Sitemap в файл
        const sitemapPath = path.join(context.outDir, 'sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap);
        console.log(`Custom Sitemap successfully generated at: ${sitemapPath}`);
      } catch (error) {
        console.error('Error while generating Sitemap:', error);
      }
    },
  };
};
