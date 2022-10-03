/**
 * The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
 */
export type TemporaryRedirectStatusCode = 307;

/**
 * The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
 */
export const TEMPORARY_REDIRECT_STATUS_CODE: TemporaryRedirectStatusCode = 307;
