
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/matt/Desktop/gatsby-demo/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/matt/Desktop/gatsby-demo/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/matt/Desktop/gatsby-demo/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/matt/Desktop/gatsby-demo/src/pages/index.js"))
}

