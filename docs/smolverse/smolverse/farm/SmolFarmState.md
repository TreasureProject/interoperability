# Solidity API

## SmolFarmState

### SmolStaked

```solidity
event SmolStaked(address _owner, address _smolAddress, uint256 _tokenId, uint256 _stakeTime)
```

### SmolUnstaked

```solidity
event SmolUnstaked(address _owner, address _smolAddress, uint256 _tokenId)
```

### StartClaiming

```solidity
event StartClaiming(address _owner, address _smolAddress, uint256 _tokenId, uint256 _requestId, uint256 _numberRewards)
```

### RewardClaimed

```solidity
event RewardClaimed(address _owner, address _smolAddress, uint256 _tokenId, uint256 _claimedRewardId, uint256 _amount)
```

### treasures

```solidity
contract ISmolTreasures treasures
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### smolBrains

```solidity
contract IERC721 smolBrains
```

### smolBodies

```solidity
contract IERC721 smolBodies
```

### smolLand

```solidity
contract IERC721 smolLand
```

### userToTokensStaked

```solidity
mapping(address => mapping(address => struct EnumerableSetUpgradeable.UintSet)) userToTokensStaked
```

### tokenIdToStakeStartTime

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToStakeStartTime
```

### tokenIdToRewardsClaimed

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsClaimed
```

### tokenIdToRequestId

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRequestId
```

### tokenIdToRewardsInProgress

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsInProgress
```

### rewardOptions

```solidity
uint256[] rewardOptions
```

### rewardIdToOdds

```solidity
mapping(uint256 => uint32) rewardIdToOdds
```

### _timeForReward

```solidity
uint256 _timeForReward
```

### _endEmissionTime

```solidity
uint256 _endEmissionTime
```

### __SmolFarmState_init

```solidity
function __SmolFarmState_init() internal
```

