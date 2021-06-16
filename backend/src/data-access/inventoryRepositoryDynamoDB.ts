import * as AWS from 'aws-sdk';
import { PutItemInput } from 'aws-sdk/clients/dynamodb';

import IInventoryRepository from '../entities/interfaces/InventoryRepository';
import InventoryItem from '../entities/types/InventoryItem';

var dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});

export default class inventoryRepositoryDynamoDB implements IInventoryRepository {


  async add(item: InventoryItem){

    const itemParams: PutItemInput = {
      TableName: 'inventoryItemsTable',
      Item: {
        Id: {S: item.getId()},
        Name: {S: item.getName()}
      }
    }

    try {
      await dynamodb.putItem(itemParams).promise();
    } catch (err){
      console.error(err);
    }
  }
}
