# Solidity API

## AdvancedQuestingDiamondState

### AdvancedQuestStarted

```solidity
event AdvancedQuestStarted(address _owner, uint256 _requestId, struct LibAdvancedQuestingDiamond.StartQuestParams _startQuestParams)
```

### AdvancedQuestContinued

```solidity
event AdvancedQuestContinued(address _owner, uint256 _legionId, uint256 _requestId, uint8 _toPart)
```

### TreasureTriadPlayed

```solidity
event TreasureTriadPlayed(address _owner, uint256 _legionId, bool _playerWon, uint8 _numberOfCardsFlipped, uint8 _numberOfCorruptedCardsRemaining)
```

### AdvancedQuestEnded

```solidity
event AdvancedQuestEnded(address _owner, uint256 _legionId, struct AdvancedQuestingDiamondState.AdvancedQuestReward[] _rewards)
```

### QPForEndingPart

```solidity
event QPForEndingPart(uint8 _endingPart, uint256 _qpGained)
```

### SetCadetRecruitFragmentBoost

```solidity
event SetCadetRecruitFragmentBoost(uint32 _cadetRecruitFragmentBoost)
```

### SetSuccessSensitivityRecruitFragments

```solidity
event SetSuccessSensitivityRecruitFragments(uint256 _successSensitivityRecruitFragments)
```

### SetRecruitFragmentsDivider

```solidity
event SetRecruitFragmentsDivider(uint256 _recruitFragmentsDivider)
```

### SetRecruitPartInfo

```solidity
event SetRecruitPartInfo(string _zoneName, uint256 _zonePart, struct LibAdvancedQuestingDiamond.RecruitPartInfo _partInfo)
```

### AdvancedQuestReward

```solidity
struct AdvancedQuestReward {
  uint256 consumableId;
  uint256 consumableAmount;
  uint256 treasureFragmentId;
  uint256 treasureId;
}
```

### EOS_ID

```solidity
uint256 EOS_ID
```

### PRISM_SHARD_ID

```solidity
uint256 PRISM_SHARD_ID
```

### appStorage

```solidity
struct LibAdvancedQuestingDiamond.AppStorage appStorage
```

### __AdvancedQuestingDiamondState_init

```solidity
function __AdvancedQuestingDiamondState_init() internal
```

### isValidZone

```solidity
function isValidZone(string _zoneName) public view returns (bool)
```

### _isUsingOldSchema

```solidity
function _isUsingOldSchema(uint256 _legionId) internal view returns (bool)
```

### _activeZoneForLegion

```solidity
function _activeZoneForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (string)
```

### _ownerForLegion

```solidity
function _ownerForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (address)
```

### _requestIdForLegion

```solidity
function _requestIdForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint256)
```

### _advanceToPartForLegion

```solidity
function _advanceToPartForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint8)
```

### _hasTreasuresStakedForLegion

```solidity
function _hasTreasuresStakedForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (bool)
```

### isLegionQuesting

```solidity
function isLegionQuesting(uint256 _legionId) public view returns (bool)
```

### _ensureDoneWithCurrentPart

```solidity
function _ensureDoneWithCurrentPart(uint256 _legionId, string _zoneName, bool _usingOldSchema, struct LegionMetadata _legionMetadata, struct LibAdvancedQuestingDiamond.ZoneInfo _zoneInfo, uint256 _randomNumber, bool _checkPlayedTriad) internal view
```

### _endTimeForLegion

```solidity
function _endTimeForLegion(uint256 _legionId, bool _usingOldSchema, string _zoneName, struct LegionMetadata _legionMetadata, uint8 _maxConstellationRank, uint256 _randomNumber) internal view returns (uint256 _endTime, uint8 _stasisHitCount)
```

### _currentPartForLegion

```solidity
function _currentPartForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint8)
```

### _triadPlayTimeForLegion

```solidity
function _triadPlayTimeForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint256)
```

### _cardsFlippedForLegion

```solidity
function _cardsFlippedForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint8)
```

### _corruptedCellsRemainingForLegion

```solidity
function _corruptedCellsRemainingForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint8)
```

### _startTimeForLegion

```solidity
function _startTimeForLegion(bool _useOldSchema, uint256 _legionId) internal view returns (uint256)
```

### _maxConstellationRankForLegionAndZone

```solidity
function _maxConstellationRankForLegionAndZone(string _zoneName, struct LegionMetadata _legionMetadata) internal view returns (uint8)
```

### _calculateStasis

```solidity
function _calculateStasis(struct LibAdvancedQuestingDiamond.ZoneInfo _zoneInfo, struct LegionMetadata _legionMetadata, uint256 _randomNumber, uint8 _maxConstellationRank, uint8 _currentPart, uint8 _advanceToPart) private view returns (uint256 _totalLength, uint8 _stasisHitCount)
```

