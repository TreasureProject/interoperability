# Solidity API

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

