# Solidity API

## LegionMetadataStore

### initialize

```solidity
function initialize() external
```

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

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256 _tokenId) external view returns (enum LegionGeneration, enum LegionRarity)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

### setTokenUriForGenClassRarityOldId

```solidity
function setTokenUriForGenClassRarityOldId(enum LegionGeneration _gen, enum LegionClass _class, enum LegionRarity _rarity, uint256 _oldId, string _uri) external
```

