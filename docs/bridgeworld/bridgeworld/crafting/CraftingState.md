# Solidity API

## CraftingState

### CraftingStarted

```solidity
event CraftingStarted(address _owner, uint256 _tokenId, uint256 _requestId, uint256 _finishTime, uint256[] _treasureIds, uint8[] _treasureAmounts, enum RecipeDifficulty _difficulty)
```

### CraftingRevealed

```solidity
event CraftingRevealed(address _owner, uint256 _tokenId, struct CraftingOutcome _outcome)
```

### CraftingFinished

```solidity
event CraftingFinished(address _owner, uint256 _tokenId)
```

### CPGained

```solidity
event CPGained(uint256 _tokenId, uint8 _craftLevel, uint256 _cpFinal)
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

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### magic

```solidity
contract IMagic magic
```

### treasury

```solidity
contract ITreasury treasury
```

### consumable

```solidity
contract IConsumable consumable
```

### difficultyToRecipeLength

```solidity
mapping(enum RecipeDifficulty => uint256) difficultyToRecipeLength
```

### difficultyToSuccessRate

```solidity
mapping(enum RecipeDifficulty => uint256) difficultyToSuccessRate
```

### difficultyToAmountPerTier

```solidity
mapping(enum RecipeDifficulty => uint8[5]) difficultyToAmountPerTier
```

### difficultyToLevelUnlocked

```solidity
mapping(enum RecipeDifficulty => uint8) difficultyToLevelUnlocked
```

### difficultyToRewards

```solidity
mapping(enum RecipeDifficulty => struct CraftingReward[]) difficultyToRewards
```

### maxCraftingLevel

```solidity
uint8 maxCraftingLevel
```

### levelToCPNeeded

```solidity
uint256[] levelToCPNeeded
```

### levelToCPGainedPerRecipe

```solidity
uint256[] levelToCPGainedPerRecipe
```

### userToLegionsInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToLegionsInProgress
```

### tokenIdToCP

```solidity
mapping(uint256 => uint256) tokenIdToCP
```

### tokenIdToCraftingStartTime

```solidity
mapping(uint256 => uint256) tokenIdToCraftingStartTime
```

### tokenIdToRequestId

```solidity
mapping(uint256 => uint256) tokenIdToRequestId
```

### tokenIdToMagicPaid

```solidity
mapping(uint256 => uint256) tokenIdToMagicPaid
```

### tokenIdToRecipeDifficulty

```solidity
mapping(uint256 => enum RecipeDifficulty) tokenIdToRecipeDifficulty
```

### tokenIdToStakedTreasure

```solidity
mapping(uint256 => struct StakedTreasure[]) tokenIdToStakedTreasure
```

### craftingFee

```solidity
uint256 craftingFee
```

### percentReturnedOnFailure

```solidity
uint8 percentReturnedOnFailure
```

### difficultyToGenerationToRewards

```solidity
mapping(enum RecipeDifficulty => mapping(enum LegionGeneration => struct CraftingReward[])) difficultyToGenerationToRewards
```

### difficultyToCPGained

```solidity
mapping(enum RecipeDifficulty => uint256) difficultyToCPGained
```

### __CraftingState_init

```solidity
function __CraftingState_init() internal
```

## StartCraftingParams

```solidity
struct StartCraftingParams {
  uint256 legionId;
  enum RecipeDifficulty difficulty;
  uint256[] treasureIds;
  uint8[] treasureAmounts;
}
```

## CraftingReward

```solidity
struct CraftingReward {
  uint256 consumableId;
  uint8 amount;
  uint32 odds;
}
```

## StakedTreasure

```solidity
struct StakedTreasure {
  uint8 amount;
  uint256 treasureId;
}
```

## CraftingOutcome

```solidity
struct CraftingOutcome {
  bool wasSuccessful;
  uint256 magicReturned;
  uint256 rewardId;
  uint256[] brokenTreasureIds;
  uint256[] brokenAmounts;
  uint8 rewardAmount;
}
```

## RecipeDifficulty

```solidity
enum RecipeDifficulty {
  EASY,
  MEDIUM,
  HARD
}
```

