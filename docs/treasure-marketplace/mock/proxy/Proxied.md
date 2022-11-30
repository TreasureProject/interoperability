# Solidity API

## Proxied

### proxied

```solidity
modifier proxied()
```

to be used by initialisation / postUpgrade function so that only the proxy's admin can execute them
It also allows these functions to be called inside a contructor
even if the contract is meant to be used without proxy

### onlyProxyAdmin

```solidity
modifier onlyProxyAdmin()
```

### _proxyAdmin

```solidity
function _proxyAdmin() internal view returns (address ownerAddress)
```

