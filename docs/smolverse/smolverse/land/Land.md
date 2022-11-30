# Solidity API

## Land

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### landMaxLevel

```solidity
uint256 landMaxLevel
```

_18 decimals_

### levelIQCost

```solidity
uint256 levelIQCost
```

_18 decimals_

### landLevels

```solidity
mapping(uint256 => uint256) landLevels
```

_tokenId => land level_

### LandMint

```solidity
event LandMint(address to, uint256 tokenId)
```

### LandUpgrade

```solidity
event LandUpgrade(uint256 tokenId, uint256 availableLevel)
```

### LandMaxLevel

```solidity
event LandMaxLevel(uint256 landMaxLevel)
```

### LevelIQCost

```solidity
event LevelIQCost(uint256 levelIQCost)
```

### constructor

```solidity
constructor() public
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### canUpgrade

```solidity
function canUpgrade(uint256 _tokenId) public view returns (bool isUpgradeAvailable, uint256 availableLevel)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | tokenId of the land |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| isUpgradeAvailable | bool | true if higher level is available |
| availableLevel | uint256 | what level can land be upgraded to |

### findBiggestBrainIQ

```solidity
function findBiggestBrainIQ(address) public pure returns (uint256 highestIQ)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| highestIQ | uint256 | IQ of the biggest brain |

### upgrade

```solidity
function upgrade(uint256 _tokenId) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | tokenId of the land |

### upgradeSafe

```solidity
function upgradeSafe(uint256 _tokenId) public returns (bool)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setMaxLevel

```solidity
function setMaxLevel(uint256 _landMaxLevel) external
```

### setLevelIQCost

```solidity
function setLevelIQCost(uint256 _levelIQCost) external
```

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

