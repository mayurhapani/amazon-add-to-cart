function getDelivaryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (deliveryOptionId === option.id) deliveryOption = option;
  });
  return deliveryOption;
}

const deliveryOptions = [
  {
    id: "1",
    delevryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    delevryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    delevryDays: 1,
    priceCents: 999,
  },
];
