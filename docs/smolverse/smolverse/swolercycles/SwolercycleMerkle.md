# Solidity API

## SwolercycleMerkle

### Claim

```solidity
struct Claim {
  bool claimedAll;
  uint256 leftToClaim;
}
```

### claimed

```solidity
mapping(bytes32 => struct SwolercycleMerkle.Claim) claimed
```

### merkleRoot

```solidity
bytes32 merkleRoot
```

### swolercycle

```solidity
contract Swolercycle swolercycle
```

### leftToClaim

```solidity
function leftToClaim(bytes32[] proof, uint256 amount) public view returns (uint256)
```

### mintSwolercycle

```solidity
function mintSwolercycle(bytes32[] proof, uint256 amount) public
```

### setMerkleRoot

```solidity
function setMerkleRoot(bytes32 _merkleRoot) public
```

### setSwolercycle

```solidity
function setSwolercycle(address _swolercycle) external
```

