import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_yLoe5UEG.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Yq-BYhSM.css"},{"type":"inline","content":"@font-face{font-family:Yellowtail;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/yellowtail-latin-400-normal.XxV98SIS.woff2) format(\"woff2\"),url(/_astro/yellowtail-latin-400-normal.KipMXkaY.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}h1[data-astro-cid-gw2zxrib]{font-size:x-large;font-family:yellowtail,cursive}.box[data-astro-cid-o6lgmy7k]{width:140px;height:auto;float:left;transition:.5s linear;position:relative;display:block;overflow:hidden;padding:15px;text-align:center;margin:0 5px;background:transparent;text-transform:uppercase;font-weight:900}.box[data-astro-cid-o6lgmy7k]:before{position:absolute;content:\"\";left:0;bottom:0;height:4px;width:100%;border-bottom:4px solid transparent;border-left:4px solid transparent;box-sizing:border-box;transform:translate(100%)}.box[data-astro-cid-o6lgmy7k]:after{position:absolute;content:\"\";top:0;left:0;width:100%;height:4px;border-top:4px solid transparent;border-right:4px solid transparent;box-sizing:border-box;transform:translate(-100%)}.box[data-astro-cid-o6lgmy7k]:hover{box-shadow:0 5px 15px #00000080}.box[data-astro-cid-o6lgmy7k]:hover:before{border-color:#262626;height:100%;transform:translate(0);transition:.3s transform linear,.3s height linear .3s}.box[data-astro-cid-o6lgmy7k]:hover:after{border-color:#262626;height:100%;transform:translate(0);transition:.3s transform linear,.3s height linear .5s}button[data-astro-cid-o6lgmy7k]{color:#000;text-decoration:none;cursor:pointer;outline:none;border:none;background:transparent}h1[data-astro-cid-bbe6dxrz],h1[data-astro-cid-glk5rbbc]{font-family:yellowtail,cursive}.button[data-astro-cid-sju3wfsi]{--width: 100px;--height: 35px;--tooltip-height: 35px;--tooltip-width: 90px;--gap-between-tooltip-to-button: 18px;--button-color: #222;--tooltip-color: #fff;width:var(--width);height:var(--height);background:var(--button-color);position:relative;text-align:center;border-radius:.45em;font-family:Arial;transition:background .3s}.button[data-astro-cid-sju3wfsi]:before{position:absolute;content:attr(data-tooltip);width:var(--tooltip-width);height:var(--tooltip-height);background-color:#555;font-size:.9rem;color:#fff;border-radius:.25em;line-height:var(--tooltip-height);bottom:calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);left:calc(50% - var(--tooltip-width) / 2)}.button[data-astro-cid-sju3wfsi]:after{position:absolute;content:\"\";width:0;height:0;border:10px solid transparent;border-top-color:#555;left:calc(50% - 10px);bottom:calc(100% + var(--gap-between-tooltip-to-button) - 10px)}.button[data-astro-cid-sju3wfsi]:after,.button[data-astro-cid-sju3wfsi]:before{opacity:0;visibility:hidden;transition:all .5s}.text[data-astro-cid-sju3wfsi]{display:flex;align-items:center;justify-content:center}.button-wrapper[data-astro-cid-sju3wfsi],.text[data-astro-cid-sju3wfsi],.icon[data-astro-cid-sju3wfsi]{overflow:hidden;position:absolute;width:100%;height:100%;left:0;color:#fff}.text[data-astro-cid-sju3wfsi]{top:0}.text[data-astro-cid-sju3wfsi],.icon[data-astro-cid-sju3wfsi]{transition:top .5s}.icon[data-astro-cid-sju3wfsi]{color:#fff;top:100%;display:flex;align-items:center;justify-content:center}.icon[data-astro-cid-sju3wfsi] svg[data-astro-cid-sju3wfsi]{width:24px;height:24px}.button[data-astro-cid-sju3wfsi]:hover{background:#222}.button[data-astro-cid-sju3wfsi]:hover .text[data-astro-cid-sju3wfsi]{top:-100%}.button[data-astro-cid-sju3wfsi]:hover .icon[data-astro-cid-sju3wfsi]{top:0}.button[data-astro-cid-sju3wfsi]:hover:before,.button[data-astro-cid-sju3wfsi]:hover:after{opacity:1;visibility:visible}.button[data-astro-cid-sju3wfsi]:hover:after{bottom:calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px)}.button[data-astro-cid-sju3wfsi]:hover:before{bottom:calc(var(--height) + var(--gap-between-tooltip-to-button))}h4[data-astro-cid-2j44jlrm],h1[data-astro-cid-plylcsvu]{font-family:yellowtail,cursive}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Yq-BYhSM.css"}],"routeData":{"route":"/shop","isIndex":false,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop.astro","pathname":"/shop","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Jailer/Desktop/pagina1/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Jailer/Desktop/pagina1/src/pages/shop.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_TZgUA_wd.mjs","/src/pages/shop.astro":"chunks/pages/shop_nPRjKezI.mjs","\u0000@astrojs-manifest":"manifest_ot3_W-_l.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3YYpb0Qo.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Pxxjn7Oj.mjs","\u0000@astro-page:src/pages/shop@_@astro":"chunks/shop__RZPrX97.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/yellowtail-latin-400-normal.XxV98SIS.woff2","/_astro/yellowtail-latin-400-normal.KipMXkaY.woff","/_astro/index.Yq-BYhSM.css","/Background.png","/Banner.jpg","/favicon.svg","/Icon (1).png","/Icon.png","/Image (2).png","/Image (3).png","/Image (4).png","/Image (5).png","/image 13.png","/image 14.png","/Insta.png","/Logo (1).png","/Logo.svg","/Photo (2).png","/Photo (3).png","/Photo (4).png","/Photo (5).png","/Photo (6).png","/Photo(1).png","/Photo.png","/Vector (1).png","/Vector (2).png","/Vector.png","/fonts/LICENSE.txt","/fonts/Yellowtail-Regular.ttf"],"buildFormat":"directory"});

export { manifest };
