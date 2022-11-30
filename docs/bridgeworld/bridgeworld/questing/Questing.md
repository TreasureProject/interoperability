# Solidity API

## Questing

### initialize

```solidity
function initialize() external
```

### startQuests

```solidity
function startQuests(uint256[] _tokenIds, enum QuestDifficulty[] _difficulties, uint256[] _questLoops) external
```

### _startQuestRecruit

```solidity
function _startQuestRecruit(uint256 _tokenId, enum QuestDifficulty _difficulty, uint256 _numberLoops, bool _transferLegionToContract) private
```

### _startQuest

```solidity
function _startQuest(uint256 _tokenId, enum QuestDifficulty _difficulty, uint256 _numberLoops, struct LegionMetadata _legionMetadata, bool _transferLegionToContract) private
```

### revealTokensQuests

```solidity
function revealTokensQuests(uint256[] _tokenIds) external
```

### _revealQuest

```solidity
function _revealQuest(uint256 _tokenId) private
```

### _calculateAndDistributeRewardRecruit

```solidity
function _calculateAndDistributeRewardRecruit(uint256 _tokenId, uint256 _randomNumber) private
```

### _calculateAndDistributeReward

```solidity
function _calculateAndDistributeReward(uint256 _tokenId, enum QuestDifficulty _difficulty, uint256 _randomNumber) private
```

### processQPGainAndLevelUp

```solidity
function processQPGainAndLevelUp(uint256 _tokenId, uint8 _currentQuestLevel, uint256 _qpGained) external
```

### _processQPGainAndLevelUp

```solidity
function _processQPGainAndLevelUp(uint256 _tokenId, uint8 _currentQuestLevel, uint256 _qpGained) private
```

### finishTokenQuests

```solidity
function finishTokenQuests(uint256[] _tokenIds) external
```

### restartTokenQuests

```solidity
function restartTokenQuests(uint256[] _tokenIds, enum QuestDifficulty[] _difficulties, uint256[] _questLoops) external
```

### _finishQuest

```solidity
function _finishQuest(uint256 _tokenId, bool _sendLegionBackAndClearData) private
```

### isQuestReadyToReveal

```solidity
function isQuestReadyToReveal(uint256 _tokenId) external view returns (bool)
```

### getStakedLegions

```solidity
function getStakedLegions(address _user) external view returns (uint256[])
```

