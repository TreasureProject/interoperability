# Solidity API

## ISmolTraitShop

Interface and custom errors for SmolTraitShop.

### ContractsAreNotSet

```solidity
error ContractsAreNotSet()
```

### ArrayLengthMismatch

```solidity
error ArrayLengthMismatch()
```

### InsufficientBalance

```solidity
error InsufficientBalance(uint256 _balance, uint256 _price)
```

### InvalidTraitSupply

```solidity
error InvalidTraitSupply()
```

### TraitIdDoesNotExist

```solidity
error TraitIdDoesNotExist(uint256 _traitId)
```

### TraitIdSoldOut

```solidity
error TraitIdSoldOut(uint256 _traitId)
```

### TraitNotCurrentlyForSale

```solidity
error TraitNotCurrentlyForSale(uint256 _traitId)
```

### MustBeOwnerOfSmol

```solidity
error MustBeOwnerOfSmol()
```

### TraitAlreadyUnlockedForSmol

```solidity
error TraitAlreadyUnlockedForSmol(uint256 _smolId, uint256 _traitId)
```

### TraitNotUnlockedForSmol

```solidity
error TraitNotUnlockedForSmol(uint256 _smolId, uint256 _traitId)
```

### MustCallBuyExclusiveTrait

```solidity
error MustCallBuyExclusiveTrait(uint256 _traitId)
```

### TraitNotMarkedAsSpecial

```solidity
error TraitNotMarkedAsSpecial()
```

### MerkleRootNotSet

```solidity
error MerkleRootNotSet()
```

### MustCallSpecialClaim

```solidity
error MustCallSpecialClaim()
```

### InvalidLimitedOfferId

```solidity
error InvalidLimitedOfferId()
```

### InvalidTier

```solidity
error InvalidTier()
```

### AlreadyClaimedSpecialTraitFromThisTier

```solidity
error AlreadyClaimedSpecialTraitFromThisTier(address _userAddress, uint256 _smolId, uint256 _traitId)
```

### TraitNotAssignedToTierForSelectedEvent

```solidity
error TraitNotAssignedToTierForSelectedEvent()
```

### InvalidMerkleProof

```solidity
error InvalidMerkleProof()
```

### WhitelistAllocationExceeded

```solidity
error WhitelistAllocationExceeded()
```

### TraitIsNotTradable

```solidity
error TraitIsNotTradable()
```

### TraitUnlocked

```solidity
event TraitUnlocked(uint256 _smolId, uint256 _traitId)
```

### UpdateSmolTraits

```solidity
event UpdateSmolTraits(uint256 _smolId, struct ISmolTraitShop.SmolBrain _equippedTraits)
```

### TraitAddedToContract

```solidity
event TraitAddedToContract(uint256 _traitId, struct ISmolTraitShop.Trait _traitInfo)
```

### TraitSaleStateChanged

```solidity
event TraitSaleStateChanged(uint256 _traitId, bool _added)
```

### TraitType

```solidity
enum TraitType {
  Background,
  Body,
  Hair,
  Clothes,
  Glasses,
  Hat,
  Mouth,
  Costume
}
```

### CreateTraitArgs

```solidity
struct CreateTraitArgs {
  string name;
  uint32 price;
  uint32 maxSupply;
  uint32 limitedOfferId;
  bool forSale;
  bool tradable;
  enum ISmolTraitShop.TraitType traitType;
  uint8 subgroupId;
  bytes32 merkleRoot;
}
```

### Trait

```solidity
struct Trait {
  uint32 amountClaimed;
  uint32 limitedOfferId;
  uint32 maxSupply;
  uint32 price;
  bool forSale;
  bool tradable;
  bool uncappedSupply;
  enum ISmolTraitShop.TraitType traitType;
  uint8 subgroupId;
  string name;
  string uri;
  bytes32 merkleRoot;
}
```

### SmolBrain

```solidity
struct SmolBrain {
  uint32 background;
  uint32 body;
  uint32 hair;
  uint32 clothes;
  uint32 glasses;
  uint32 hat;
  uint32 mouth;
  uint32 costume;
}
```

