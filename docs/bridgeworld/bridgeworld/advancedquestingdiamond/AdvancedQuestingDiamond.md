# Solidity API

## AdvancedQuestingDiamond

### initialize

```solidity
function initialize() external
```

### startAdvancedQuesting

```solidity
function startAdvancedQuesting(struct LibAdvancedQuestingDiamond.StartQuestParams[] _params) external
```

### _startAdvancedQuesting

```solidity
function _startAdvancedQuesting(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams, bool _isRestarting) private
```

### _startAdvancedQuestingRecruit

```solidity
function _startAdvancedQuestingRecruit(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams, bool _isRestarting) private
```

### _startAdvancedQuestingRegular

```solidity
function _startAdvancedQuestingRegular(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams, bool _isRestarting, struct LegionMetadata _legionMetadata) private
```

### _transferLegionAndTreasures

```solidity
function _transferLegionAndTreasures(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams, bool _isRestarting) private
```

### _createRequestAndSaveData

```solidity
function _createRequestAndSaveData(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams) private returns (uint256)
```

### _saveStakedTreasures

```solidity
function _saveStakedTreasures(struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams) private
```

### endQuesting

```solidity
function endQuesting(uint256[] _legionIds, bool[] _restartQuesting) external
```

### _endQuesting

```solidity
function _endQuesting(uint256 _legionId, bool _restartQuesting) private
```

### _endQuestingPostValidation

```solidity
function _endQuestingPostValidation(uint256 _legionId, bool _usingOldSchema, struct LegionMetadata _legionMetadata, struct LibAdvancedQuestingDiamond.ZoneInfo _zoneInfo, uint256 _randomNumber, bool _isRestarting) private
```

### _getRecruitEarnedRewards

```solidity
function _getRecruitEarnedRewards(struct LibAdvancedQuestingDiamond.RecruitPartInfo _recruitPartInfo, uint256 _randomNumber, uint256 _legionId) private returns (struct AdvancedQuestingDiamondState.AdvancedQuestReward[])
```

### _getEarnedRewards

```solidity
function _getEarnedRewards(uint256 _legionId, bool _usingOldSchema, uint8 _endingPart, struct LibAdvancedQuestingDiamond.ZoneInfo _zoneInfo, struct LegionMetadata _legionMetadata, uint256 _randomNumber) private returns (struct AdvancedQuestingDiamondState.AdvancedQuestReward[])
```

### _unstakeTreasures

```solidity
function _unstakeTreasures(uint256 _legionId, bool _usingOldSchema, bool _isRestarting) private returns (uint256[], uint256[])
```

### _distributeRewards

```solidity
function _distributeRewards(string _zoneName, uint256 _partIndex, struct LibAdvancedQuestingDiamond.ZonePart _endingPart, struct LegionMetadata _legionMetadata, uint256 _randomNumber, uint8 _cardsFlipped) private returns (struct AdvancedQuestingDiamondState.AdvancedQuestReward[])
```

### _tryMintFragment

```solidity
function _tryMintFragment(uint256 _treasureFragmentId, uint256 _oddsBoost, uint256 _randomNumber, address _owner) private returns (bool)
```

### _mintHitReward

```solidity
function _mintHitReward(struct LibAdvancedQuestingDiamond.ZoneRewardOption _zoneRewardOption, uint256 _randomNumber, address _owner) private returns (struct AdvancedQuestingDiamondState.AdvancedQuestReward _earnedReward)
```

### _pickRewardFromOptions

```solidity
function _pickRewardFromOptions(uint256 _randomNumber, struct LibAdvancedQuestingDiamond.ZoneReward _zoneReward) private view returns (struct LibAdvancedQuestingDiamond.ZoneRewardOption)
```

### playTreasureTriad

```solidity
function playTreasureTriad(struct PlayTreasureTriadParams[] _params) external
```

### _playTreasureTriad

```solidity
function _playTreasureTriad(uint256 _legionId, struct UserMove[] _playerMoves, bool _restartQuestingIfPossible) private
```

### _validatePlayerHasTreasuresForMoves

```solidity
function _validatePlayerHasTreasuresForMoves(struct UserMove[] _playerMoves, bool _usingOldSchema, uint256 _legionId) private view
```

### _getTreasureAmountStaked

```solidity
function _getTreasureAmountStaked(uint256 _treasureIdForMove, bool _usingOldSchema, uint256 _legionId) private view returns (uint256)
```

### endTimeForLegion

```solidity
function endTimeForLegion(uint256 _legionId) external view returns (uint256, uint8)
```

### getN

```solidity
function getN(uint64 _poolId) external view returns (uint256)
```

### getTierForFragmentId

```solidity
function getTierForFragmentId(uint256 _fragmentId) private pure returns (uint8 _tier)
```

## Treasure

```solidity
struct Treasure {
  uint256 id;
  uint256 amount;
}
```

## PlayTreasureTriadParams

```solidity
struct PlayTreasureTriadParams {
  uint256 legionId;
  struct UserMove[] playerMoves;
  bool restartQuestIfPossible;
}
```

