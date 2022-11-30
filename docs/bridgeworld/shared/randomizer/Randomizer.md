# Solidity API

## Randomizer

### initialize

```solidity
function initialize() external
```

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

### setNumBlocksUntilNextIncrement

```solidity
function setNumBlocksUntilNextIncrement(uint8 _numBlocksUntilNextIncrement) external
```

### incrementCommitId

```solidity
function incrementCommitId() external
```

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

### _incrementCommitId

```solidity
function _incrementCommitId() private
```

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

