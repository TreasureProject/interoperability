# Solidity API

## LibDiamond

### DIAMOND_STORAGE_POSITION

```solidity
bytes32 DIAMOND_STORAGE_POSITION
```

### FacetAddressAndPosition

```solidity
struct FacetAddressAndPosition {
  address facetAddress;
  uint96 functionSelectorPosition;
}
```

### FacetFunctionSelectors

```solidity
struct FacetFunctionSelectors {
  bytes4[] functionSelectors;
  uint256 facetAddressPosition;
}
```

### DiamondStorage

```solidity
struct DiamondStorage {
  mapping(bytes4 => struct LibDiamond.FacetAddressAndPosition) selectorToFacetAndPosition;
  mapping(address => struct LibDiamond.FacetFunctionSelectors) facetFunctionSelectors;
  address[] facetAddresses;
  mapping(bytes4 => bool) supportedInterfaces;
  address diamondOwner;
}
```

### diamondStorage

```solidity
function diamondStorage() internal pure returns (struct LibDiamond.DiamondStorage ds)
```

### DiamondOwnershipTransferred

```solidity
event DiamondOwnershipTransferred(address previousOwner, address newOwner)
```

### setDiamondOwner

```solidity
function setDiamondOwner(address _newOwner) internal
```

### diamondOwner

```solidity
function diamondOwner() internal view returns (address diamondOwner_)
```

### enforceIsDiamondOwner

```solidity
function enforceIsDiamondOwner() internal view
```

### DiamondCut

```solidity
event DiamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata)
```

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata) internal
```

### addFunctions

```solidity
function addFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### replaceFunctions

```solidity
function replaceFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### removeFunctions

```solidity
function removeFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### addFacet

```solidity
function addFacet(struct LibDiamond.DiamondStorage ds, address _facetAddress) internal
```

### addFunction

```solidity
function addFunction(struct LibDiamond.DiamondStorage ds, bytes4 _selector, uint96 _selectorPosition, address _facetAddress) internal
```

### removeFunction

```solidity
function removeFunction(struct LibDiamond.DiamondStorage ds, address _facetAddress, bytes4 _selector) internal
```

### initializeDiamondCut

```solidity
function initializeDiamondCut(address _init, bytes _calldata) internal
```

### enforceHasContractCode

```solidity
function enforceHasContractCode(address _contract, string _errorMessage) internal view
```

