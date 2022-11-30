# Solidity API

## ClaimInfo

```solidity
struct ClaimInfo {
  address claimer;
  address badgeAddress;
  uint256 badgeId;
}
```

## ITroveClaimer

### claim

```solidity
function claim(struct ClaimInfo _claimInfo, bytes _verificationSig) external
```

