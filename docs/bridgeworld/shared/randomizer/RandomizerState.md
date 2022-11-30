# Solidity API

## RandomizerState

### RandomRequest

```solidity
event RandomRequest(uint256 _requestId, uint256 _commitId)
```

### RandomSeeded

```solidity
event RandomSeeded(uint256 _commitId)
```

### commitIdToRandomSeed

```solidity
mapping(uint256 => uint256) commitIdToRandomSeed
```

### requestIdToCommitId

```solidity
mapping(uint256 => uint256) requestIdToCommitId
```

### lastIncrementBlockNum

```solidity
uint256 lastIncrementBlockNum
```

### commitId

```solidity
uint256 commitId
```

### requestIdCur

```solidity
uint256 requestIdCur
```

### nextCommitIdToSeed

```solidity
uint256 nextCommitIdToSeed
```

### pendingCommits

```solidity
uint256 pendingCommits
```

### numBlocksAfterIncrement

```solidity
uint8 numBlocksAfterIncrement
```

### numBlocksUntilNextIncrement

```solidity
uint8 numBlocksUntilNextIncrement
```

### __RandomizerState_init

```solidity
function __RandomizerState_init() internal
```

