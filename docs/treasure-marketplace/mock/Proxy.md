# Solidity API

## Proxy

### ProxyImplementationUpdated

```solidity
event ProxyImplementationUpdated(address previousImplementation, address newImplementation)
```

### receive

```solidity
receive() external payable virtual
```

### fallback

```solidity
fallback() external payable
```

### _fallback

```solidity
function _fallback() internal
```

### _setImplementation

```solidity
function _setImplementation(address newImplementation, bytes data) internal
```

