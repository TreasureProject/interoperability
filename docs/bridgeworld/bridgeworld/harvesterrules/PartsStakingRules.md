# Solidity API

## PartsStakingRules

### staked

```solidity
uint256 staked
```

### maxStakeableTotal

```solidity
uint256 maxStakeableTotal
```

### maxStakeablePerUser

```solidity
uint256 maxStakeablePerUser
```

### boostFactor

```solidity
uint256 boostFactor
```

### getAmountStaked

```solidity
mapping(address => uint256) getAmountStaked
```

### MaxStakeableTotal

```solidity
event MaxStakeableTotal(uint256 maxStakeableTotal)
```

### MaxStakeablePerUser

```solidity
event MaxStakeablePerUser(uint256 maxStakeablePerUser)
```

### BoostFactor

```solidity
event BoostFactor(uint256 boostFactor)
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MaxStakeable

```solidity
error MaxStakeable()
```

### MaxStakeablePerUserReached

```solidity
error MaxStakeablePerUserReached()
```

### MinUserGlobalDeposit

```solidity
error MinUserGlobalDeposit()
```

### validateInput

```solidity
modifier validateInput(address _user, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, uint256 _maxStakeableTotal, uint256 _maxStakeablePerUser, uint256 _boostFactor) external
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256, uint256) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256 |  |
|  | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### _processStake

```solidity
function _processStake(address _user, address, uint256, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256, uint256 _amount) internal
```

### setMaxStakeableTotal

```solidity
function setMaxStakeableTotal(uint256 _maxStakeableTotal) external
```

### setMaxStakeablePerUser

```solidity
function setMaxStakeablePerUser(uint256 _maxStakeablePerUser) external
```

### setBoostFactor

```solidity
function setBoostFactor(uint256 _boostFactor) external
```

### _setMaxStakeableTotal

```solidity
function _setMaxStakeableTotal(uint256 _maxStakeableTotal) internal
```

### _setMaxStakeablePerUser

```solidity
function _setMaxStakeablePerUser(uint256 _maxStakeablePerUser) internal
```

### _setBoostFactor

```solidity
function _setBoostFactor(uint256 _boostFactor) internal
```

