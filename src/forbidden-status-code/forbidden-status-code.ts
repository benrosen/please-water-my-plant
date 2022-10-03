/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
 * Unlike 401 Unauthorized, the client's identity is known to the server.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export type ForbiddenStatusCode = 403;

/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
 * Unlike 401 Unauthorized, the client's identity is known to the server.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export const FORBIDDEN_STATUS_CODE: ForbiddenStatusCode = 403;
