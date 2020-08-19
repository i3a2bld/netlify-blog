const config = {
  // Site info
  siteTitle: "Realstic Dreamer", // Site title.
  siteTitleShort: "Realstic Dreamer", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Realstic Dreamer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://roundangular.netlify.app/", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The purpose of this blog is to share information on living and travelling in South Korea with those who come from other countires and are living and travelling in South Korea and also some information about IT and Blog building", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRsstitle: "Daegyun's new feed",
  siteRsslink: "http://feeds.feedburner.com/Roundangular",
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-175783895-1", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 6,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: false,
    disqusShortname: "i3a2bld-netlify-com", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "010356671340023228016:gikute0haba",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
   {
      label: "Naver Blog",
      url: "https://blog.naver.com/roundangular"
      }
  ],
  // Use for user info
  userName: "Daegyun", // Username to display in the author segment.
  userEmail: "daegyun.na@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "@NaDaegyun", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Yongin, South Korea", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Project Manager in automotive, Lover to learn new", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
      {
         label: "Email",
         url: "mailto:daegyun.na@gmail.com",
         iconClassName: "far envelope"
      },
      {
          label: "Facebook",
          url: "https://www.facebook.com/daegyun.na.5",
          iconClassName: "fab facebook-square"
      },
      {
          label: "Twitter",
          url: "https://twitter.com/daegyunna",
          iconClassName: "fab twitter-square"
      },
      {
          label: "Linkedin",
          url: "https://www.linkedin.com/in/daegyunna",
          iconClassName: "fab linkedin"
      },
      {
          label: "Instagram",
          url: "https://www.instagram.com/daegyun_na/",
          iconClassName: "fab instagram-square"
      },
      {
          label: "Youtube",
          url: "https://www.youtube.com/channel/UC0yValXPtImjTQ8_6Z0Ha4Q?view_as=subscriber",
          iconClassName: "fab youtube-square"
      },
      {
          label: "GitHub",
          url: "https://github.com/ndg1yo",
          iconClassName: "fab github-square"
      }
  ],
  // Use for navigation
  navTitle: "Daegyun Na",
    navLinks: [
    { label: "Post", url: "/post" },
    { label: "Photo", url: "/photo" },
  ],
  // Use for footer
    socialLinks: [
      {
      label: "Facebook",
      url: "https://www.facebook.com/daegyun.na.5",
      iconClassName: "fab facebook-square"
      },
      {
      label: "Twitter",
      url: "https://twitter.com/daegyunna",
      iconClassName: "fab twitter-square"
      },
      {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/daegyunna/",
      iconClassName: "fab linkedin"
      },
      {
      label: "Instagram",
      url: "https://www.instagram.com/daegyun_na/",
      iconClassName: "fab instagram-square"
      },
      {
      label: "Youtube",
      url: "https://www.youtube.com/channel/UC0yValXPtImjTQ8_6Z0Ha4Q?view_as=subscriber",
      iconClassName: "fab youtube-square"
      },
      {
      label: "GitHub",
      url: "https://github.com/ndg1yo",
      iconClassName: "fab github-square"
      }
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Release", url: "/release" },
    { label: "Privacy", url: "/privacy" },
    { label: "Terms and Conditions", url: "/termsnconditions" },
    { label: "Sitemap", url: "https:/roundangular.netlify.app/sitemap.xml" },
  ],
  copyright: "Daegyun Na.", // Use for manifest
  backgroundColor: "#f7f0eb", // Used for setting manifest background color.
  themeColor: "#a2466c", // Used for setting manifest and progress theme colors.
  headerImage: [            //Index page header image
    '/image/main_20200323.png',
    '/image/photographybanner-new.jpg'
  ],
  headerDescription:'This blog made with JS, CSS, React, Gatsby and my idea'  //index page header description

};


// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
