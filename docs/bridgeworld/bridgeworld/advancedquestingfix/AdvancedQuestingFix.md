# Solidity API

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

