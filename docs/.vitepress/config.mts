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
        ["meta", { name: "format-detection", content: "telephone=no"}],
        ["link", { rel: "preconnect", href: "https://www.googletagmanager.com" }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
        ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png"}],
        ["link", { rel: "manifest", href: "/manifest.webmanifest"}],
        ['script', { defer: "", src: "/browser-check/very-old-browser-check-v11.min.js"}],
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-X77YZJSYGH"}],
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
    transformHead: ({ pageData }) => {
        const head: HeadConfig[] = [];
        if (pageData.frontmatter.robots) {
            head.push(["meta", { name: "robots", content: pageData.frontmatter.robots }]);
        }
        const canonical = pageData.frontmatter.canonical;
        if (canonical === "/") {
            head.push(["link", { rel: "canonical", content: "https://www.cocservice.top" }]);
        } else {
            head.push(["link", { rel: "canonical", content: "https://www.cocservice.top" + canonical }]);
        }
        return head;
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
    sitemap: {
        hostname: "https://www.cocservice.top",
        transformItems: (items) => {
            const excludedUrls = [
                "/faq",
                "/settings",
                "p/260",
                "p/1828",
            ]
            const filteredItems = items.filter(item => {
                const itemUrl = item.url;
                const notExcluded = !excludedUrls.includes(itemUrl);
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