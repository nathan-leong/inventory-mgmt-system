import InventoryItem from "../types/InventoryItem";

interface IInventoryRepository {
  add(item: InventoryItem): Promise<void>;
}

export default IInventoryRepository;