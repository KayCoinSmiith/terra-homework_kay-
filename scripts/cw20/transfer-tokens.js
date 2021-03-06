import { client, wallets } from '../library.js';


import {
    LCDClient,
    MnemonicKey,
    MsgExecuteContract,
  } from "@terra-money/terra.js";
  
  // const lcd = new LCDClient(...);
  
//   const mk = new MnemonicKey({
//     mnemonic: 'discover erupt witness hour work cube pear bulb real fluid elite host noble elbow laugh tiny damp crowd valid forest turkey mention measure immense',
//   });
  
//   const wallet = client.wallet(mk); 








//   const wallet = wallets.walletTest;
  
//   // ANC on bombay-12
//   const tokenAddress = "terra1a0ym2ml0p95w33hw2tqwql3e06k59gg8eqks89";
//   const recipient_addr = "terra189awj4vhaapjvsqtsvw57egkv8k6cgxlzw0yfe"; // test wallet 2
  
//   // Transfer 1 ANC.
//   const cw20Send = new MsgExecuteContract(
//     wallet.key.accAddress,
//     tokenAddress,
//     {
//       transfer: {
//         amount: "7000000",
//         // recipient: wallet.key.accAddress,
//         recipient: recipient_addr,
//       },
//     }
//   );
  
//   const tx = await wallet.createAndSignTx({ msgs: [cw20Send] });
//   const result = await client.tx.broadcast(tx);
  
//   console.log(result);



  




  const wallet = wallets.walletTest;
  
  // ANC on bombay-12
  const tokenAddress = "terra1a0ym2ml0p95w33hw2tqwql3e06k59gg8eqks89"; // 사용하는 토큰 주소
  const recipient_addr = "terra189awj4vhaapjvsqtsvw57egkv8k6cgxlzw0yfe"; // test wallet 2
  
  // Transfer 1 ANC.
  const cw20Send = new MsgExecuteContract(
    wallet.key.accAddress, // 보내는 주소
    tokenAddress,
    {
      burn: { // transfer / mint / burn 3 중 하나 command 이용 (burn 은 amount recipient 중 amount 만 이용)
        amount: "7000000",
        // recipient: wallet.key.accAddress,
        recipient: recipient_addr, // 받는 주소
      },
    }
  );
  
  const tx = await wallet.createAndSignTx({ msgs: [cw20Send] });
  const result = await client.tx.broadcast(tx);
  
  console.log(result);