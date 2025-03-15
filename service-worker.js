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
    "revision": "2d762bfe54075f86df826916865dab53"
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
    "url": "assets/js/14.b5784633.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.45ace9f2.js",
    "revision": "a19474b48304b99879785977954d76d1"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.1707bb9d.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
  },
  {
    "url": "assets/js/18.d8e07382.js",
    "revision": "00eaf864e247880a7fba91a304d7713d"
  },
  {
    "url": "assets/js/19.19f206bb.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.9835823a.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.b94a755f.js",
    "revision": "575f6f4877d3c610f911dd2bd178bebf"
  },
  {
    "url": "assets/js/21.cdb019c2.js",
    "revision": "1745776f8c1acfee10a4a81e505f136e"
  },
  {
    "url": "assets/js/22.58ac703c.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.2fe73bdd.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.315864e7.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
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
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.4820ea41.js",
    "revision": "969284e58eeed4493989198974f3a6f0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "815825317651f2c531d6c27ed04d3d7f"
  },
  {
    "url": "design/index.html",
    "revision": "88c5289357c729868983bbed8b0806d4"
  },
  {
    "url": "index.html",
    "revision": "7a04bbbe9367752672f3bc5c8c730575"
  },
  {
    "url": "intro/index.html",
    "revision": "ca249aa948f28efc3a1bb11da5d95876"
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
    "revision": "93f7bb566b6908519f18dd8cfa347113"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bd830da9decbb92b637db7a8063b0aa5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6917cf2809811d8d1c589f154be5a851"
  },
  {
    "url": "software/index.html",
    "revision": "0c5368bf018bfaebb47bc094b505aeba"
  },
  {
    "url": "test/index.html",
    "revision": "0e697c200f6a7f92d7e8d489fdd7746c"
  },
  {
    "url": "use cases/index.html",
    "revision": "3ae65e8beead40064730286e6d62420b"
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
