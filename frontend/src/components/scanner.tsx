import { useState } from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

import './scanner.scss';

interface ScannerProps {
  scanItem: (item: string) => void;
}

function Scanner(props: ScannerProps) {
  const [ data, setData ] = useState('Not Found');
 
  return (
    <div className="scanner-wrapper">
      <BarcodeScannerComponent
        width={300}
        height={300}
        onUpdate={(err, result) => {
          // console.log(result)
          if (result) {
            setData(result.getText());
            props.scanItem(result.getText());
          }
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </div>
  )
}

export default Scanner;
