# Solidity API

## SmolRacing

### initialize

```solidity
function initialize() external
```

### stakeVehicles

```solidity
function stakeVehicles(struct SmolRacingState.SmolCar[] _cars, struct SmolRacingState.Swolercycle[] _cycles) external
```

### unstakeVehicles

```solidity
function unstakeVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### restakeVehicles

```solidity
function restakeVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### claimRewardsForVehicles

```solidity
function claimRewardsForVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### ownsVehicle

```solidity
function ownsVehicle(address _collection, address _owner, uint256 _tokenId) external view returns (bool)
```

### vehiclesOfOwner

```solidity
function vehiclesOfOwner(address _collection, address _owner) external view returns (uint256[])
```

### smolsOfOwner

```solidity
function smolsOfOwner(address _collection, address _owner) external view returns (uint256[])
```

### numberOfRacesToClaim

```solidity
function numberOfRacesToClaim(address _vehicleAddress, uint256 _tokenId) public view returns (uint256)
```

### vehicleOddsBoost

```solidity
function vehicleOddsBoost(address _vehicleAddress, uint256 _tokenId) public view returns (uint256)
```

### _stakeVehicle

```solidity
function _stakeVehicle(contract IERC721 _smol, address _vehicleAddress, struct SmolRacingState.Vehicle _vehicle) private
```

### _restakeVehicle

```solidity
function _restakeVehicle(address _vehicleAddress, uint256 _tokenId) private
```

### _unstakeVehicle

```solidity
function _unstakeVehicle(contract IERC721 _smol, address _vehicleAddress, uint256 _tokenId) private
```

### _claimRewardsForVehicle

```solidity
function _claimRewardsForVehicle(address _vehicleAddress, uint256 _tokenId) private
```

### _claimRewards

```solidity
function _claimRewards(uint256 numRewards, address _vehicleAddress, uint256 _tokenId, struct SmolRacingState.RacingInfo _info) private
```

### _claimReward

```solidity
function _claimReward(address _vehicleAddress, uint256 _tokenId, uint32 _boostedOdds, uint256 _randomNumber) private
```

### _calculateBoostOdds

```solidity
function _calculateBoostOdds(address _vehicleAddress, struct SmolRacingState.Vehicle _vehicle) private returns (uint32 boostOdds_)
```

### _getRandomSeedForVehicle

```solidity
function _getRandomSeedForVehicle(address _vehicleAddress, uint256 _tokenId) private view returns (uint256)
```

