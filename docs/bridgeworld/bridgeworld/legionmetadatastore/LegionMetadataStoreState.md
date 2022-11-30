# Solidity API

## LegionMetadataStoreState

### LegionQuestLevelUp

```solidity
event LegionQuestLevelUp(uint256 _tokenId, uint8 _questLevel)
```

### LegionCraftLevelUp

```solidity
event LegionCraftLevelUp(uint256 _tokenId, uint8 _craftLevel)
```

### LegionConstellationRankUp

```solidity
event LegionConstellationRankUp(uint256 _tokenId, enum Constellation _constellation, uint8 _rank)
```

### LegionCreated

```solidity
event LegionCreated(address _owner, uint256 _tokenId, enum LegionGeneration _generation, enum LegionClass _class, enum LegionRarity _rarity)
```

### idToGeneration

```solidity
mapping(uint256 => enum LegionGeneration) idToGeneration
```

### idToClass

```solidity
mapping(uint256 => enum LegionClass) idToClass
```

### idToRarity

```solidity
mapping(uint256 => enum LegionRarity) idToRarity
```

### idToOldId

```solidity
mapping(uint256 => uint256) idToOldId
```

### idToQuestLevel

```solidity
mapping(uint256 => uint8) idToQuestLevel
```

### idToCraftLevel

```solidity
mapping(uint256 => uint8) idToCraftLevel
```

### idToConstellationRanks

```solidity
mapping(uint256 => uint8[6]) idToConstellationRanks
```

### _genToClassToRarityToOldIdToUri

```solidity
mapping(enum LegionGeneration => mapping(enum LegionClass => mapping(enum LegionRarity => mapping(uint256 => string)))) _genToClassToRarityToOldIdToUri
```

### __LegionMetadataStoreState_init

```solidity
function __LegionMetadataStoreState_init() internal
```

