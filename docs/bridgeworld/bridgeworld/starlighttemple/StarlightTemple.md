# Solidity API

## StarlightTemple

### initialize

```solidity
function initialize() external
```

### setTempleSettings

```solidity
function setTempleSettings(uint8 _maxConstellationRank, uint256 _starlightConsumableId, uint256[] _currentRankToNeededStarlight, uint256[] _currentRankToPrismAmount, uint256[] _currentRankToPrismIds) external
```

### setIsIncreasingRankPaused

```solidity
function setIsIncreasingRankPaused(bool _isIncreasingRankPaused) external
```

### increaseRankOfConstellations

```solidity
function increaseRankOfConstellations(uint256[] _tokenIds, enum Constellation[] _constellations) external
```

### _increaseRankOfConstellation

```solidity
function _increaseRankOfConstellation(uint256 _tokenId, enum Constellation _constellation) private
```

### maxRankOfConstellations

```solidity
function maxRankOfConstellations(uint256 _tokenId, uint8 _numberOfConstellations) external
```

### allConstellations

```solidity
function allConstellations() public pure returns (enum Constellation[6])
```

### numberOfConstellations

```solidity
function numberOfConstellations() public pure returns (uint8)
```

