# Solidity API

## MasterOfInflationState

### PoolCreated

```solidity
event PoolCreated(uint64 poolId, address poolCollection)
```

### PoolAdminChanged

```solidity
event PoolAdminChanged(uint64 poolId, address oldAdmin, address newAdmin)
```

### PoolRateChanged

```solidity
event PoolRateChanged(uint64 poolId, uint256 oldItemRate, uint256 newItemRate)
```

### PoolAccessChanged

```solidity
event PoolAccessChanged(uint64 poolId, address accessor, bool canAccess)
```

### PoolConfigProviderChanged

```solidity
event PoolConfigProviderChanged(uint64 poolId, address oldProvider, address newProvider)
```

### PoolSModifierChanged

```solidity
event PoolSModifierChanged(uint64 poolId, uint256 oldModifier, uint256 newModifier)
```

### PoolDisabled

```solidity
event PoolDisabled(uint64 poolId)
```

### PoolItemMintableChanged

```solidity
event PoolItemMintableChanged(uint64 poolId, uint256 itemId, bool mintable)
```

### ItemMintedFromPool

```solidity
event ItemMintedFromPool(uint64 poolId, address user, uint256 itemId, uint64 amount)
```

### poolId

```solidity
uint64 poolId
```

### poolIdToInfo

```solidity
mapping(uint64 => struct PoolInfo) poolIdToInfo
```

### poolIdToItemIdToMintable

```solidity
mapping(uint64 => mapping(uint256 => bool)) poolIdToItemIdToMintable
```

### __MasterOfInflationState_init

```solidity
function __MasterOfInflationState_init() internal
```

## PoolInfo

```solidity
struct PoolInfo {
  bool isEnabled;
  address poolAdmin;
  uint88 emptySpace1;
  uint128 startTime;
  uint128 timeRateLastChanged;
  uint256 itemRatePerSecond;
  uint256 totalItemsAtLastRateChange;
  uint256 itemsClaimed;
  mapping(address => bool) addressToAccess;
  uint256 sModifier;
  address poolCollection;
  uint96 emptySpace2;
  address poolConfigProvider;
  uint96 emptySpace3;
}
```

