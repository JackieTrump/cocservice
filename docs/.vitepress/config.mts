import { defineConfig, HeadConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "部落驿站",
  description: "部落冲突玩家的必备助手，coc 的中文百科全书。",
  lang: "zh-Hans-CN",
  cleanUrls: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  head: [
    ["meta", { name: "format-detection", content: "telephone=no" }],
    ["meta", { property: "og:site_name", content: "部落驿站" }],
    ["link", { rel: "preconnect", href: "https://www.googletagmanager.com" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ['script', { defer: "", src: "/browser-check/very-old-browser-check-v11.min.js" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-X77YZJSYGH" }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X77YZJSYGH');`
    ],
    // 2. 新增：百度统计配置
    ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?fb3c5a0c37fe4b5419860a50401d1969";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `],
    // 百度站长工具
    ['meta', { name: 'baidu-site-verification', content: 'codeva-W40JwrssEQ' }],
    // 加上这一行，解决第三方外链图片防盗链/裂开问题
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],
  transformPageData(pageData, { siteConfig }) {
    const SITE_HOST = "https://www.cocservice.top"; // 替换为你的主站完整域名（带 www，末尾无斜杠）
    const STATIC_HOST = "https://static.cocservice.top"; // 替换为你的 R2 静态域名（带 static，末尾无斜杠）
    const siteTitle = siteConfig.site.title || "部落驿站";
    const siteDesc = siteConfig.site.description || "";

    pageData.frontmatter.head ??= [];
    // transformPageData 在 dev 模式的 HMR 下可能对同一页面重复调用，导致 frontmatter.head 里出现重复的 og 标签。
    const isManagedTag = (tag: any) => {
      if (tag[0] === "link" && tag[1]?.rel === "canonical") return true;
      if (tag[0] === "meta" && tag[1]?.name === "robots") return true;
      if (tag[0] === "meta" && typeof tag[1]?.property === "string" && tag[1].property.startsWith("og:")) return true;
      return false;
    };
    pageData.frontmatter.head = pageData.frontmatter.head.filter((t: any) => !isManagedTag(t));
    const head = pageData.frontmatter.head;

    const robots = pageData.frontmatter.robots;
    if (robots) {
      head.push(["meta", { name: "robots", content: robots }]);
      if (String(robots).includes("noindex")) return;
    }

    const canonical = pageData.frontmatter.canonical;
    let pageUrl = "";
    if (canonical) {
      pageUrl = canonical === "/" ? SITE_HOST : SITE_HOST + canonical;
    } else {
      const cleanPath = pageData.relativePath
        .replace(/(^|\/)index\.md$/, "$1")
        .replace(/\.md$/, "");
      pageUrl = cleanPath ? `${SITE_HOST}/${cleanPath}` : SITE_HOST;
    }
    head.push(["link", { rel: "canonical", href: pageUrl }]);

    const isHome = pageData.frontmatter.module === "home" || canonical === "/";
    const ogTitle =
      isHome || !pageData.title || pageData.title === siteTitle
        ? siteTitle
        : `${pageData.title} | ${siteTitle}`;
    const ogDescription = pageData.description || siteDesc;

    const featuredImg = pageData.frontmatter.featuredImg;
    const ogImage = featuredImg
      ? (featuredImg.startsWith("http") ? featuredImg : `${STATIC_HOST}${featuredImg}`)
      : `${SITE_HOST}/apple-touch-icon.png`;

    head.push(["meta", { property: "og:type", content: isHome ? "website" : "article" }]);
    head.push(["meta", { property: "og:title", content: ogTitle }]);
    head.push(["meta", { property: "og:description", content: ogDescription }]);
    head.push(["meta", { property: "og:url", content: pageUrl }]);
    head.push(["meta", { property: "og:image", content: ogImage }]);
  },

  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  // 打开sitemap.xml时间戳，暂时注释掉
  // lastUpdated: true,
  sitemap: {
    hostname: "https://www.cocservice.top",
    transformItems: (items) => {
      // 需要从站点地图中排除的页面地址。
      // 注意：地址开头和结尾都不要带斜杠，例如写 "faq"，不要写 "/faq" 或 "faq/"，
      // 否则会与下方清洗后的页面地址对不上，导致排除失效。
      // 另外，这里只是不放进sitemap.xml，不等于禁止搜索引擎收录，
      // 要禁止搜索引擎收录，还需要在对应页面（md 文件）顶部的 frontmatter 里设置 robots: noindex。
      const excludedUrls = [
        "faq",
        "settings",
        "p/260",
        "p/1828",
      ]
      const filteredItems = items.filter(item => {
        // 原写法为 const itemUrl = item.url;（不处理斜杠，格式一变就会失效）
        // 去掉页面地址开头和结尾的斜杠，统一格式后再与排除列表比较
        const itemUrl = item.url.replace(/^\/+|\/+$/g, "");
        const notExcluded = !excludedUrls.includes(itemUrl);
        // 分类、作者、分页等聚合页，整类排除
        const notPostCollection = !itemUrl.match(/(p\/category|p\/author|p\/page)/g);
        return notExcluded && notPostCollection;
      });
      return filteredItems;
    }
  },
  vite: {
    build: {
      target: ["es2020", "chrome71", "edge79", "firefox75", "safari13"]
    },
    // 修改后：
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./theme"),
        "#": path.resolve(import.meta.dirname, "../..")
      }
    }
  }
});