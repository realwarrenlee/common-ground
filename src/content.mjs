export const github = 'https://github.com/realwarrenlee';
export const brand = 'Common Ground Showcase';
export const slogan = 'Explore a collection of Singapore heritage with playful interactions.';

// 三项来自工作区实验，均不声称商业交付。
export const studies = [
  ['Puppet', 'gallery', 'd3c7b8', 'UI, Typography, Motion', 'Behind the Little Stage', 'https://github.com/realwarrenlee/puppet', 'https://chinese-puppet.vercel.app/'],
  ['Rattan', 'star-ring', '88a9d1', 'UX, Space, Motion', 'STILL TAKING SHAPE', 'https://github.com/realwarrenlee/rattan', 'https://rattan-products.vercel.app/'],
  ['Rangoli', 'dispersion', 'e9ae98', 'UI, Optics, Glass', 'A WELCOME THAT GROWS', 'https://github.com/realwarrenlee/rangoli', 'https://indian-rangoli.vercel.app/']
].map(([name, cover, uiColor, tags, description, projectURL, caseStudyURL], index) => ({
  id: `showcase-study-${index + 1}`,
  name, slug: cover, description,
  clientName: 'Common Ground Showcase',
  completionDate: '2026-09-30T00:00:00.000Z', uiColor, tags,
  priority: index + 1,
  projectURL, caseStudyURL,
  hideMetadata: true,
  // 原 WorkItem 以媒体 URL 判断当前卡片；每项保持唯一 URL，避免同时激活复用封面的卡片。
  video: { url: `/assets/daily/study-${cover}.jpg`, thumbnail: `/assets/daily/cover-${cover}.jpg` }
}));
