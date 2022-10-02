/**
 * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
 * This is mostly used for mirrors or backups of another resource.
 * Except for that specific case, the 200 OK response is preferred to this status.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
 */
export type NonAuthoritativeInformationStatusCode = 203;

/**
 * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
 * This is mostly used for mirrors or backups of another resource.
 * Except for that specific case, the 200 OK response is preferred to this status.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
 */
export const NON_AUTHORITATIVE_INFORMATION_STATUS_CODE: NonAuthoritativeInformationStatusCode = 203;
