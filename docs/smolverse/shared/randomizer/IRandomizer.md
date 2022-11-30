# Solidity API

## IRandomizer

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

_Sets the number of blocks that must pass between increment the commitId and seeding the random. Admin only_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _numBlocksAfterIncrement | uint8 | the number of blocks to wait before allows commit incrementing |

### incrementCommitId

```solidity
function incrementCommitId() external
```

_Increments the commit id. Admin only_

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

_Adding the random number needs to be done AFTER incrementing the commit id on a separate transaction. If
 these are done together, there is a potential vulnerability to front load a commit when the bad actor
 sees the value of the random number._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _seed | uint256 | the entropy used for the current commit id |

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

_Returns a request ID for a random number. This is unique._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | A request id to be used to acquire the assigned random when it has been set |

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

_Returns the random number for the given request ID. Will revert if the random is not ready._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _requestId | uint256 | the unique id given from `requestRandomNumber` |

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

_Returns if the random number for the given request ID is ready or not. Call before calling revealRandomNumber._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _requestId | uint256 | the unique id given from `requestRandomNumber` |

