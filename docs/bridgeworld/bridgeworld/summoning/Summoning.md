# Solidity API

## Summoning

### initialize

```solidity
function initialize() external
```

### startSummon

```solidity
function startSummon(uint256[] _tokenIds, uint256[] _crystalIds) external
```

### _startSummonSingle

```solidity
function _startSummonSingle(uint256 _tokenId, uint256 _crystalId) private returns (uint256, uint256)
```

### calculateSuccessRate

```solidity
function calculateSuccessRate() public view returns (uint256)
```

### finishSummonTokens

```solidity
function finishSummonTokens(uint256[] _tokenIds) external
```

### _finishSummonSingle

```solidity
function _finishSummonSingle(uint256 _tokenId) private returns (uint256, uint256)
```

### _determineRarity

```solidity
function _determineRarity(uint256 _randomNumber, struct LegionMetadata _metadata, uint256 _crystalId) private view returns (enum LegionRarity)
```

### didSummoningSucceed

```solidity
function didSummoningSucceed(uint256 _tokenId) external view returns (bool, uint256)
```

### _didSummoningSucceed

```solidity
function _didSummoningSucceed(uint256 _tokenId, uint256 _randomNumber) private view returns (bool)
```

### getStakedLegions

```solidity
function getStakedLegions(address _user) external view returns (uint256[])
```

