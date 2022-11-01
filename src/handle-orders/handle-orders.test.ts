import { ComponentIndex } from "../component-index";
import { getOrderHandlers } from "../get-order-handlers";
import { handleOrders } from "./handle-orders";

jest.mock("get-order-handlers");

const mockGetOrderHandlers = jest.mocked(getOrderHandlers);

describe("The handleOrders function", () => {
  test("should invoke each function returned from the getOrderHandlers function", () => {
    const mockOrderHandler = jest.fn();

    const mockOrderHandlers = [mockOrderHandler];

    mockGetOrderHandlers.mockReturnValueOnce(mockOrderHandlers);

    const mockComponentIndex: ComponentIndex = {
      byComponentId: {},
      byEntityId: {},
    };

    handleOrders({
      componentIndex: mockComponentIndex,
    });

    expect(mockOrderHandler).toHaveBeenCalled();
  });
});
