# Solidity API

## CraftingSettings

### __CraftingSettings_init

```solidity
function __CraftingSettings_init() internal
```

### setSimpleSettings

```solidity
function setSimpleSettings(uint256 _craftingFee, uint8 _percentReturnedOnFailure) external
```

### setRewards

```solidity
function setRewards(struct CraftingReward[] _easyRewards, struct CraftingReward[] _mediumRewards, struct CraftingReward[] _hardRewards) external
```

### setDifficultySettings

```solidity
function setDifficultySettings(uint256[3] _recipeLengths, uint256[3] _successRates, uint8[5][3] _treasureAmountPerTier, uint8[3] _levelUnlocked) external
```

### setCraftingLevelSettings

```solidity
function setCraftingLevelSettings(uint8 _maxCraftingLevel, uint256[] _levelToCPNeeded, uint256[3] _difficultyToCPGainedPerRecipe) external
```

### setDifficultyAndGenerationReward

```solidity
function setDifficultyAndGenerationReward(enum RecipeDifficulty _difficulty, enum LegionGeneration _generation, struct CraftingReward[] _rewards) external
```

