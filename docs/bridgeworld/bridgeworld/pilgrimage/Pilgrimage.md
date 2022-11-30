# Solidity API

## Pilgrimage

### initialize

```solidity
function initialize() external
```

### embarkOnPilgrimages

```solidity
function embarkOnPilgrimages(uint256[] _ids, uint256[] _amounts, enum LegionGeneration _generation) external
```

### _embarkOnPilgrimage

```solidity
function _embarkOnPilgrimage(uint256 _id, enum LegionGeneration _generation) private returns (uint256)
```

### returnTokensFromPilgrimages

```solidity
function returnTokensFromPilgrimages(uint256[] _pilgrimageIds) external
```

### returnFromPilgrimages

```solidity
function returnFromPilgrimages() external
```

### _returnFromPilgrimages

```solidity
function _returnFromPilgrimages(uint256[] _inProgressPilgrimages) private
```

### _returnFromPilgrimage

```solidity
function _returnFromPilgrimage(uint256 _pilgrimageID) private returns (uint256)
```

