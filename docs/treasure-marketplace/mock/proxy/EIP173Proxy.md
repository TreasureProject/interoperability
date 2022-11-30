# Solidity API

## ERC165

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

## EIP173Proxy

Proxy implementing EIP173 for ownership management

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### constructor

```solidity
constructor(address implementationAddress, address ownerAddress, bytes data) public payable
```

### owner

```solidity
function owner() external view returns (address)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

### transferOwnership

```solidity
function transferOwnership(address newOwner) external
```

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```

### onlyOwner

```solidity
modifier onlyOwner()
```

### _owner

```solidity
function _owner() internal view returns (address adminAddress)
```

### _setOwner

```solidity
function _setOwner(address newOwner) internal
```

