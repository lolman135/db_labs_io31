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
    "revision": "72fcb7243472b36530bab414d98297f7"
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
    "url": "assets/js/10.b9bd71ba.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.df6d0676.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.2aaed988.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.4a12eda4.js",
    "revision": "ee7ec00b6bf7ee19eff3ab0d356385d1"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.84d13c90.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.e023f94e.js",
    "revision": "e3bccc850629f512c3f09c1d63e4eff3"
  },
  {
    "url": "assets/js/19.72b8490a.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.9835823a.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.89608038.js",
    "revision": "5f4b2d4f41783eaf70efba1e3c7df45b"
  },
  {
    "url": "assets/js/21.62a9abdf.js",
    "revision": "d040178057a0bc4a10797b05097779ee"
  },
  {
    "url": "assets/js/22.3614a15d.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.d436ccbb.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.c0beab58.js",
    "revision": "9b2de4ce88eba303e0a6e6e2b1830f78"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.612a98a1.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.b06b704d.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.81cee9cb.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.20729120.js",
    "revision": "7b8f27d2867ac8f4888285b650a915c8"
  },
  {
    "url": "conclusion/index.html",
    "revision": "80f9113d637ad10e1f7e30137db18976"
  },
  {
    "url": "design/index.html",
    "revision": "48ae973361807064b1ea3b40c356b8f7"
  },
  {
    "url": "index.html",
    "revision": "665710f775c55e5b7eed6964fb1ccdf1"
  },
  {
    "url": "intro/index.html",
    "revision": "4208c78b7832897d9c4712f6a5ed795a"
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
    "revision": "a78842a13c6aa0cb998361c1452ea2bd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "06ae20c3b5b215cac6f6479fdb662f26"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f9a3f5d3e427675ce7599c4e2f5fed3d"
  },
  {
    "url": "software/index.html",
    "revision": "dbb876deaf07c0e9c7f5829f33ebd6bd"
  },
  {
    "url": "test/index.html",
    "revision": "696d5d4b9c5b11e216a54e2a8e036eac"
  },
  {
    "url": "use cases/index.html",
    "revision": "e0a3e0e410bca74909b3b74fb4829c87"
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
