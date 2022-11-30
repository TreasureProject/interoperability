# Solidity API

## RecruitLevel

### initialize

```solidity
function initialize() external
```

### increaseRecruitExp

```solidity
function increaseRecruitExp(uint256 _tokenId, uint32 _expIncrease) external
```

### ascend

```solidity
function ascend(uint256 _tokenId, enum RecruitType _newRecruitType) external
```

### beginToAscendToAux

```solidity
function beginToAscendToAux(uint256 _tokenId) external
```

### endToAscendToAux

```solidity
function endToAscendToAux(uint256 _tokenId) external
```

### oddsOfAscending

```solidity
function oddsOfAscending() public view returns (uint32)
```

### _currentAscensionCap

```solidity
function _currentAscensionCap() internal view returns (uint256)
```

### getRecruitLevel

```solidity
function getRecruitLevel(uint256 _tokenId) public view returns (uint16)
```

### recruitType

```solidity
function recruitType(uint256 _tokenId) external view returns (enum RecruitType)
```

