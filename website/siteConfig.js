/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Salesforce Troop", // Title for your website.
  tagline: "The best part of learning is sharing what you know.",
  url: "https://karkranikhil.github.io", // Your website URL
  baseUrl: "/salesforcetroop/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "salesforcetroop",
  organizationName: "karkranikhil",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // { doc: "admin/salesforce-overview", label: "BASICS" },
    { doc: "lwc/LWC-introduction", label: "LWC" },
    { doc: "lwc_videos/lwc-introduction", label: "LWC VIDEOS" },
    // { doc: "apex/apex-introduction", label: "APEX" },
    {
      doc: "integration/salesforce-integration-introduction",
      label: "INTEGRATION"
    },
    // {
    //   doc: "einstein/salesforce-analytics-query-language-saql",
    //   label: "EINSTEIN"
    // },
    // {
    //   doc: "service_cloud/salesforce-service-cloud-intro",
    //   label: "SERVICE CLOUD"
    // }
  ],

  /****actual headerlink */
  // headerLinks: [
  //   { doc: "doc1", label: "APEX" },
  //   { doc: "lwc1", label: "LWC" },
  //   { page: "help", label: "INTEGRATION" },
  //   { blog: true, label: "EINSTEIN" }
  // ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/favicon.ico",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#295646",
    secondaryColor: "#1c3c31"
  },
  usePrism: ["jsx", "js", "html", "xml", "css"],
  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Salesforce Troop`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "/salesforcetroop/js/buttons.js",
    "/salesforcetroop/js/clipboard.min.js",
    "/salesforcetroop/js/code-block-buttons.js"
    // {
    //   src:
    //     "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=315217815749416&autoLogAppEvents=1",
    //   async: true
    // }
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/karkranikhil/salesforcetroop",
  facebookAppId: "254156535575786",
  facebookComments: true,
  facebookPixelId: "1499316810226778",
  // cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  }
};

module.exports = siteConfig;
