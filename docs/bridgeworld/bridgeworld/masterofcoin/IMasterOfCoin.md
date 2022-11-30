# Solidity API

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

