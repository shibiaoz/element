/**
 * 是加载过该js资源
 *
 * @param {string} url js资源路径
 * @return {boolean} 是否加载过
 */
const getExistScript = (url = '') => {
  const scripts = document.querySelectorAll('[data-load=dynamic]');
  for (var i = 0, len = scripts.length; i < len; i++) {
    if (scripts[i].getAttribute('src') === url) {
      return scripts[i];
    }
  }
};

/**
 * 等待js加载完毕
 *
 * @param {Node} script script标签
 * @return {Promise.<resolveType, rejectType>}
 */
function awaitLoaded(script) {
  return new Promise((resolve, reject) => {
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', () => {
      reject();
    });
  });
}

/**
 * 动态加载js资源
 *
 * @param {string} url js资源路径
 * @return {Promise.<resolveType, rejectType>}
 */
export default (url = '') => {
  if (!url) {
    return Promise.reject();
  }

  const currScript = getExistScript(url);
  if (currScript) {
    if (currScript.getAttribute('data-state') === 'loaded') {
      return Promise.resolve();
    }
    else if (currScript.getAttribute('data-state') === 'loading') {
      return awaitLoaded(currScript);
    }
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.addEventListener('load', () => {
      resolve();
      script.setAttribute('data-state', 'loaded');
    });
    script.addEventListener('error', () => {
      reject();
      script.parentElement.removeChild(script);
    });
    script.src = url;
    script.setAttribute('data-load', 'dynamic');
    script.setAttribute('data-state', 'loading');
    document.body.appendChild(script);
  });
};
