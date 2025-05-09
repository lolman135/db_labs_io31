/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eb08fd160a5091176527b91e52012973"
  },
  {
    "url": "assets/css/0.styles.fd60a93e.css",
    "revision": "45f15a00705e2c018569d6e816251b25"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Untitled.5dc01f81.png",
    "revision": "5dc01f8117d289ebb02fdcd1154045f8"
  },
  {
    "url": "assets/js/10.66f6fd47.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.bd3641ea.js",
    "revision": "2b9a709a7459c3de8ae6896f8b35c71a"
  },
  {
    "url": "assets/js/13.685fefd1.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.e87425e5.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.ebf38a50.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.2ff2be58.js",
    "revision": "8d19c2e3fd306cdd039a2a37559eddf7"
  },
  {
    "url": "assets/js/17.6b11a382.js",
    "revision": "81ade835c2f67b7fbbab8fba59257969"
  },
  {
    "url": "assets/js/18.0d9203ae.js",
    "revision": "044327c35b5e20f6fd7949625ebee6d7"
  },
  {
    "url": "assets/js/19.19f206bb.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.e91a0c26.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.e9dcb896.js",
    "revision": "d62f2075db2808766782b4fe29622e74"
  },
  {
    "url": "assets/js/21.c4d20a4b.js",
    "revision": "39dae19e00fee1d964e5287aa41fb8a3"
  },
  {
    "url": "assets/js/22.6fe9ec76.js",
    "revision": "25eaad6cb324505f63a3cb39e0bfaa6f"
  },
  {
    "url": "assets/js/23.9a920dbd.js",
    "revision": "89d101ad293c12b093f671eff310e158"
  },
  {
    "url": "assets/js/24.63d4c6ad.js",
    "revision": "ecc4e501949338fb3395b5c40f4da8cd"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.37ff259d.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.62df5e3a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.d2d7c328.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.c09e37a9.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.57abb3f8.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.a211f075.js",
    "revision": "348a432d04656f8a4ff4726f3fd40ad4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0df475aa72e74f841526a05b7a08118c"
  },
  {
    "url": "design/index.html",
    "revision": "da68959d8685f582d17c445a4d2453ec"
  },
  {
    "url": "index.html",
    "revision": "e1d4acc2e14f4256105afdaa24f98a6c"
  },
  {
    "url": "intro/index.html",
    "revision": "34bad2ebb1058f91b3cd7cfbf7d34818"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "832f7477f80b5b1b21f0bb2a687335de"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0c5ac80955c64da829cd8c8708b87fa4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9caaf051477fee71bb052e5041351e30"
  },
  {
    "url": "software/index.html",
    "revision": "5d52c9763401c10ab69411c059a4c942"
  },
  {
    "url": "test/index.html",
    "revision": "3b29fec205055f7724452e654e45b998"
  },
  {
    "url": "use cases/index.html",
    "revision": "b30be62e946e04f29b180b23465d5396"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
