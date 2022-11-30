# Solidity API

## AdvancedQuestingDiamondVariables

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _questingAddress, address _legionAddress, address _legionMetadataStoreAddress, address _treasureAddress, address _consumableAddress, address _treasureMetadataStoreAddress, address _treasureTriadAddress, address _treasureFragmentAddress, address _recruitLevelAddress, address _masterOfInflationAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

### stasisLengthForCorruptedCard

```solidity
function stasisLengthForCorruptedCard() external view returns (uint256)
```

### zoneNameToInfo

```solidity
function zoneNameToInfo(string _name) external view returns (struct LibAdvancedQuestingDiamond.ZoneInfo)
```

### chanceUniversalLock

```solidity
function chanceUniversalLock() external view returns (uint256)
```

### cadetRecruitFragmentBoost

```solidity
function cadetRecruitFragmentBoost() external view returns (uint256)
```

### tierToPoolId

```solidity
function tierToPoolId(uint8 _tier) external view returns (uint64)
```

### tierToRecruitPoolId

```solidity
function tierToRecruitPoolId(uint8 _tier) external view returns (uint64)
```

### zoneNameToPartIndexToRecruitPartInfo

```solidity
function zoneNameToPartIndexToRecruitPartInfo(string _name, uint256 _partIndex) external view returns (struct LibAdvancedQuestingDiamond.RecruitPartInfo)
```

### zoneNameToPartIndexToRewardIndexToQuestBoosts

```solidity
function zoneNameToPartIndexToRewardIndexToQuestBoosts(string _name, uint256 _partIndex, uint256 _rewardIndex, uint8 _level) external view returns (uint8)
```

### endingPartToQPGained

```solidity
function endingPartToQPGained(uint8 _endingPart) external view returns (uint256)
```

### setPoolIds

```solidity
function setPoolIds(uint64[5] _poolIds, uint64 _recruitTier5PoolId) external
```

### setChanceUniversalLock

```solidity
function setChanceUniversalLock(uint256 _chanceUniversalLock) external
```

### setCadetRecruitFragmentBoost

```solidity
function setCadetRecruitFragmentBoost(uint32 _cadetRecruitFragmentBoost) external
```

### setRecruitPartInfo

```solidity
function setRecruitPartInfo(string _zoneName, uint256 _partIndex, struct LibAdvancedQuestingDiamond.RecruitPartInfo _recruitPartInfo) external
```

### addZone

```solidity
function addZone(string _zoneName, struct LibAdvancedQuestingDiamond.ZoneInfo _zone) external
```

### updatePartLengthsForZone

```solidity
function updatePartLengthsForZone(string _zoneName, uint256[] _partLengths, uint256[] _stasisLengths) external
```

### updateQuestLevelBoosts

```solidity
function updateQuestLevelBoosts(string _zoneName, uint256 _partIndex, uint256 _rewardIndex, uint8[7] _questLevelBoosts) external
```

### setStasisLengthForCorruptedCard

```solidity
function setStasisLengthForCorruptedCard(uint256 _stasisLengthForCorruptedCard) external
```

### setEndingPartToQPGained

```solidity
function setEndingPartToQPGained(struct EndingPartParams[] _endingPartParams) external
```

### lengthForPartOfZone

```solidity
function lengthForPartOfZone(string _zoneName, uint8 _partIndex) public view returns (uint256)
```

### numberOfLegionsQuesting

```solidity
function numberOfLegionsQuesting() external view returns (uint256, uint256)
```

### requestIdForLegion

```solidity
function requestIdForLegion(uint256 _legionId) external view returns (uint256)
```

## EndingPartParams

```solidity
struct EndingPartParams {
  uint8 endingPart;
  uint248 qpGained;
}
```

