import {Response} from "express";

/**
 * Serialize the provided payload and write it to the provided {@link Response}.
 * @param params The config options
 * @param params.payload The payload to serialize and write to the provided {@link Response}.
 * @param params.response The {@link Response} to which the serialized payload will be written.
 */
export const createServerSentEvent = <
  GenericType extends Parameters<typeof JSON.stringify>[0]
>({
  payload,
  response,
}: {
  payload: GenericType;
  response: Response;
}) => {
  const serializedPayload = JSON.stringify(payload);

  response.write(serializedPayload);
};
