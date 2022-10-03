/**
 * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.
 * This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
 */
export type PermanentRedirectStatusCode = 308;

/**
 * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.
 * This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
 */
export const PERMANENT_REDIRECT_STATUS_CODE: PermanentRedirectStatusCode = 308;
