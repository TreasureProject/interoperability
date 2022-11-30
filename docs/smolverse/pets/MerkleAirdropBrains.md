# Solidity API

## MerkleAirdropBrains

### Claim

```solidity
struct Claim {
  bool claimedAll;
  uint256 leftToClaim;
}
```

### claimed

```solidity
mapping(bytes32 => struct MerkleAirdropBrains.Claim) claimed
```

### merkleRoot

```solidity
bytes32 merkleRoot
```

### smolBrainsPets

```solidity
contract SmolBrainsPets smolBrainsPets
```

### leftToClaim

```solidity
function leftToClaim(bytes32[] proof, uint256 amount) public view returns (uint256)
```

### mintSmolPet

```solidity
function mintSmolPet(bytes32[] proof, uint256 amount) public
```

### setMerkleRoot

```solidity
function setMerkleRoot(bytes32 _merkleRoot) public
```

### setSmolBrainsPets

```solidity
function setSmolBrainsPets(address _smolBrainsPets) external
```

