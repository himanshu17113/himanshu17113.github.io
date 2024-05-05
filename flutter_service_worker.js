'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1470af647424af3483f1cff8f6ed5eb1",
".git/config": "11d5b0ba77f8366dffcf73101ae387a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f3c64592193a606f45fad52eeb1ae5f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c8b23591d911e400da2b39d4b093827",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99e0a61990da932b2c63ea6a67577114",
".git/logs/refs/heads/master": "b1269ef152fbe9a32373473415128bfb",
".git/logs/refs/remotes/origin/main": "e963937121d474ffbf1d3bab25cddf70",
".git/logs/refs/remotes/origin/master": "d3957d3c91a57816443af408d3c6dad8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/bd158b2ffdda91c4d38bf32fe7a03926d29ef8": "559aa2602e63d7cbc2dc678b3e8f674c",
".git/objects/15/5614616933d3d359f12604429c1d3950c5dfc2": "67fdea86c70f16fe73c319b271cd8a3a",
".git/objects/15/89f9815f46ef5a15e5266dc608dc98bce8ca74": "735e7d2189dbc96af0259919d24e5ac2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/9027351f2023dc5dd5ba63172bca4b848888a1": "963511e3ea612e66e27793515cb5d913",
".git/objects/19/648782be51b1f67868254e232bb156214142ef": "6d847a441bc1f9b49897882c5ebc811e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/12f77476859c093e195d79917bd6d19aaac39c": "d6e9d8a8d2e2031e9c9db88d6064bbec",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/521b1bf2c4d521acb69cac818cb4f83c36c201": "ef6f1c91c55e203488bf11fd706e60f1",
".git/objects/2f/c7cd951bae687f794f2b9c24faf08cb84bc9f0": "0c45669afd8a0cfb8c28b2ebb3963c55",
".git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/52ece9c4d6e24b2e14f0793d88de5eeb78f2da": "1b0b444236b1bef97636e7b0c638833f",
".git/objects/50/5681f025873a70f7486dfd2e3a85c79ca4f348": "5cb8cb1e32556381d026a7d0075ff806",
".git/objects/50/a65a3a3c85a764ba8a32743725d805db9abd4c": "3580b041014bcf5fc27ea4c487ddc60a",
".git/objects/51/8477870d86f15d7efdac2cce60de44919d8625": "a18ceaae9fb07d0145b51784cea5d129",
".git/objects/55/9a216a034efcf2b4a4e75ec151b3d001cf48d9": "3365cb2fa185f231cbe52743e0c69c96",
".git/objects/59/0740eb2a3f268e6e0a8d4d8e27926c31ab3de3": "08319cc1b4f4e1bf93ea6b135f2254a7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/2af467d947234d472d81c529ea2a9ded9ca224": "d6f897a8b86a9e4afb90931f0860a021",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/31b025c5837eb149a39f5bba93be8794e83735": "79670eb1828f6823f0f0650cba90d512",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/23d907c8af0673625da4dbb279c2fca96db4e9": "acbb5ec9cb7defea3ba2909fd3b6bae7",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/ea3b6a0cce7bf14b6e2d5512aedb082113cd6d": "bebd55cc30c909074e3423aad80632d8",
".git/objects/98/54554623132ace60731671c7c032508c889568": "9fd7a2ad49b65333d01b05d08ce7de26",
".git/objects/a1/a87e1042bbe7b1649e99a0b2cdd2f2b21dfcea": "d5e29c59d0ff4616c03efe5cb133919b",
".git/objects/a6/e82a41bd570c19f8bdaadf60b2f6fd220c0b4d": "15874259afae343968b71b95cf746471",
".git/objects/a8/4b3b71dc19a335717e160046dc9d7169e7bd5e": "01f8658e0a1a2dca20f9d04fc9ac1dae",
".git/objects/ab/5ef83808141790af17f283842e9dee1c97c476": "246233d891a54739c1c7cbf3b57a3ae1",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0064164a464fe5841af02052ceeadf5334d01b": "c404a1528a3c2632ade29521c0e1f0c4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cb67f89949b1ba341505ade168aa320a6547b2": "5673c86426f4d03d7a3b563531be52ad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/1bd5d62bc8f7377226f698a34f5c2abd35d39b": "a623844080adf3a87c32549efc58bf2d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cd/f62990a4ecb573733cac6720ba64e5ae5603b7": "ba1ab1a0db45251f2a1fae4755323328",
".git/objects/cf/706d7d0b518c329de467551d02498fcdfb4810": "5e42416c1d2e690e7d338a6881854e32",
".git/objects/cf/b0ad510b811892fdaaa1f3071944321791d733": "b0c4c33b0dc3e56928b24c419fe79287",
".git/objects/d3/557e3c5377fd95e02c04c4d4863b2dccfa67b2": "741e758a19ca361aa7d871d3cc1e663e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/88891553c2648a2625e6cd74af4472efb98e76": "65d85c6c4f86b705f5295589dd192dd7",
".git/objects/de/f7a3067c69cc9823d48232288b5496f82b718e": "7e8b6d404ada080d2fb5c6318a62f107",
".git/objects/e3/d87043bfb1f6c0b1586801bbb4b26fd39d46fe": "6f4bfc4daf8a1b9af0cc56b0826840cf",
".git/objects/e6/c43d4dc32c5e06b63a1456a15a5ba65845d183": "4e258d69cae89bd197ededb6d6e80d52",
".git/objects/e7/3dbc2894a1d77f05f4f1a684a75e59b2962063": "ca41375f273bd40e5db1b11dc6068c76",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/53f4802292884d04d318f095a8b554c90bbaf4": "9ca3b0018bb547208263015dfb72d1b0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/b4d25fb7343a9fc2a5a671f2a6f65a37457041": "8298a00edd75bb35a3b6ad8a45bc4a17",
".git/objects/f8/bd1049caccb4f90df866fc37ada97abc32cd9c": "d4e24f9e043b4b24ad22dd61086159e9",
".git/objects/fa/1d4e681f4e9a398987026c039684ef2eb6206c": "bf510450151a65edd02e99d8ba2a8d43",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fc/97b3c591ffc37f6c6396b2d3fd3b5ee43f73be": "3680d2baa64fa5ce80294e12ccf881d2",
".git/objects/ff/db0cc6be33cf14232a3e44c46548f931e3c5ea": "02231e405ecf2380177db724cc13d87a",
".git/ORIG_HEAD": "7b156a44635fc25078d040774a5f85c1",
".git/refs/heads/master": "7b156a44635fc25078d040774a5f85c1",
".git/refs/remotes/origin/main": "2fd55425f5e5dffdf113c301420e0114",
".git/refs/remotes/origin/master": "7b156a44635fc25078d040774a5f85c1",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b028aec5af2f974e52164391f56fbd4a",
"assets/NOTICES": "f6aaebd9ef9de597b23075c4d145ff61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddb160d8df0fd542051387d440dd4fb7",
"/": "ddb160d8df0fd542051387d440dd4fb7",
"main.dart.js": "409a808e45b646a1f8b608d33ac29cc8",
"manifest.json": "bf60f7da5a7efdbdebb0677ce15603fc",
"version.json": "2c0f08069ea186a03d8a7a6fb4840203"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
