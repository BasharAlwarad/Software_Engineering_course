// ============================================================================
// CUSTOMER SUPPORT TOOLS (for Agentic AI)
// ============================================================================

/**
 * Product pricing configuration
 */
const PRODUCT_PRICES: Record<string, number> = {
  CloudDream: 79.99,
  SkyFeather: 99.99,
  BambooCool: 89.99
};

/**
 * Tool function: Create a support ticket for escalated issues
 * Simulates creating a ticket in a CRM system
 */
export const createSupportTicket = async ({
  customerIssue,
  severity
}: {
  customerIssue: string;
  severity: 'high' | 'urgent';
}): Promise<{ ticketId: string; message: string }> => {
  // Simulate ticket creation (in real app, this would hit a database/API)
  const ticketId = `TICKET-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

  return {
    ticketId,
    message: `Support ticket ${ticketId} created with ${severity} priority. A manager will contact you within 24 hours.`
  };
};

/**
 * Tool function: Calculate bulk discount pricing
 * Applies tiered discounts based on quantity
 */
export const calculateBulkDiscount = async ({
  productName,
  quantity
}: {
  productName: 'CloudDream' | 'SkyFeather' | 'BambooCool';
  quantity: number;
}): Promise<{
  product: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  discount: number;
  discountAmount: number;
  total: number;
}> => {
  const unitPrice = PRODUCT_PRICES[productName] || 0;
  const subtotal = unitPrice * quantity;

  // Determine discount tier
  let discount = 0;
  if (quantity >= 10) {
    discount = 0.2; // 20% for 10+ items
  } else if (quantity >= 5) {
    discount = 0.1; // 10% for 5+ items
  }

  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return {
    product: productName,
    quantity,
    unitPrice,
    subtotal: Math.round(subtotal * 100) / 100,
    discount: discount * 100, // Convert to percentage
    discountAmount: Math.round(discountAmount * 100) / 100,
    total: Math.round(total * 100) / 100
  };
};

/**
 * Tool function: Process refund/return request
 * Simulates initiating a refund in the order management system
 */
export const processRefundRequest = async ({
  orderNumber,
  reason,
  preferExchange
}: {
  orderNumber: string;
  reason: string;
  preferExchange: boolean;
}): Promise<{
  requestId: string;
  status: string;
  message: string;
  returnLabel?: string;
}> => {
  // Simulate refund processing (in real app, this would update order status)
  const requestId = `REF-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
  const returnLabel = `LABEL-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  const actionType = preferExchange ? 'exchange' : 'refund';

  return {
    requestId,
    status: 'pending',
    message: `Your ${actionType} request (${requestId}) has been initiated. ${
      preferExchange
        ? 'You will receive your replacement within 5-7 business days.'
        : 'Refund will be processed within 3-5 business days after we receive the item.'
    }`,
    returnLabel: `Return label tracking: ${returnLabel}`
  };
};
