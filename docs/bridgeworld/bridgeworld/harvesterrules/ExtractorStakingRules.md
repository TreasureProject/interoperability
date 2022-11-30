# Solidity API

## ExtractorStakingRules

### ExtractorData

```solidity
struct ExtractorData {
  address user;
  uint256 tokenId;
  uint256 stakedTimestamp;
}
```

### MAX_SPOTS

```solidity
uint256 MAX_SPOTS
```

### maxStakeable

```solidity
uint256 maxStakeable
```

### lifetime

```solidity
uint256 lifetime
```

_time in seconds during which extractor is live_

### extractorAddress

```solidity
address extractorAddress
```

_address of NFT extractor token_

### extractorCount

```solidity
struct CountersUpgradeable.Counter extractorCount
```

_latest spot Id_

### stakedExtractor

```solidity
mapping(uint256 => struct ExtractorStakingRules.ExtractorData) stakedExtractor
```

_maps spot Id to ExtractorData_

### extractorBoost

```solidity
mapping(uint256 => uint256) extractorBoost
```

_maps token Id => boost value_

### MaxStakeable

```solidity
event MaxStakeable(uint256 maxStakeable)
```

### ExtractorBoost

```solidity
event ExtractorBoost(uint256 tokenId, uint256 boost)
```

### ExtractorStaked

```solidity
event ExtractorStaked(address user, uint256 tokenId, uint256 spotId, uint256 amount)
```

### ExtractorReplaced

```solidity
event ExtractorReplaced(address user, uint256 tokenId, uint256 replacedSpotId)
```

### Lifetime

```solidity
event Lifetime(uint256 lifetime)
```

### ExtractorAddress

```solidity
event ExtractorAddress(address extractorAddress)
```

### InvalidAddress

```solidity
error InvalidAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MustReplaceOne

```solidity
error MustReplaceOne()
```

### InvalidSpotId

```solidity
error InvalidSpotId()
```

### MustReplaceWithHigherBoost

```solidity
error MustReplaceWithHigherBoost()
```

### ZeroBoost

```solidity
error ZeroBoost()
```

### MaxStakeableReached

```solidity
error MaxStakeableReached()
```

### CannotUnstake

```solidity
error CannotUnstake()
```

### TooManyStakeableSpots

```solidity
error TooManyStakeableSpots()
```

### validateInput

```solidity
modifier validateInput(address _nft, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, address _extractorAddress, uint256 _maxStakeable, uint256 _lifetime) external
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### isExtractorActive

```solidity
function isExtractorActive(uint256 _spotId) public view returns (bool)
```

### getExtractorCount

```solidity
function getExtractorCount() public view returns (uint256)
```

### getExtractors

```solidity
function getExtractors() external view returns (struct ExtractorStakingRules.ExtractorData[] extractors)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| extractors | struct ExtractorStakingRules.ExtractorData[] | array of all staked extractors |

### getExtractorsTotalBoost

```solidity
function getExtractorsTotalBoost() public view returns (uint256 totalBoost)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| totalBoost | uint256 | boost sum of all active extractors |

### getUserBoost

```solidity
function getUserBoost(address, address, uint256, uint256) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256 |  |
|  | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### canReplace

```solidity
function canReplace(address _user, address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) external returns (address user, uint256 replacedTokenId, uint256 replacedAmount)
```

Checks if extractor can be replaced

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address |  |
| _nft | address |  |
| _tokenId | uint256 | token Id of new extractor |
| _amount | uint256 | must be 1, only 1 extractor at a time can be replaced |
| _replacedSpotId | uint256 | index of stakedExtractor mapping for replaced extractor |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | wallet address that staked replaced NFT |
| replacedTokenId | uint256 | tokenId of replaced NFT |
| replacedAmount | uint256 | amount of replaced NFT, must be 1 for ERC721 |

### _processStake

```solidity
function _processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address, address, uint256, uint256) internal pure
```

_it's meant to be overridden by staking rules implementation_

### setMaxStakeable

```solidity
function setMaxStakeable(uint256 _maxStakeable) external
```

### setExtractorBoost

```solidity
function setExtractorBoost(uint256 _tokenId, uint256 _boost) external
```

### setExtractorLifetime

```solidity
function setExtractorLifetime(uint256 _lifetime) external
```

### _setMaxStakeable

```solidity
function _setMaxStakeable(uint256 _maxStakeable) internal
```

### _setExtractorAddress

```solidity
function _setExtractorAddress(address _extractorAddress) internal
```

### _setExtractorLifetime

```solidity
function _setExtractorLifetime(uint256 _lifetime) internal
```

