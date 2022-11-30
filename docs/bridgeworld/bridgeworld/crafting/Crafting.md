# Solidity API

## Crafting

### initialize

```solidity
function initialize() external
```

### startCraftingBatch

```solidity
function startCraftingBatch(struct StartCraftingParams[] _params) external
```

### startCrafting

```solidity
function startCrafting(uint256 _tokenId, enum RecipeDifficulty _difficulty, uint256[] _treasureIds, uint8[] _treasureAmounts) external
```

### _startCrafting

```solidity
function _startCrafting(uint256 _tokenId, enum RecipeDifficulty _difficulty, uint256[] _treasureIds, uint8[] _treasureAmounts) private
```

### _validateAndStoreTreasure

```solidity
function _validateAndStoreTreasure(uint256 _tokenId, enum RecipeDifficulty _difficulty, uint256[] _treasureIds, uint8[] _treasureAmounts) private
```

### revealTokensCraftings

```solidity
function revealTokensCraftings(uint256[] _tokenIds) external
```

### _revealCrafting

```solidity
function _revealCrafting(uint256 _tokenId) private
```

### _calculateAndDistributeReward

```solidity
function _calculateAndDistributeReward(enum RecipeDifficulty _difficulty, enum LegionGeneration _legionGeneration, uint256 _randomNumber) private returns (uint256, uint8)
```

### _calculateBrokenTreasure

```solidity
function _calculateBrokenTreasure(uint256 _tokenId, uint256 _randomNumber) private returns (uint256[], uint256[])
```

### processCPGainAndLevelUp

```solidity
function processCPGainAndLevelUp(uint256 _tokenId, uint8 _currentCraftingLevel, uint256 _craftingCPGained) external
```

### _processCPGainAndLevelUp

```solidity
function _processCPGainAndLevelUp(uint256 _tokenId, uint8 _currentCraftingLevel, uint256 _craftingCPGained) private
```

### finishTokensCrafting

```solidity
function finishTokensCrafting(uint256[] _tokenIds) external
```

### _finishCrafting

```solidity
function _finishCrafting(uint256 _tokenId) private
```

### getStakedLegions

```solidity
function getStakedLegions(address _user) external view returns (uint256[])
```

