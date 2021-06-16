import { useState } from 'react';
import Scanner from '../components/scanner';
import './CheckInPage.scss'

const unreturnedItems = ['item 1', 'item 2'];

function CheckInPage() {

  let [selectedAction, setSelectedAction] = useState< 'checkin' | 'checkout' >('checkin');
  let [checkedInList, setCheckedInList] = useState<string[]>([]);
  let [checkOutList, setCheckOutList] = useState<string[]>([]);
  let [scannedItem, setScannedItem] = useState<string>();

  const toggleAction = () => {
    if(selectedAction === 'checkin') setSelectedAction('checkout');
    else setSelectedAction('checkin');
  }

  const scanItem = (item: string) => {
    setScannedItem(item);
    console.log('scanned item:', item)
    switch(selectedAction){
      case 'checkin':
        addToCheckedInList(item);
        console.log(checkedInList)
        break;
      case 'checkout':
        addToCheckOutList(item);
        console.log(checkOutList)
        break;
    }
  }
  
  const addToCheckedInList = (item: string) => {
    setCheckedInList([...checkedInList, item]);
  }

  const addToCheckOutList = (item: string) => {
    setCheckOutList([...checkOutList, item]);
  }

  const finishClick = () => {
    console.log('FINISHED')
  }

  return(
    <div className="page-body check-in-page">
      <div className="check-in-wrapper">
        <div className="check-in-header">
          <button className={`check-in-toggle ${selectedAction === 'checkin' ? 'selected' : ''}`} onClick={toggleAction} >
            <p>CHECK IN</p>
          </button>
          <button className={`check-out-toggle ${selectedAction === 'checkout' ? 'selected' : ''}`} onClick={toggleAction}>
            <p>CHECK OUT</p>
          </button>
        </div>
        <Scanner scanItem={scanItem}/>
        <p>{scannedItem}</p>
      </div>
      {selectedAction === 'checkin' ? 
        <div className="check-in-items-wrapper">
          <h2>Unreturned Items</h2>
          <div className="item-list">
            {checkedInList.map(item => <p>{item}</p>)}
          </div>
          {checkedInList.length > 0 && <button className="btn-primary" onClick={finishClick}>Finish</button>}
        </div>
        :
        <div className="check-out-items-wrapper">
          <h2>Checkout Items</h2>
          <div className="item-list">
            {checkOutList.map(item => <p>{item}</p>)}
          </div>
          {checkOutList.length > 0 && <button className="btn-primary" onClick={finishClick}>Finish</button>}
        </div>
      }
    </div>
  )
}

export default CheckInPage;