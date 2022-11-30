# Solidity API

## QuestingState

### QuestStarted

```solidity
event QuestStarted(address _owner, uint256 _tokenId, uint256 _requestId, uint256 _finishTime, enum QuestDifficulty _difficulty)
```

### QuestRevealed

```solidity
event QuestRevealed(address _owner, uint256 _tokenId, struct QuestReward _reward)
```

### QuestFinished

```solidity
event QuestFinished(address _owner, uint256 _tokenId)
```

### QPGained

```solidity
event QPGained(uint256 _tokenId, uint8 _questLevel, uint256 _qpFinal)
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### treasure

```solidity
contract ITreasure treasure
```

### legion

```solidity
contract ILegion legion
```

### consumable

```solidity
contract IConsumable consumable
```

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### lp

```solidity
contract ILP lp
```

### difficultyToQuestLength

```solidity
mapping(enum QuestDifficulty => uint256) difficultyToQuestLength
```

### difficultyToLevelUnlocked

```solidity
mapping(enum QuestDifficulty => uint8) difficultyToLevelUnlocked
```

### difficultyToStarlightAmount

```solidity
mapping(enum QuestDifficulty => uint8) difficultyToStarlightAmount
```

### difficultyToShardAmount

```solidity
mapping(enum QuestDifficulty => uint8) difficultyToShardAmount
```

### difficultyToTierOdds

```solidity
mapping(enum QuestDifficulty => uint256[5]) difficultyToTierOdds
```

### difficultyToLPNeeded

```solidity
mapping(enum QuestDifficulty => uint256) difficultyToLPNeeded
```

### maxQuestLevel

```solidity
uint8 maxQuestLevel
```

### levelToQPNeeded

```solidity
uint256[] levelToQPNeeded
```

### levelToQPGainedPerQuest

```solidity
uint256[] levelToQPGainedPerQuest
```

### userToQuestsInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToQuestsInProgress
```

### tokenIdToQP

```solidity
mapping(uint256 => uint256) tokenIdToQP
```

### tokenIdToQuestStartTime

```solidity
mapping(uint256 => uint256) tokenIdToQuestStartTime
```

### tokenIdToRequestId

```solidity
mapping(uint256 => uint256) tokenIdToRequestId
```

### tokenIdToQuestDifficulty

```solidity
mapping(uint256 => enum QuestDifficulty) tokenIdToQuestDifficulty
```

### tokenIdToLPStaked

```solidity
mapping(uint256 => uint256) tokenIdToLPStaked
```

### tokenIdToNumberLoops

```solidity
mapping(uint256 => uint256) tokenIdToNumberLoops
```

### treasureDropOdds

```solidity
uint256 treasureDropOdds
```

### universalLockDropOdds

```solidity
uint256 universalLockDropOdds
```

### starlightId

```solidity
uint256 starlightId
```

### shardId

```solidity
uint256 shardId
```

### universalLockId

```solidity
uint256 universalLockId
```

### availableAutoQuestLoops

```solidity
struct EnumerableSetUpgradeable.UintSet availableAutoQuestLoops
```

### recruitNumberOfStarlight

```solidity
uint8 recruitNumberOfStarlight
```

### recruitNumberOfCrystalShards

```solidity
uint8 recruitNumberOfCrystalShards
```

### recruitCrystalShardsOdds

```solidity
uint256 recruitCrystalShardsOdds
```

### recruitUniversalLockOdds

```solidity
uint256 recruitUniversalLockOdds
```

### treasury

```solidity
contract ITreasury treasury
```

### isNonRecruitLegionPaused

```solidity
bool isNonRecruitLegionPaused
```

### __QuestingState_init

```solidity
function __QuestingState_init() internal
```

## QuestDifficulty

```solidity
enum QuestDifficulty {
  EASY,
  MEDIUM,
  HARD
}
```

## QuestReward

```solidity
struct QuestReward {
  uint8 starlightAmount;
  uint8 crystalShardAmount;
  uint8 universalLockAmount;
  uint256 treasureId;
}
```

