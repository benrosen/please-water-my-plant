/**
 * The request has more than one possible response.
 * The user agent or user should choose one of them.
 * (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300
 */
export type MultipleChoicesStatusCode = 300;

/**
 * The request has more than one possible response.
 * The user agent or user should choose one of them.
 * (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300
 */
export const MULTIPLE_CHOICE_STATUS_CODE: MultipleChoicesStatusCode = 300;
