import IInventoryRepository from '../../entities/interfaces/InventoryRepository';
import InventoryItem from '../../entities/types/InventoryItem';

import addItem from './addItem';

export default class InventoryService {

  private inventoryRepository: IInventoryRepository;
  public addItem: (item: any) => (Promise<InventoryItem>);

  constructor( inventoryRepository: IInventoryRepository ){
    this.inventoryRepository = inventoryRepository;
    this.addItem = addItem.bind(this);
  }
  
}