# Solidity API

## QuestingSettings

### __QuestingSettings_init

```solidity
function __QuestingSettings_init() internal
```

### setIsNonRecruitLegionPaused

```solidity
function setIsNonRecruitLegionPaused(bool _isNonRecruitLegionPaused) external
```

### setQuestLengths

```solidity
function setQuestLengths(uint256 _easyLength, uint256 _mediumLength, uint256 _hardLength) external
```

### setLevelDifficultyUnlocks

```solidity
function setLevelDifficultyUnlocks(uint8 _easyLevel, uint8 _mediumLevel, uint8 _hardLevel) external
```

### setLevelSteps

```solidity
function setLevelSteps(uint8 _maxQuestLevel, uint256[] _qpNeededForEachLevel, uint256[] _qpGainedAtEachLevel) external
```

### setGuaranteedDropAmounts

```solidity
function setGuaranteedDropAmounts(uint8[3] _shardAmounts, uint8[3] _starlightAmounts) external
```

### setTreasureSettings

```solidity
function setTreasureSettings(uint256 _treasureDropOdds, uint256 _universalLockDropOdds, uint256 _starlightId, uint256 _shardId, uint256 _universalLockId) external
```

### setLPNeeded

```solidity
function setLPNeeded(uint256[3] _lpNeeded) external
```

### setTierOddsForDifficulty

```solidity
function setTierOddsForDifficulty(uint256[5] _easyTierOdds, uint256[5] _mediumTierOdds, uint256[5] _hardTierOdds) external
```

### setAutoQuestLoops

```solidity
function setAutoQuestLoops(uint256[] _availableLoops) external
```

### setRecruitSettings

```solidity
function setRecruitSettings(uint8 _recruitNumberOfStarlight, uint8 _recruitNumberOfCrystalShards, uint256 _recruitCrystalShardsOdds, uint256 _recruitUniversalLockOdds) external
```

