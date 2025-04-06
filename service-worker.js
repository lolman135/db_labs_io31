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
    "revision": "0fe47d7a034d856262c90c025f4d4539"
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
    "url": "assets/js/10.c6e7375e.js",
    "revision": "3ec61217cc4df06fa8cd7f4c30c1fada"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.1bed0d43.js",
    "revision": "84d03d74c8749c77170ec3c649a32ddd"
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
    "url": "assets/js/16.8e2c9512.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.1707bb9d.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
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
    "url": "assets/js/2.9835823a.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.f8a00747.js",
    "revision": "364c99770e47352d9bd39d9a7b900677"
  },
  {
    "url": "assets/js/21.721b451f.js",
    "revision": "ccf170bb17f19c6a3391710df3c990e3"
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
    "url": "assets/js/8.81cee9cb.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.fce2550a.js",
    "revision": "b426c902a0ef54b1819b254e7099c01f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5ea6e9b569cd44aee89eee8599aad314"
  },
  {
    "url": "design/index.html",
    "revision": "6d95a5e9e2f89b64f71e4628e9d70715"
  },
  {
    "url": "index.html",
    "revision": "201643ee5db510f99a82f81080b46b75"
  },
  {
    "url": "intro/index.html",
    "revision": "ceed3a242b35b23a9e9685ae4dc4912d"
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
    "revision": "019555d045abc9c929efe69627bd3add"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "01b3e6e36a5f474541e6b486befa6b8c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c73b8a95bb14e23ef44a0864f10536b7"
  },
  {
    "url": "software/index.html",
    "revision": "c135a542eec9a9b6226c5eca1e3d4711"
  },
  {
    "url": "test/index.html",
    "revision": "841c043735c03c00e7ccfad89a5014f9"
  },
  {
    "url": "use cases/index.html",
    "revision": "bf06d8d720e254546639b8fa22f28924"
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
