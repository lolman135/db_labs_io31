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
    "revision": "ad8e94601f35c4e7b29f7c36cee8984d"
  },
  {
    "url": "assets/css/0.styles.fd60a93e.css",
    "revision": "45f15a00705e2c018569d6e816251b25"
  },
  {
    "url": "assets/img/DatasetDelete.53ba0aa7.png",
    "revision": "53ba0aa75614e97d2c0bbce42c55b32c"
  },
  {
    "url": "assets/img/DatasetGetAll.d41d842e.png",
    "revision": "d41d842e86d3991961a842f1fff12a59"
  },
  {
    "url": "assets/img/DatasetGetById.c962e0b2.png",
    "revision": "c962e0b23ea960a88d927baf5fb280b1"
  },
  {
    "url": "assets/img/DatasetPost.c6327cae.png",
    "revision": "c6327caeb35d55fbb8fc187fdd580713"
  },
  {
    "url": "assets/img/DatasetPut.f7bda057.png",
    "revision": "f7bda05738c43cea8fef41eb0ac5e0ac"
  },
  {
    "url": "assets/img/FeedbackDelete.1d7e77d3.png",
    "revision": "1d7e77d32cd1e49359214822fcc15b6f"
  },
  {
    "url": "assets/img/FeedbackGetAll.74316144.png",
    "revision": "74316144dafda2491ddd1ff4545af72d"
  },
  {
    "url": "assets/img/FeedbackGetById.42aed44c.png",
    "revision": "42aed44cd77eeb93641d8b2b0fda3007"
  },
  {
    "url": "assets/img/FeedbackPost.b482f7e1.png",
    "revision": "b482f7e1d80bbb79ddb9b036cf2469b1"
  },
  {
    "url": "assets/img/FeedbackPut.8f3ff398.png",
    "revision": "8f3ff398a9315e65e0edf75c124ab303"
  },
  {
    "url": "assets/img/ResponseDelete.b3273c78.png",
    "revision": "b3273c789d7a195067deb7d7b99cec89"
  },
  {
    "url": "assets/img/ResponseGetAll.3524433b.png",
    "revision": "3524433b5dc7e8efeebba1a00586dbbd"
  },
  {
    "url": "assets/img/ResponseGetById.7cc36699.png",
    "revision": "7cc366991af4a7f87801deb138a4274b"
  },
  {
    "url": "assets/img/ResponsePost.54a2b618.png",
    "revision": "54a2b61868c3fc9d0e7ed66d16e5f8b4"
  },
  {
    "url": "assets/img/ResponsePut.587efd53.png",
    "revision": "587efd5329ba4a3055bcd900ff552c00"
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
    "url": "assets/js/10.a04bc287.js",
    "revision": "b10a402ee1b7db8979f0efbecab952f3"
  },
  {
    "url": "assets/js/11.ea0c5234.js",
    "revision": "3c54361829ec3dff5645f6526db75a9a"
  },
  {
    "url": "assets/js/12.a4efb6a6.js",
    "revision": "2bba033998d56f36b39f8b22900430b8"
  },
  {
    "url": "assets/js/13.f84aa854.js",
    "revision": "5b8a0e04412235a865669209951afb45"
  },
  {
    "url": "assets/js/14.383b6c3a.js",
    "revision": "60e0e194a71d61c3a2e99cbb4165f6df"
  },
  {
    "url": "assets/js/15.1ecf0ba9.js",
    "revision": "41349aaded87daccbbab986f37d01acb"
  },
  {
    "url": "assets/js/16.46f53c74.js",
    "revision": "ce50138e095d344054cd7f1493b91c0c"
  },
  {
    "url": "assets/js/17.bdbfc706.js",
    "revision": "ad0f14864f143eaeb4eefe23bd5ce296"
  },
  {
    "url": "assets/js/18.d8619d3e.js",
    "revision": "6fc60592bd32f49ece409329999a8b52"
  },
  {
    "url": "assets/js/19.37a7db5d.js",
    "revision": "11c925c804d13ad10af17c8950547750"
  },
  {
    "url": "assets/js/2.f88ee117.js",
    "revision": "f068e624d20deaecce8b57b864613349"
  },
  {
    "url": "assets/js/20.a7dc29c3.js",
    "revision": "a2322d8795ab7d4d56104295fef01032"
  },
  {
    "url": "assets/js/21.9809fb02.js",
    "revision": "1dcb408f7df10d035e402e71ad2f6833"
  },
  {
    "url": "assets/js/22.ce187d01.js",
    "revision": "0e87785d36c7b95312f7161d1a202247"
  },
  {
    "url": "assets/js/23.9761d2fb.js",
    "revision": "1adbac0c6abfd569832ceef87bdc19a2"
  },
  {
    "url": "assets/js/24.e1f7d8ed.js",
    "revision": "115c8a36f69c5da32840b403154d0820"
  },
  {
    "url": "assets/js/26.a5d72282.js",
    "revision": "1f699572d420f274ae9ce6327b2f7ecd"
  },
  {
    "url": "assets/js/3.ac23a12e.js",
    "revision": "75065d102dcb2d570c41f03d7c91242c"
  },
  {
    "url": "assets/js/4.e382508f.js",
    "revision": "0c69e1edab0610967cbdf593fa6b7959"
  },
  {
    "url": "assets/js/5.5db0cb7d.js",
    "revision": "c8da9fe745dc353003e72e046e2a3df4"
  },
  {
    "url": "assets/js/6.ee876ea4.js",
    "revision": "08733714edb3e594ede51a15bc578f0d"
  },
  {
    "url": "assets/js/7.6c27bc7a.js",
    "revision": "fe01d4692760048d55cae5fe39e79090"
  },
  {
    "url": "assets/js/8.ffc75126.js",
    "revision": "bfaac57b78d6b3a8d8bfabce5b7897be"
  },
  {
    "url": "assets/js/9.5dcec5e1.js",
    "revision": "7e04b157d111da63225ad691183834df"
  },
  {
    "url": "assets/js/app.07e5e39a.js",
    "revision": "fb9b9a99bea4a1ca84b8acb3a225d100"
  },
  {
    "url": "conclusion/index.html",
    "revision": "da8e6933efe5f5bc3fc5292f9e320c9d"
  },
  {
    "url": "design/index.html",
    "revision": "541dfa47ce44e39604e1c81c31225597"
  },
  {
    "url": "index.html",
    "revision": "7f4183b0e6fe51d73de62496b7b08195"
  },
  {
    "url": "intro/index.html",
    "revision": "aa7abeee16317eef615846fcc05fe3be"
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
    "revision": "7f448a2419423bb003e07efb2c7e6f5d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "109dce17742319945b72664d85d93c71"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5f8321f4e9125f1e59256b23726edecf"
  },
  {
    "url": "software/index.html",
    "revision": "edfb21c780f7917234461179c0a8c71f"
  },
  {
    "url": "test/index.html",
    "revision": "08579601f6d82c6fe9fca1162648b350"
  },
  {
    "url": "use cases/index.html",
    "revision": "a5ba52d9639b50160c06b45cc8dbc67c"
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
