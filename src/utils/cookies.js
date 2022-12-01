function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_access\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getRefreshFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_refresh\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getImageFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_profile\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

export { getAuthFromCookie, getRefreshFromCookie, getImageFromCookie };
