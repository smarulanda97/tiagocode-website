/**
 * Returns true if the given URL is absolute.
 *
 * Example:
 *  - /foo/bar => false
 *  - https://google.com => true
 *  - ftp://www.myserver.net => true
 *
 * @param url
 * @returns {boolean}
 */
export function isAbsoluteUrl(url: string): boolean {
    return /^[a-z][a-z0-9+.-]*:/.test(url);
}
