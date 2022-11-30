# Solidity API

## IRandomizer

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
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

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

