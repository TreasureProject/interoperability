# Solidity API

## TreasureMetadataStore

### initialize

```solidity
function initialize() external
```

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getAnyRandomTreasureForTier

```solidity
function getAnyRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getRandomTreasureForTierAndCategory

```solidity
function getRandomTreasureForTierAndCategory(uint8 _tier, enum TreasureCategory _category, uint256 _randomNumber) external view returns (uint256)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

