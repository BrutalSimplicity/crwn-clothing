export const addItemToCart = (items, newItem) => {
  const existing = items.find(item => item.id === newItem.id);
  if (existing) {
    return items.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity+1 } : item);
  }

  return [...items, { ...newItem, quantity: 1 }];
}

export const removeItemFromCart = (items, dropItem) => {
  return dropItem.quantity > 1 ?
    items.map(item => item.id === dropItem.id ? { ...item, quantity: item.quantity - 1 } : item)
    :
    items.filter(item => item.id !== dropItem.id);
}