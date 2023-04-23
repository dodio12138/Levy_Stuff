// 定义要缓存的文件名
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// 安装Service Worker
self.addEventListener('install', event => {
  // 缓存需要离线访问的文件
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 拦截网络请求并使用缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // 返回缓存中的响应
          return response;
        }
        // 如果没有匹配的缓存，则向网络发出请求
        return fetch(event.request);
      })
  );
});

// 激活Service Worker
self.addEventListener('activate', event => {
  // 清除旧的缓存
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => {
          return name.startsWith('my-site-cache-') && name !== CACHE_NAME;
        }).map(name => {
          return caches.delete(name);
        })
      );
    })
  );
});

// 在安装后显示"添加到主屏幕"按钮
self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); // 阻止默认行为
  const deferredPrompt = event;
  // 在页面上显示自定义的安装提示
  // 这里可以使用您自己的UI组件或库
  const installButton = document.createElement('button');
  installButton.textContent = 'Add to Home Screen';
  document.body.appendChild(installButton);
  installButton.addEventListener('click', event => {
    // 显示安装提示
    deferredPrompt.prompt();
    // 等待用户安装应用程序
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt.');
      } else {
        console.log('User dismissed the install prompt.');
      }
    });
  });
});
