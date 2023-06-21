import './Wallet.css';
import { useState } from 'react';
import ABI from './ABI.json';
 import Web3 from "web3"
const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true)
      const init=async()=>{
         try{
            const web3=new Web3(window.ethereum);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            const contract=new web3.eth.Contract(
                  ABI,
                  "0x7A7a06392c0d1e336a945DfbC8621BE198e2DD69"
            );
            setConnected(false)
            saveState({web3:web3, contract:contract})
         } catch(error){
            alert("Please install metamask")
         }

      }  
      return<>
      <div className="header">
      {false  && <button className="connectBTN">
         <a href="">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected} > {connected? "Connect Metamask":"Connected"}</button>
      </div>
      </>
}
export default Wallet;