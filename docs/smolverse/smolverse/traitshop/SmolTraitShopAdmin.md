# Solidity API

## SmolTraitShopAdmin

Admin control functions for SmolTraitShop.

### setTraitInfo

```solidity
function setTraitInfo(struct ISmolTraitShop.CreateTraitArgs[] _traitInfo) external
```

Set new Trait struct info and save it to traitToInfo mapping. Leave URI as "" when setting trait info.
 Price should be input as whole numbers, decimals are added during purchase. (ex: 200 magic => price = 200 NOT 200000000000000000000)

_Trait ids are auto incremented and assigned. Ids are unique to each trait type._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitInfo | struct ISmolTraitShop.CreateTraitArgs[] | Array of Trait structs containing all information needed to add trait to contract. |

### changeBaseURI

```solidity
function changeBaseURI(enum ISmolTraitShop.TraitType _traitType, string _newBaseURI) external
```

Set new base URI to be concatenated with trait Id + suffix.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitType | enum ISmolTraitShop.TraitType | Enum(0-7) representing which type of trait is being referenced. |
| _newBaseURI | string | Portion of URI to come before trait Id + Suffix. |

### changeSuffixURI

```solidity
function changeSuffixURI(enum ISmolTraitShop.TraitType _traitType, string _newSuffixURI) external
```

Set new URI suffix to be added to the end of baseURI + trait Id.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitType | enum ISmolTraitShop.TraitType | Enum(0-7) representing which type of trait is being referenced. |
| _newSuffixURI | string | Example suffix: ".json" for IPFS files |

### changeTraitSaleStatus

```solidity
function changeTraitSaleStatus(uint256 _traitId, bool _forSale) external
```

Change existing trait sale status.

_Also adds and removes trait from for sale array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _forSale | bool | New bool value to add(true)/remove(false) traits from sale. |

### changeTraitMerkleRoot

```solidity
function changeTraitMerkleRoot(uint256 _traitId, bytes32 _merkleRoot) external
```

Change stored merkle root attached to existing trait for whitelist.

_Change to 0x0000000000000000000000000000000000000000000000000000000000000000 to remove whitelist._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _merkleRoot | bytes32 | New merkle root for whitelist verification or empty root for normal sale. |

### changeTraitName

```solidity
function changeTraitName(uint256 _traitId, string _name) external
```

Change existing trait name.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _name | string | New string to be set as trait name. |

### changeTraitPrice

```solidity
function changeTraitPrice(uint256 _traitId, uint32 _price) external
```

Change existing trait price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _price | uint32 | New price for trait in base units. |

### changeTraitSupply

```solidity
function changeTraitSupply(uint256 _traitId, uint32 _maxSupply) external
```

Change max supply or remove supply cap for an existing trait.

__maxSupply=0 : No supply cap | _maxSupply>0 : Supply cap is set to _maxSupply._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _maxSupply | uint32 | New max supply value for selected trait. Enter 0 to remove supply cap. |

### changeTraitSpecialStatus

```solidity
function changeTraitSpecialStatus(uint256 _traitId, uint32 _limitedOfferId, uint8 _subgroupId) external
```

Change existing trait limited offer id reference. Changing this value will affect claimability per grouping as well as exclusive vs special claims.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _limitedOfferId | uint32 | New number of limited offer to set subgroups for. |
| _subgroupId | uint8 | Subgroup Id to differenciate between groups within limited offer id. |

### changeTraitTradableStatus

```solidity
function changeTraitTradableStatus(uint256 _traitId, bool _tradable) external
```

Change existing trait tradable status. Set as true to allow a trait to be tokenized and transfered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |
| _tradable | bool | New tradable status for a specific trait. |

### addTraitsToLimitedOfferGroup

```solidity
function addTraitsToLimitedOfferGroup(uint256 _limitedOfferId, uint256 _subgroupId, uint256[] _traitIds) external
```

Add special traits to a tier for specialEventClaim.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _limitedOfferId | uint256 | Number of limited offer to set subgroups for. Must not be greater than latestLimitedOffer. |
| _subgroupId | uint256 | Subgroup Id to differenciate between groups within limited offer id. |
| _traitIds | uint256[] | Array of id numbers to be added to tier. |

### removeTraitsFromLimitedOfferGroup

```solidity
function removeTraitsFromLimitedOfferGroup(uint256 _limitedOfferId, uint256 _subgroupId, uint256 _traitId) external
```

Add special traits to a tier for specialEventClaim.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _limitedOfferId | uint256 | Number of limited offer to set subgroups for. Must not be greater than latestLimitedOffer. |
| _subgroupId | uint256 | Subgroup Id to differenciate between groups within limited offer id. |
| _traitId | uint256 | Trait id number to be removed from tier. |

### incrementLimitedOfferId

```solidity
function incrementLimitedOfferId() external
```

Increment latestLimitedOfferId number by one to open up new subgroups for next special claim without erasing the last set of tiers.

### withdrawMagic

```solidity
function withdrawMagic() external
```

Withdraw all Magic from contract.

### traitURI

```solidity
function traitURI(uint256 _traitId) public view returns (string)
```

_Returns base URI concatenated with trait ID + suffix._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | URI string for trait id of trait type. |

### _addTraitToSale

```solidity
function _addTraitToSale(uint256 _traitId) internal
```

_Adds trait id to sale array for that trait type._

### _removeTraitFromSale

```solidity
function _removeTraitFromSale(uint256 _traitId) internal
```

_Removes trait id from sale array for that trait type._

### _checkTraitId

```solidity
function _checkTraitId(uint256 _traitId) internal view
```

_Check to verify _traitId is within range of valid trait ids._

### _checkLengths

```solidity
function _checkLengths(uint256 target, uint256 length) internal pure
```

_Check to verify array lengths of input arrays are equal_

### setContracts

```solidity
function setContracts(address _smolBrains, address _magicToken, address _treasuryAddress) external
```

Set contract and wallet addresses.

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

Verify necessary contract addresses have been set.

### __SmolTraitShopAdmin_init

```solidity
function __SmolTraitShopAdmin_init() internal
```

