# Solidity API

## FragmentSwapper

### initialize

```solidity
function initialize() external
```

### swapFragments

```solidity
function swapFragments(struct SwapParams[] _params) external
```

## SwapParams

```solidity
struct SwapParams {
  uint128 fragmentId;
  uint128 amount;
}
```

