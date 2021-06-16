import { APIGatewayEvent, Context } from 'aws-lambda';
import InventoryRepository from "../data-access"
import InventoryService from "../use-cases/inventoryService"

export default async function addItemHandler (event: APIGatewayEvent, context: Context) {

  let payload = null;
  if(event) payload = (typeof event === 'string' ? JSON.parse(event) : event);

  console.log('payload:', payload)

  let item = null;
  if(payload) item = payload.item;

  if(!item) return { statusCode: 400, body: 'Item not found in payload' }

  const inventoryRepository = new InventoryRepository();
  const inventoryService = new InventoryService(inventoryRepository);

  const inventoryItem = await inventoryService.addItem(item);

  return { statusCode: 200, body: JSON.stringify(inventoryItem)};
}
