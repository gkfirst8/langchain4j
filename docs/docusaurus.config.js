// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'LangChain4j',
    tagline: 'Supercharge your Java application with the power of LLMs',
    favicon: 'img/favicon.ico',

    onBrokenLinks: 'warn', // ideally this should have a stricter value set - 'throw'
    onBrokenMarkdownLinks: 'warn', // ideally this should have a stricter value set - 'throw'
    onDuplicateRoutes: 'warn', // ideally this should have a stricter value set - 'throw'

    // Set the production url of your site here
    url: 'https://langchain4j.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/langchain4j/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'LangChain4j', // Usually your GitHub org/user name.
    projectName: 'LangChain4j', // Usually your repo name.

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/langchain4j/langchain4j/blob/main/docs',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/langchain4j/langchain4j/blob/main/docs',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            docs: {
                sidebar: {
                    hideable: true
                }
            },
            navbar: {
                title: 'LangChain4j',
                logo: {
                    alt: 'LangChain4j Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Introduction',
                    },
                    {to: '/docs/tutorials', label: 'Tutorials', position: 'left'},
                    {to: '/docs/category/integrations', label: 'Integrations', position: 'left'},
                    {
                        href: 'https://langchain4j.github.io/langchain4j/apidocs/index.html',
                        label: 'Javadoc',
                        position: 'left'
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/langchain4j/langchain4j',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorials',
                                to: '/docs/tutorials',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/langchain4j',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.com/invite/JzTFvyjG6R',
                            },
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/langchain4j',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/langchain4j/langchain4j',
                            },
                            {
                                label: "Examples",
                                href: 'https://github.com/langchain4j/langchain4j-examples'
                            }
                        ],
                    },
                ],
                copyright: `LangChain4j Documentation ${new Date().getFullYear()}. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['java'],
            },
        }),
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid']
};

export default config;
