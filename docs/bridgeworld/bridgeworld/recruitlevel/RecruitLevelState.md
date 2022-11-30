# Solidity API

## RecruitLevelState

### MaxLevelSet

```solidity
event MaxLevelSet(uint16 maxLevel)
```

### AscensionInfoSet

```solidity
event AscensionInfoSet(uint16 minimumLevelCadet, uint16 numEoSCadet, uint16 numPrismShardsCadet, uint16 minimumLevelApprentice, uint16 numEoSApprentice, uint16 numPrismShardsApprentice)
```

### LevelUpInfoSet

```solidity
event LevelUpInfoSet(uint16 levelCur, uint32 expToNextLevel)
```

### MagicCostForAuxSet

```solidity
event MagicCostForAuxSet(uint256 magicCost)
```

### RecruitXPChanged

```solidity
event RecruitXPChanged(uint256 tokenId, uint16 levelCur, uint32 expCur)
```

### RecruitTypeChanged

```solidity
event RecruitTypeChanged(uint256 tokenId, enum RecruitType recruitType)
```

### RecruitCanAscendToAuxChanged

```solidity
event RecruitCanAscendToAuxChanged(uint256 tokenId, bool canAscendToAux)
```

### RecruitAscendingToAuxBegan

```solidity
event RecruitAscendingToAuxBegan(uint256 tokenId, uint256 requestId)
```

### RecruitAscendingToAuxEnded

```solidity
event RecruitAscendingToAuxEnded(uint256 tokenId, bool wasSuccessful)
```

### EOS_ID

```solidity
uint256 EOS_ID
```

### PRISM_SHARD_ID

```solidity
uint256 PRISM_SHARD_ID
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### consumable

```solidity
contract IConsumable consumable
```

### legion

```solidity
contract ILegion legion
```

### tokenIdToRecruitInfo

```solidity
mapping(uint256 => struct RecruitInfo) tokenIdToRecruitInfo
```

### levelCurToLevelUpInfo

```solidity
mapping(uint16 => struct LevelUpInfo) levelCurToLevelUpInfo
```

### maxLevel

```solidity
uint16 maxLevel
```

### ascensionInfo

```solidity
struct AscensionInfo ascensionInfo
```

### auxAscensionInfo

```solidity
struct AuxAscensionInfo auxAscensionInfo
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### magic

```solidity
contract IMagic magic
```

### treasuryAddress

```solidity
address treasuryAddress
```

### barracks

```solidity
contract IBarracks barracks
```

### __RecruitLevelState_init

```solidity
function __RecruitLevelState_init() internal
```

## RecruitInfo

```solidity
struct RecruitInfo {
  enum RecruitType recruitType;
  uint16 levelCur;
  uint32 expCur;
  bool canAscendToAux;
  bool isTryingToAscend;
  uint64 requestId;
  uint32 oddsOfAscending;
  uint88 emptySpace;
}
```

## LevelUpInfo

```solidity
struct LevelUpInfo {
  uint32 expToNextLevel;
  uint224 emptySpace;
}
```

## AscensionInfo

```solidity
struct AscensionInfo {
  uint16 minimumLevelCadet;
  uint16 numEoSCadet;
  uint16 numPrismShardsCadet;
  uint16 minimumLevelApprentice;
  uint16 numEoSApprentice;
  uint16 numPrismShardsApprentice;
  uint160 emptySpace;
}
```

## AuxAscensionInfo

```solidity
struct AuxAscensionInfo {
  uint128 capRatePerSecond;
  uint128 capAtLastRateChange;
  uint32 numRecruitsAscending;
  uint32 numRecruitsAscended;
  uint32 sModifier;
  uint32 dModifier;
  uint128 magicCost;
  uint128 timeCapLastChanged;
  uint128 emptySpace1;
}
```

