# Solidity API

## TroveClaimerState

### NotRecipient

```solidity
error NotRecipient()
```

### InvalidBadge

```solidity
error InvalidBadge(address _badgeCollection, uint256 _badgeId)
```

### InvalidSignature

```solidity
error InvalidSignature(address _signer)
```

### BadgeAlreadyClaimed

```solidity
error BadgeAlreadyClaimed(address _claimer, address _badgeCollection, uint256 _badgeId)
```

### CLAIMINFO_TYPE_HASH

```solidity
bytes32 CLAIMINFO_TYPE_HASH
```

### validator

```solidity
address validator
```

### troveBadgeCollection

```solidity
contract ITroveBadges troveBadgeCollection
```

### badgeToEnabledStatus

```solidity
mapping(address => mapping(uint256 => bool)) badgeToEnabledStatus
```

### __TroveClaimerState_init

```solidity
function __TroveClaimerState_init() internal
```

