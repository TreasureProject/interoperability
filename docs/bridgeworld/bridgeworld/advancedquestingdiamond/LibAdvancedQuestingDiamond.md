# Solidity API

## LibAdvancedQuestingDiamond

### AppStorage

```solidity
struct AppStorage {
  contract IRandomizer randomizer;
  contract IQuesting questing;
  contract ILegion legion;
  contract ILegionMetadataStore legionMetadataStore;
  contract ITreasure treasure;
  contract IConsumable consumable;
  contract ITreasureMetadataStore treasureMetadataStore;
  contract ITreasureTriad treasureTriad;
  contract ITreasureFragment treasureFragment;
  uint256 stasisLengthForCorruptedCard;
  mapping(string => struct LibAdvancedQuestingDiamond.ZoneInfo) zoneNameToInfo;
  mapping(enum LegionGeneration => bool) generationToCanHaveStasis;
  mapping(uint8 => uint8) maxConstellationRankToReductionInStasis;
  mapping(uint256 => struct LibAdvancedQuestingDiamond.LegionQuestingInfoV1) legionIdToLegionQuestingInfoV1;
  mapping(uint256 => struct LibAdvancedQuestingDiamond.LegionQuestingInfoV2) legionIdToLegionQuestingInfoV2;
  uint256 chanceUniversalLock;
  mapping(string => mapping(uint256 => mapping(uint256 => uint8[7]))) zoneNameToPartIndexToRewardIndexToQuestBoosts;
  mapping(uint8 => uint256) endingPartToQPGained;
  mapping(string => mapping(uint256 => struct LibAdvancedQuestingDiamond.RecruitPartInfo)) zoneNameToPartIndexToRecruitPartInfo;
  uint256 numQuesting;
  uint32 cadetRecruitFragmentBoost;
  contract IRecruitLevel recruitLevel;
  contract IMasterOfInflation masterOfInflation;
  uint256 timePoolsFirstSet;
  mapping(uint8 => uint64) tierToPoolId;
  mapping(uint8 => uint64) tierToRecruitPoolId;
  uint256 numRecruitsQuesting;
}
```

### LegionQuestingInfoV1

```solidity
struct LegionQuestingInfoV1 {
  uint256 startTime;
  uint256 requestId;
  struct LibAdvancedQuestingDiamond.LegionTriadOutcomeV1 triadOutcome;
  struct EnumerableSetUpgradeable.UintSet treasureIds;
  mapping(uint256 => uint256) treasureIdToAmount;
  string zoneName;
  address owner;
  uint8 advanceToPart;
  uint8 currentPart;
}
```

### LegionTriadOutcomeV1

```solidity
struct LegionTriadOutcomeV1 {
  uint256 timeTriadWasPlayed;
  uint8 corruptedCellsRemainingForCurrentPart;
  uint8 cardsFlipped;
}
```

### LegionQuestingInfoV2

```solidity
struct LegionQuestingInfoV2 {
  uint120 startTime;
  uint120 timeTriadWasPlayed;
  uint8 corruptedCellsRemainingForCurrentPart;
  uint8 cardsFlipped;
  address owner;
  uint80 requestId;
  uint8 advanceToPart;
  uint8 currentPart;
  string zoneName;
  struct LibAdvancedQuestingDiamond.Treasures treasures;
}
```

### ZoneInfo

```solidity
struct ZoneInfo {
  uint256 zoneStartTime;
  enum TreasureCategory categoryBoost1;
  enum TreasureCategory categoryBoost2;
  enum Constellation constellation1;
  enum Constellation constellation2;
  struct LibAdvancedQuestingDiamond.ZonePart[] parts;
}
```

### ZonePart

```solidity
struct ZonePart {
  uint256 zonePartLength;
  uint256 stasisLength;
  uint8 stasisBaseRate;
  uint8 questingLevelRequirement;
  uint8 questingXpGained;
  bool playTreasureTriad;
  struct LibAdvancedQuestingDiamond.ZoneReward[] rewards;
}
```

### ZoneReward

```solidity
struct ZoneReward {
  uint8 baseRateRewardOdds;
  uint8[][] generationToRarityToBoost;
  uint8 boostPerFlippedCard;
  struct LibAdvancedQuestingDiamond.ZoneRewardOption[] rewardOptions;
}
```

### ZoneRewardOption

```solidity
struct ZoneRewardOption {
  uint256 consumableId;
  uint256 consumableAmount;
  uint256 treasureFragmentId;
  uint8 treasureTier;
  enum TreasureCategory treasureCategory;
  uint8 rewardOdds;
}
```

### StartQuestParams

```solidity
struct StartQuestParams {
  uint256 legionId;
  string zoneName;
  uint8 advanceToPart;
  uint256[] treasureIds;
  uint256[] treasureAmounts;
}
```

### Treasures

```solidity
struct Treasures {
  uint8 numberOfTypesOfTreasures;
  uint16 treasure1Id;
  uint8 treasure1Amount;
  uint16 treasure2Id;
  uint8 treasure2Amount;
  uint16 treasure3Id;
  uint8 treasure3Amount;
  uint16 treasure4Id;
  uint8 treasure4Amount;
  uint16 treasure5Id;
  uint8 treasure5Amount;
  uint16 treasure6Id;
  uint8 treasure6Amount;
  uint16 treasure7Id;
  uint8 treasure7Amount;
}
```

### RecruitPartInfo

```solidity
struct RecruitPartInfo {
  uint8 numEoS;
  uint8 numShards;
  uint32 chanceUniversalLock;
  uint32 recruitXPGained;
  uint8 fragmentId;
  uint168 emptySpace;
}
```

