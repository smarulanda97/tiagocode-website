/*
|--------------------------------------------------------------------------
| Helper -> url
|--------------------------------------------------------------------------
|
| Helpers functions related to the URL, query parameters parsing
| functionality:
|
| function isAbsoluteUrl() ->
|   Returns true if the given text is absolute URL.
|   Example:
|     - "/foo/bar" should return false
|     - 'https://google.com" should return true
|
*/

export function isAbsoluteUrl(url: string): boolean {
    return /^[a-z][a-z0-9+.-]*:/.test(url);
}
