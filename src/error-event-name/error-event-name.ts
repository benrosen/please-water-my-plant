/**
 * If any error is encountered during the request (be that with DNS resolution, TCP level errors, or actual HTTP parse errors) an 'error' event is emitted on the returned request object.
 * As with all 'error' events, if no listeners are registered the error will be thrown.
 * @see https://nodejs.org/api/http.html#httprequesturl-options-callback
 */
export const ErrorEventName = "error";
