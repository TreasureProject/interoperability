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

## AdvancedQuestingDiamondContinue

### continueAdvancedQuesting

```solidity
function continueAdvancedQuesting(uint256[] _legionIds) external
```

### _continueAdvancedQuesting

```solidity
function _continueAdvancedQuesting(uint256 _legionId) private
```

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

## IAdvancedQuestingDiamond

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

## AdvancedQuestingFix

### initialize

```solidity
function initialize() external
```

### setMerkleRoot

```solidity
function setMerkleRoot(bytes32 _merkleRoot) external
```

### haveLegionsBeenFixed

```solidity
function haveLegionsBeenFixed(uint256[] _legionIds) external view returns (bool[])
```

## FixLegionParams

```solidity
struct FixLegionParams {
  uint256 legionId;
  string zone;
  uint256[] treasureIds;
  uint256[] treasureAmounts;
  bytes32[] proof;
}
```

## AdvancedQuestingFixContracts

### __AdvancedQuestingFixContracts_init

```solidity
function __AdvancedQuestingFixContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _advancedQuestingAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## AdvancedQuestingFixState

### advancedQuesting

```solidity
contract IAdvancedQuestingDiamond advancedQuesting
```

### merkleRoot

```solidity
bytes32 merkleRoot
```

### legionIdToHasUncorruptedLegion

```solidity
mapping(uint256 => bool) legionIdToHasUncorruptedLegion
```

### __AdvancedQuestingFixState_init

```solidity
function __AdvancedQuestingFixState_init() internal
```

## IAdvancedQuestingFix

## AtlasMine

Contract is using an admin role to manage its configuration. Admin role is assigned to a multi-sig
wallet controlled by trusted team members. Admin role aka ATLAS_MINE_ADMIN_ROLE, as initialized during init()
to msg.sender can:
• Add/Remove addresses to excludedAddresses, which impacts the utilization calculation, by calling
  addExcludedAddress() and removeExcludedAddress(), respectively.
• Set/Unset an arbitrary override value for the value returned by utilization(), by calling
  setUtilizationOverride().
• Change at any time the magic token address, which is set during init(), to an arbitrary one, by calling
  setMagicToken().
• Set treasure to an arbitrary address (including address(0), in which case treasure staking/unstaking is
  disabled), by calling setTreasure().
• Set legion to an arbitrary address (including address(0), in which case legion staking/unstaking is disabled),
  by calling setLegion().
• Set legionMetadataStore to an arbitrary address (used for legion 1:1 checking and legion nft boost computation),
  by calling setLegionMetadataStore().
• Re-set the legionBoostMatrix array to arbitrary values, by calling setLegionBoostMatrix().
• Set/Unset the emergency unlockAll state, by calling toggleUnlockAll().
• Withdraw all undistributed rewards to an arbitrary address, by calling withdrawUndistributedRewards().

### Lock

```solidity
enum Lock {
  twoWeeks,
  oneMonth,
  threeMonths,
  sixMonths,
  twelveMonths
}
```

### UserInfo

```solidity
struct UserInfo {
  uint256 originalDepositAmount;
  uint256 depositAmount;
  uint256 lpAmount;
  uint256 lockedUntil;
  uint256 vestingLastUpdate;
  int256 rewardDebt;
  enum AtlasMine.Lock lock;
}
```

### ATLAS_MINE_ADMIN_ROLE

```solidity
bytes32 ATLAS_MINE_ADMIN_ROLE
```

### DAY

```solidity
uint256 DAY
```

### ONE_WEEK

```solidity
uint256 ONE_WEEK
```

### TWO_WEEKS

```solidity
uint256 TWO_WEEKS
```

### ONE_MONTH

```solidity
uint256 ONE_MONTH
```

### THREE_MONTHS

```solidity
uint256 THREE_MONTHS
```

### SIX_MONTHS

```solidity
uint256 SIX_MONTHS
```

### TWELVE_MONTHS

```solidity
uint256 TWELVE_MONTHS
```

### ONE

```solidity
uint256 ONE
```

### magic

```solidity
contract IERC20Upgradeable magic
```

### masterOfCoin

```solidity
contract IMasterOfCoin masterOfCoin
```

### unlockAll

```solidity
bool unlockAll
```

### totalRewardsEarned

```solidity
uint256 totalRewardsEarned
```

### totalUndistributedRewards

```solidity
uint256 totalUndistributedRewards
```

### accMagicPerShare

```solidity
uint256 accMagicPerShare
```

### totalLpToken

```solidity
uint256 totalLpToken
```

### magicTotalDeposits

```solidity
uint256 magicTotalDeposits
```

### utilizationOverride

```solidity
uint256 utilizationOverride
```

### excludedAddresses

```solidity
struct EnumerableSetUpgradeable.AddressSet excludedAddresses
```

### legionMetadataStore

```solidity
address legionMetadataStore
```

### treasure

```solidity
address treasure
```

### legion

```solidity
address legion
```

### isLegion1_1Staked

```solidity
mapping(address => bool) isLegion1_1Staked
```

### legionBoostMatrix

```solidity
uint256[][] legionBoostMatrix
```

### userInfo

```solidity
mapping(address => mapping(uint256 => struct AtlasMine.UserInfo)) userInfo
```

user => depositId => UserInfo

### allUserDepositIds

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) allUserDepositIds
```

user => depositId[]

### currentId

```solidity
mapping(address => uint256) currentId
```

user => deposit index

### legionStaked

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) legionStaked
```

### treasureStaked

```solidity
mapping(address => mapping(uint256 => uint256)) treasureStaked
```

### treasureStakedAmount

```solidity
mapping(address => uint256) treasureStakedAmount
```

### boosts

```solidity
mapping(address => uint256) boosts
```

### Staked

```solidity
event Staked(address nft, uint256 tokenId, uint256 amount, uint256 currentBoost)
```

### Unstaked

```solidity
event Unstaked(address nft, uint256 tokenId, uint256 amount, uint256 currentBoost)
```

### Deposit

```solidity
event Deposit(address user, uint256 index, uint256 amount, enum AtlasMine.Lock lock)
```

### Withdraw

```solidity
event Withdraw(address user, uint256 index, uint256 amount)
```

### UndistributedRewardsWithdraw

```solidity
event UndistributedRewardsWithdraw(address to, uint256 amount)
```

### Harvest

```solidity
event Harvest(address user, uint256 index, uint256 amount)
```

### LogUpdateRewards

```solidity
event LogUpdateRewards(uint256 distributedRewards, uint256 undistributedRewards, uint256 lpSupply, uint256 accMagicPerShare)
```

### UtilizationRate

```solidity
event UtilizationRate(uint256 util)
```

### updateRewards

```solidity
modifier updateRewards()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _magic, address _masterOfCoin) external
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### getStakedLegions

```solidity
function getStakedLegions(address _user) external view virtual returns (uint256[])
```

### getUserBoost

```solidity
function getUserBoost(address _user) external view virtual returns (uint256)
```

### getLegionBoostMatrix

```solidity
function getLegionBoostMatrix() external view virtual returns (uint256[][])
```

### getLegionBoost

```solidity
function getLegionBoost(uint256 _legionGeneration, uint256 _legionRarity) public view virtual returns (uint256)
```

### utilization

```solidity
function utilization() public view virtual returns (uint256 util)
```

### getRealMagicReward

```solidity
function getRealMagicReward(uint256 _magicReward) public view virtual returns (uint256 distributedRewards, uint256 undistributedRewards)
```

### getAllUserDepositIds

```solidity
function getAllUserDepositIds(address _user) public view virtual returns (uint256[])
```

### getExcludedAddresses

```solidity
function getExcludedAddresses() public view virtual returns (address[])
```

### getLockBoost

```solidity
function getLockBoost(enum AtlasMine.Lock _lock) public pure virtual returns (uint256 boost, uint256 timelock)
```

### getVestingTime

```solidity
function getVestingTime(enum AtlasMine.Lock _lock) public pure virtual returns (uint256 vestingTime)
```

### calcualteVestedPrincipal

```solidity
function calcualteVestedPrincipal(address _user, uint256 _depositId) public view virtual returns (uint256 amount)
```

### pendingRewardsPosition

```solidity
function pendingRewardsPosition(address _user, uint256 _depositId) public view virtual returns (uint256 pending)
```

### pendingRewardsAll

```solidity
function pendingRewardsAll(address _user) external view virtual returns (uint256 pending)
```

### deposit

```solidity
function deposit(uint256 _amount, enum AtlasMine.Lock _lock) public virtual
```

### withdrawPosition

```solidity
function withdrawPosition(uint256 _depositId, uint256 _amount) public virtual returns (bool)
```

### withdrawAll

```solidity
function withdrawAll() public virtual
```

### harvestPosition

```solidity
function harvestPosition(uint256 _depositId) public virtual
```

### harvestAll

```solidity
function harvestAll() public virtual
```

### withdrawAndHarvestPosition

```solidity
function withdrawAndHarvestPosition(uint256 _depositId, uint256 _amount) public virtual
```

### withdrawAndHarvestAll

```solidity
function withdrawAndHarvestAll() public virtual
```

### stakeTreasure

```solidity
function stakeTreasure(uint256 _tokenId, uint256 _amount) external virtual
```

### unstakeTreasure

```solidity
function unstakeTreasure(uint256 _tokenId, uint256 _amount) external virtual
```

### stakeLegion

```solidity
function stakeLegion(uint256 _tokenId) external virtual
```

### unstakeLegion

```solidity
function unstakeLegion(uint256 _tokenId) external virtual
```

### isLegion1_1

```solidity
function isLegion1_1(uint256 _tokenId) public view virtual returns (bool)
```

### getNftBoost

```solidity
function getNftBoost(address _nft, uint256 _tokenId, uint256 _amount) public view virtual returns (uint256)
```

### _recalculateLpAmount

```solidity
function _recalculateLpAmount(address _user) internal virtual
```

### addExcludedAddress

```solidity
function addExcludedAddress(address _exclude) external virtual
```

### removeExcludedAddress

```solidity
function removeExcludedAddress(address _excluded) external virtual
```

### setUtilizationOverride

```solidity
function setUtilizationOverride(uint256 _utilizationOverride) external virtual
```

### setMagicToken

```solidity
function setMagicToken(address _magic) external virtual
```

### setTreasure

```solidity
function setTreasure(address _treasure) external virtual
```

### setLegion

```solidity
function setLegion(address _legion) external virtual
```

### setLegionMetadataStore

```solidity
function setLegionMetadataStore(address _legionMetadataStore) external virtual
```

### setLegionBoostMatrix

```solidity
function setLegionBoostMatrix(uint256[][] _legionBoostMatrix) external virtual
```

### toggleUnlockAll

```solidity
function toggleUnlockAll() external virtual
```

EMERGENCY ONLY

### withdrawUndistributedRewards

```solidity
function withdrawUndistributedRewards(address _to) external virtual
```

### getTreasureBoost

```solidity
function getTreasureBoost(uint256 _tokenId, uint256 _amount) public pure virtual returns (uint256 boost)
```

### _vestedPrincipal

```solidity
function _vestedPrincipal(address _user, uint256 _depositId) internal virtual returns (uint256 amount)
```

### _addDeposit

```solidity
function _addDeposit(address _user) internal virtual returns (struct AtlasMine.UserInfo user, uint256 newDepositId)
```

### _removeDeposit

```solidity
function _removeDeposit(address _user, uint256 _depositId) internal virtual
```

## IAtlasMine

### utilization

```solidity
function utilization() external view returns (uint256)
```

## Barracks

### initialize

```solidity
function initialize() external
```

### setMagicCostPerLegion

```solidity
function setMagicCostPerLegion(uint256 _magicCostPerLegion) external
```

### trainRecruit

```solidity
function trainRecruit() external
```

### setAddressHasTrained

```solidity
function setAddressHasTrained(address _address, bool _hasTrained) external
```

## BarracksContracts

### __BarracksContracts_init

```solidity
function __BarracksContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _magicAddress, address _legionAddress, address _legionMetadataStoreAddress, address _treasuryAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## BarracksState

### RecruitTrained

```solidity
event RecruitTrained(address _owner, uint256 _tokenId)
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### magic

```solidity
contract IMagic magic
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### treasury

```solidity
contract ITreasury treasury
```

### magicCostPerLegion

```solidity
uint256 magicCostPerLegion
```

### addressToHasTrained

```solidity
mapping(address => bool) addressToHasTrained
```

### __BarracksState_init

```solidity
function __BarracksState_init() internal
```

## IBarracks

### setAddressHasTrained

```solidity
function setAddressHasTrained(address _address, bool _hasTrained) external
```

## Consumable

### initialize

```solidity
function initialize() external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `ids` and `amounts` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

### adminBurn

```solidity
function adminBurn(address _account, uint256 _id, uint256 _value) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) public
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) public
```

### airdropSingle

```solidity
function airdropSingle(uint256 _id, uint256 _amount, address[] _recipients) external
```

### airdropMulti

```solidity
function airdropMulti(uint256[] _ids, uint256[] _amounts, address[] _recipients) external
```

### setBaseUri

```solidity
function setBaseUri(string _baseURI) external
```

### uri

```solidity
function uri(uint256 _typeId) public view returns (string)
```

## ConsumableState

### baseURI

```solidity
string baseURI
```

### __ConsumableState_init

```solidity
function __ConsumableState_init() internal
```

## IConsumable

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

### adminBurn

```solidity
function adminBurn(address account, uint256 id, uint256 value) external
```

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

## CraftingContracts

### __CraftingContracts_init

```solidity
function __CraftingContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _treasureAddress, address _legionAddress, address _treasureMetadataStoreAddress, address _legionMetadataStoreAddress, address _magicAddress, address _treasuryAddress, address _consumableAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

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

## ICrafting

### processCPGainAndLevelUp

```solidity
function processCPGainAndLevelUp(uint256 _tokenId, uint8 _currentCraftingLevel, uint256 _craftingCPGained) external
```

## IBalancerCrystal

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

## IERC1155Mintable

### mint

```solidity
function mint(address _to, uint256 _itemId, uint256 _amount) external
```

## ILP

### transferFrom

```solidity
function transferFrom(address _sender, address _recipient, uint256 _amount) external returns (bool)
```

### transfer

```solidity
function transfer(address _recipient, uint256 _amount) external returns (bool)
```

## ILegion1155

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts, bytes data) external
```

## IMagic

### transferFrom

```solidity
function transferFrom(address _sender, address _recipient, uint256 _amount) external returns (bool)
```

### transfer

```solidity
function transfer(address _recipient, uint256 _amount) external returns (bool)
```

### approve

```solidity
function approve(address _spender, uint256 _amount) external returns (bool)
```

## IStream

### preRateUpdate

```solidity
function preRateUpdate() external
```

### postRateUpdate

```solidity
function postRateUpdate() external
```

## ITreasure

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts, bytes data) external
```

### safeTransferFrom

```solidity
function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount, bytes data) external
```

### mint

```solidity
function mint(address _account, uint256 _tokenId, uint256 _amount) external
```

## FragmentSwapper

### initialize

```solidity
function initialize() external
```

### swapFragments

```solidity
function swapFragments(struct SwapParams[] _params) external
```

## SwapParams

```solidity
struct SwapParams {
  uint128 fragmentId;
  uint128 amount;
}
```

## FragmentSwapperContracts

### __FragmentSwapperContracts_init

```solidity
function __FragmentSwapperContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _treasureFragmentAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## FragmentSwapperState

### treasureFragment

```solidity
contract ITreasureFragment treasureFragment
```

### __FragmentSwapperState_init

```solidity
function __FragmentSwapperState_init() internal
```

## IFragmentSwapper

## Harvester

### HARVESTER_ADMIN

```solidity
bytes32 HARVESTER_ADMIN
```

### DAY

```solidity
uint256 DAY
```

### ONE_WEEK

```solidity
uint256 ONE_WEEK
```

### TWO_WEEKS

```solidity
uint256 TWO_WEEKS
```

### ONE_MONTH

```solidity
uint256 ONE_MONTH
```

### THREE_MONTHS

```solidity
uint256 THREE_MONTHS
```

### SIX_MONTHS

```solidity
uint256 SIX_MONTHS
```

### TWELVE_MONTHS

```solidity
uint256 TWELVE_MONTHS
```

### ONE

```solidity
uint256 ONE
```

### factory

```solidity
contract IHarvesterFactory factory
```

### nftHandler

```solidity
contract INftHandler nftHandler
```

### unlockAll

```solidity
bool unlockAll
```

### disabled

```solidity
bool disabled
```

### totalRewardsEarned

```solidity
uint256 totalRewardsEarned
```

### accMagicPerShare

```solidity
uint256 accMagicPerShare
```

### totalLpToken

```solidity
uint256 totalLpToken
```

### magicTotalDeposits

```solidity
uint256 magicTotalDeposits
```

### totalDepositCap

```solidity
uint256 totalDepositCap
```

amount of MAGIC that can be deposited

### depositCapPerWallet

```solidity
struct IHarvester.CapConfig depositCapPerWallet
```

### userInfo

```solidity
mapping(address => mapping(uint256 => struct IHarvester.UserInfo)) userInfo
```

user => depositId => UserInfo

### getUserGlobalDeposit

```solidity
mapping(address => struct IHarvester.GlobalUserDeposit) getUserGlobalDeposit
```

user => GlobalUserDeposit

### allUserDepositIds

```solidity
mapping(address => struct EnumerableSet.UintSet) allUserDepositIds
```

user => depositId[]

### currentId

```solidity
mapping(address => uint256) currentId
```

user => deposit index

### timelockOptions

```solidity
mapping(uint256 => struct IHarvester.Timelock) timelockOptions
```

id => Timelock

### timelockIds

```solidity
struct EnumerableSet.UintSet timelockIds
```

set of timelockOptions IDs

### Deposit

```solidity
event Deposit(address user, uint256 index, uint256 amount, uint256 lock)
```

### Withdraw

```solidity
event Withdraw(address user, uint256 index, uint256 amount)
```

### Harvest

```solidity
event Harvest(address user, uint256 amount)
```

### LogUpdateRewards

```solidity
event LogUpdateRewards(uint256 distributedRewards, uint256 lpSupply, uint256 accMagicPerShare)
```

### Enable

```solidity
event Enable()
```

### Disable

```solidity
event Disable()
```

### NftHandler

```solidity
event NftHandler(contract INftHandler nftHandler)
```

### DepositCapPerWallet

```solidity
event DepositCapPerWallet(struct IHarvester.CapConfig depositCapPerWallet)
```

### TotalDepositCap

```solidity
event TotalDepositCap(uint256 totalDepositCap)
```

### UnlockAll

```solidity
event UnlockAll(bool value)
```

### TimelockOption

```solidity
event TimelockOption(struct IHarvester.Timelock timelock, uint256 id)
```

### TimelockOptionEnabled

```solidity
event TimelockOptionEnabled(struct IHarvester.Timelock timelock, uint256 id)
```

### TimelockOptionDisabled

```solidity
event TimelockOptionDisabled(struct IHarvester.Timelock timelock, uint256 id)
```

### MaxUserGlobalDeposit

```solidity
error MaxUserGlobalDeposit()
```

### MaxTotalDeposit

```solidity
error MaxTotalDeposit()
```

### Disabled

```solidity
error Disabled()
```

### OnlyFactory

```solidity
error OnlyFactory()
```

### InvalidValueOrDisabledTimelock

```solidity
error InvalidValueOrDisabledTimelock()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### StillLocked

```solidity
error StillLocked()
```

### AmountTooBig

```solidity
error AmountTooBig()
```

### RunOnBank

```solidity
error RunOnBank()
```

### DepositDoesNotExists

```solidity
error DepositDoesNotExists()
```

### updateRewards

```solidity
modifier updateRewards()
```

### checkDepositCaps

```solidity
modifier checkDepositCaps()
```

### whenEnabled

```solidity
modifier whenEnabled()
```

### onlyFactory

```solidity
modifier onlyFactory()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _admin, contract INftHandler _nftHandler, struct IHarvester.CapConfig _depositCapPerWallet) external
```

### getTimelockOptionsIds

```solidity
function getTimelockOptionsIds() external view returns (uint256[])
```

### getUserBoost

```solidity
function getUserBoost(address _user) external view returns (uint256)
```

### getDepositTotalBoost

```solidity
function getDepositTotalBoost(address _user, uint256 _depositId) external view returns (uint256)
```

### getNftBoost

```solidity
function getNftBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) external view returns (uint256)
```

### getAllUserDepositIds

```solidity
function getAllUserDepositIds(address _user) external view returns (uint256[])
```

### getAllUserDepositIdsLength

```solidity
function getAllUserDepositIdsLength(address _user) external view returns (uint256)
```

### getUserDepositCap

```solidity
function getUserDepositCap(address _user) public view returns (uint256 cap)
```

Gets amount of MAGIC that a single wallet can deposit

### getLockBoost

```solidity
function getLockBoost(uint256 _timelockId) public view returns (uint256 boost, uint256 timelock)
```

### getVestingTime

```solidity
function getVestingTime(uint256 _timelockId) public view returns (uint256 vestingTime)
```

### calculateVestedPrincipal

```solidity
function calculateVestedPrincipal(address _user, uint256 _depositId) public view returns (uint256 amount)
```

### isUserExceedingDepositCap

```solidity
function isUserExceedingDepositCap(address _user) public view returns (bool)
```

### pendingRewardsAll

```solidity
function pendingRewardsAll(address _user) external view returns (uint256 pending)
```

### getMaxWithdrawableAmount

```solidity
function getMaxWithdrawableAmount(address _user) public view returns (uint256 withdrawable)
```

### callUpdateRewards

```solidity
function callUpdateRewards() public returns (bool)
```

_utility function to invoke updateRewards modifier_

### updateNftBoost

```solidity
function updateNftBoost(address _user) external returns (bool)
```

### enable

```solidity
function enable() external
```

### disable

```solidity
function disable() external
```

### deposit

```solidity
function deposit(uint256 _amount, uint256 _timelockId) external
```

### withdrawPosition

```solidity
function withdrawPosition(uint256 _depositId, uint256 _amount) public returns (bool)
```

### withdrawAmountFromAll

```solidity
function withdrawAmountFromAll(uint256 _amount) public
```

### withdrawAll

```solidity
function withdrawAll() public
```

### harvestAll

```solidity
function harvestAll() public
```

### withdrawAndHarvestPosition

```solidity
function withdrawAndHarvestPosition(uint256 _depositId, uint256 _amount) public
```

### withdrawAndHarvestAll

```solidity
function withdrawAndHarvestAll() public
```

### _recalculateGlobalLp

```solidity
function _recalculateGlobalLp(address _user, int256 _amount, int256 _lockLpAmount) internal returns (uint256 pendingRewards)
```

### _addDeposit

```solidity
function _addDeposit(address _user) internal returns (struct IHarvester.UserInfo user, uint256 newDepositId)
```

### _removeDeposit

```solidity
function _removeDeposit(address _user, uint256 _depositId) internal
```

### setNftHandler

```solidity
function setNftHandler(contract INftHandler _nftHandler) external
```

### setDepositCapPerWallet

```solidity
function setDepositCapPerWallet(struct IHarvester.CapConfig _depositCapPerWallet) external
```

### setTotalDepositCap

```solidity
function setTotalDepositCap(uint256 _totalDepositCap) external
```

### addTimelockOption

```solidity
function addTimelockOption(struct IHarvester.Timelock _timelock) external
```

### enableTimelockOption

```solidity
function enableTimelockOption(uint256 _id) external
```

### disableTimelockOption

```solidity
function disableTimelockOption(uint256 _id) external
```

### _addTimelockOption

```solidity
function _addTimelockOption(struct IHarvester.Timelock _timelock) internal
```

### setUnlockAll

```solidity
function setUnlockAll(bool _value) external
```

EMERGENCY ONLY

## IHarvester

### UserInfo

```solidity
struct UserInfo {
  uint256 originalDepositAmount;
  uint256 depositAmount;
  uint256 lockLpAmount;
  uint256 lockedUntil;
  uint256 lock;
}
```

### CapConfig

```solidity
struct CapConfig {
  address parts;
  uint256 partsTokenId;
  uint256 capPerPart;
}
```

### GlobalUserDeposit

```solidity
struct GlobalUserDeposit {
  uint256 globalDepositAmount;
  uint256 globalLockLpAmount;
  uint256 globalLpAmount;
  int256 globalRewardDebt;
}
```

### Timelock

```solidity
struct Timelock {
  uint256 boost;
  uint256 timelock;
  uint256 vesting;
  bool enabled;
}
```

### init

```solidity
function init(address _admin, contract INftHandler _nftHandler, struct IHarvester.CapConfig _depositCapPerWallet) external
```

### disabled

```solidity
function disabled() external view returns (bool)
```

### enable

```solidity
function enable() external
```

### disable

```solidity
function disable() external
```

### callUpdateRewards

```solidity
function callUpdateRewards() external returns (bool)
```

### isUserExceedingDepositCap

```solidity
function isUserExceedingDepositCap(address _user) external view returns (bool)
```

### updateNftBoost

```solidity
function updateNftBoost(address user) external returns (bool)
```

### nftHandler

```solidity
function nftHandler() external view returns (contract INftHandler)
```

### magicTotalDeposits

```solidity
function magicTotalDeposits() external view returns (uint256)
```

### totalDepositCap

```solidity
function totalDepositCap() external view returns (uint256)
```

## HarvesterFactory

### HF_ADMIN

```solidity
bytes32 HF_ADMIN
```

_master admin, manages other roles and can change core config_

### HF_DEPLOYER

```solidity
bytes32 HF_DEPLOYER
```

_can deploy and enable/disable harvesters_

### HF_BEACON_ADMIN

```solidity
bytes32 HF_BEACON_ADMIN
```

_can upgrade proxy implementation for harvester and nftHandler_

### nftHandlerBeacon

```solidity
contract UpgradeableBeacon nftHandlerBeacon
```

### harvesterBeacon

```solidity
contract UpgradeableBeacon harvesterBeacon
```

### harvesters

```solidity
struct EnumerableSet.AddressSet harvesters
```

### magic

```solidity
contract IERC20 magic
```

_Magic token addr_

### middleman

```solidity
contract IMiddleman middleman
```

### deployedHarvesters

```solidity
mapping(address => bool) deployedHarvesters
```

### HarvesterDeployed

```solidity
event HarvesterDeployed(address harvester, address nftHandler)
```

### Magic

```solidity
event Magic(contract IERC20 magic)
```

### Middleman

```solidity
event Middleman(contract IMiddleman middleman)
```

### HarvesterExists

```solidity
error HarvesterExists()
```

### NotHarvester

```solidity
error NotHarvester()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(contract IERC20 _magic, contract IMiddleman _middleman, address _admin, address _harvesterImpl, address _nftHandlerImpl) external
```

### getHarvester

```solidity
function getHarvester(uint256 _index) external view returns (address)
```

### getAllHarvesters

```solidity
function getAllHarvesters() external view returns (address[])
```

### getAllHarvestersLength

```solidity
function getAllHarvestersLength() external view returns (uint256)
```

### deployHarvester

```solidity
function deployHarvester(address _admin, struct IHarvester.CapConfig _depositCapPerWallet, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

### enableHarvester

```solidity
function enableHarvester(contract IHarvester _harvester) external
```

### disableHarvester

```solidity
function disableHarvester(contract IHarvester _harvester) external
```

### setMagicToken

```solidity
function setMagicToken(contract IERC20 _magic) external
```

### setMiddleman

```solidity
function setMiddleman(contract IMiddleman _middleman) external
```

### upgradeHarvesterTo

```solidity
function upgradeHarvesterTo(address _newImplementation) external
```

_Upgrades the harvester beacon to a new implementation._

### upgradeNftHandlerTo

```solidity
function upgradeNftHandlerTo(address _newImplementation) external
```

_Upgrades the nft handler beacon to a new implementation._

## IHarvesterFactory

### magic

```solidity
function magic() external view returns (contract IERC20)
```

### middleman

```solidity
function middleman() external view returns (contract IMiddleman)
```

### getAllHarvesters

```solidity
function getAllHarvesters() external view returns (address[])
```

## ExtractorStakingRules

### ExtractorData

```solidity
struct ExtractorData {
  address user;
  uint256 tokenId;
  uint256 stakedTimestamp;
}
```

### MAX_SPOTS

```solidity
uint256 MAX_SPOTS
```

### maxStakeable

```solidity
uint256 maxStakeable
```

### lifetime

```solidity
uint256 lifetime
```

_time in seconds during which extractor is live_

### extractorAddress

```solidity
address extractorAddress
```

_address of NFT extractor token_

### extractorCount

```solidity
struct CountersUpgradeable.Counter extractorCount
```

_latest spot Id_

### stakedExtractor

```solidity
mapping(uint256 => struct ExtractorStakingRules.ExtractorData) stakedExtractor
```

_maps spot Id to ExtractorData_

### extractorBoost

```solidity
mapping(uint256 => uint256) extractorBoost
```

_maps token Id => boost value_

### MaxStakeable

```solidity
event MaxStakeable(uint256 maxStakeable)
```

### ExtractorBoost

```solidity
event ExtractorBoost(uint256 tokenId, uint256 boost)
```

### ExtractorStaked

```solidity
event ExtractorStaked(address user, uint256 tokenId, uint256 spotId, uint256 amount)
```

### ExtractorReplaced

```solidity
event ExtractorReplaced(address user, uint256 tokenId, uint256 replacedSpotId)
```

### Lifetime

```solidity
event Lifetime(uint256 lifetime)
```

### ExtractorAddress

```solidity
event ExtractorAddress(address extractorAddress)
```

### InvalidAddress

```solidity
error InvalidAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MustReplaceOne

```solidity
error MustReplaceOne()
```

### InvalidSpotId

```solidity
error InvalidSpotId()
```

### MustReplaceWithHigherBoost

```solidity
error MustReplaceWithHigherBoost()
```

### ZeroBoost

```solidity
error ZeroBoost()
```

### MaxStakeableReached

```solidity
error MaxStakeableReached()
```

### CannotUnstake

```solidity
error CannotUnstake()
```

### TooManyStakeableSpots

```solidity
error TooManyStakeableSpots()
```

### validateInput

```solidity
modifier validateInput(address _nft, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, address _extractorAddress, uint256 _maxStakeable, uint256 _lifetime) external
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### isExtractorActive

```solidity
function isExtractorActive(uint256 _spotId) public view returns (bool)
```

### getExtractorCount

```solidity
function getExtractorCount() public view returns (uint256)
```

### getExtractors

```solidity
function getExtractors() external view returns (struct ExtractorStakingRules.ExtractorData[] extractors)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| extractors | struct ExtractorStakingRules.ExtractorData[] | array of all staked extractors |

### getExtractorsTotalBoost

```solidity
function getExtractorsTotalBoost() public view returns (uint256 totalBoost)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| totalBoost | uint256 | boost sum of all active extractors |

### getUserBoost

```solidity
function getUserBoost(address, address, uint256, uint256) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256 |  |
|  | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### canReplace

```solidity
function canReplace(address _user, address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) external returns (address user, uint256 replacedTokenId, uint256 replacedAmount)
```

Checks if extractor can be replaced

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address |  |
| _nft | address |  |
| _tokenId | uint256 | token Id of new extractor |
| _amount | uint256 | must be 1, only 1 extractor at a time can be replaced |
| _replacedSpotId | uint256 | index of stakedExtractor mapping for replaced extractor |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | wallet address that staked replaced NFT |
| replacedTokenId | uint256 | tokenId of replaced NFT |
| replacedAmount | uint256 | amount of replaced NFT, must be 1 for ERC721 |

### _processStake

```solidity
function _processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address, address, uint256, uint256) internal pure
```

_it's meant to be overridden by staking rules implementation_

### setMaxStakeable

```solidity
function setMaxStakeable(uint256 _maxStakeable) external
```

### setExtractorBoost

```solidity
function setExtractorBoost(uint256 _tokenId, uint256 _boost) external
```

### setExtractorLifetime

```solidity
function setExtractorLifetime(uint256 _lifetime) external
```

### _setMaxStakeable

```solidity
function _setMaxStakeable(uint256 _maxStakeable) internal
```

### _setExtractorAddress

```solidity
function _setExtractorAddress(address _extractorAddress) internal
```

### _setExtractorLifetime

```solidity
function _setExtractorLifetime(uint256 _lifetime) internal
```

## IExtractorStakingRules

### canReplace

```solidity
function canReplace(address _user, address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) external returns (address user, uint256 replacedTokenId, uint256 replacedAmount)
```

Checks if extractor can be replaced

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address |  |
| _nft | address |  |
| _tokenId | uint256 | token Id of new extractor |
| _amount | uint256 | must be 1, only 1 extractor at a time can be replaced |
| _replacedSpotId | uint256 | index of stakedExtractor mapping for replaced extractor |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | wallet address that staked replaced NFT |
| replacedTokenId | uint256 | tokenId of replaced NFT |
| replacedAmount | uint256 | amount of replaced NFT, must be 1 for ERC721 |

## IPartsStakingRules

### getAmountStaked

```solidity
function getAmountStaked(address _user) external view returns (uint256)
```

Gets amount of staked NFTs of given contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet address for which to read the value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | number of NFTs staked by `_user` |

## IStakingRules

### processStake

```solidity
function processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be staked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is staking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of staked NFT |
| _amount | uint256 | number of NFTs staked, must be 1 for ERC721 |

### processUnstake

```solidity
function processUnstake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be unstaked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is unstaking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of unstaked NFT |
| _amount | uint256 | number of NFTs unstaked, must be 1 for ERC721 |

### getUserBoost

```solidity
function getUserBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) external view returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet for which to calculate boost |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of NFT |
| _amount | uint256 | number of NFTs for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### setNftHandler

```solidity
function setNftHandler(address _nftHandler) external
```

Set nftHandler address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftHandler | address | address |

## LegionStakingRules

### staked

```solidity
uint256 staked
```

### maxStakeableTotal

```solidity
uint256 maxStakeableTotal
```

### maxLegionWeight

```solidity
uint256 maxLegionWeight
```

### totalRank

```solidity
uint256 totalRank
```

### boostFactor

```solidity
uint256 boostFactor
```

### legionBoostMatrix

```solidity
uint256[][] legionBoostMatrix
```

### legionWeightMatrix

```solidity
uint256[][] legionWeightMatrix
```

### legionRankMatrix

```solidity
uint256[][] legionRankMatrix
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### weightStaked

```solidity
mapping(address => uint256) weightStaked
```

_maps user wallet to current staked weight. For weight values, see getWeight_

### paused

```solidity
bool paused
```

### MaxWeight

```solidity
event MaxWeight(uint256 maxLegionWeight)
```

### LegionMetadataStore

```solidity
event LegionMetadataStore(contract ILegionMetadataStore legionMetadataStore)
```

### MaxStakeableTotal

```solidity
event MaxStakeableTotal(uint256 maxStakeableTotal)
```

### BoostFactor

```solidity
event BoostFactor(uint256 boostFactor)
```

### Pause

```solidity
event Pause()
```

### Unpause

```solidity
event Unpause()
```

### LegionBoostMatrix

```solidity
event LegionBoostMatrix(uint256[][] legionBoostMatrix)
```

### LegionWeightMatrix

```solidity
event LegionWeightMatrix(uint256[][] legionWeightMatrix)
```

### LegionRankMatrix

```solidity
event LegionRankMatrix(uint256[][] legionRankMatrix)
```

### TotalRankUpdate

```solidity
event TotalRankUpdate(uint256 oldTotalRank, uint256 newTotalRank)
```

### MaxWeightReached

```solidity
error MaxWeightReached()
```

### Paused

```solidity
error Paused()
```

### Unpaused

```solidity
error Unpaused()
```

### init

```solidity
function init(address _admin, address _harvesterFactory, contract ILegionMetadataStore _legionMetadataStore, uint256 _maxLegionWeight, uint256 _maxStakeableTotal, uint256 _boostFactor) external
```

### getLegionBoostMatrix

```solidity
function getLegionBoostMatrix() public view returns (uint256[][])
```

### getLegionWeightMatrix

```solidity
function getLegionWeightMatrix() public view returns (uint256[][])
```

### getLegionRankMatrix

```solidity
function getLegionRankMatrix() public view returns (uint256[][])
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256 _tokenId, uint256) external view returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | token Id of NFT |
|  | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### getLegionBoost

```solidity
function getLegionBoost(uint256 _legionGeneration, uint256 _legionRarity) public view returns (uint256)
```

### getRank

```solidity
function getRank(uint256 _tokenId) public view returns (uint256)
```

### getWeight

```solidity
function getWeight(uint256 _tokenId) public view returns (uint256)
```

### _processStake

```solidity
function _processStake(address _user, address, uint256 _tokenId, uint256) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256 _tokenId, uint256) internal
```

### setLegionMetadataStore

```solidity
function setLegionMetadataStore(contract ILegionMetadataStore _legionMetadataStore) external
```

### setLegionBoostMatrix

```solidity
function setLegionBoostMatrix(uint256[][] _legionBoostMatrix) external
```

### setLegionWeightMatrix

```solidity
function setLegionWeightMatrix(uint256[][] _legionWeightMatrix) external
```

### setLegionRankMatrix

```solidity
function setLegionRankMatrix(uint256[][] _legionRankMatrix) external
```

_changing ranks values after NFTs are already staked can break `totalRank` calculations_

### setMaxWeight

```solidity
function setMaxWeight(uint256 _maxLegionWeight) external
```

### setMaxStakeableTotal

```solidity
function setMaxStakeableTotal(uint256 _maxStakeableTotal) external
```

### setBoostFactor

```solidity
function setBoostFactor(uint256 _boostFactor) external
```

### pause

```solidity
function pause() external
```

### unpause

```solidity
function unpause() external
```

### setTotalRank

```solidity
function setTotalRank(uint256 _totalRank) external
```

### _setMaxWeight

```solidity
function _setMaxWeight(uint256 _maxLegionWeight) internal
```

### _setMaxStakeableTotal

```solidity
function _setMaxStakeableTotal(uint256 _maxStakeableTotal) internal
```

### _setBoostFactor

```solidity
function _setBoostFactor(uint256 _boostFactor) internal
```

### setUserWeights

```solidity
function setUserWeights(struct UserWeight[] _userWeights) external
```

## UserWeight

```solidity
struct UserWeight {
  address user;
  uint96 weight;
}
```

## PartsStakingRules

### staked

```solidity
uint256 staked
```

### maxStakeableTotal

```solidity
uint256 maxStakeableTotal
```

### maxStakeablePerUser

```solidity
uint256 maxStakeablePerUser
```

### boostFactor

```solidity
uint256 boostFactor
```

### getAmountStaked

```solidity
mapping(address => uint256) getAmountStaked
```

### MaxStakeableTotal

```solidity
event MaxStakeableTotal(uint256 maxStakeableTotal)
```

### MaxStakeablePerUser

```solidity
event MaxStakeablePerUser(uint256 maxStakeablePerUser)
```

### BoostFactor

```solidity
event BoostFactor(uint256 boostFactor)
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MaxStakeable

```solidity
error MaxStakeable()
```

### MaxStakeablePerUserReached

```solidity
error MaxStakeablePerUserReached()
```

### MinUserGlobalDeposit

```solidity
error MinUserGlobalDeposit()
```

### validateInput

```solidity
modifier validateInput(address _user, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, uint256 _maxStakeableTotal, uint256 _maxStakeablePerUser, uint256 _boostFactor) external
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256, uint256) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256 |  |
|  | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### _processStake

```solidity
function _processStake(address _user, address, uint256, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256, uint256 _amount) internal
```

### setMaxStakeableTotal

```solidity
function setMaxStakeableTotal(uint256 _maxStakeableTotal) external
```

### setMaxStakeablePerUser

```solidity
function setMaxStakeablePerUser(uint256 _maxStakeablePerUser) external
```

### setBoostFactor

```solidity
function setBoostFactor(uint256 _boostFactor) external
```

### _setMaxStakeableTotal

```solidity
function _setMaxStakeableTotal(uint256 _maxStakeableTotal) internal
```

### _setMaxStakeablePerUser

```solidity
function _setMaxStakeablePerUser(uint256 _maxStakeablePerUser) internal
```

### _setBoostFactor

```solidity
function _setBoostFactor(uint256 _boostFactor) internal
```

## StakingRulesBase

### SR_ADMIN

```solidity
bytes32 SR_ADMIN
```

### SR_NFT_HANDLER

```solidity
bytes32 SR_NFT_HANDLER
```

### SR_HARVESTER_FACTORY

```solidity
bytes32 SR_HARVESTER_FACTORY
```

_temporary role assigned to harvester factory to setup nftHandler after it's deployed
     (solves circular dependency)_

### nftHandler

```solidity
contract INftHandler nftHandler
```

### constructor

```solidity
constructor() internal
```

### _initStakingRulesBase

```solidity
function _initStakingRulesBase(address _admin, address _harvesterFactory) internal
```

### processStake

```solidity
function processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be staked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is staking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of staked NFT |
| _amount | uint256 | number of NFTs staked, must be 1 for ERC721 |

### processUnstake

```solidity
function processUnstake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be unstaked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is unstaking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of unstaked NFT |
| _amount | uint256 | number of NFTs unstaked, must be 1 for ERC721 |

### setNftHandler

```solidity
function setNftHandler(address _nftHandler) external
```

Set nftHandler address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftHandler | address | address |

### _processStake

```solidity
function _processStake(address, address, uint256, uint256) internal virtual
```

_it's meant to be overridden by staking rules implementation_

### _processUnstake

```solidity
function _processUnstake(address, address, uint256, uint256) internal virtual
```

_it's meant to be overridden by staking rules implementation_

## TreasureStakingRules

### maxStakeablePerUser

```solidity
uint256 maxStakeablePerUser
```

### getAmountTreasuresStaked

```solidity
mapping(address => uint256) getAmountTreasuresStaked
```

### MaxStakeablePerUser

```solidity
event MaxStakeablePerUser(uint256 maxStakeablePerUser)
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```

### MaxStakeablePerUserReached

```solidity
error MaxStakeablePerUserReached()
```

### validateInput

```solidity
modifier validateInput(address _user, uint256 _amount)
```

### init

```solidity
function init(address _admin, address _harvesterFactory, uint256 _maxStakeablePerUser) external
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256 _tokenId, uint256 _amount) external pure returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | token Id of NFT |
| _amount | uint256 | number of NFTs for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external pure returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### getTreasureBoost

```solidity
function getTreasureBoost(uint256 _tokenId, uint256 _amount) public pure returns (uint256 boost)
```

### _processStake

```solidity
function _processStake(address _user, address, uint256, uint256 _amount) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256, uint256 _amount) internal
```

### setMaxStakeablePerUser

```solidity
function setMaxStakeablePerUser(uint256 _maxStakeablePerUser) external
```

### _setMaxStakeablePerUser

```solidity
function _setMaxStakeablePerUser(uint256 _maxStakeablePerUser) internal
```

## ILegion

### safeMint

```solidity
function safeMint(address _to) external returns (uint256)
```

### setTokenURI

```solidity
function setTokenURI(uint256 _tokenId, string _tokenURI) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _tokenId) external
```

## Legion

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external returns (uint256)
```

### setTokenURI

```solidity
function setTokenURI(uint256 _tokenId, string _tokenURI) external
```

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _tokenId) external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string)
```

## LegionContracts

### __LegionContracts_init

```solidity
function __LegionContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _legionMetadataStoreAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## LegionState

### tokenIdCounter

```solidity
struct CountersUpgradeable.Counter tokenIdCounter
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### __LegionState_init

```solidity
function __LegionState_init() internal
```

## ILegionMetadataStore

### setInitialMetadataForLegion

```solidity
function setInitialMetadataForLegion(address _owner, uint256 _tokenId, enum LegionGeneration _generation, enum LegionClass _class, enum LegionRarity _rarity, uint256 _oldId) external
```

### increaseQuestLevel

```solidity
function increaseQuestLevel(uint256 _tokenId) external
```

### increaseCraftLevel

```solidity
function increaseCraftLevel(uint256 _tokenId) external
```

### increaseConstellationRank

```solidity
function increaseConstellationRank(uint256 _tokenId, enum Constellation _constellation, uint8 _to) external
```

### metadataForLegion

```solidity
function metadataForLegion(uint256 _tokenId) external view returns (struct LegionMetadata)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

## LegionMetadata

```solidity
struct LegionMetadata {
  enum LegionGeneration legionGeneration;
  enum LegionClass legionClass;
  enum LegionRarity legionRarity;
  uint8 questLevel;
  uint8 craftLevel;
  uint8[6] constellationRanks;
  uint256 oldId;
}
```

## Constellation

```solidity
enum Constellation {
  FIRE,
  EARTH,
  WIND,
  WATER,
  LIGHT,
  DARK
}
```

## LegionRarity

```solidity
enum LegionRarity {
  LEGENDARY,
  RARE,
  SPECIAL,
  UNCOMMON,
  COMMON,
  RECRUIT
}
```

## LegionClass

```solidity
enum LegionClass {
  RECRUIT,
  SIEGE,
  FIGHTER,
  ASSASSIN,
  RANGED,
  SPELLCASTER,
  RIVERMAN,
  NUMERAIRE,
  ALL_CLASS,
  ORIGIN
}
```

## LegionGeneration

```solidity
enum LegionGeneration {
  GENESIS,
  AUXILIARY,
  RECRUIT
}
```

## LegionMetadataStore

### initialize

```solidity
function initialize() external
```

### setInitialMetadataForLegion

```solidity
function setInitialMetadataForLegion(address _owner, uint256 _tokenId, enum LegionGeneration _generation, enum LegionClass _class, enum LegionRarity _rarity, uint256 _oldId) external
```

### increaseQuestLevel

```solidity
function increaseQuestLevel(uint256 _tokenId) external
```

### increaseCraftLevel

```solidity
function increaseCraftLevel(uint256 _tokenId) external
```

### increaseConstellationRank

```solidity
function increaseConstellationRank(uint256 _tokenId, enum Constellation _constellation, uint8 _to) external
```

### metadataForLegion

```solidity
function metadataForLegion(uint256 _tokenId) external view returns (struct LegionMetadata)
```

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256 _tokenId) external view returns (enum LegionGeneration, enum LegionRarity)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

### setTokenUriForGenClassRarityOldId

```solidity
function setTokenUriForGenClassRarityOldId(enum LegionGeneration _gen, enum LegionClass _class, enum LegionRarity _rarity, uint256 _oldId, string _uri) external
```

## LegionMetadataStoreState

### LegionQuestLevelUp

```solidity
event LegionQuestLevelUp(uint256 _tokenId, uint8 _questLevel)
```

### LegionCraftLevelUp

```solidity
event LegionCraftLevelUp(uint256 _tokenId, uint8 _craftLevel)
```

### LegionConstellationRankUp

```solidity
event LegionConstellationRankUp(uint256 _tokenId, enum Constellation _constellation, uint8 _rank)
```

### LegionCreated

```solidity
event LegionCreated(address _owner, uint256 _tokenId, enum LegionGeneration _generation, enum LegionClass _class, enum LegionRarity _rarity)
```

### idToGeneration

```solidity
mapping(uint256 => enum LegionGeneration) idToGeneration
```

### idToClass

```solidity
mapping(uint256 => enum LegionClass) idToClass
```

### idToRarity

```solidity
mapping(uint256 => enum LegionRarity) idToRarity
```

### idToOldId

```solidity
mapping(uint256 => uint256) idToOldId
```

### idToQuestLevel

```solidity
mapping(uint256 => uint8) idToQuestLevel
```

### idToCraftLevel

```solidity
mapping(uint256 => uint8) idToCraftLevel
```

### idToConstellationRanks

```solidity
mapping(uint256 => uint8[6]) idToConstellationRanks
```

### _genToClassToRarityToOldIdToUri

```solidity
mapping(enum LegionGeneration => mapping(enum LegionClass => mapping(enum LegionRarity => mapping(uint256 => string)))) _genToClassToRarityToOldIdToUri
```

### __LegionMetadataStoreState_init

```solidity
function __LegionMetadataStoreState_init() internal
```

## IMasterOfCoin

### CoinStream

```solidity
struct CoinStream {
  uint256 totalRewards;
  uint256 startTimestamp;
  uint256 endTimestamp;
  uint256 lastRewardTimestamp;
  uint256 ratePerSecond;
  uint256 paid;
}
```

### requestRewards

```solidity
function requestRewards() external returns (uint256 rewardsPaid)
```

### grantTokenToStream

```solidity
function grantTokenToStream(address _stream, uint256 _amount) external
```

### getStreams

```solidity
function getStreams() external view returns (address[])
```

### getStreamConfig

```solidity
function getStreamConfig(address _stream) external view returns (struct IMasterOfCoin.CoinStream)
```

### getGlobalRatePerSecond

```solidity
function getGlobalRatePerSecond() external view returns (uint256 globalRatePerSecond)
```

### getRatePerSecond

```solidity
function getRatePerSecond(address _stream) external view returns (uint256 ratePerSecond)
```

### getPendingRewards

```solidity
function getPendingRewards(address _stream) external view returns (uint256 pendingRewards)
```

## MasterOfCoin

### MASTER_OF_COIN_ADMIN_ROLE

```solidity
bytes32 MASTER_OF_COIN_ADMIN_ROLE
```

### magic

```solidity
contract IERC20Upgradeable magic
```

### streamConfig

```solidity
mapping(address => struct IMasterOfCoin.CoinStream) streamConfig
```

stream address => CoinStream

### streams

```solidity
struct EnumerableSetUpgradeable.AddressSet streams
```

stream ID => stream address

### callbackRegistry

```solidity
mapping(address => bool) callbackRegistry
```

stream address => bool

### streamExists

```solidity
modifier streamExists(address _stream)
```

### streamActive

```solidity
modifier streamActive(address _stream)
```

### callbackStream

```solidity
modifier callbackStream(address _stream)
```

### StreamAdded

```solidity
event StreamAdded(address stream, uint256 amount, uint256 startTimestamp, uint256 endTimestamp)
```

### StreamTimeUpdated

```solidity
event StreamTimeUpdated(address stream, uint256 startTimestamp, uint256 endTimestamp)
```

### StreamGrant

```solidity
event StreamGrant(address stream, address from, uint256 amount)
```

### StreamFunded

```solidity
event StreamFunded(address stream, uint256 amount)
```

### StreamDefunded

```solidity
event StreamDefunded(address stream, uint256 amount)
```

### StreamRemoved

```solidity
event StreamRemoved(address stream)
```

### RewardsPaid

```solidity
event RewardsPaid(address stream, uint256 rewardsPaid, uint256 rewardsPaidInTotal)
```

### Withdraw

```solidity
event Withdraw(address to, uint256 amount)
```

### CallbackSet

```solidity
event CallbackSet(address stream, bool value)
```

### init

```solidity
function init(address _magic) external
```

### requestRewards

```solidity
function requestRewards() public virtual returns (uint256 rewardsPaid)
```

### grantTokenToStream

```solidity
function grantTokenToStream(address _stream, uint256 _amount) public virtual
```

### getStreams

```solidity
function getStreams() external view virtual returns (address[])
```

### getStreamConfig

```solidity
function getStreamConfig(address _stream) external view virtual returns (struct IMasterOfCoin.CoinStream)
```

### getGlobalRatePerSecond

```solidity
function getGlobalRatePerSecond() external view virtual returns (uint256 globalRatePerSecond)
```

### getRatePerSecond

```solidity
function getRatePerSecond(address _stream) public view virtual returns (uint256 ratePerSecond)
```

### getPendingRewards

```solidity
function getPendingRewards(address _stream) public view virtual returns (uint256 pendingRewards)
```

### _fundStream

```solidity
function _fundStream(address _stream, uint256 _amount) internal virtual
```

### addStream

```solidity
function addStream(address _stream, uint256 _totalRewards, uint256 _startTimestamp, uint256 _endTimestamp, bool _callback) external virtual
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stream | address | address of the contract that gets rewards |
| _totalRewards | uint256 | amount of MAGIC that should be distributed in total |
| _startTimestamp | uint256 | when MAGIC stream should start |
| _endTimestamp | uint256 | when MAGIC stream should end |
| _callback | bool | should callback be used (if you don't know, set false) |

### fundStream

```solidity
function fundStream(address _stream, uint256 _amount) external virtual
```

### defundStream

```solidity
function defundStream(address _stream, uint256 _amount) external virtual
```

### updateStreamTime

```solidity
function updateStreamTime(address _stream, uint256 _startTimestamp, uint256 _endTimestamp) external virtual
```

### removeStream

```solidity
function removeStream(address _stream) external virtual
```

### setCallback

```solidity
function setCallback(address _stream, bool _value) public virtual
```

### withdrawMagic

```solidity
function withdrawMagic(address _to, uint256 _amount) external virtual
```

### setMagicToken

```solidity
function setMagicToken(address _magic) external virtual
```

## IMasterOfInflation

### tryMintFromPool

```solidity
function tryMintFromPool(struct MintFromPoolParams _params) external returns (bool _didMintItem)
```

## MintFromPoolParams

```solidity
struct MintFromPoolParams {
  uint64 poolId;
  uint64 amount;
  uint32 bonus;
  uint256 itemId;
  uint256 randomNumber;
  address user;
}
```

## IPoolConfigProvider

### getN

```solidity
function getN(uint64 _poolId) external view returns (uint256)
```

## MasterOfInflation

### initialize

```solidity
function initialize() external
```

### tryMintFromPool

```solidity
function tryMintFromPool(struct MintFromPoolParams _params) external returns (bool _didMintItem)
```

### chanceOfItemFromPool

```solidity
function chanceOfItemFromPool(uint64 _poolId, uint64 _amount, uint32 _bonus) public view returns (uint256)
```

### chanceOfItemFromPools

```solidity
function chanceOfItemFromPools(struct ChanceOfItemFromPoolParams[] _params) external view returns (uint256[])
```

### itemsInPool

```solidity
function itemsInPool(uint64 _poolId) public view returns (uint256)
```

### hasAccessToPool

```solidity
function hasAccessToPool(uint64 _poolId, address _address) external view returns (bool)
```

## ChanceOfItemFromPoolParams

```solidity
struct ChanceOfItemFromPoolParams {
  uint64 poolId;
  uint64 amount;
  uint32 bonus;
}
```

## MasterOfInflationContracts

### __MasterOfInflationContracts_init

```solidity
function __MasterOfInflationContracts_init() internal
```

## MasterOfInflationSettings

### __MasterOfInflationSettings_init

```solidity
function __MasterOfInflationSettings_init() internal
```

### createPool

```solidity
function createPool(struct CreatePoolParams _params) external
```

### setPoolAccess

```solidity
function setPoolAccess(uint64 _poolId, struct SetPoolAccessParams[] _setPoolParams) external
```

### setItemMintable

```solidity
function setItemMintable(uint64 _poolId, uint256[] _itemIds, bool[] _mintables) external
```

### disablePool

```solidity
function disablePool(uint64 _poolId) external
```

### setItemRatePerSecond

```solidity
function setItemRatePerSecond(uint64 _poolId, uint256 _itemRate) external
```

### _setItemRatePerSecond

```solidity
function _setItemRatePerSecond(uint64 _poolId, uint256 _itemRate, bool _updateLastChanged) private
```

### setSModifier

```solidity
function setSModifier(uint64 _poolId, uint256 _sModifier) external
```

### _setSModifier

```solidity
function _setSModifier(uint64 _poolId, uint256 _sModifier) private
```

### setAdmin

```solidity
function setAdmin(uint64 _poolId, address _admin) external
```

### _setAdmin

```solidity
function _setAdmin(uint64 _poolId, address _admin) private
```

### setConfigProvider

```solidity
function setConfigProvider(uint64 _poolId, address _configProvider) external
```

### _setConfigProvider

```solidity
function _setConfigProvider(uint64 _poolId, address _configProvider) private
```

### itemRatePerSecond

```solidity
function itemRatePerSecond(uint64 _poolId) external view returns (uint256)
```

### _itemsSinceTime

```solidity
function _itemsSinceTime(uint256 _rate, uint128 _timestamp) internal view returns (uint256)
```

### onlyPoolAdmin

```solidity
modifier onlyPoolAdmin(uint64 _poolId)
```

### validPool

```solidity
modifier validPool(uint64 _poolId)
```

### onlyPoolAccessor

```solidity
modifier onlyPoolAccessor(uint64 _poolId)
```

## CreatePoolParams

```solidity
struct CreatePoolParams {
  uint256 itemRatePerSecond;
  uint256 initialItemsInPool;
  uint256 sModifier;
  address admin;
  address collection;
  address configProvider;
}
```

## SetPoolAccessParams

```solidity
struct SetPoolAccessParams {
  address user;
  bool canAccess;
}
```

## MasterOfInflationState

### PoolCreated

```solidity
event PoolCreated(uint64 poolId, address poolCollection)
```

### PoolAdminChanged

```solidity
event PoolAdminChanged(uint64 poolId, address oldAdmin, address newAdmin)
```

### PoolRateChanged

```solidity
event PoolRateChanged(uint64 poolId, uint256 oldItemRate, uint256 newItemRate)
```

### PoolAccessChanged

```solidity
event PoolAccessChanged(uint64 poolId, address accessor, bool canAccess)
```

### PoolConfigProviderChanged

```solidity
event PoolConfigProviderChanged(uint64 poolId, address oldProvider, address newProvider)
```

### PoolSModifierChanged

```solidity
event PoolSModifierChanged(uint64 poolId, uint256 oldModifier, uint256 newModifier)
```

### PoolDisabled

```solidity
event PoolDisabled(uint64 poolId)
```

### PoolItemMintableChanged

```solidity
event PoolItemMintableChanged(uint64 poolId, uint256 itemId, bool mintable)
```

### ItemMintedFromPool

```solidity
event ItemMintedFromPool(uint64 poolId, address user, uint256 itemId, uint64 amount)
```

### poolId

```solidity
uint64 poolId
```

### poolIdToInfo

```solidity
mapping(uint64 => struct PoolInfo) poolIdToInfo
```

### poolIdToItemIdToMintable

```solidity
mapping(uint64 => mapping(uint256 => bool)) poolIdToItemIdToMintable
```

### __MasterOfInflationState_init

```solidity
function __MasterOfInflationState_init() internal
```

## PoolInfo

```solidity
struct PoolInfo {
  bool isEnabled;
  address poolAdmin;
  uint88 emptySpace1;
  uint128 startTime;
  uint128 timeRateLastChanged;
  uint256 itemRatePerSecond;
  uint256 totalItemsAtLastRateChange;
  uint256 itemsClaimed;
  mapping(address => bool) addressToAccess;
  uint256 sModifier;
  address poolCollection;
  uint96 emptySpace2;
  address poolConfigProvider;
  uint96 emptySpace3;
}
```

## Constant

### ONE

```solidity
uint256 ONE
```

## CorruptionToken

### constructor

```solidity
constructor(string name, string symbol, address owner) public
```

### mint

```solidity
function mint(address account, uint256 amount) public
```

### burn

```solidity
function burn(address account, uint256 amount) public
```

## IMiddleman

### requestRewards

```solidity
function requestRewards() external returns (uint256 rewardsPaid)
```

### getPendingRewards

```solidity
function getPendingRewards(address _stream) external view returns (uint256 pendingRewards)
```

## Middleman

### RewardsBalance

```solidity
struct RewardsBalance {
  uint256 unpaid;
  uint256 paid;
}
```

### MIDDLEMAN_ADMIN

```solidity
bytes32 MIDDLEMAN_ADMIN
```

### corruptionToken

```solidity
contract IERC20 corruptionToken
```

_Magic token addr_

### harvesterFactory

```solidity
contract IHarvesterFactory harvesterFactory
```

### masterOfCoin

```solidity
contract IMasterOfCoin masterOfCoin
```

### atlasMine

```solidity
address atlasMine
```

### atlasMineBoost

```solidity
uint256 atlasMineBoost
```

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

### rewardsBalance

```solidity
mapping(address => struct Middleman.RewardsBalance) rewardsBalance
```

### corruptionNegativeBoostMatrix

```solidity
uint256[][] corruptionNegativeBoostMatrix
```

### RewardsPaid

```solidity
event RewardsPaid(address stream, uint256 rewardsPaid, uint256 rewardsPaidInTotal)
```

### CorruptionToken

```solidity
event CorruptionToken(contract IERC20 corruptionToken)
```

### HarvesterFactory

```solidity
event HarvesterFactory(contract IHarvesterFactory harvesterFactory)
```

### AtlasMine

```solidity
event AtlasMine(address atlasMine)
```

### MasterOfCoin

```solidity
event MasterOfCoin(contract IMasterOfCoin masterOfCoin)
```

### CorruptionNegativeBoostMatrix

```solidity
event CorruptionNegativeBoostMatrix(uint256[][] _corruptionNegativeBoostMatrix)
```

### AtlasMineBoost

```solidity
event AtlasMineBoost(uint256 atlasMineBoost)
```

### runIfNeeded

```solidity
modifier runIfNeeded()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _admin, contract IMasterOfCoin _masterOfCoin, contract IHarvesterFactory _harvesterFactory, address _atlasMine, uint256 _atlasMineBoost, contract IERC20 _corruptionToken) external
```

### getHarvesterShares

```solidity
function getHarvesterShares(address _targetHarvester) public view returns (address[] allActiveHarvesters, uint256[] harvesterShare, uint256 totalShare, uint256 targetIndex)
```

_Returns share in mining power for all harvesters. To get percentage of mining power
     for given harvester do:
     `harvesterShare[i] / totalShare`, where `i` is index of harvester address in `allActiveHarvesters`
     array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _targetHarvester | address | optional parameter, you can safely use `address(0)`. If you are looking        for specific harvester, provide its address as param and `targetIndex` will return index        of harvester in question in `allActiveHarvesters` array. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| allActiveHarvesters | address[] | array of all harvesters |
| harvesterShare | uint256[] | share in mining power for each harvester in `allActiveHarvesters` array |
| totalShare | uint256 | sum of all shares (includes `atlasMineBoost` if AtlasMine is setup) |
| targetIndex | uint256 | index of `_targetHarvester` in `allActiveHarvesters` array |

### getPendingRewards

```solidity
function getPendingRewards(address _harvester) public view returns (uint256)
```

### getHarvesterEmissionsBoost

```solidity
function getHarvesterEmissionsBoost(address _harvester) public view returns (uint256)
```

### getCorruptionNegativeBoost

```solidity
function getCorruptionNegativeBoost(address _harvester) public view returns (uint256 negBoost)
```

### getUtilizationBoost

```solidity
function getUtilizationBoost(address _harvester) public view returns (uint256 utilBoost)
```

### getUtilization

```solidity
function getUtilization(address _harvester) public view returns (uint256 util)
```

### getCorruptionNegativeBoostMatrix

```solidity
function getCorruptionNegativeBoostMatrix() public view returns (uint256[][])
```

### distributeRewards

```solidity
function distributeRewards() public
```

### requestRewards

```solidity
function requestRewards() public returns (uint256 rewardsPaid)
```

### setHarvesterFactory

```solidity
function setHarvesterFactory(contract IHarvesterFactory _harvesterFactory) external
```

### setMasterOfCoin

```solidity
function setMasterOfCoin(contract IMasterOfCoin _masterOfCoin) external
```

### setCorruptionNegativeBoostMatrix

```solidity
function setCorruptionNegativeBoostMatrix(uint256[][] _corruptionNegativeBoostMatrix) external
```

### setAtlasMineBoost

```solidity
function setAtlasMineBoost(uint256 _atlasMineBoost) external
```

## IMiniCrafting

## MiniCrafting

### initialize

```solidity
function initialize() external
```

### setRecruitTierInfo

```solidity
function setRecruitTierInfo(uint8 _tier, bool _canRecruitCraft, uint16 _prismShardsRequired, uint32 _expGained, uint16 _minRecruitLevel, uint8 _fragmentsRequired) external
```

### updateCraftingLevelRequirements

```solidity
function updateCraftingLevelRequirements(uint8[5] _minimumLevelPerTier) external
```

### updateCraftingXpGain

```solidity
function updateCraftingXpGain(uint8[5] _xpAmts) external
```

### updateMagicCosts

```solidity
function updateMagicCosts(uint128[5] _magicCosts) external
```

### craftTreasures

```solidity
function craftTreasures(struct CraftTreasureParams[] _craftTreasureParams) external
```

### _craftTreasure

```solidity
function _craftTreasure(struct CraftTreasureParams _craftTreasureParam, uint256 _randomNumber) private
```

### _craftTreasureRecruit

```solidity
function _craftTreasureRecruit(struct CraftTreasureParams _craftTreasureParam, uint256 _randomNumber, struct FragmentInfo _fragmentInfo) private
```

### _craftTreasureRegular

```solidity
function _craftTreasureRegular(struct CraftTreasureParams _craftTreasureParam, struct LegionMetadata _legionMetadata, uint256 _randomNumber, struct FragmentInfo _fragmentInfo) private
```

### _determineTreasureCategory

```solidity
function _determineTreasureCategory(enum TreasureCategory[] _categories, uint256 _randomNumber) private view returns (enum TreasureCategory)
```

### _burnShardsAndFragments

```solidity
function _burnShardsAndFragments(uint256 _prismShardsAmount, uint256 _treasureFragmentId, uint256 _fragmentsAmount) private
```

### _mintTreasure

```solidity
function _mintTreasure(struct FragmentInfo _fragmentInfo, uint256 _randomNumber) private returns (uint256)
```

### _getPseudoRandomNumber

```solidity
function _getPseudoRandomNumber() private view returns (uint256)
```

## CraftTreasureParams

```solidity
struct CraftTreasureParams {
  uint128 legionId;
  uint128 treasureFragmentId;
}
```

## MiniCraftingContracts

### __MiniCraftingContracts_init

```solidity
function __MiniCraftingContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _craftingAddress, address _legionAddress, address _legionMetadataStoreAddress, address _treasureAddress, address _treasureMetadataStoreAddress, address _treasureFragmentAddress, address _magicAddress, address _consumableAddress, address _treasuryAddress, address _recruitLevelAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## MiniCraftingState

### RecruitTierInfoSet

```solidity
event RecruitTierInfoSet(uint8 tier, bool canRecruitCraft, uint16 prismShardsRequired, uint32 expGained, uint16 minRecruitLevel, uint8 fragmentsRequired)
```

### CraftingFinished

```solidity
event CraftingFinished(address _user, uint256 _legionId, uint8 _tier, uint8 _cpGained, uint256 _treasureId)
```

### crafting

```solidity
contract ICrafting crafting
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### treasure

```solidity
contract ITreasure treasure
```

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### treasureFragment

```solidity
contract ITreasureFragment treasureFragment
```

### magic

```solidity
contract IMagic magic
```

### consumable

```solidity
contract IConsumable consumable
```

### treasury

```solidity
contract ITreasury treasury
```

### prismShardId

```solidity
uint256 prismShardId
```

### tierToTierInfo

```solidity
mapping(uint8 => struct FragmentTierInfo) tierToTierInfo
```

### fragmentIdToInfo

```solidity
mapping(uint256 => struct FragmentInfo) fragmentIdToInfo
```

### tierToRecruitTierInfo

```solidity
mapping(uint8 => struct RecruitTierInfo) tierToRecruitTierInfo
```

### recruitLevel

```solidity
contract IRecruitLevel recruitLevel
```

### __MiniCraftingState_init

```solidity
function __MiniCraftingState_init() internal
```

## FragmentTierInfo

```solidity
struct FragmentTierInfo {
  uint128 magicCost;
  uint16 prismShardsRequired;
  uint8 fragmentsRequired;
  uint8 craftingCPGained;
  uint8 minimumCraftingLevel;
}
```

## RecruitTierInfo

```solidity
struct RecruitTierInfo {
  bool canRecruitCraft;
  uint16 prismShardsRequired;
  uint32 expGained;
  uint16 minRecruitLevel;
  uint8 fragmentsRequired;
  uint176 emptySpace;
}
```

## FragmentInfo

```solidity
struct FragmentInfo {
  uint8 tier;
  enum TreasureCategory[] categories;
}
```

## ERC1155Mintable

### mint

```solidity
function mint(address to, uint256 id, uint256 amount) public
```

## ERC20Mintable

### mint

```solidity
function mint(address _to, uint256 _amount) public
```

## ERC721Mintable

### mint

```solidity
function mint(address to) public
```

_Creates a new token for `to`. Its token ID will be automatically
assigned (and available on the emitted {IERC721-Transfer} event), and the token
URI autogenerated based on the base URI passed at construction.

See {ERC721-_mint}.

Requirements:

- the caller must have the `MINTER_ROLE`._

### mintWithId

```solidity
function mintWithId(address to, uint256 tokenId) public
```

## INftHandler

### Interfaces

```solidity
enum Interfaces {
  Unsupported,
  ERC721,
  ERC1155
}
```

### NftConfig

```solidity
struct NftConfig {
  enum INftHandler.Interfaces supportedInterface;
  contract IStakingRules stakingRules;
}
```

### init

```solidity
function init(address _admin, address _harvester, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

Initialize contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _admin | address | wallet address to be set as contract's admin |
| _harvester | address | harvester address for which INftHandler is deployed |
| _nfts | address[] | array of NFTs allowed to be staked |
| _tokenIds | uint256[] | array of tokenIds allowed to be staked, it should correspond to `_nfts` |
| _nftConfigs | struct INftHandler.NftConfig[] | array of configs for each NFT |

### harvester

```solidity
function harvester() external view returns (contract IHarvester)
```

Gets harvester address linked to this contract

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IHarvester | Harvester interface |

### getStakingRules

```solidity
function getStakingRules(address _nft, uint256 _tokenId) external view returns (contract IStakingRules)
```

Gets staking rules contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nft | address | NFT contract address for which to read staking rules contract address |
| _tokenId | uint256 | token id for which to read staking rules contract address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IStakingRules | staking rules contract address |

### getUserBoost

```solidity
function getUserBoost(address _user) external view returns (uint256)
```

Gets cached user boost

_Cached boost is re-calculated on the fly on stake and unstake NFT by user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | cached user boost as percentage, 1e18 == 100% |

### getNftBoost

```solidity
function getNftBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) external view returns (uint256)
```

Gets given NFT boost for user

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |
| _nft | address | address of NFT contract |
| _tokenId | uint256 | token Id of NFT for which to calculate the boost |
| _amount | uint256 | amount of tokens for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | calculated boost for given NFT for given user as percentage, 1e18 == 100% |

### getHarvesterTotalBoost

```solidity
function getHarvesterTotalBoost() external view returns (uint256 boost)
```

Gets harvester boost to calculate rewards allocation

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated harvester boost to calculate rewards allocation |

## NftHandler

### NH_ADMIN

```solidity
bytes32 NH_ADMIN
```

### DEFAULT_ID

```solidity
uint256 DEFAULT_ID
```

_if `allowedNfts` is set for DEFAULT_ID as `tokenId`,
     that value will be used as default for all collection,
     unless specified differently_

### harvester

```solidity
contract IHarvester harvester
```

Gets harvester address linked to this contract

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |

### allowedNfts

```solidity
mapping(address => mapping(uint256 => struct INftHandler.NftConfig)) allowedNfts
```

_NFT address => tokenId => config_

### stakingRulesUsage

```solidity
mapping(address => uint256) stakingRulesUsage
```

_StakingRules => usage (number of contracts/tokens using given rules)_

### allStakingRules

```solidity
struct EnumerableSet.AddressSet allStakingRules
```

_Set of all registered StakingRules contracts_

### stakedNfts

```solidity
mapping(address => mapping(address => mapping(uint256 => uint256))) stakedNfts
```

_user => NFT address => tokenId => amount_

### getUserBoost

```solidity
mapping(address => uint256) getUserBoost
```

Gets cached user boost

_Cached boost is re-calculated on the fly on stake and unstake NFT by user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |

### Staked

```solidity
event Staked(address user, address nft, uint256 tokenId, uint256 amount)
```

### Unstaked

```solidity
event Unstaked(address user, address nft, uint256 tokenId, uint256 amount)
```

### Replaced

```solidity
event Replaced(address user, address nft, uint256 tokenId, uint256 amount, uint256 replacedSpotId)
```

### NftConfigSet

```solidity
event NftConfigSet(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig)
```

### InvalidNftAddress

```solidity
error InvalidNftAddress()
```

### NothingToStake

```solidity
error NothingToStake()
```

### NoStakingRules

```solidity
error NoStakingRules()
```

### InvalidData

```solidity
error InvalidData()
```

### WrongAmountForERC721

```solidity
error WrongAmountForERC721()
```

### NftAlreadyStaked

```solidity
error NftAlreadyStaked()
```

### NftNotAllowed

```solidity
error NftNotAllowed()
```

### NftNotStaked

```solidity
error NftNotStaked()
```

### AmountTooBig

```solidity
error AmountTooBig()
```

### StakingRulesRequired

```solidity
error StakingRulesRequired()
```

### MustBeERC1155

```solidity
error MustBeERC1155()
```

### WrongInterface

```solidity
error WrongInterface()
```

### NotIExtractorStakingRules

```solidity
error NotIExtractorStakingRules()
```

### validateInput

```solidity
modifier validateInput(address _nft, uint256 _amount)
```

### processStake

```solidity
modifier processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount)
```

### processUnstake

```solidity
modifier processUnstake(address _user, address _nft, uint256 _tokenId, uint256 _amount)
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _admin, address _harvester, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

_Initialized by factory during deployment_

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### getAllStakingRules

```solidity
function getAllStakingRules() external view returns (address[])
```

### getAllStakingRulesLength

```solidity
function getAllStakingRulesLength() external view returns (uint256)
```

### getStakingRules

```solidity
function getStakingRules(address _nft, uint256 _tokenId) public view returns (contract IStakingRules)
```

Gets staking rules contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nft | address | NFT contract address for which to read staking rules contract address |
| _tokenId | uint256 | token id for which to read staking rules contract address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IStakingRules | staking rules contract address |

### getSupportedInterface

```solidity
function getSupportedInterface(address _nft, uint256 _tokenId) public view returns (enum INftHandler.Interfaces)
```

### getNftBoost

```solidity
function getNftBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) public view returns (uint256 boost)
```

Gets given NFT boost for user

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |
| _nft | address | address of NFT contract |
| _tokenId | uint256 | token Id of NFT for which to calculate the boost |
| _amount | uint256 | amount of tokens for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated boost for given NFT for given user as percentage, 1e18 == 100% |

### getHarvesterTotalBoost

```solidity
function getHarvesterTotalBoost() public view returns (uint256 boost)
```

Gets harvester boost to calculate rewards allocation

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated harvester boost to calculate rewards allocation |

### stakeNft

```solidity
function stakeNft(address _nft, uint256 _tokenId, uint256 _amount) public
```

### batchStakeNft

```solidity
function batchStakeNft(address[] _nft, uint256[] _tokenId, uint256[] _amount) external
```

### unstakeNft

```solidity
function unstakeNft(address _nft, uint256 _tokenId, uint256 _amount) public
```

### batchUnstakeNft

```solidity
function batchUnstakeNft(address[] _nft, uint256[] _tokenId, uint256[] _amount) external
```

### replaceExtractor

```solidity
function replaceExtractor(address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) public
```

### batchReplaceExtractor

```solidity
function batchReplaceExtractor(address[] _nft, uint256[] _tokenId, uint256[] _amount, uint256[] _replacedSpotId) external
```

### setNftConfig

```solidity
function setNftConfig(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig) external
```

### _setNftConfig

```solidity
function _setNftConfig(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig) internal
```

## IPilgrimage

### removeMetadataForIds

```solidity
function removeMetadataForIds(uint256[] _ids) external
```

### isPilgrimageReady

```solidity
function isPilgrimageReady(uint256 _pilgrimageID) external view returns (bool)
```

### embarkOnPilgrimages

```solidity
function embarkOnPilgrimages(uint256[] _ids, uint256[] _amounts, enum LegionGeneration _generation) external
```

### returnFromPilgrimages

```solidity
function returnFromPilgrimages() external
```

## Pilgrimage

### initialize

```solidity
function initialize() external
```

### embarkOnPilgrimages

```solidity
function embarkOnPilgrimages(uint256[] _ids, uint256[] _amounts, enum LegionGeneration _generation) external
```

### _embarkOnPilgrimage

```solidity
function _embarkOnPilgrimage(uint256 _id, enum LegionGeneration _generation) private returns (uint256)
```

### returnTokensFromPilgrimages

```solidity
function returnTokensFromPilgrimages(uint256[] _pilgrimageIds) external
```

### returnFromPilgrimages

```solidity
function returnFromPilgrimages() external
```

### _returnFromPilgrimages

```solidity
function _returnFromPilgrimages(uint256[] _inProgressPilgrimages) private
```

### _returnFromPilgrimage

```solidity
function _returnFromPilgrimage(uint256 _pilgrimageID) private returns (uint256)
```

## Pilgrimage1155Mapping

### __Pilgrimage1155Mapping_init

```solidity
function __Pilgrimage1155Mapping_init() internal
```

### setPilgrimageLength

```solidity
function setPilgrimageLength(uint256 _pilgrimageLength) external
```

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, enum LegionRarity[] _rarities, enum LegionClass[] _classes, uint256[] _constellationOdds, uint8[] _constellationNumber) external
```

### removeMetadataForIds

```solidity
function removeMetadataForIds(uint256[] _ids) external
```

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) public pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) public pure returns (bytes4)
```

## PilgrimageContracts

### __PilgrimageContracts_init

```solidity
function __PilgrimageContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _legionAddress, address _legionMetadataStoreAddress, address _legion1155Address, address _legionGensis1155Address, address _starlightTempleAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## PilgrimageState

### PilgrimagesStarted

```solidity
event PilgrimagesStarted(address _user, address _legionContract, uint256 _finishTime, uint256[] _ids1155, uint256[] _amounts1155, uint256[] _pilgrimageIds)
```

### NoPilgrimagesToFinish

```solidity
event NoPilgrimagesToFinish(address _user)
```

### PilgrimagesFinished

```solidity
event PilgrimagesFinished(address _user, uint256[] _tokenIds, uint256[] _finishedPilgrimageIds)
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### legion1155

```solidity
contract ILegion1155 legion1155
```

### legionGenesis1155

```solidity
contract ILegion1155 legionGenesis1155
```

### starlightTemple

```solidity
contract IStarlightTemple starlightTemple
```

### legion1155Ids

```solidity
struct EnumerableSetUpgradeable.UintSet legion1155Ids
```

### legionIdToRarity

```solidity
mapping(uint256 => enum LegionRarity) legionIdToRarity
```

### legionIdToClass

```solidity
mapping(uint256 => enum LegionClass) legionIdToClass
```

### legionIdToChanceConstellationUnlocked

```solidity
mapping(uint256 => uint256) legionIdToChanceConstellationUnlocked
```

### legionIdToNumberConstellationUnlocked

```solidity
mapping(uint256 => uint8) legionIdToNumberConstellationUnlocked
```

### pilgrimageID

```solidity
uint256 pilgrimageID
```

### userToPilgrimagesInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToPilgrimagesInProgress
```

### pilgrimageIdToStartTime

```solidity
mapping(uint256 => uint256) pilgrimageIdToStartTime
```

### pilgrimageIdToRarity

```solidity
mapping(uint256 => enum LegionRarity) pilgrimageIdToRarity
```

### pilgrimageIdToClass

```solidity
mapping(uint256 => enum LegionClass) pilgrimageIdToClass
```

### pilgrimageIdToGeneration

```solidity
mapping(uint256 => enum LegionGeneration) pilgrimageIdToGeneration
```

### pilgrimageIdToOldId

```solidity
mapping(uint256 => uint256) pilgrimageIdToOldId
```

### pilgrimageIdToRequestId

```solidity
mapping(uint256 => uint256) pilgrimageIdToRequestId
```

### pilgrimageIdToChanceConstellationUnlocked

```solidity
mapping(uint256 => uint256) pilgrimageIdToChanceConstellationUnlocked
```

### pilgrimageIdToNumberConstellationUnlocked

```solidity
mapping(uint256 => uint8) pilgrimageIdToNumberConstellationUnlocked
```

### pilgrimageLength

```solidity
uint256 pilgrimageLength
```

### __PilgrimageState_init

```solidity
function __PilgrimageState_init() internal
```

## PilgrimageTimeKeeper

### __PilgrimageTimeKeeper_init

```solidity
function __PilgrimageTimeKeeper_init() internal
```

### _setPilgrimageStartTime

```solidity
function _setPilgrimageStartTime(uint256 _pilgrimageID) internal
```

### isPilgrimageReady

```solidity
function isPilgrimageReady(uint256 _pilgrimageID) public view returns (bool)
```

## IQuesting

### processQPGainAndLevelUp

```solidity
function processQPGainAndLevelUp(uint256 _tokenId, uint8 _currentQuestLevel, uint256 _qpGained) external
```

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

## QuestingContracts

### __QuestingContracts_init

```solidity
function __QuestingContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _treasureAddress, address _legionAddress, address _treasureMetadataStoreAddress, address _legionMetadataStoreAddress, address _lpAddress, address _consumableAddress, address _treasuryAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

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

## QuestingTimeKeeper

### __QuestingTimeKeeper_init

```solidity
function __QuestingTimeKeeper_init() internal
```

### _startQuestTime

```solidity
function _startQuestTime(uint256 _tokenId) internal
```

### _isQuestCooldownDone

```solidity
function _isQuestCooldownDone(uint256 _tokenId) internal view returns (bool)
```

## IRecruitLevel

### increaseRecruitExp

```solidity
function increaseRecruitExp(uint256 _tokenId, uint32 _expIncrease) external
```

### recruitType

```solidity
function recruitType(uint256 _tokenId) external view returns (enum RecruitType)
```

### getRecruitLevel

```solidity
function getRecruitLevel(uint256 _tokenId) external view returns (uint16)
```

## RecruitType

```solidity
enum RecruitType {
  NONE,
  COGNITION,
  PARABOLICS,
  LETHALITY,
  SIEGE_APPRENTICE,
  FIGHTER_APPRENTICE,
  ASSASSIN_APPRENTICE,
  RANGED_APPRENTICE,
  SPELLCASTER_APPRENTICE
}
```

## RecruitLevel

### initialize

```solidity
function initialize() external
```

### increaseRecruitExp

```solidity
function increaseRecruitExp(uint256 _tokenId, uint32 _expIncrease) external
```

### ascend

```solidity
function ascend(uint256 _tokenId, enum RecruitType _newRecruitType) external
```

### beginToAscendToAux

```solidity
function beginToAscendToAux(uint256 _tokenId) external
```

### endToAscendToAux

```solidity
function endToAscendToAux(uint256 _tokenId) external
```

### oddsOfAscending

```solidity
function oddsOfAscending() public view returns (uint32)
```

### _currentAscensionCap

```solidity
function _currentAscensionCap() internal view returns (uint256)
```

### getRecruitLevel

```solidity
function getRecruitLevel(uint256 _tokenId) public view returns (uint16)
```

### recruitType

```solidity
function recruitType(uint256 _tokenId) external view returns (enum RecruitType)
```

## RecruitLevelContracts

### __RecruitLevelContracts_init

```solidity
function __RecruitLevelContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _legionMetadataStoreAddress, address _consumableAddress, address _legionAddress, address _randomizerAddress, address _magicAddress, address _treasuryAddress, address _barracksAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## RecruitLevelSettings

### __RecruitLevelSettings_init

```solidity
function __RecruitLevelSettings_init() internal
```

### setSModifier

```solidity
function setSModifier(uint32 _sModifier) external
```

### setDModifier

```solidity
function setDModifier(uint32 _dModifier) external
```

### setMagicCostForAux

```solidity
function setMagicCostForAux(uint128 _magicCostForAux) external
```

### setAscensionCapRatePerSecond

```solidity
function setAscensionCapRatePerSecond(uint128 _ascensionCapRatePerSecond) external
```

### setLevelUpInfo

```solidity
function setLevelUpInfo(uint16 _levelCur, uint32 _expToNextLevel) external
```

### setMaxLevel

```solidity
function setMaxLevel(uint16 _maxLevel) external
```

### setAscensionInfo

```solidity
function setAscensionInfo(uint16 _minimumLevelCadet, uint16 _numEoSCadet, uint16 _numPrismShardsCadet, uint16 _minimumLevelApprentice, uint16 _numEoSApprentice, uint16 _numPrismShardsApprentice) external
```

### _setLevelUpInfo

```solidity
function _setLevelUpInfo(uint16 _levelCur, uint32 _expToNextLevel) private
```

### _setMaxLevel

```solidity
function _setMaxLevel(uint16 _maxLevel) private
```

### _setAscensionInfo

```solidity
function _setAscensionInfo(uint16 _minimumLevelCadet, uint16 _numEoSCadet, uint16 _numPrismShardsCadet, uint16 _minimumLevelApprentice, uint16 _numEoSApprentice, uint16 _numPrismShardsApprentice) private
```

## RecruitLevelState

### MaxLevelSet

```solidity
event MaxLevelSet(uint16 maxLevel)
```

### AscensionInfoSet

```solidity
event AscensionInfoSet(uint16 minimumLevelCadet, uint16 numEoSCadet, uint16 numPrismShardsCadet, uint16 minimumLevelApprentice, uint16 numEoSApprentice, uint16 numPrismShardsApprentice)
```

### LevelUpInfoSet

```solidity
event LevelUpInfoSet(uint16 levelCur, uint32 expToNextLevel)
```

### MagicCostForAuxSet

```solidity
event MagicCostForAuxSet(uint256 magicCost)
```

### RecruitXPChanged

```solidity
event RecruitXPChanged(uint256 tokenId, uint16 levelCur, uint32 expCur)
```

### RecruitTypeChanged

```solidity
event RecruitTypeChanged(uint256 tokenId, enum RecruitType recruitType)
```

### RecruitCanAscendToAuxChanged

```solidity
event RecruitCanAscendToAuxChanged(uint256 tokenId, bool canAscendToAux)
```

### RecruitAscendingToAuxBegan

```solidity
event RecruitAscendingToAuxBegan(uint256 tokenId, uint256 requestId)
```

### RecruitAscendingToAuxEnded

```solidity
event RecruitAscendingToAuxEnded(uint256 tokenId, bool wasSuccessful)
```

### EOS_ID

```solidity
uint256 EOS_ID
```

### PRISM_SHARD_ID

```solidity
uint256 PRISM_SHARD_ID
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### consumable

```solidity
contract IConsumable consumable
```

### legion

```solidity
contract ILegion legion
```

### tokenIdToRecruitInfo

```solidity
mapping(uint256 => struct RecruitInfo) tokenIdToRecruitInfo
```

### levelCurToLevelUpInfo

```solidity
mapping(uint16 => struct LevelUpInfo) levelCurToLevelUpInfo
```

### maxLevel

```solidity
uint16 maxLevel
```

### ascensionInfo

```solidity
struct AscensionInfo ascensionInfo
```

### auxAscensionInfo

```solidity
struct AuxAscensionInfo auxAscensionInfo
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### magic

```solidity
contract IMagic magic
```

### treasuryAddress

```solidity
address treasuryAddress
```

### barracks

```solidity
contract IBarracks barracks
```

### __RecruitLevelState_init

```solidity
function __RecruitLevelState_init() internal
```

## RecruitInfo

```solidity
struct RecruitInfo {
  enum RecruitType recruitType;
  uint16 levelCur;
  uint32 expCur;
  bool canAscendToAux;
  bool isTryingToAscend;
  uint64 requestId;
  uint32 oddsOfAscending;
  uint88 emptySpace;
}
```

## LevelUpInfo

```solidity
struct LevelUpInfo {
  uint32 expToNextLevel;
  uint224 emptySpace;
}
```

## AscensionInfo

```solidity
struct AscensionInfo {
  uint16 minimumLevelCadet;
  uint16 numEoSCadet;
  uint16 numPrismShardsCadet;
  uint16 minimumLevelApprentice;
  uint16 numEoSApprentice;
  uint16 numPrismShardsApprentice;
  uint160 emptySpace;
}
```

## AuxAscensionInfo

```solidity
struct AuxAscensionInfo {
  uint128 capRatePerSecond;
  uint128 capAtLastRateChange;
  uint32 numRecruitsAscending;
  uint32 numRecruitsAscended;
  uint32 sModifier;
  uint32 dModifier;
  uint128 magicCost;
  uint128 timeCapLastChanged;
  uint128 emptySpace1;
}
```

## IStarlightTemple

### maxRankOfConstellations

```solidity
function maxRankOfConstellations(uint256 _tokenId, uint8 _numberOfConstellations) external
```

## StarlightTemple

### initialize

```solidity
function initialize() external
```

### setTempleSettings

```solidity
function setTempleSettings(uint8 _maxConstellationRank, uint256 _starlightConsumableId, uint256[] _currentRankToNeededStarlight, uint256[] _currentRankToPrismAmount, uint256[] _currentRankToPrismIds) external
```

### setIsIncreasingRankPaused

```solidity
function setIsIncreasingRankPaused(bool _isIncreasingRankPaused) external
```

### increaseRankOfConstellations

```solidity
function increaseRankOfConstellations(uint256[] _tokenIds, enum Constellation[] _constellations) external
```

### _increaseRankOfConstellation

```solidity
function _increaseRankOfConstellation(uint256 _tokenId, enum Constellation _constellation) private
```

### maxRankOfConstellations

```solidity
function maxRankOfConstellations(uint256 _tokenId, uint8 _numberOfConstellations) external
```

### allConstellations

```solidity
function allConstellations() public pure returns (enum Constellation[6])
```

### numberOfConstellations

```solidity
function numberOfConstellations() public pure returns (uint8)
```

## StarlightTempleContracts

### __StarlightTempleContracts_init

```solidity
function __StarlightTempleContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress, address _legionMetadataStoreAddress, address _consumableAddress, address _legionAddress, address _treasuryAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## StarlightTempleState

### randomizer

```solidity
contract IRandomizer randomizer
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### consumable

```solidity
contract IConsumable consumable
```

### legion

```solidity
contract ILegion legion
```

### treasury

```solidity
contract ITreasury treasury
```

### maxConstellationRank

```solidity
uint8 maxConstellationRank
```

### currentRankToNeededStarlight

```solidity
uint256[] currentRankToNeededStarlight
```

### starlightConsumableId

```solidity
uint256 starlightConsumableId
```

### currentRankToPrismAmount

```solidity
uint256[] currentRankToPrismAmount
```

### currentRankToPrismId

```solidity
uint256[] currentRankToPrismId
```

### isIncreasingRankPaused

```solidity
bool isIncreasingRankPaused
```

### __StarlightTempleState_init

```solidity
function __StarlightTempleState_init() internal
```

## ISummoning

## Summoning

### initialize

```solidity
function initialize() external
```

### startSummon

```solidity
function startSummon(uint256[] _tokenIds, uint256[] _crystalIds) external
```

### _startSummonSingle

```solidity
function _startSummonSingle(uint256 _tokenId, uint256 _crystalId) private returns (uint256, uint256)
```

### calculateSuccessRate

```solidity
function calculateSuccessRate() public view returns (uint256)
```

### finishSummonTokens

```solidity
function finishSummonTokens(uint256[] _tokenIds) external
```

### _finishSummonSingle

```solidity
function _finishSummonSingle(uint256 _tokenId) private returns (uint256, uint256)
```

### _determineRarity

```solidity
function _determineRarity(uint256 _randomNumber, struct LegionMetadata _metadata, uint256 _crystalId) private view returns (enum LegionRarity)
```

### didSummoningSucceed

```solidity
function didSummoningSucceed(uint256 _tokenId) external view returns (bool, uint256)
```

### _didSummoningSucceed

```solidity
function _didSummoningSucceed(uint256 _tokenId, uint256 _randomNumber) private view returns (bool)
```

### getStakedLegions

```solidity
function getStakedLegions(address _user) external view returns (uint256[])
```

## SummoningContracts

### __SummoningContracts_init

```solidity
function __SummoningContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _legionAddress, address _legionMetadataStoreAddress, address _randomizerAddress, address _magicAddress, address _treasuryAddress, address _consumableAddress, address _craftingAddress, address _balancerCrystal) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## SummoningLPStakable

### __SummoningLPStakable_init

```solidity
function __SummoningLPStakable_init() internal
```

### _bcNeeded

```solidity
function _bcNeeded(enum LegionGeneration _generation, uint32 _summoningCountCur) internal view returns (uint256)
```

## SummoningSettings

### __SummoningSettings_init

```solidity
function __SummoningSettings_init() internal
```

### setIsSummoningPaused

```solidity
function setIsSummoningPaused(bool _isSummoningPaused) external
```

### setSuccessSensitivity

```solidity
function setSuccessSensitivity(uint256 _successSensitivity) external
```

### setSummoningDurationIfFailed

```solidity
function setSummoningDurationIfFailed(uint256 _summoningDurationIfFailed) external
```

### setBalancerCrystalId

```solidity
function setBalancerCrystalId(uint256 _balancerCrystalId) external
```

### setSimpleSettings

```solidity
function setSimpleSettings(uint256 _summoningDuration, uint256 _genesisMagicCost, uint256 _auxiliaryMagicCost, uint32 _auxiliaryMaxSummons, uint32 _genesisMaxSummons, uint256 _chanceAzuriteDustDrop, uint256 _azuriteDustId) external
```

### setBCSteps

```solidity
function setBCSteps(struct SummoningStep[] _auxiliarySteps, struct SummoningStep[] _genesisSteps) external
```

### setCrystalOdds

```solidity
function setCrystalOdds(uint256[] _crystalIds, uint256[] _crystalTimeReductions, uint256[3][] _crystalIdToOdds) external
```

### setSummoningOdds

```solidity
function setSummoningOdds(enum LegionRarity[] _inputRarities, uint256[] _genesisOdds, uint256[] _auxiliaryOdds) external
```

### setSummoningFatigue

```solidity
function setSummoningFatigue(uint256 _summoningFatigueCooldown) external
```

## SummoningState

### SummoningStarted

```solidity
event SummoningStarted(address _user, uint256 _tokenId, uint256 _requestId, uint256 _finishTime)
```

### NoSummoningToFinish

```solidity
event NoSummoningToFinish(address _user)
```

### SummoningFinished

```solidity
event SummoningFinished(address _user, uint256 _returnedId, uint256 _newTokenId, uint256 _newTokenSummoningCooldown)
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### magic

```solidity
contract IMagic magic
```

### lp

```solidity
contract ILP lp
```

### treasury

```solidity
contract ITreasury treasury
```

### consumable

```solidity
contract IConsumable consumable
```

### tokenIdToSummonCount

```solidity
mapping(uint256 => uint32) tokenIdToSummonCount
```

### summoningDuration

```solidity
uint256 summoningDuration
```

### generationToMaxSummons

```solidity
mapping(enum LegionGeneration => uint32) generationToMaxSummons
```

### rarityToGenerationToOddsPerRarity

```solidity
mapping(enum LegionRarity => mapping(enum LegionGeneration => mapping(enum LegionRarity => uint256))) rarityToGenerationToOddsPerRarity
```

### generationToLPRequiredSteps

```solidity
mapping(enum LegionGeneration => struct SummoningStep[]) generationToLPRequiredSteps
```

### chanceAzuriteDustDrop

```solidity
uint256 chanceAzuriteDustDrop
```

### userToSummoningsInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToSummoningsInProgress
```

### tokenIdToSummonStartTime

```solidity
mapping(uint256 => uint256) tokenIdToSummonStartTime
```

### tokenIdToRequestId

```solidity
mapping(uint256 => uint256) tokenIdToRequestId
```

### tokenIdToLPStaked

```solidity
mapping(uint256 => uint256) tokenIdToLPStaked
```

### tokenIdToCrystalIdUsed

```solidity
mapping(uint256 => uint256) tokenIdToCrystalIdUsed
```

### tokenIdToCreatedTime

```solidity
mapping(uint256 => uint256) tokenIdToCreatedTime
```

### crystalIds

```solidity
struct EnumerableSetUpgradeable.UintSet crystalIds
```

### crystalIdToChangedOdds

```solidity
mapping(uint256 => uint256[3]) crystalIdToChangedOdds
```

### summoningFatigueCooldown

```solidity
uint256 summoningFatigueCooldown
```

### azuriteDustId

```solidity
uint256 azuriteDustId
```

### generationToMagicCost

```solidity
mapping(enum LegionGeneration => uint256) generationToMagicCost
```

### isSummoningPaused

```solidity
bool isSummoningPaused
```

### successSensitivity

```solidity
uint256 successSensitivity
```

### summoningDurationIfFailed

```solidity
uint256 summoningDurationIfFailed
```

### tokenIdToSuccessRate

```solidity
mapping(uint256 => uint256) tokenIdToSuccessRate
```

### tokenIdToMagicAmount

```solidity
mapping(uint256 => uint256) tokenIdToMagicAmount
```

### crystalIdToTimeReduction

```solidity
mapping(uint256 => uint256) crystalIdToTimeReduction
```

### crafting

```solidity
contract ICrafting crafting
```

### balancerCrystal

```solidity
contract IBalancerCrystal balancerCrystal
```

### balancerCrystalId

```solidity
uint256 balancerCrystalId
```

### __SummoningState_init

```solidity
function __SummoningState_init() internal
```

## SummoningStep

```solidity
struct SummoningStep {
  uint256 value;
  uint32 minSummons;
  uint32 maxSummons;
}
```

## SummoningTimeKeeper

### __SummoningTimeKeeper_init

```solidity
function __SummoningTimeKeeper_init() internal
```

### _setSummoningStartTime

```solidity
function _setSummoningStartTime(uint256 _tokenId) internal
```

### isTokenDoneSummoning

```solidity
function isTokenDoneSummoning(uint256 _tokenId, bool _succeeded) public view returns (bool)
```

### _getTokenEndTime

```solidity
function _getTokenEndTime(uint256 _tokenId, bool _succeded) internal view returns (uint256)
```

## ITreasureFragment

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

## TreasureFragment

### initialize

```solidity
function initialize() external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `ids` and `amounts` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) public
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) public
```

## TreasureFragmentState

### __TreasureFragmentState_init

```solidity
function __TreasureFragmentState_init() internal
```

## ITreasureMetadataStore

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getRandomTreasureForTierAndCategory

```solidity
function getRandomTreasureForTierAndCategory(uint8 _tier, enum TreasureCategory _category, uint256 _randomNumber) external view returns (uint256)
```

### getAnyRandomTreasureForTier

```solidity
function getAnyRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

## TreasureMetadata

```solidity
struct TreasureMetadata {
  enum TreasureCategory category;
  uint8 tier;
  uint32 craftingBreakOdds;
  bool isMintable;
  uint256 consumableIdDropWhenBreak;
}
```

## TreasureCategory

```solidity
enum TreasureCategory {
  ALCHEMY,
  ARCANA,
  BREWING,
  ENCHANTER,
  LEATHERWORKING,
  SMITHING
}
```

## TreasureMetadataStore

### initialize

```solidity
function initialize() external
```

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getAnyRandomTreasureForTier

```solidity
function getAnyRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getRandomTreasureForTierAndCategory

```solidity
function getRandomTreasureForTierAndCategory(uint8 _tier, enum TreasureCategory _category, uint256 _randomNumber) external view returns (uint256)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

## TreasureMetadataStoreState

### tierToMintableTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToMintableTreasureIds
```

### treasureIdToMetadata

```solidity
mapping(uint256 => struct TreasureMetadata) treasureIdToMetadata
```

### tierToCategoryToMintableTreasureIds

```solidity
mapping(uint8 => mapping(enum TreasureCategory => struct EnumerableSetUpgradeable.UintSet)) tierToCategoryToMintableTreasureIds
```

### tierToTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToTreasureIds
```

### __TreasureMetadataStoreState_init

```solidity
function __TreasureMetadataStoreState_init() internal
```

## ITreasureTriad

### generateBoardAndPlayGame

```solidity
function generateBoardAndPlayGame(uint256 _randomNumber, enum LegionClass _legionClass, struct UserMove[] _userMoves) external view returns (struct GameOutcome)
```

## PlayerType

```solidity
enum PlayerType {
  NONE,
  NATURE,
  USER
}
```

## GridCell

```solidity
struct GridCell {
  uint256 treasureId;
  enum PlayerType playerType;
  bool isFlipped;
  bool isCorrupted;
  bool hasAffinity;
  enum TreasureCategory affinity;
}
```

## UserMove

```solidity
struct UserMove {
  uint8 x;
  uint8 y;
  uint256 treasureId;
}
```

## GameOutcome

```solidity
struct GameOutcome {
  uint8 numberOfFlippedCards;
  uint8 numberOfCorruptedCardsLeft;
  bool playerWon;
}
```

## TreasureTriad

### initialize

```solidity
function initialize() external
```

### generateBoardAndPlayGame

```solidity
function generateBoardAndPlayGame(uint256 _randomNumber, enum LegionClass _legionClass, struct UserMove[] _userMoves) external view returns (struct GameOutcome)
```

### playGame

```solidity
function playGame(struct GridCell[3][3] _gameBoard, enum LegionClass _legionClass, struct UserMove[] _userMoves) public view returns (struct GameOutcome)
```

### _determineOutcome

```solidity
function _determineOutcome(struct GridCell[3][3] _gameBoard) private view returns (struct GameOutcome)
```

### _placeAndFlipCards

```solidity
function _placeAndFlipCards(struct GridCell[3][3] _gameBoard, enum LegionClass _legionClass, struct UserMove _userMove) private view
```

### _getCardBoost

```solidity
function _getCardBoost(struct GridCell _gridCell, enum LegionClass _legionClass) private view returns (uint8)
```

## TreasureTriadBoardGeneration

### __TreasureTriadBoardGeneration_init

```solidity
function __TreasureTriadBoardGeneration_init() internal
```

### generateGameBoardForRequest

```solidity
function generateGameBoardForRequest(uint256 _requestId) external view returns (struct GridCell[3][3])
```

### generateBoard

```solidity
function generateBoard(uint256 _randomNumber) public view returns (struct GridCell[3][3])
```

### _placeCorruptCells

```solidity
function _placeCorruptCells(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private pure
```

### _placeAffinities

```solidity
function _placeAffinities(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private pure returns (uint256)
```

### _placeNatureCards

```solidity
function _placeNatureCards(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private view returns (uint256)
```

### _pickRandomUniqueCoordinates

```solidity
function _pickRandomUniqueCoordinates(uint8 _amount, uint256 _randomNumber) private pure returns (uint8[2][])
```

## TreasureTriadContracts

### __TreasureTriadContracts_init

```solidity
function __TreasureTriadContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _advancedQuestingAddress, address _treasureMetadataStoreAddress, address _randomizerAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## TreasureTriadSettings

### __TreasureTriadSettings_init

```solidity
function __TreasureTriadSettings_init() internal
```

### addTreasureCardInfo

```solidity
function addTreasureCardInfo(uint256[] _treasureIds, struct CardInfo[] _cardInfo) external
```

### affinityForTreasure

```solidity
function affinityForTreasure(uint256 _treasureId) public view returns (enum TreasureCategory)
```

## TreasureTriadState

### TreasureCardInfoSet

```solidity
event TreasureCardInfoSet(uint256 _treasureId, struct CardInfo _cardInfo)
```

### NUMBER_OF_CONTRACT_CARDS

```solidity
uint8 NUMBER_OF_CONTRACT_CARDS
```

### NUMBER_OF_CELLS_WITH_AFFINITY

```solidity
uint8 NUMBER_OF_CELLS_WITH_AFFINITY
```

### MAX_NUMBER_OF_CORRUPTED_CELLS

```solidity
uint8 MAX_NUMBER_OF_CORRUPTED_CELLS
```

### advancedQuesting

```solidity
contract IAdvancedQuestingDiamond advancedQuesting
```

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### classToTreasureCategoryToHasAffinity

```solidity
mapping(enum LegionClass => mapping(enum TreasureCategory => bool)) classToTreasureCategoryToHasAffinity
```

### treasureIds

```solidity
struct EnumerableSetUpgradeable.UintSet treasureIds
```

### treasureIdToCardInfo

```solidity
mapping(uint256 => struct CardInfo) treasureIdToCardInfo
```

### baseTreasureRarityPerTier

```solidity
uint8[5] baseTreasureRarityPerTier
```

### numberOfFlippedCardsToWin

```solidity
uint8 numberOfFlippedCardsToWin
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### __TreasureTriadState_init

```solidity
function __TreasureTriadState_init() internal
```

### _setInitialClassToCategory

```solidity
function _setInitialClassToCategory() private
```

## CardInfo

```solidity
struct CardInfo {
  enum TreasureCategory category;
  uint8 north;
  uint8 east;
  uint8 south;
  uint8 west;
}
```

## ITreasury

### isBridgeWorldPowered

```solidity
function isBridgeWorldPowered() external view returns (bool)
```

### forwardCoinsToMine

```solidity
function forwardCoinsToMine(uint256 _totalMagicSent) external
```

## Treasury

### TREASURY_MULTISIG

```solidity
address TREASURY_MULTISIG
```

### initialize

```solidity
function initialize() external
```

### isBridgeWorldPowered

```solidity
function isBridgeWorldPowered() external view returns (bool)
```

### forwardCoinsToMine

```solidity
function forwardCoinsToMine(uint256 _totalMagicSent) external
```

### withdrawMagic

```solidity
function withdrawMagic() external virtual
```

## TreasuryContracts

### __TreasuryContracts_init

```solidity
function __TreasuryContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _masterOfCoinAddress, address _atlasMineAddress, address _magicAddress, address _middlemanAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## TreasurySettings

### __TreasurySettings_init

```solidity
function __TreasurySettings_init() internal
```

### setUtilNeededToPowerBW

```solidity
function setUtilNeededToPowerBW(uint256 _utilNeededToPowerBW) external
```

### setpercentMagicToMine

```solidity
function setpercentMagicToMine(uint256 _percentMagicToMine) external
```

## TreasuryState

### Withdraw

```solidity
event Withdraw(address _token, address _to, uint256 _amt)
```

### masterOfCoin

```solidity
contract IMasterOfCoin masterOfCoin
```

### atlasMine

```solidity
contract IAtlasMine atlasMine
```

### magic

```solidity
contract IMagic magic
```

### utilNeededToPowerBW

```solidity
uint256 utilNeededToPowerBW
```

### percentMagicToMine

```solidity
uint256 percentMagicToMine
```

### middlemanAddress

```solidity
address middlemanAddress
```

### __TreasuryState_init

```solidity
function __TreasuryState_init() internal
```

## Adminable

### admins

```solidity
mapping(address => bool) admins
```

### addAdmin

```solidity
function addAdmin(address _address) external
```

### addAdmins

```solidity
function addAdmins(address[] _addresses) external
```

### removeAdmin

```solidity
function removeAdmin(address _address) external
```

### removeAdmins

```solidity
function removeAdmins(address[] _addresses) external
```

### isAdmin

```solidity
function isAdmin(address _address) public view returns (bool)
```

### onlyAdmin

```solidity
modifier onlyAdmin()
```

### onlyAdminOrOwner

```solidity
modifier onlyAdminOrOwner()
```

## AdminableUpgradeable

### admins

```solidity
mapping(address => bool) admins
```

### __Adminable_init

```solidity
function __Adminable_init() internal
```

### addAdmin

```solidity
function addAdmin(address _address) external
```

### addAdmins

```solidity
function addAdmins(address[] _addresses) external
```

### removeAdmin

```solidity
function removeAdmin(address _address) external
```

### removeAdmins

```solidity
function removeAdmins(address[] _addresses) external
```

### setPause

```solidity
function setPause(bool _shouldPause) external
```

### isAdmin

```solidity
function isAdmin(address _address) public view returns (bool)
```

### onlyAdmin

```solidity
modifier onlyAdmin()
```

### onlyAdminOrOwner

```solidity
modifier onlyAdminOrOwner()
```

### __gap

```solidity
uint256[50] __gap
```

## BBase64

Provides a function for encoding some bytes in BBase64
NOT BUILT BY ETHERORCS/TREASURE TEAM. Thanks Bretch Devos!

### TABLE

```solidity
string TABLE
```

### encode

```solidity
function encode(bytes data) internal pure returns (string)
```

## ERC1155HybridUpgradeable

### TokenTraitChanged

```solidity
event TokenTraitChanged(uint256 _tokenId, struct ERC1155HybridUpgradeable.TraitData _traitData)
```

### PropertyType

```solidity
enum PropertyType {
  STRING,
  NUMBER
}
```

### Property

```solidity
struct Property {
  string name;
  string value;
  enum ERC1155HybridUpgradeable.PropertyType propertyType;
}
```

### TraitData

```solidity
struct TraitData {
  string name;
  string description;
  string url;
  struct ERC1155HybridUpgradeable.Property[] properties;
}
```

### tokenIdToTraitData

```solidity
mapping(uint256 => struct ERC1155HybridUpgradeable.TraitData) tokenIdToTraitData
```

### tokenIdToPropertyNameToPropertyValue

```solidity
mapping(uint256 => mapping(string => string)) tokenIdToPropertyNameToPropertyValue
```

### __ERC1155Hybrid_init

```solidity
function __ERC1155Hybrid_init() internal
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `ids` and `amounts` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### uploadTraitData

```solidity
function uploadTraitData(uint256 _tokenId, struct ERC1155HybridUpgradeable.TraitData _traitData) external
```

### exists

```solidity
function exists(uint256 _tokenId) public view returns (bool)
```

### propertyValueForToken

```solidity
function propertyValueForToken(uint256 _tokenId, string _propertyName) public view returns (string)
```

### uri

```solidity
function uri(uint256 _tokenId) public view returns (string)
```

### _generateAttributeString

```solidity
function _generateAttributeString(struct ERC1155HybridUpgradeable.TraitData _traitData) private view returns (string)
```

### tokenIdExists

```solidity
modifier tokenIdExists(uint256 _tokenId)
```

### __gap

```solidity
uint256[48] __gap
```

## Utilities

### nonZeroAddress

```solidity
modifier nonZeroAddress(address _address)
```

### nonZeroLength

```solidity
modifier nonZeroLength(uint256[] _array)
```

### lengthsAreEqual

```solidity
modifier lengthsAreEqual(uint256[] _array1, uint256[] _array2)
```

### onlyEOA

```solidity
modifier onlyEOA()
```

### isOwner

```solidity
function isOwner() internal view returns (bool)
```

## UtilitiesUpgradeable

### __Utilities__init

```solidity
function __Utilities__init() internal
```

### nonZeroAddress

```solidity
modifier nonZeroAddress(address _address)
```

### nonZeroLength

```solidity
modifier nonZeroLength(uint256[] _array)
```

### lengthsAreEqual

```solidity
modifier lengthsAreEqual(uint256[] _array1, uint256[] _array2)
```

### onlyEOA

```solidity
modifier onlyEOA()
```

### isOwner

```solidity
function isOwner() internal view returns (bool)
```

### compareStrings

```solidity
function compareStrings(string a, string b) internal pure returns (bool)
```

## DiamondCutFacet

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata) external
```

Add/replace/remove any number of functions and optionally execute
        a function with delegatecall

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _diamondCut | struct IDiamondCut.FacetCut[] | Contains the facet addresses and function selectors |
| _init | address | The address of the contract or facet to execute _calldata |
| _calldata | bytes | A function call, including function selector and arguments                  _calldata is executed with delegatecall on _init |

## DiamondLoupeFacet

### facets

```solidity
function facets() external view returns (struct IDiamondLoupe.Facet[] facets_)
```

Gets all facets and their selectors.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facets_ | struct IDiamondLoupe.Facet[] | Facet |

### facetFunctionSelectors

```solidity
function facetFunctionSelectors(address _facet) external view returns (bytes4[] facetFunctionSelectors_)
```

Gets all the function selectors provided by a facet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _facet | address | The facet address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetFunctionSelectors_ | bytes4[] |  |

### facetAddresses

```solidity
function facetAddresses() external view returns (address[] facetAddresses_)
```

Get all the facet addresses used by a diamond.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetAddresses_ | address[] |  |

### facetAddress

```solidity
function facetAddress(bytes4 _functionSelector) external view returns (address facetAddress_)
```

Gets the facet that supports the given selector.

_If facet is not found return address(0)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _functionSelector | bytes4 | The function selector. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetAddress_ | address | The facet address. |

## DiamondUpgradeable

### Initialization

```solidity
struct Initialization {
  address initContract;
  bytes initData;
}
```

### reinit

```solidity
function reinit(address _contractOwner, struct IDiamondCut.FacetCut[] _diamondCut, struct DiamondUpgradeable.Initialization[] _initializations) public
```

### fallback

```solidity
fallback() external payable
```

### receive

```solidity
receive() external payable
```

## IDiamondCut

### FacetCutAction

```solidity
enum FacetCutAction {
  Add,
  Replace,
  Remove
}
```

### FacetCut

```solidity
struct FacetCut {
  address facetAddress;
  enum IDiamondCut.FacetCutAction action;
  bytes4[] functionSelectors;
}
```

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata) external
```

Add/replace/remove any number of functions and optionally execute
        a function with delegatecall

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _diamondCut | struct IDiamondCut.FacetCut[] | Contains the facet addresses and function selectors |
| _init | address | The address of the contract or facet to execute _calldata |
| _calldata | bytes | A function call, including function selector and arguments                  _calldata is executed with delegatecall on _init |

### DiamondCut

```solidity
event DiamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata)
```

## IDiamondLoupe

### Facet

```solidity
struct Facet {
  address facetAddress;
  bytes4[] functionSelectors;
}
```

### facets

```solidity
function facets() external view returns (struct IDiamondLoupe.Facet[] facets_)
```

Gets all facet addresses and their four byte function selectors.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facets_ | struct IDiamondLoupe.Facet[] | Facet |

### facetFunctionSelectors

```solidity
function facetFunctionSelectors(address _facet) external view returns (bytes4[] facetFunctionSelectors_)
```

Gets all the function selectors supported by a specific facet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _facet | address | The facet address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetFunctionSelectors_ | bytes4[] |  |

### facetAddresses

```solidity
function facetAddresses() external view returns (address[] facetAddresses_)
```

Get all the facet addresses used by a diamond.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetAddresses_ | address[] |  |

### facetAddress

```solidity
function facetAddress(bytes4 _functionSelector) external view returns (address facetAddress_)
```

Gets the facet that supports the given selector.

_If facet is not found return address(0)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _functionSelector | bytes4 | The function selector. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| facetAddress_ | address | The facet address. |

## LibDiamond

### DIAMOND_STORAGE_POSITION

```solidity
bytes32 DIAMOND_STORAGE_POSITION
```

### FacetAddressAndPosition

```solidity
struct FacetAddressAndPosition {
  address facetAddress;
  uint96 functionSelectorPosition;
}
```

### FacetFunctionSelectors

```solidity
struct FacetFunctionSelectors {
  bytes4[] functionSelectors;
  uint256 facetAddressPosition;
}
```

### DiamondStorage

```solidity
struct DiamondStorage {
  mapping(bytes4 => struct LibDiamond.FacetAddressAndPosition) selectorToFacetAndPosition;
  mapping(address => struct LibDiamond.FacetFunctionSelectors) facetFunctionSelectors;
  address[] facetAddresses;
  mapping(bytes4 => bool) supportedInterfaces;
  address diamondOwner;
}
```

### diamondStorage

```solidity
function diamondStorage() internal pure returns (struct LibDiamond.DiamondStorage ds)
```

### DiamondOwnershipTransferred

```solidity
event DiamondOwnershipTransferred(address previousOwner, address newOwner)
```

### setDiamondOwner

```solidity
function setDiamondOwner(address _newOwner) internal
```

### diamondOwner

```solidity
function diamondOwner() internal view returns (address diamondOwner_)
```

### enforceIsDiamondOwner

```solidity
function enforceIsDiamondOwner() internal view
```

### DiamondCut

```solidity
event DiamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata)
```

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata) internal
```

### addFunctions

```solidity
function addFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### replaceFunctions

```solidity
function replaceFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### removeFunctions

```solidity
function removeFunctions(address _facetAddress, bytes4[] _functionSelectors) internal
```

### addFacet

```solidity
function addFacet(struct LibDiamond.DiamondStorage ds, address _facetAddress) internal
```

### addFunction

```solidity
function addFunction(struct LibDiamond.DiamondStorage ds, bytes4 _selector, uint96 _selectorPosition, address _facetAddress) internal
```

### removeFunction

```solidity
function removeFunction(struct LibDiamond.DiamondStorage ds, address _facetAddress, bytes4 _selector) internal
```

### initializeDiamondCut

```solidity
function initializeDiamondCut(address _init, bytes _calldata) internal
```

### enforceHasContractCode

```solidity
function enforceHasContractCode(address _contract, string _errorMessage) internal view
```

## OwnershipFacet

### transferDiamondOwnership

```solidity
function transferDiamondOwnership(address _newOwner) external
```

### diamondOwner

```solidity
function diamondOwner() external view returns (address diamondOwner_)
```

## IRandomizer

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

### incrementCommitId

```solidity
function incrementCommitId() external
```

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

## Randomizer

### initialize

```solidity
function initialize() external
```

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

### setNumBlocksUntilNextIncrement

```solidity
function setNumBlocksUntilNextIncrement(uint8 _numBlocksUntilNextIncrement) external
```

### incrementCommitId

```solidity
function incrementCommitId() external
```

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

### _incrementCommitId

```solidity
function _incrementCommitId() private
```

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

## RandomizerState

### RandomRequest

```solidity
event RandomRequest(uint256 _requestId, uint256 _commitId)
```

### RandomSeeded

```solidity
event RandomSeeded(uint256 _commitId)
```

### commitIdToRandomSeed

```solidity
mapping(uint256 => uint256) commitIdToRandomSeed
```

### requestIdToCommitId

```solidity
mapping(uint256 => uint256) requestIdToCommitId
```

### lastIncrementBlockNum

```solidity
uint256 lastIncrementBlockNum
```

### commitId

```solidity
uint256 commitId
```

### requestIdCur

```solidity
uint256 requestIdCur
```

### nextCommitIdToSeed

```solidity
uint256 nextCommitIdToSeed
```

### pendingCommits

```solidity
uint256 pendingCommits
```

### numBlocksAfterIncrement

```solidity
uint8 numBlocksAfterIncrement
```

### numBlocksUntilNextIncrement

```solidity
uint8 numBlocksUntilNextIncrement
```

### __RandomizerState_init

```solidity
function __RandomizerState_init() internal
```

## ITemplate

## Template

### initialize

```solidity
function initialize() external
```

## TemplateContracts

### __TemplateContracts_init

```solidity
function __TemplateContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## TemplateState

### randomizer

```solidity
contract IRandomizer randomizer
```

### __TemplateState_init

```solidity
function __TemplateState_init() internal
```

## MockBalancerCrystal

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _id, uint256 _amount) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

## MockLegion1155

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _id, uint256 _amount) external
```

## MockLegionGenesis1155

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _id, uint256 _amount) external
```

## MockMagic

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _amount) external
```

### burn

```solidity
function burn(address _from, uint256 _amount) external
```

## MockPoolConfigProvider

### n

```solidity
uint256 n
```

### initialize

```solidity
function initialize() external
```

### getN

```solidity
function getN(uint64) external view returns (uint256)
```

### setN

```solidity
function setN(uint256 _n) external
```

## MockSLP

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _amount) external
```

### burn

```solidity
function burn(address _from, uint256 _amount) external
```

## MockTreasure

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _account, uint256 _id, uint256 _amount) external
```

