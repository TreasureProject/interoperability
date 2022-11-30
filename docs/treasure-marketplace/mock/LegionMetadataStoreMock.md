# Solidity API

## LegionMetadataStoreMock

### gen

```solidity
enum LegionGeneration gen
```

### rarity

```solidity
enum LegionRarity rarity
```

### constructor

```solidity
constructor(enum LegionGeneration _gen, enum LegionRarity _rarity) public
```

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256) external view returns (enum LegionGeneration gen_, enum LegionRarity rarity_)
```

