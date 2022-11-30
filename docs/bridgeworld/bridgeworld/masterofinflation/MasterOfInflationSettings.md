# Solidity API

## MasterOfInflationSettings

### __MasterOfInflationSettings_init

```solidity
function __MasterOfInflationSettings_init() internal
```

### createPool

```solidity
function createPool(struct CreatePoolParams _params) external
```

### setPoolAccess

```solidity
function setPoolAccess(uint64 _poolId, struct SetPoolAccessParams[] _setPoolParams) external
```

### setItemMintable

```solidity
function setItemMintable(uint64 _poolId, uint256[] _itemIds, bool[] _mintables) external
```

### disablePool

```solidity
function disablePool(uint64 _poolId) external
```

### setItemRatePerSecond

```solidity
function setItemRatePerSecond(uint64 _poolId, uint256 _itemRate) external
```

### _setItemRatePerSecond

```solidity
function _setItemRatePerSecond(uint64 _poolId, uint256 _itemRate, bool _updateLastChanged) private
```

### setSModifier

```solidity
function setSModifier(uint64 _poolId, uint256 _sModifier) external
```

### _setSModifier

```solidity
function _setSModifier(uint64 _poolId, uint256 _sModifier) private
```

### setAdmin

```solidity
function setAdmin(uint64 _poolId, address _admin) external
```

### _setAdmin

```solidity
function _setAdmin(uint64 _poolId, address _admin) private
```

### setConfigProvider

```solidity
function setConfigProvider(uint64 _poolId, address _configProvider) external
```

### _setConfigProvider

```solidity
function _setConfigProvider(uint64 _poolId, address _configProvider) private
```

### itemRatePerSecond

```solidity
function itemRatePerSecond(uint64 _poolId) external view returns (uint256)
```

### _itemsSinceTime

```solidity
function _itemsSinceTime(uint256 _rate, uint128 _timestamp) internal view returns (uint256)
```

### onlyPoolAdmin

```solidity
modifier onlyPoolAdmin(uint64 _poolId)
```

### validPool

```solidity
modifier validPool(uint64 _poolId)
```

### onlyPoolAccessor

```solidity
modifier onlyPoolAccessor(uint64 _poolId)
```

## CreatePoolParams

```solidity
struct CreatePoolParams {
  uint256 itemRatePerSecond;
  uint256 initialItemsInPool;
  uint256 sModifier;
  address admin;
  address collection;
  address configProvider;
}
```

## SetPoolAccessParams

```solidity
struct SetPoolAccessParams {
  address user;
  bool canAccess;
}
```

