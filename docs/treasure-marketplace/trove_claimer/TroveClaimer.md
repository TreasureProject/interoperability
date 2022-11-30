# Solidity API

## TroveClaimer

### initialize

```solidity
function initialize(address _validator, address _badgeAddress) external
```

### claim

```solidity
function claim(struct ClaimInfo _claimInfo, bytes _validatorSignature) external
```

### isValidClaimInfoForSignature

```solidity
function isValidClaimInfoForSignature(struct ClaimInfo _claimInfo, bytes _validatorSignature, address _validatorAddress) external view returns (bool)
```

### _isSupportedBadge

```solidity
function _isSupportedBadge(address _badgeAddress, uint256 _badgeId) internal view returns (bool isSupported_)
```

### domainSeparator

```solidity
function domainSeparator() public view returns (bytes32)
```

### claimInfoHash

```solidity
function claimInfoHash(struct ClaimInfo _claimInfo) public view returns (bytes32)
```

