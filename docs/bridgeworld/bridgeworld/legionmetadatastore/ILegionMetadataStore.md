# Solidity API

## ILegionMetadataStore

### setInitialMetadataForLegion

```solidity
function setInitialMetadataForLegion(address _owner, uint256 _tokenId, enum LegionGeneration _generation, enum LegionClass _class, enum LegionRarity _rarity, uint256 _oldId) external
```

### increaseQuestLevel

```solidity
function increaseQuestLevel(uint256 _tokenId) external
```

### increaseCraftLevel

```solidity
function increaseCraftLevel(uint256 _tokenId) external
```

### increaseConstellationRank

```solidity
function increaseConstellationRank(uint256 _tokenId, enum Constellation _constellation, uint8 _to) external
```

### metadataForLegion

```solidity
function metadataForLegion(uint256 _tokenId) external view returns (struct LegionMetadata)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

## LegionMetadata

```solidity
struct LegionMetadata {
  enum LegionGeneration legionGeneration;
  enum LegionClass legionClass;
  enum LegionRarity legionRarity;
  uint8 questLevel;
  uint8 craftLevel;
  uint8[6] constellationRanks;
  uint256 oldId;
}
```

## Constellation

```solidity
enum Constellation {
  FIRE,
  EARTH,
  WIND,
  WATER,
  LIGHT,
  DARK
}
```

## LegionRarity

```solidity
enum LegionRarity {
  LEGENDARY,
  RARE,
  SPECIAL,
  UNCOMMON,
  COMMON,
  RECRUIT
}
```

## LegionClass

```solidity
enum LegionClass {
  RECRUIT,
  SIEGE,
  FIGHTER,
  ASSASSIN,
  RANGED,
  SPELLCASTER,
  RIVERMAN,
  NUMERAIRE,
  ALL_CLASS,
  ORIGIN
}
```

## LegionGeneration

```solidity
enum LegionGeneration {
  GENESIS,
  AUXILIARY,
  RECRUIT
}
```

