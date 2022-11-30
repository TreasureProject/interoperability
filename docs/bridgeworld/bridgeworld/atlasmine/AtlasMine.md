# Solidity API

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

