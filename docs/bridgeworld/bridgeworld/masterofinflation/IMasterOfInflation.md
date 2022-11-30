# Solidity API

## IMasterOfInflation

### tryMintFromPool

```solidity
function tryMintFromPool(struct MintFromPoolParams _params) external returns (bool _didMintItem)
```

## MintFromPoolParams

```solidity
struct MintFromPoolParams {
  uint64 poolId;
  uint64 amount;
  uint32 bonus;
  uint256 itemId;
  uint256 randomNumber;
  address user;
}
```

