# Solidity API

## SmolFarm

### initialize

```solidity
function initialize() external
```

### setRewards

```solidity
function setRewards(uint256[] _rewardIds, uint32[] _rewardOdds) external
```

### stakeSmol

```solidity
function stakeSmol(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _stakeSmol

```solidity
function _stakeSmol(contract IERC721 smol, uint256 _tokenId) private
```

### unstakeSmol

```solidity
function unstakeSmol(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _unstakeSmol

```solidity
function _unstakeSmol(contract IERC721 smol, uint256 _tokenId) private
```

### startClaimingRewards

```solidity
function startClaimingRewards(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _startClaimingReward

```solidity
function _startClaimingReward(contract IERC721 smol, uint256 _tokenId) private
```

### finishClaimingRewards

```solidity
function finishClaimingRewards(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _finishClaimingReward

```solidity
function _finishClaimingReward(contract IERC721 smol, uint256 _tokenId) private
```

### _claimReward

```solidity
function _claimReward(contract IERC721 smol, uint256 _tokenId, uint256 _randomNumber) private
```

### numberOfRewardsToClaim

```solidity
function numberOfRewardsToClaim(address smolAddress, uint256 _tokenId) public view returns (uint256)
```

### setTimeForReward

```solidity
function setTimeForReward(uint256 _rewardTime) external
```

### setEndTimeForEmissions

```solidity
function setEndTimeForEmissions(uint256 _endTime) external
```

### ownsToken

```solidity
function ownsToken(address _collection, address _owner, uint256 _tokenId) external view returns (bool)
```

### tokensOfOwner

```solidity
function tokensOfOwner(address _collection, address _owner) external view returns (uint256[])
```

