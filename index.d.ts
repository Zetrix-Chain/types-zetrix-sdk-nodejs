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

  interface Util {}

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

  interface Token {}

  interface Block {}

  interface Operation {}

  interface Contract {}

  interface Response {
    result: any
    error: any
  }
}
