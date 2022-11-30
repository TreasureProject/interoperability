# Solidity API

## SmolRacingAdmin

### __SmolRacingAdmin_init

```solidity
function __SmolRacingAdmin_init() internal
```

### setContracts

```solidity
function setContracts(address _treasures, address _smolBrains, address _smolBodies, address _smolCars, address _swolercycles, address _racingTrophies, address _randomizer) external
```

### setRewards

```solidity
function setRewards(uint256[] _rewardIds, uint32[] _rewardOdds) external
```

### setTimeForReward

```solidity
function setTimeForReward(uint256 _rewardTime) external
```

### setEndTimeForEmissions

```solidity
function setEndTimeForEmissions(uint256 _endTime) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

