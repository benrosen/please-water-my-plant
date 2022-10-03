/**
 * This response code means that the URI of requested resource has been changed temporarily.
 * Further changes in the URI might be made in the future.
 * Therefore, this same URI should be used by the client in future requests.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
 */
export type FoundStatusCode = 302;

/**
 * This response code means that the URI of requested resource has been changed temporarily.
 * Further changes in the URI might be made in the future.
 * Therefore, this same URI should be used by the client in future requests.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
 */
export const FOUND_STATUS_CODE: FoundStatusCode = 302;
