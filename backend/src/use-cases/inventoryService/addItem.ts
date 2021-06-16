import InventoryItem from '../../entities/types/InventoryItem';

export default async function addItem(item: any){

  const newItem = new InventoryItem(item);
  await this.inventoryRepository.add(newItem);

  return newItem;
}