<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <link rel="shortcut icon" href="https://yy-s.zuoyebang.cc/static/common/css/resource/favicon.ico">
  <title>后台组件库</title>
</head>

<body>
  <script>
    if (!window.Promise) {
      document.write('<script src="//cdn.jsdelivr.net/npm/es6-promise@4.1.1/dist/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>')
    }
  </script>
  <div id="app"></div>
  <% if (process.env.NODE_ENV === 'production') { %>
  <script src="//cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.runtime.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/vue-router@2.7.0/dist/vue-router.min.js"></script>
  <% } %>
</body>
</html>