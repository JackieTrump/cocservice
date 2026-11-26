export const STATIC_HOST = "https://www.cocservice.top";

/**
 * 把站内静态资源路径转换成可直接使用的 URL。
 *
 * 生产构建只输出路径（如 /upgrade/squads/a.webp），由站点域名转发到 R2；
 * 本地开发环境输出完整 URL，避免开发服务器上没有资源文件导致挂图。
 *
 * @param {string} path 以 / 开头的资源路径，或已经是完整的 http(s) URL
 * @returns {string} 可直接用于 src、srcset、href 的地址
 */
export function toStaticUrl(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path)) return path;
    return import.meta.env.DEV ? STATIC_HOST + path : path;
}
