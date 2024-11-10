# Installation

> `npm install --save @types/zetrix-sdk-nodejs`

# Summary

This package contains type definitions for zetrix-sdk-nodejs (https://github.com/Zetrix-Chain/zetrix-sdk-nodejs).

# Details

Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/zetrix-sdk-nodejs.

## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/stack-utils/index.d.ts)

````ts
export = ZtxChainSDK

declare class ZtxChainSDK {
  constructor(options?: ZtxChainSDK.Options)

  util: Util
  account: Account
  transaction: Transaction
  token: Token
  block: Block
  operation: Operation
  contract: Contract
}

declare namespace ZtxChainSDK {
  interface Options {
    inited?: boolean
    host: string
    chainId?: number
    timeout?: number
    secure: boolean
  }

  interface Util {
  }

  interface Account {
    getNonce(address: string): Response
  }

  interface Transaction {
    evaluateFee(args: any): Response

    buildBlob(args: any): Response

    sign(args: any): Response

    submit(args: any): Response

    getInfo(hash: string): Response
  }

  interface Token {
  }

  interface Block {
  }

  interface Operation {
  }

  interface Contract {
  }

  interface Response {
    result: any
    error: any
  }
}


````

### Additional Details

* Last updated: Sun, 10 Nov 2024 15:11:36 GMT
* Dependencies: none

# Credits

These definitions were written by [Ammar Abdullah](https://github.com/armmarov).
