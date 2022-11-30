# Solidity API

## ILegionMetadataStore

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256 _tokenId) external view returns (enum LegionGeneration, enum LegionRarity)
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

## LegionGeneration

```solidity
enum LegionGeneration {
  GENESIS,
  AUXILIARY,
  RECRUIT
}
```

