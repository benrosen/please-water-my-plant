/**
 * This is used for caching purposes.
 * It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
 */
export type NotModifiedStatusCode = 304;

/**
 * This is used for caching purposes.
 * It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
 */
export const NOT_MODIFIED_STATUS_CODE: NotModifiedStatusCode = 304;
