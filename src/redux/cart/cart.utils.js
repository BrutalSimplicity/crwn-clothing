export const addItemToCart = (items, newItem) => {
  const existing = items.find(item => item.id === newItem.id);
  if (existing) {
    return items.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity+1 } : item);
  }

  return [...items, { ...newItem, quantity: 1 }];
}