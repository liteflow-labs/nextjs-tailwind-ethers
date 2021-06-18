import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Web3ReactManagerFunctions } from '@web3-react/core/dist/types'
import { useCallback, useEffect, useState } from 'react'
import { injectedConnector } from '../lib/connector'

export default function useWallet(): {
  signer: JsonRpcSigner | undefined
  activate: Web3ReactManagerFunctions['activate']
  deactivate: Web3ReactManagerFunctions['deactivate']
  account?: null | string
  error?: Error
  signTypedDataV4: (payload: any) => Promise<string>
  chainId?: number
  hasMetaMask?: boolean
} {
  const { library, activate, error, account, chainId, deactivate } =
    useWeb3React<Web3Provider>()

  const [signer, setSigner] = useState<JsonRpcSigner>()
  const [hasMetaMask, setHasMetaMask] = useState<boolean>()

  // activate wallet if already authorized
  useEffect(() => {
    injectedConnector
      .isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized) return activate(injectedConnector)
      })
      .catch(console.error)
  }, []) // intentionally only running on mount (make sure it's only mounted once :))

  // set signer
  useEffect(() => {
    if (!library) return
    if (!account) return
    setSigner(library.getSigner(account))
  }, [account, library])

  // signTypedDataV4
  // https://eips.ethereum.org/EIPS/eip-712
  const signTypedDataV4 = useCallback(
    (payload: any) => {
      if (!library) throw new Error('library is falsy')
      return library.send('eth_signTypedData_v4', [
        account,
        JSON.stringify(payload),
      ])
    },
    [library, account],
  )

  // check if metamask is installed
  useEffect(() => {
    setHasMetaMask(!!(window as any).ethereum)
  }, []) //only execute once

  return {
    account,
    activate,
    chainId,
    deactivate,
    error,
    signer,
    signTypedDataV4,
    hasMetaMask,
  }
}
