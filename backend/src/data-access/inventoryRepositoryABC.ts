import IInventoryRepository from '../entities/interfaces/InventoryRepository';
import InventoryItem from '../entities/types/InventoryItem';

export default class inventoryRepositoryABC implements IInventoryRepository {


  async add(item: InventoryItem){

  }
}
