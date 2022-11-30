# Solidity API

## MasterOfInflation

### initialize

```solidity
function initialize() external
```

### tryMintFromPool

```solidity
function tryMintFromPool(struct MintFromPoolParams _params) external returns (bool _didMintItem)
```

### chanceOfItemFromPool

```solidity
function chanceOfItemFromPool(uint64 _poolId, uint64 _amount, uint32 _bonus) public view returns (uint256)
```

### chanceOfItemFromPools

```solidity
function chanceOfItemFromPools(struct ChanceOfItemFromPoolParams[] _params) external view returns (uint256[])
```

### itemsInPool

```solidity
function itemsInPool(uint64 _poolId) public view returns (uint256)
```

### hasAccessToPool

```solidity
function hasAccessToPool(uint64 _poolId, address _address) external view returns (bool)
```

## ChanceOfItemFromPoolParams

```solidity
struct ChanceOfItemFromPoolParams {
  uint64 poolId;
  uint64 amount;
  uint32 bonus;
}
```

