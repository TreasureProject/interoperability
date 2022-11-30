# Solidity API

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

