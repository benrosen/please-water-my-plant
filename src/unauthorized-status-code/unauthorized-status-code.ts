/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
 * That is, the client must authenticate itself to get the requested response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export type UnauthorizedStatusCode = 401;

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
 * That is, the client must authenticate itself to get the requested response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export const UNAUTHORIZED_STATUS_CODE = 401;
