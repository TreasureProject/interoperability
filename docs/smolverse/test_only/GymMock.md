# Solidity API

## GymMock

### WEEK

```solidity
uint256 WEEK
```

### platesPerWeek

```solidity
uint256 platesPerWeek
```

_18 decimals_

### totalPlatesStored

```solidity
uint256 totalPlatesStored
```

_18 decimals_

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

_unix timestamp_

### smolBodiesSupply

```solidity
uint256 smolBodiesSupply
```

### smolBodies

```solidity
contract SmolBodiesMock smolBodies
```

### timestampJoined

```solidity
mapping(uint256 => uint256) timestampJoined
```

### JoinGym

```solidity
event JoinGym(uint256 tokenId)
```

### DropGym

```solidity
event DropGym(uint256 tokenId, uint256 plates, uint256 level)
```

### SetPlatesPerWeek

```solidity
event SetPlatesPerWeek(uint256 platesPerWeek)
```

### SmolBodiesSet

```solidity
event SmolBodiesSet(address smolBodies)
```

### initialize

```solidity
function initialize() external
```

### onlySmolBodyOwner

```solidity
modifier onlySmolBodyOwner(uint256 _tokenId)
```

### atGym

```solidity
modifier atGym(uint256 _tokenId, bool expectedAtGym)
```

### updateTotalPlates

```solidity
modifier updateTotalPlates(bool isJoining)
```

### totalPlates

```solidity
function totalPlates() public view returns (uint256)
```

### platesEarned

```solidity
function platesEarned(uint256 _tokenId) public view returns (uint256 plates)
```

### isAtGym

```solidity
function isAtGym(uint256 _tokenId) public view returns (bool)
```

### join

```solidity
function join(uint256 _tokenId) external
```

### drop

```solidity
function drop(uint256 _tokenId) external
```

### setSmolBodies

```solidity
function setSmolBodies(address _smolBodies) external
```

### setPlatesPerWeek

```solidity
function setPlatesPerWeek(uint256 _platesPerWeek) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _platesPerWeek | uint256 | Number of plate points to earn a week, 18 decimals |

