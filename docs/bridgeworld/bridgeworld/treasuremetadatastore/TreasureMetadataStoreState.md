# Solidity API

## TreasureMetadataStoreState

### tierToMintableTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToMintableTreasureIds
```

### treasureIdToMetadata

```solidity
mapping(uint256 => struct TreasureMetadata) treasureIdToMetadata
```

### tierToCategoryToMintableTreasureIds

```solidity
mapping(uint8 => mapping(enum TreasureCategory => struct EnumerableSetUpgradeable.UintSet)) tierToCategoryToMintableTreasureIds
```

### tierToTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToTreasureIds
```

### __TreasureMetadataStoreState_init

```solidity
function __TreasureMetadataStoreState_init() internal
```

