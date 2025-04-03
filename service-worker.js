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
    "revision": "fd05654f8fab5988164e5d2393bf4de7"
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
    "url": "assets/js/15.395727a1.js",
    "revision": "6ea98a4abbd55334a6a9b50fe30d5b39"
  },
  {
    "url": "assets/js/16.710da9c8.js",
    "revision": "66288023d3f372ac464317221849fab3"
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
    "url": "assets/js/20.ed84d6da.js",
    "revision": "824c41f6155e54c6fa79811811200efa"
  },
  {
    "url": "assets/js/21.c4d20a4b.js",
    "revision": "39dae19e00fee1d964e5287aa41fb8a3"
  },
  {
    "url": "assets/js/22.b786f714.js",
    "revision": "605a4ccb0a88331e992baa0819328028"
  },
  {
    "url": "assets/js/23.9a920dbd.js",
    "revision": "89d101ad293c12b093f671eff310e158"
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
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.6b4bf264.js",
    "revision": "651acb2bbc40e382b44e70ae8f6277a4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "25a6094838e5974423f30f906bf99f51"
  },
  {
    "url": "design/index.html",
    "revision": "3e69d8eb71fb155052a0cfe10ff1356d"
  },
  {
    "url": "index.html",
    "revision": "54cc5a0b6cd881438575d4f3ccf8b308"
  },
  {
    "url": "intro/index.html",
    "revision": "b05383c4e38bc4e06156bf96373729f2"
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
    "revision": "6a98420e4434ef8077e66a6dd154031d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0d3f42639f91dbbfea5dbcaa0fb7497e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0533266f602ac089804487d2db2ad21a"
  },
  {
    "url": "software/index.html",
    "revision": "d28e62c5b14430490119fded81bf65a2"
  },
  {
    "url": "test/index.html",
    "revision": "f7e0fc03f37b19fa5ce7a2f73220a394"
  },
  {
    "url": "use cases/index.html",
    "revision": "02020673921b3d7ed321f386f07335c2"
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
