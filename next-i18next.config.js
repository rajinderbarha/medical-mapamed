/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
    i18n: {
        defaultLocale: 'ro',
        locales: ['ro', 'en'],
    },
    localePath: './public/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = nextI18NextConfig; 
