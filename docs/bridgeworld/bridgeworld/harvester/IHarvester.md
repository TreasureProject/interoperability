# Solidity API

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

