# Solidity API

## SmolTreasureMetadataStoreState

### tierToMintableTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToMintableTreasureIds
```

### treasureIdToMetadata

```solidity
mapping(uint256 => struct TreasureMetadata) treasureIdToMetadata
```

### __SmolTreasureMetadataStoreState_init

```solidity
function __SmolTreasureMetadataStoreState_init() internal
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
  NONE,
  EARTH,
  EXTRA,
  FIRE,
  SPIRIT,
  WATER,
  WIND
}
```

