# Solidity API

## IPartsStakingRules

### getAmountStaked

```solidity
function getAmountStaked(address _user) external view returns (uint256)
```

Gets amount of staked NFTs of given contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet address for which to read the value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | number of NFTs staked by `_user` |

