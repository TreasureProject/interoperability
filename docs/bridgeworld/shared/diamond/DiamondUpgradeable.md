# Solidity API

## DiamondUpgradeable

### Initialization

```solidity
struct Initialization {
  address initContract;
  bytes initData;
}
```

### reinit

```solidity
function reinit(address _contractOwner, struct IDiamondCut.FacetCut[] _diamondCut, struct DiamondUpgradeable.Initialization[] _initializations) public
```

### fallback

```solidity
fallback() external payable
```

### receive

```solidity
receive() external payable
```

