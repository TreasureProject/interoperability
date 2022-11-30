# Solidity API

## SchoolMock

### WEEK

```solidity
uint256 WEEK
```

### iqPerWeek

```solidity
uint256 iqPerWeek
```

_18 decimals_

### totalIqStored

```solidity
uint256 totalIqStored
```

_18 decimals_

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

_unix timestamp_

### smolBrainSupply

```solidity
uint256 smolBrainSupply
```

### smolBrain

```solidity
contract SmolBrainsMock smolBrain
```

### timestampJoined

```solidity
mapping(uint256 => uint256) timestampJoined
```

### JoinSchool

```solidity
event JoinSchool(uint256 tokenId)
```

### DropSchool

```solidity
event DropSchool(uint256 tokenId)
```

### SetIqPerWeek

```solidity
event SetIqPerWeek(uint256 iqPerWeek)
```

### SmolBrainSet

```solidity
event SmolBrainSet(address smolBrain)
```

### initialize

```solidity
function initialize() external
```

### onlySmolBrainOwner

```solidity
modifier onlySmolBrainOwner(uint256 _tokenId)
```

### atSchool

```solidity
modifier atSchool(uint256 _tokenId, bool expectedAtSchool)
```

### updateTotalIQ

```solidity
modifier updateTotalIQ(bool isJoining)
```

### totalIQ

```solidity
function totalIQ() public view returns (uint256)
```

### iqEarned

```solidity
function iqEarned(uint256 _tokenId) public view returns (uint256 iq)
```

### isAtSchool

```solidity
function isAtSchool(uint256 _tokenId) public view returns (bool)
```

### join

```solidity
function join(uint256 _tokenId) external
```

### drop

```solidity
function drop(uint256 _tokenId) external
```

### setSmolBrain

```solidity
function setSmolBrain(address _smolBrain) external
```

### setIqPerWeek

```solidity
function setIqPerWeek(uint256 _iqPerWeek) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _iqPerWeek | uint256 | NUmber of IQ points to earn a week, 18 decimals |

