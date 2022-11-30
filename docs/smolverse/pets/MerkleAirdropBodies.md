# Solidity API

## MerkleAirdropBodies

### Claim

```solidity
struct Claim {
  bool claimedAll;
  uint256 leftToClaim;
}
```

### claimed

```solidity
mapping(bytes32 => struct MerkleAirdropBodies.Claim) claimed
```

### merkleRoot

```solidity
bytes32 merkleRoot
```

### smolBodiesPets

```solidity
contract SmolBodiesPets smolBodiesPets
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

### setSmolBodiesPets

```solidity
function setSmolBodiesPets(address _smolBodiesPets) external
```

