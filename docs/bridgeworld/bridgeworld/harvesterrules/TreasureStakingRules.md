# Solidity API

## TreasureStakingRules

### maxStakeablePerUser

```solidity
uint256 maxStakeablePerUser
```

### getAmountTreasuresStaked

```solidity
mapping(address => uint256) getAmountTreasuresStaked
```

### MaxStakeablePerUser

```solidity
event MaxStakeablePerUser(uint256 maxStakeablePerUser)
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MaxStakeablePerUserReached

```solidity
error MaxStakeablePerUserReached()
```

### validateInput

```solidity
modifier validateInput(address _user, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, uint256 _maxStakeablePerUser) external
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256 _tokenId, uint256 _amount) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | token Id of NFT |
| _amount | uint256 | number of NFTs for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external pure returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### getTreasureBoost

```solidity
function getTreasureBoost(uint256 _tokenId, uint256 _amount) public pure returns (uint256 boost)
```

### _processStake

```solidity
function _processStake(address _user, address, uint256, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256, uint256 _amount) internal
```

### setMaxStakeablePerUser

```solidity
function setMaxStakeablePerUser(uint256 _maxStakeablePerUser) external
```

### _setMaxStakeablePerUser

```solidity
function _setMaxStakeablePerUser(uint256 _maxStakeablePerUser) internal
```

