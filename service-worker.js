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
    "revision": "3523b5b4451d293a47919bc12874fad2"
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
    "url": "assets/js/15.cb12ed2d.js",
    "revision": "dd63aca62cd27906b14891d24dc6ff24"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.ee25552c.js",
    "revision": "d051bc2276ede0597d831397f1145a63"
  },
  {
    "url": "assets/js/18.c4808918.js",
    "revision": "9c9dab80300104a05670e6094d9638dc"
  },
  {
    "url": "assets/js/19.025cbe41.js",
    "revision": "27fdce0dee90ea3ed9605a185c2c3021"
  },
  {
    "url": "assets/js/2.9835823a.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.701a59a8.js",
    "revision": "242c7a5e8f24a72c02a36ac160230115"
  },
  {
    "url": "assets/js/21.514ed0e1.js",
    "revision": "7302455a8289551003dfaa99087f4b66"
  },
  {
    "url": "assets/js/22.f6d69d07.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.685cdddc.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
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
    "url": "assets/js/app.fd551382.js",
    "revision": "aef8c0a8c91652560bbb31b0d903aef5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a8c04b8ed5054c13eb28e2659f0da7ce"
  },
  {
    "url": "design/index.html",
    "revision": "7d3fa7576839bc31dc8a8ee87ac8717a"
  },
  {
    "url": "index.html",
    "revision": "6a6bebea0cce2ddbb0bd48bf6ad9e78a"
  },
  {
    "url": "intro/index.html",
    "revision": "b4a90e2c07645d37353a1c49f7f67272"
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
    "revision": "7b5566956fa1c8c9cc10322afca2450f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "33ad09c7c0bf9cacc490096d1d355858"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "87e5da947f63abe37bbe1d4ad5360f11"
  },
  {
    "url": "software/index.html",
    "revision": "28b23386b91711b0d0d7366edf2ae372"
  },
  {
    "url": "test/index.html",
    "revision": "b40f7a0e91bce60e68ce947cea477876"
  },
  {
    "url": "use cases/index.html",
    "revision": "d1cec6936e064e2b6bcacf265dc6a051"
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
