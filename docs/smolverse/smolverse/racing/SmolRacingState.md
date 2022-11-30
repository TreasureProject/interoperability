# Solidity API

## SmolRacingState

### SmolStaked

```solidity
event SmolStaked(address _owner, address _smolAddress, uint256 _tokenId, uint64 _stakeTime)
```

### StartRacing

```solidity
event StartRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces, uint64[4] _driverIds, uint256 _requestId)
```

### RestartRacing

```solidity
event RestartRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces, uint64[4] _driverIds, uint256 _requestId)
```

### StopRacing

```solidity
event StopRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces)
```

### SmolUnstaked

```solidity
event SmolUnstaked(address _owner, address _smolAddress, uint256 _tokenId)
```

### RewardClaimed

```solidity
event RewardClaimed(address _owner, address _vehicleAddress, uint256 _tokenId, uint256 _claimedRewardId, uint256 _amount)
```

### NoRewardEarned

```solidity
event NoRewardEarned(address _owner, address _vehicleAddress, uint256 _tokenId)
```

### racingTrophies

```solidity
contract ISmolRacingTrophies racingTrophies
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

### smolCars

```solidity
contract IERC721 smolCars
```

### swolercycles

```solidity
contract IERC721 swolercycles
```

### userToVehiclesStaked

```solidity
mapping(address => mapping(address => struct EnumerableSetUpgradeable.UintSet)) userToVehiclesStaked
```

### vehicleIdToVehicleInfo

```solidity
mapping(address => mapping(uint256 => struct SmolRacingState.Vehicle)) vehicleIdToVehicleInfo
```

### vehicleIdToRacingInfo

```solidity
mapping(address => mapping(uint256 => struct SmolRacingState.RacingInfo)) vehicleIdToRacingInfo
```

### tokenIdToRequestId

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRequestId
```

### tokenIdToStakeStartTime

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToStakeStartTime
```

### tokenIdToRewardsClaimed

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsClaimed
```

### tokenIdToRewardsInProgress

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsInProgress
```

### smolTreasureIdToOddsBoost

```solidity
mapping(uint256 => uint32) smolTreasureIdToOddsBoost
```

### ODDS_DENOMINATOR

```solidity
uint32 ODDS_DENOMINATOR
```

### maxOddsBoostAllowed

```solidity
uint32 maxOddsBoostAllowed
```

### additionalSmolBrainBoost

```solidity
uint32 additionalSmolBrainBoost
```

### additionalSmolBodyBoost

```solidity
uint32 additionalSmolBodyBoost
```

### rewardOptions

```solidity
uint256[] rewardOptions
```

### rewardIdToOdds

```solidity
mapping(uint256 => uint32) rewardIdToOdds
```

### timeForReward

```solidity
uint256 timeForReward
```

### endEmissionTime

```solidity
uint256 endEmissionTime
```

### __SmolRacingState_init

```solidity
function __SmolRacingState_init() internal
```

### BoostItem

```solidity
struct BoostItem {
  uint64 treasureId;
  uint64 quantity;
}
```

### BoostItemOdds

```solidity
struct BoostItemOdds {
  uint64 quantityNeededForBoost;
  uint32 oddsBoostPerQuantity;
}
```

### SmolCar

```solidity
struct SmolCar {
  uint64[4] driverIds;
  uint64 carId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### Swolercycle

```solidity
struct Swolercycle {
  uint64[2] driverIds;
  uint64 cycleId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### Vehicle

```solidity
struct Vehicle {
  uint64[4] driverIds;
  uint64 vehicleId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### RacingInfo

```solidity
struct RacingInfo {
  uint64 racingStartTime;
  uint8 totalRaces;
  uint8 racesCompleted;
  uint64 lastClaimed;
  uint32 boostedOdds;
}
```

