# Solidity API

## ITreasureMetadataStore

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getRandomTreasureForTierAndCategory

```solidity
function getRandomTreasureForTierAndCategory(uint8 _tier, enum TreasureCategory _category, uint256 _randomNumber) external view returns (uint256)
```

### getAnyRandomTreasureForTier

```solidity
function getAnyRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

## TreasureMetadata

```solidity
struct TreasureMetadata {
  enum TreasureCategory category;
  uint8 tier;
  uint32 craftingBreakOdds;
  bool isMintable;
  uint256 consumableIdDropWhenBreak;
}
```

## TreasureCategory

```solidity
enum TreasureCategory {
  ALCHEMY,
  ARCANA,
  BREWING,
  ENCHANTER,
  LEATHERWORKING,
  SMITHING
}
```

