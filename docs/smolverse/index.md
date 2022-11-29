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

## MinterControl

### SMOLPETS_OWNER_ROLE

```solidity
bytes32 SMOLPETS_OWNER_ROLE
```

### SMOLPETS_MINTER_ROLE

```solidity
bytes32 SMOLPETS_MINTER_ROLE
```

### onlyOwner

```solidity
modifier onlyOwner()
```

### onlyMinter

```solidity
modifier onlyMinter()
```

### constructor

```solidity
constructor() internal
```

### grantMinter

```solidity
function grantMinter(address _minter) external
```

### isMinter

```solidity
function isMinter(address _minter) public view returns (bool)
```

### grantOwner

```solidity
function grantOwner(address _owner) external
```

### isOwner

```solidity
function isOwner(address _owner) public view returns (bool)
```

## SmolBodiesPets

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolPetMint

```solidity
event SmolPetMint(address to, uint256 tokenId, string tokenURI)
```

### constructor

```solidity
constructor() public
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

## SmolBrainsPets

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolPetMint

```solidity
event SmolPetMint(address to, uint256 tokenId, string tokenURI)
```

### constructor

```solidity
constructor() public
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

## Adminable

### admins

```solidity
mapping(address => bool) admins
```

### addAdmin

```solidity
function addAdmin(address _address) external
```

### addAdmins

```solidity
function addAdmins(address[] _addresses) external
```

### removeAdmin

```solidity
function removeAdmin(address _address) external
```

### removeAdmins

```solidity
function removeAdmins(address[] _addresses) external
```

### isAdmin

```solidity
function isAdmin(address _address) public view returns (bool)
```

### onlyAdmin

```solidity
modifier onlyAdmin()
```

### onlyAdminOrOwner

```solidity
modifier onlyAdminOrOwner()
```

## AdminableUpgradeable

### admins

```solidity
mapping(address => bool) admins
```

### __Adminable_init

```solidity
function __Adminable_init() internal
```

### addAdmin

```solidity
function addAdmin(address _address) external
```

### addAdmins

```solidity
function addAdmins(address[] _addresses) external
```

### removeAdmin

```solidity
function removeAdmin(address _address) external
```

### removeAdmins

```solidity
function removeAdmins(address[] _addresses) external
```

### setPause

```solidity
function setPause(bool _shouldPause) external
```

### isAdmin

```solidity
function isAdmin(address _address) public view returns (bool)
```

### onlyAdmin

```solidity
modifier onlyAdmin()
```

### onlyAdminOrOwner

```solidity
modifier onlyAdminOrOwner()
```

### __gap

```solidity
uint256[50] __gap
```

## ERC1155OnChainBaseUpgradeable

### TokenTraitChanged

```solidity
event TokenTraitChanged(uint256 _tokenId, string _name, string _description, struct ERC1155OnChainBaseUpgradeable.Property[] _properties)
```

### PropertyType

```solidity
enum PropertyType {
  STRING,
  NUMBER
}
```

### Property

```solidity
struct Property {
  string name;
  string value;
  enum ERC1155OnChainBaseUpgradeable.PropertyType propertyType;
}
```

### TraitData

```solidity
struct TraitData {
  string name;
  string description;
  string png;
  struct ERC1155OnChainBaseUpgradeable.Property[] properties;
}
```

### tokenIdToTraitData

```solidity
mapping(uint256 => struct ERC1155OnChainBaseUpgradeable.TraitData) tokenIdToTraitData
```

### __ERC1155OnChainBase_init

```solidity
function __ERC1155OnChainBase_init() internal
```

### uploadTraitData

```solidity
function uploadTraitData(uint256 _tokenId, struct ERC1155OnChainBaseUpgradeable.TraitData _traitData) external
```

### exists

```solidity
function exists(uint256 _tokenId) public view returns (bool)
```

### uri

```solidity
function uri(uint256 _tokenId) public view returns (string)
```

### _generateAttributeString

```solidity
function _generateAttributeString(struct ERC1155OnChainBaseUpgradeable.TraitData _traitData) private view returns (string)
```

### _drawImage

```solidity
function _drawImage(struct ERC1155OnChainBaseUpgradeable.TraitData image) internal pure returns (string)
```

### _drawSVG

```solidity
function _drawSVG(uint256 _tokenId) internal view returns (string)
```

### tokenIdExists

```solidity
modifier tokenIdExists(uint256 _tokenId)
```

### __gap

```solidity
uint256[50] __gap
```

## Utilities

### nonZeroAddress

```solidity
modifier nonZeroAddress(address _address)
```

### nonZeroLength

```solidity
modifier nonZeroLength(uint256[] _array)
```

### lengthsAreEqual

```solidity
modifier lengthsAreEqual(uint256[] _array1, uint256[] _array2)
```

### onlyEOA

```solidity
modifier onlyEOA()
```

### isOwner

```solidity
function isOwner() internal view returns (bool)
```

## UtilitiesUpgradeable

### __Utilities__init

```solidity
function __Utilities__init() internal
```

### nonZeroAddress

```solidity
modifier nonZeroAddress(address _address)
```

### nonZeroLength

```solidity
modifier nonZeroLength(uint256[] _array)
```

### lengthsAreEqual

```solidity
modifier lengthsAreEqual(uint256[] _array1, uint256[] _array2)
```

### onlyEOA

```solidity
modifier onlyEOA()
```

### isOwner

```solidity
function isOwner() internal view returns (bool)
```

### compareStrings

```solidity
function compareStrings(string a, string b) internal pure returns (bool)
```

## UtilitiesV2Upgradeable

### OWNER_ROLE

```solidity
bytes32 OWNER_ROLE
```

### ADMIN_ROLE

```solidity
bytes32 ADMIN_ROLE
```

### ROLE_GRANTER_ROLE

```solidity
bytes32 ROLE_GRANTER_ROLE
```

### __Utilities_init

```solidity
function __Utilities_init() internal
```

### __Utilities_init_unchained

```solidity
function __Utilities_init_unchained() internal
```

### setPause

```solidity
function setPause(bool _shouldPause) external
```

### grantRole

```solidity
function grantRole(bytes32 _role, address _account) public
```

### revokeRole

```solidity
function revokeRole(bytes32 _role, address _account) public
```

### compareStrings

```solidity
function compareStrings(string a, string b) internal pure returns (bool)
```

### onlyEOA

```solidity
modifier onlyEOA()
```

### requiresRole

```solidity
modifier requiresRole(bytes32 _role)
```

### requiresEitherRole

```solidity
modifier requiresEitherRole(bytes32 _roleOption1, bytes32 _roleOption2)
```

## BBase64

Provides a function for encoding some bytes in BBase64
NOT BUILT BY OUR TEAM. Thanks Bretch Devos!

### TABLE

```solidity
string TABLE
```

### encode

```solidity
function encode(bytes data) internal pure returns (string)
```

## IRandomizer

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

### incrementCommitId

```solidity
function incrementCommitId() external
```

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

## Randomizer

### initialize

```solidity
function initialize() external
```

### setNumBlocksAfterIncrement

```solidity
function setNumBlocksAfterIncrement(uint8 _numBlocksAfterIncrement) external
```

### setNumBlocksUntilNextIncrement

```solidity
function setNumBlocksUntilNextIncrement(uint8 _numBlocksUntilNextIncrement) external
```

### incrementCommitId

```solidity
function incrementCommitId() external
```

### addRandomForCommit

```solidity
function addRandomForCommit(uint256 _seed) external
```

### requestRandomNumber

```solidity
function requestRandomNumber() external returns (uint256)
```

### _incrementCommitId

```solidity
function _incrementCommitId() private
```

### revealRandomNumber

```solidity
function revealRandomNumber(uint256 _requestId) external view returns (uint256)
```

### isRandomReady

```solidity
function isRandomReady(uint256 _requestId) external view returns (bool)
```

## RandomizerState

### RandomRequest

```solidity
event RandomRequest(uint256 _requestId, uint256 _commitId)
```

### RandomSeeded

```solidity
event RandomSeeded(uint256 _commitId)
```

### commitIdToRandomSeed

```solidity
mapping(uint256 => uint256) commitIdToRandomSeed
```

### requestIdToCommitId

```solidity
mapping(uint256 => uint256) requestIdToCommitId
```

### lastIncrementBlockNum

```solidity
uint256 lastIncrementBlockNum
```

### commitId

```solidity
uint256 commitId
```

### requestIdCur

```solidity
uint256 requestIdCur
```

### nextCommitIdToSeed

```solidity
uint256 nextCommitIdToSeed
```

### pendingCommits

```solidity
uint256 pendingCommits
```

### numBlocksAfterIncrement

```solidity
uint8 numBlocksAfterIncrement
```

### numBlocksUntilNextIncrement

```solidity
uint8 numBlocksUntilNextIncrement
```

### __RandomizerState_init

```solidity
function __RandomizerState_init() internal
```

## ISmolBadges

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount, bytes32[] _merkleProof) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external
```

## SmolBadges

### initialize

```solidity
function initialize() external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `id` and `amount` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount, bytes32[] _merkleProof) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) public
```

### setRoot

```solidity
function setRoot(uint256 _id, bytes32 _merkleRoot) external
```

## SmolBadgesState

### addressToClaimed

```solidity
mapping(address => bool) addressToClaimed
```

### idToMerkleRoot

```solidity
mapping(uint256 => bytes32) idToMerkleRoot
```

### __SmolBadgesState_init

```solidity
function __SmolBadgesState_init() internal
```

## ISmolChopShop

Custom errors used by SmolChopShop.

### ContractsAreNotSet

```solidity
error ContractsAreNotSet()
```

### ArrayLengthMismatch

```solidity
error ArrayLengthMismatch()
```

### TrophyValueNotSet

```solidity
error TrophyValueNotSet()
```

### LowestValueTrophyIdNotSet

```solidity
error LowestValueTrophyIdNotSet()
```

### InsufficientTrophies

```solidity
error InsufficientTrophies(uint256 _balance, uint256 _price)
```

### InvalidTrophyValue

```solidity
error InvalidTrophyValue(uint256 _value)
```

### InvalidUpgradeSupply

```solidity
error InvalidUpgradeSupply()
```

### UpgradeIdDoesNotExist

```solidity
error UpgradeIdDoesNotExist(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeIdSoldOut

```solidity
error UpgradeIdSoldOut(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotCurrentlyForSale

```solidity
error UpgradeNotCurrentlyForSale(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotAvailableForSelectedVehicle

```solidity
error UpgradeNotAvailableForSelectedVehicle(address _vehicleAddress, uint256 _validVehicleType)
```

### MustBeVehicleOwnerToUpgrade

```solidity
error MustBeVehicleOwnerToUpgrade()
```

### UpgradeAlreadyUnlockedForVehicle

```solidity
error UpgradeAlreadyUnlockedForVehicle(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotUnlockedForVehicle

```solidity
error UpgradeNotUnlockedForVehicle(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### MustCallBuyExclusiveUpgrade

```solidity
error MustCallBuyExclusiveUpgrade(uint256 _upgradeType, uint256 _upgradeId)
```

### MustCallBuySingleUpgrade

```solidity
error MustCallBuySingleUpgrade(uint256 _upgradeType, uint256 _upgradeId)
```

### InvalidMerkleProof

```solidity
error InvalidMerkleProof()
```

### WhitelistAllocationExceeded

```solidity
error WhitelistAllocationExceeded()
```

## SmolChopShop

Store front for users to purchase and equip vehicle upgrades.

### upgradeAndEquip

```solidity
function upgradeAndEquip(address[] _vehicleAddress, uint256[] _vehicleId, struct SmolChopShopState.Vehicle[] _upgradesToBuy, struct SmolChopShopState.Vehicle[] _upgradesToEquip) external
```

Buy set of upgrades for vehicle and apply upgrades in same tx. Does not have to equip same upgrades that were bought.

_Gas intensive. Almost always cheaper to call buyUpgradeBatch and equipUpgrades seperatly. Mostly for users who have multiiple vehicles and are willing to pay a premeium for convenience._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradesToBuy | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs containing upgrade ids to be bought for each upgrade type. Leave id as 0 to skip an upgrade type. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs containing upgrade ids to be equipped for each upgrade type. Leave id as 0 to skip an upgrade type. |

### buyUpgradeBatch

```solidity
function buyUpgradeBatch(address[] _vehicleAddress, uint256[] _vehicleId, enum SmolChopShopState.UpgradeType[] _upgradeType, uint256[] _upgradeId) external
```

Unlock individual upgrade for multiple vehicles or multiple upgrades for single vehicle. Can be any slot or even multiples of one slot type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradeType | enum SmolChopShopState.UpgradeType[] | Array of enums(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256[] | Array of id numbers for selected upgrades. |

### buySingleUpgrade

```solidity
function buySingleUpgrade(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) external
```

Unlock individual upgrade for one vehicle.

_Used by all buy functions except for upgrades that require merkle proof verification._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

### buyExclusiveUpgrade

```solidity
function buyExclusiveUpgrade(bytes32[] _proof, address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) external
```

Unlcok upgrade that is gated by a merkle tree whitelist. Only unlockable with valid proof.

_Will revert if token is not whitelist gated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored merkle root. |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

### equipUpgradesBatch

```solidity
function equipUpgradesBatch(address[] _vehicleAddress, uint256[] _vehicleId, struct SmolChopShopState.Vehicle[] _upgradesToEquip) external
```

Equip sets of unlocked upgrades for multiple vehicles in one tx.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs with upgrade ids to be equipped to each vehicle. |

### equipUpgrades

```solidity
function equipUpgrades(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToEquip) external
```

Equip a set of unlocked upgrades for single vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle | Vehicle struct with upgrade ids to be equipped to vehicle. |

### exchangeTrophies

```solidity
function exchangeTrophies(uint256 _trophyId, uint256 _amountToBurn) external
```

Burns amount of trophies in exchange for equal value in base units. Base units are used to buy vehicle upgrades.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256 | Token Id of trophy type to be burned. |
| _amountToBurn | uint256 | Amount of trophies to be exchanged. |

### initialize

```solidity
function initialize() external
```

## SmolChopShopAdmin

Admin control functions for SmolChopShop.

### setUpgradeInfo

```solidity
function setUpgradeInfo(enum SmolChopShopState.UpgradeType[] _upgradeType, struct SmolChopShopState.Upgrade[] _upgradeInfo) external
```

Set new Upgrade struct info and save it to upgradeToInfo mapping.

_Upgrade ids are auto incremented and assigned. Ids are unique to each upgrade type._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType[] | Array of enums(0-6) representing which type of upgrade is being referenced. |
| _upgradeInfo | struct SmolChopShopState.Upgrade[] | Array of upgrade structs containing all information needed to add upgrade to contract. |

### changeUpgradeSaleStatus

```solidity
function changeUpgradeSaleStatus(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bool _forSale) external
```

Change existing upgrade sale status.

_Also adds and removes upgrade from for sale array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _forSale | bool | New bool value to add(true)/remove(false) upgrades from sale. |

### changeUpgradeMerkleRoot

```solidity
function changeUpgradeMerkleRoot(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bytes32 _merkleRoot) external
```

Change stored merkle root attached to existing upgrade for whitelist.

_Change to 0x0000000000000000000000000000000000000000000000000000000000000000 to remove whitelist._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _merkleRoot | bytes32 | New merkle root for whitelist verification or empty root for normal sale. |

### changeUpgradeName

```solidity
function changeUpgradeName(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, string _name) external
```

Change existing upgrade name.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _name | string | New string to be set as upgrade name. |

### changeUpgradePrice

```solidity
function changeUpgradePrice(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, uint256 _price) external
```

Change existing upgrade price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _price | uint256 | New price for upgrade in base units. |

### changeUpgradeSupply

```solidity
function changeUpgradeSupply(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, uint256 _maxSupply) external
```

Change max supply or remove supply cap for an existing upgrade.

__maxSupply=0 : No supply cap | _maxSupply>0 : Supply cap is set to _maxSupply._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _maxSupply | uint256 | New max supply value for selected upgrade. Enter 0 to remove supply cap. |

### changeUpgradeValidVehicleType

```solidity
function changeUpgradeValidVehicleType(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, enum SmolChopShopState.ValidVehicleType _validVehicleType) external
```

Change compatable vehicle type for an existing upgrade.

_Must be carful not to change car skin to cycle skin (or vice-versa) if some have already been purchased because once bought, upgrades cannot be removed from vehicles invintory and invalid upgrades cannot be equiped._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _validVehicleType | enum SmolChopShopState.ValidVehicleType | Enum(0-2) representing which type of vehicle this upgrade can be applied to. |

### _addUpgradeToSale

```solidity
function _addUpgradeToSale(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Adds upgrade id to sale array for that upgrade type._

### _removeUpgradeFromSale

```solidity
function _removeUpgradeFromSale(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Removes upgrade id from sale array for that upgrade type._

### _checkUpgradeId

```solidity
function _checkUpgradeId(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view
```

_Check to verify _upgradeId is within range of valid upgrade ids._

### setExchangeRates

```solidity
function setExchangeRates(uint256[] _trophyId, uint256[] _trophyValue) external
```

Set trophy value in base units.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256[] | Array of trophy id numbers from the RacingTrophies contract. |
| _trophyValue | uint256[] | Array of values in base units to be assigned to _trophyId. |

### setLowestValueTrophyId

```solidity
function setLowestValueTrophyId(uint256 _trophyId) external
```

Set Id for token from trophy contract that has the lowest value in base units.

_Must be set to buy upgrades or exchange trophies._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256 | Id number of lowest value trophy from the RacingTrophies contract. |

### setContracts

```solidity
function setContracts(address _smolCars, address _swolercycles, address _racingTrophies) external
```

Set other contract addresses.

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

Verify necessary contract addresses have been set.

### __SmolChopShopAdmin_init

```solidity
function __SmolChopShopAdmin_init() internal
```

## SmolChopShopInternal

Internal functions used to purchase and equip vehicle upgrades.

### _buyUpgrades

```solidity
function _buyUpgrades(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToBuy) internal
```

_Buy set of upgrades for a vehicle. 0 means no upgrade for that upgrade slot. Other upgrades are handled by buySingleUpgrade_

### _buy

```solidity
function _buy(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Used by all buy functions except for upgrades that require merkle proof verification._

### _unlockUpgrade

```solidity
function _unlockUpgrade(uint256 _price, address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Internal helper function that unlocks an upgrade for specified vehicle and emits UpgradeUnlocked event._

### _equip

```solidity
function _equip(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToEquip) internal
```

_Equip a set of unlocked upgrades for single vehicle._

### __SmolChopShopInternal_init

```solidity
function __SmolChopShopInternal_init() internal
```

## SmolChopShopState

Shared storage layout for SmolChopShop.

### UpgradeUnlocked

```solidity
event UpgradeUnlocked(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradesEquipped

```solidity
event UpgradesEquipped(address _vehicleAddress, uint256 _vehicleId)
```

### UpgradeSaleStateChanged

```solidity
event UpgradeSaleStateChanged(uint256 _upgradeType, uint256 _upgradeId, bool _added)
```

### racingTrophies

```solidity
contract ISmolRacingTrophies racingTrophies
```

### smolCars

```solidity
contract IERC721 smolCars
```

### swolercycles

```solidity
contract IERC721 swolercycles
```

### lowestValueTrophyId

```solidity
uint256 lowestValueTrophyId
```

### trophyValue

```solidity
mapping(uint256 => uint256) trophyValue
```

### userAllocationClaimed

```solidity
mapping(address => mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => bool))) userAllocationClaimed
```

### userToTotalAmountSpent

```solidity
mapping(address => uint256) userToTotalAmountSpent
```

### upgradeToInfo

```solidity
mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => struct SmolChopShopState.Upgrade)) upgradeToInfo
```

### upgradeTypeToIdsForSale

```solidity
mapping(enum SmolChopShopState.UpgradeType => uint256[]) upgradeTypeToIdsForSale
```

### upgradeTypeToLastId

```solidity
mapping(enum SmolChopShopState.UpgradeType => uint256) upgradeTypeToLastId
```

### vehicleToUpgradeInventory

```solidity
mapping(address => mapping(uint256 => mapping(enum SmolChopShopState.UpgradeType => uint256[]))) vehicleToUpgradeInventory
```

### vehicleToEquippedUpgrades

```solidity
mapping(address => mapping(uint256 => struct SmolChopShopState.Vehicle)) vehicleToEquippedUpgrades
```

### vehicleToUnlockedUpgrades

```solidity
mapping(address => mapping(uint256 => mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => bool)))) vehicleToUnlockedUpgrades
```

### UpgradeType

```solidity
enum UpgradeType {
  Skin,
  Color,
  Background,
  TopMod,
  FrontMod,
  SideMod,
  BackMod
}
```

### ValidVehicleType

```solidity
enum ValidVehicleType {
  Car,
  Cycle,
  Either
}
```

### Vehicle

```solidity
struct Vehicle {
  uint256 skin;
  uint256 color;
  uint256 background;
  uint256 topMod;
  uint256 frontMod;
  uint256 backMod;
  uint256 sideMod;
}
```

### VehicleInventory

```solidity
struct VehicleInventory {
  uint256[] skin;
  uint256[] color;
  uint256[] background;
  uint256[] topMod;
  uint256[] frontMod;
  uint256[] backMod;
  uint256[] sideMod;
}
```

### Upgrade

```solidity
struct Upgrade {
  string name;
  uint256 price;
  uint256 validVehicleType;
  uint256 amountClaimed;
  uint256 maxSupply;
  bool uncappedSupply;
  bool forSale;
  bytes32 merkleRoot;
}
```

### __SmolChopShopState_init

```solidity
function __SmolChopShopState_init() internal
```

## SmolChopShopView

Public and internal view functions used by SmolChopShop.

### _checkBeforePurchase

```solidity
function _checkBeforePurchase(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view returns (uint256 price)
```

_Various checks that must be made before any upgrade purchase._

### _checkVehicleOwnership

```solidity
function _checkVehicleOwnership(address _vehicleAddress, uint256 _vehicleId) internal view
```

_Verify msg.sender is vehicle owner._

### _checkCompatibility

```solidity
function _checkCompatibility(address _vehicleAddress, uint256 _validVehicleType) internal view
```

_Verify upgrade is compatable with selected vehicle._

### _checkTrophyBalance

```solidity
function _checkTrophyBalance(uint256 _trophyId, uint256 _amount) internal view
```

_Check balance of trophyId for msg.sender._

### _checkWhitelistStatus

```solidity
function _checkWhitelistStatus(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bytes32[] _proof) internal view
```

_Verify merkle proof for user and check if allocation has been claimed._

### _checkBeforeEquip

```solidity
function _checkBeforeEquip(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view
```

_Check used for ownership and validity when equipping upgrades._

### getEquippedUpgrades

```solidity
function getEquippedUpgrades(address _vehicleAddress, uint256 _vehicleId) public view returns (struct SmolChopShopState.Vehicle)
```

Get currently equipped upgrades for a vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of vehicle token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.Vehicle | Vehicle struct containing ids of equipped Upgrades for a given vehicle. |

### getAllUnlockedUpgrades

```solidity
function getAllUnlockedUpgrades(address _vehicleAddress, uint256 _vehicleId) public view returns (struct SmolChopShopState.VehicleInventory)
```

Get all upgrades unlocked for a vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of vehicle token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.VehicleInventory | VehicleInventory struct containing arrays of all upgrade ids for each type that have been unlocked for a vehicle. |

### getUpgradeInfo

```solidity
function getUpgradeInfo(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) public view returns (struct SmolChopShopState.Upgrade)
```

Get information about an upgrade by id and type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.Upgrade | Upgrade struct containing all information about an upgrade. |

### getUpgradesForSale

```solidity
function getUpgradesForSale(enum SmolChopShopState.UpgradeType _upgradeType) public view returns (uint256[])
```

Check which id numbers of a specific upgrade type are currently for sale.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | Array of upgrade id numbers that can be bought for a specific upgrade type. |

### __SmolChopShopView_init

```solidity
function __SmolChopShopView_init() internal
```

## ISmolFarm

## SmolFarm

### initialize

```solidity
function initialize() external
```

### setRewards

```solidity
function setRewards(uint256[] _rewardIds, uint32[] _rewardOdds) external
```

### stakeSmol

```solidity
function stakeSmol(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _stakeSmol

```solidity
function _stakeSmol(contract IERC721 smol, uint256 _tokenId) private
```

### unstakeSmol

```solidity
function unstakeSmol(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _unstakeSmol

```solidity
function _unstakeSmol(contract IERC721 smol, uint256 _tokenId) private
```

### startClaimingRewards

```solidity
function startClaimingRewards(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _startClaimingReward

```solidity
function _startClaimingReward(contract IERC721 smol, uint256 _tokenId) private
```

### finishClaimingRewards

```solidity
function finishClaimingRewards(uint256[] _brainsTokens, uint256[] _bodiesTokens) external
```

### _finishClaimingReward

```solidity
function _finishClaimingReward(contract IERC721 smol, uint256 _tokenId) private
```

### _claimReward

```solidity
function _claimReward(contract IERC721 smol, uint256 _tokenId, uint256 _randomNumber) private
```

### numberOfRewardsToClaim

```solidity
function numberOfRewardsToClaim(address smolAddress, uint256 _tokenId) public view returns (uint256)
```

### setTimeForReward

```solidity
function setTimeForReward(uint256 _rewardTime) external
```

### setEndTimeForEmissions

```solidity
function setEndTimeForEmissions(uint256 _endTime) external
```

### ownsToken

```solidity
function ownsToken(address _collection, address _owner, uint256 _tokenId) external view returns (bool)
```

### tokensOfOwner

```solidity
function tokensOfOwner(address _collection, address _owner) external view returns (uint256[])
```

## SmolFarmContracts

### __SmolFarmContracts_init

```solidity
function __SmolFarmContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _treasures, address _smolBrains, address _smolBodies, address _smolLand, address _randomizer) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

## SmolFarmState

### SmolStaked

```solidity
event SmolStaked(address _owner, address _smolAddress, uint256 _tokenId, uint256 _stakeTime)
```

### SmolUnstaked

```solidity
event SmolUnstaked(address _owner, address _smolAddress, uint256 _tokenId)
```

### StartClaiming

```solidity
event StartClaiming(address _owner, address _smolAddress, uint256 _tokenId, uint256 _requestId, uint256 _numberRewards)
```

### RewardClaimed

```solidity
event RewardClaimed(address _owner, address _smolAddress, uint256 _tokenId, uint256 _claimedRewardId, uint256 _amount)
```

### treasures

```solidity
contract ISmolTreasures treasures
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### smolBrains

```solidity
contract IERC721 smolBrains
```

### smolBodies

```solidity
contract IERC721 smolBodies
```

### smolLand

```solidity
contract IERC721 smolLand
```

### userToTokensStaked

```solidity
mapping(address => mapping(address => struct EnumerableSetUpgradeable.UintSet)) userToTokensStaked
```

### tokenIdToStakeStartTime

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToStakeStartTime
```

### tokenIdToRewardsClaimed

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsClaimed
```

### tokenIdToRequestId

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRequestId
```

### tokenIdToRewardsInProgress

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsInProgress
```

### rewardOptions

```solidity
uint256[] rewardOptions
```

### rewardIdToOdds

```solidity
mapping(uint256 => uint32) rewardIdToOdds
```

### _timeForReward

```solidity
uint256 _timeForReward
```

### _endEmissionTime

```solidity
uint256 _endEmissionTime
```

### __SmolFarmState_init

```solidity
function __SmolFarmState_init() internal
```

## ISmolFoundersPlots

## SmolFoundersPlots

### initialize

```solidity
function initialize() external
```

### mintPlot

```solidity
function mintPlot() external
```

### setTokenURI

```solidity
function setTokenURI(uint256 _tokenId, string _tokenURI) external
```

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _tokenId) external
```

## SmolFoundersPlotsContracts

### __SmolFoundersPlotsContracts_init

```solidity
function __SmolFoundersPlotsContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _smolLand) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

## SmolFoundersPlotsState

### smolLand

```solidity
contract IERC721 smolLand
```

### tokenIdCounter

```solidity
struct CountersUpgradeable.Counter tokenIdCounter
```

### __SmolFoundersPlotsState_init

```solidity
function __SmolFoundersPlotsState_init() internal
```

## Land

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### landMaxLevel

```solidity
uint256 landMaxLevel
```

_18 decimals_

### levelIQCost

```solidity
uint256 levelIQCost
```

_18 decimals_

### landLevels

```solidity
mapping(uint256 => uint256) landLevels
```

_tokenId => land level_

### LandMint

```solidity
event LandMint(address to, uint256 tokenId)
```

### LandUpgrade

```solidity
event LandUpgrade(uint256 tokenId, uint256 availableLevel)
```

### LandMaxLevel

```solidity
event LandMaxLevel(uint256 landMaxLevel)
```

### LevelIQCost

```solidity
event LevelIQCost(uint256 levelIQCost)
```

### constructor

```solidity
constructor() public
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### canUpgrade

```solidity
function canUpgrade(uint256 _tokenId) public view returns (bool isUpgradeAvailable, uint256 availableLevel)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | tokenId of the land |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| isUpgradeAvailable | bool | true if higher level is available |
| availableLevel | uint256 | what level can land be upgraded to |

### findBiggestBrainIQ

```solidity
function findBiggestBrainIQ(address) public pure returns (uint256 highestIQ)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| highestIQ | uint256 | IQ of the biggest brain |

### upgrade

```solidity
function upgrade(uint256 _tokenId) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | tokenId of the land |

### upgradeSafe

```solidity
function upgradeSafe(uint256 _tokenId) public returns (bool)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setMaxLevel

```solidity
function setMaxLevel(uint256 _landMaxLevel) external
```

### setLevelIQCost

```solidity
function setLevelIQCost(uint256 _levelIQCost) external
```

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

## ISmolRacing

## SmolRacing

### initialize

```solidity
function initialize() external
```

### stakeVehicles

```solidity
function stakeVehicles(struct SmolRacingState.SmolCar[] _cars, struct SmolRacingState.Swolercycle[] _cycles) external
```

### unstakeVehicles

```solidity
function unstakeVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### restakeVehicles

```solidity
function restakeVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### claimRewardsForVehicles

```solidity
function claimRewardsForVehicles(uint256[] _carTokens, uint256[] _cycleTokens) external
```

### ownsVehicle

```solidity
function ownsVehicle(address _collection, address _owner, uint256 _tokenId) external view returns (bool)
```

### vehiclesOfOwner

```solidity
function vehiclesOfOwner(address _collection, address _owner) external view returns (uint256[])
```

### smolsOfOwner

```solidity
function smolsOfOwner(address _collection, address _owner) external view returns (uint256[])
```

### numberOfRacesToClaim

```solidity
function numberOfRacesToClaim(address _vehicleAddress, uint256 _tokenId) public view returns (uint256)
```

### vehicleOddsBoost

```solidity
function vehicleOddsBoost(address _vehicleAddress, uint256 _tokenId) public view returns (uint256)
```

### _stakeVehicle

```solidity
function _stakeVehicle(contract IERC721 _smol, address _vehicleAddress, struct SmolRacingState.Vehicle _vehicle) private
```

### _restakeVehicle

```solidity
function _restakeVehicle(address _vehicleAddress, uint256 _tokenId) private
```

### _unstakeVehicle

```solidity
function _unstakeVehicle(contract IERC721 _smol, address _vehicleAddress, uint256 _tokenId) private
```

### _claimRewardsForVehicle

```solidity
function _claimRewardsForVehicle(address _vehicleAddress, uint256 _tokenId) private
```

### _claimRewards

```solidity
function _claimRewards(uint256 numRewards, address _vehicleAddress, uint256 _tokenId, struct SmolRacingState.RacingInfo _info) private
```

### _claimReward

```solidity
function _claimReward(address _vehicleAddress, uint256 _tokenId, uint32 _boostedOdds, uint256 _randomNumber) private
```

### _calculateBoostOdds

```solidity
function _calculateBoostOdds(address _vehicleAddress, struct SmolRacingState.Vehicle _vehicle) private returns (uint32 boostOdds_)
```

### _getRandomSeedForVehicle

```solidity
function _getRandomSeedForVehicle(address _vehicleAddress, uint256 _tokenId) private view returns (uint256)
```

## SmolRacingAdmin

### __SmolRacingAdmin_init

```solidity
function __SmolRacingAdmin_init() internal
```

### setContracts

```solidity
function setContracts(address _treasures, address _smolBrains, address _smolBodies, address _smolCars, address _swolercycles, address _racingTrophies, address _randomizer) external
```

### setRewards

```solidity
function setRewards(uint256[] _rewardIds, uint32[] _rewardOdds) external
```

### setTimeForReward

```solidity
function setTimeForReward(uint256 _rewardTime) external
```

### setEndTimeForEmissions

```solidity
function setEndTimeForEmissions(uint256 _endTime) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## SmolRacingState

### SmolStaked

```solidity
event SmolStaked(address _owner, address _smolAddress, uint256 _tokenId, uint64 _stakeTime)
```

### StartRacing

```solidity
event StartRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces, uint64[4] _driverIds, uint256 _requestId)
```

### RestartRacing

```solidity
event RestartRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces, uint64[4] _driverIds, uint256 _requestId)
```

### StopRacing

```solidity
event StopRacing(address _owner, address _vehicleAddress, uint256 _tokenId, uint64 _stakeTime, uint8 _totalRaces)
```

### SmolUnstaked

```solidity
event SmolUnstaked(address _owner, address _smolAddress, uint256 _tokenId)
```

### RewardClaimed

```solidity
event RewardClaimed(address _owner, address _vehicleAddress, uint256 _tokenId, uint256 _claimedRewardId, uint256 _amount)
```

### NoRewardEarned

```solidity
event NoRewardEarned(address _owner, address _vehicleAddress, uint256 _tokenId)
```

### racingTrophies

```solidity
contract ISmolRacingTrophies racingTrophies
```

### treasures

```solidity
contract ISmolTreasures treasures
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### smolBrains

```solidity
contract IERC721 smolBrains
```

### smolBodies

```solidity
contract IERC721 smolBodies
```

### smolCars

```solidity
contract IERC721 smolCars
```

### swolercycles

```solidity
contract IERC721 swolercycles
```

### userToVehiclesStaked

```solidity
mapping(address => mapping(address => struct EnumerableSetUpgradeable.UintSet)) userToVehiclesStaked
```

### vehicleIdToVehicleInfo

```solidity
mapping(address => mapping(uint256 => struct SmolRacingState.Vehicle)) vehicleIdToVehicleInfo
```

### vehicleIdToRacingInfo

```solidity
mapping(address => mapping(uint256 => struct SmolRacingState.RacingInfo)) vehicleIdToRacingInfo
```

### tokenIdToRequestId

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRequestId
```

### tokenIdToStakeStartTime

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToStakeStartTime
```

### tokenIdToRewardsClaimed

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsClaimed
```

### tokenIdToRewardsInProgress

```solidity
mapping(address => mapping(uint256 => uint256)) tokenIdToRewardsInProgress
```

### smolTreasureIdToOddsBoost

```solidity
mapping(uint256 => uint32) smolTreasureIdToOddsBoost
```

### ODDS_DENOMINATOR

```solidity
uint32 ODDS_DENOMINATOR
```

### maxOddsBoostAllowed

```solidity
uint32 maxOddsBoostAllowed
```

### additionalSmolBrainBoost

```solidity
uint32 additionalSmolBrainBoost
```

### additionalSmolBodyBoost

```solidity
uint32 additionalSmolBodyBoost
```

### rewardOptions

```solidity
uint256[] rewardOptions
```

### rewardIdToOdds

```solidity
mapping(uint256 => uint32) rewardIdToOdds
```

### timeForReward

```solidity
uint256 timeForReward
```

### endEmissionTime

```solidity
uint256 endEmissionTime
```

### __SmolRacingState_init

```solidity
function __SmolRacingState_init() internal
```

### BoostItem

```solidity
struct BoostItem {
  uint64 treasureId;
  uint64 quantity;
}
```

### BoostItemOdds

```solidity
struct BoostItemOdds {
  uint64 quantityNeededForBoost;
  uint32 oddsBoostPerQuantity;
}
```

### SmolCar

```solidity
struct SmolCar {
  uint64[4] driverIds;
  uint64 carId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### Swolercycle

```solidity
struct Swolercycle {
  uint64[2] driverIds;
  uint64 cycleId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### Vehicle

```solidity
struct Vehicle {
  uint64[4] driverIds;
  uint64 vehicleId;
  uint8 numRaces;
  uint8 numDrivers;
  uint64[] boostTreasureIds;
  uint32[] boostTreasureQuantities;
}
```

### RacingInfo

```solidity
struct RacingInfo {
  uint64 racingStartTime;
  uint8 totalRaces;
  uint8 racesCompleted;
  uint64 lastClaimed;
  uint32 boostedOdds;
}
```

## ISmolRacingTrophies

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

## SmolRacingTrophies

### initialize

```solidity
function initialize() external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `id` and `amount` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) public
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) public
```

### setBaseUri

```solidity
function setBaseUri(string _baseURI) external
```

### uri

```solidity
function uri(uint256 typeId) public view returns (string)
```

## SmolRacingTrophiesState

### BaseUriChanged

```solidity
event BaseUriChanged(string _newUri)
```

### baseURI

```solidity
string baseURI
```

### __SmolRacingTrophiesState_init

```solidity
function __SmolRacingTrophiesState_init() internal
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

## Swolercycle

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SwolercycleMint

```solidity
event SwolercycleMint(address to, uint256 tokenId, string tokenURI)
```

### constructor

```solidity
constructor() public
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

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

## SwolercycleMinterControl

### SWOLERCYCLE_OWNER_ROLE

```solidity
bytes32 SWOLERCYCLE_OWNER_ROLE
```

### SWOLERCYCLE_MINTER_ROLE

```solidity
bytes32 SWOLERCYCLE_MINTER_ROLE
```

### onlyOwner

```solidity
modifier onlyOwner()
```

### onlyMinter

```solidity
modifier onlyMinter()
```

### constructor

```solidity
constructor() internal
```

### grantMinter

```solidity
function grantMinter(address _minter) external
```

### isMinter

```solidity
function isMinter(address _minter) public view returns (bool)
```

### grantOwner

```solidity
function grantOwner(address _owner) external
```

### isOwner

```solidity
function isOwner(address _owner) public view returns (bool)
```

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

## SmolTraitShop

Store front for users to purchase and equip traits for Smol Brains.

### buyTrait

```solidity
function buyTrait(uint256 _smolId, uint256 _traitId) external
```

Unlock individual trait for a Smol Brain.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### buyTraitBatch

```solidity
function buyTraitBatch(uint256[] _smolIds, uint256[] _traitIds) external
```

Unlock individual trait for multiple Smols or multiple traits for single Smol. Can be any trait slot or even multiples of one trait type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolIds | uint256[] | Array of id numbers for selected Smol Brain tokens. |
| _traitIds | uint256[] | Array of id numbers for selected traits. |

### buyExclusiveTrait

```solidity
function buyExclusiveTrait(bytes32[] _proof, uint256 _smolId, uint256 _traitId) external
```

Unlock trait that is gated by a whitelist. Only unlockable with valid Merkle proof.

_Will revert if trait has no Merkle root set or if trait is marked special._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored Merkle root. |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### specialEventClaim

```solidity
function specialEventClaim(bytes32[] _proof, uint256 _smolId, uint256 _traitId) external
```

Unlock a limited offer trait for a specific limited offer group that is gated by a whitelist. Only unlockable with valid Merkle proof.

_Will revert if trait has no Merkle root set, if trait is not apart of a limited offer with valid subgroup, if user has claimed any other trait in the same tier._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored Merkle root. |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### equipTraits

```solidity
function equipTraits(uint256[] _smolId, struct ISmolTraitShop.SmolBrain[] _traitsToEquip) external
```

Equip sets of unlocked traits for any number of Smol Brains in one tx.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256[] | Array of id numbers for selected Smol Brain tokens. |
| _traitsToEquip | struct ISmolTraitShop.SmolBrain[] | Array of SmolBrain structs with trait ids to be equipped to each smol. |

### initialize

```solidity
function initialize() external
```

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

## SmolTraitShopInternal

Internal functions used to purchase and equip traits for Smol Brains.

### _buy

```solidity
function _buy(address _userAddress, uint256 _smolId, uint256 _traitId) internal
```

_Used by all buy functions except for traits that require merkle proof verification._

### _buyMerkle

```solidity
function _buyMerkle(address _userAddress, bytes32[] _proof, uint256 _smolId, uint256 _traitId, uint256 _limitedOfferId, uint256 _groupId) internal
```

_Used for buy/claim functions that require merkle proof verification._

### _unlockTrait

```solidity
function _unlockTrait(address _userAddress, uint256 _price, uint256 _smolId, uint256 _traitId) internal
```

_Internal helper function that unlocks an upgrade for specified vehicle and emits UpgradeUnlocked event._

### _equipSet

```solidity
function _equipSet(address _userAddress, uint256 _smolId, struct ISmolTraitShop.SmolBrain _traitsToEquip) internal
```

_Equip a set of unlocked traits for single Smol Brain._

### __SmolTraitShopInternal_init

```solidity
function __SmolTraitShopInternal_init() internal
```

## SmolTraitShopState

Shared storage layout for SmolTraitShop.

### TRAIT_LIMITED_OFFER_ID_BIT_OFFSET

```solidity
uint256 TRAIT_LIMITED_OFFER_ID_BIT_OFFSET
```

### TRAIT_TRAIT_TYPE_BIT_OFFSET

```solidity
uint256 TRAIT_TRAIT_TYPE_BIT_OFFSET
```

### TRAIT_TYPE_OFFSET

```solidity
uint256 TRAIT_TYPE_OFFSET
```

### TRAIT_GROUP_ID_BIT_OFFSET

```solidity
uint256 TRAIT_GROUP_ID_BIT_OFFSET
```

### smolBrains

```solidity
contract IERC721 smolBrains
```

### magicToken

```solidity
contract IERC20Upgradeable magicToken
```

### treasuryAddress

```solidity
address treasuryAddress
```

### userAllocationClaimed

```solidity
mapping(address => mapping(uint256 => bool)) userAllocationClaimed
```

### userLimitedOfferAllocationClaimed

```solidity
mapping(address => mapping(uint256 => mapping(uint256 => bool))) userLimitedOfferAllocationClaimed
```

### smolLimitedOfferAllocationClaimed

```solidity
mapping(uint256 => mapping(uint256 => mapping(uint256 => bool))) smolLimitedOfferAllocationClaimed
```

### limitedOfferToGroupToIds

```solidity
mapping(uint256 => mapping(uint256 => struct EnumerableSetUpgradeable.UintSet)) limitedOfferToGroupToIds
```

### latestLimitedOffer

```solidity
uint256 latestLimitedOffer
```

### baseURI

```solidity
mapping(enum ISmolTraitShop.TraitType => string) baseURI
```

### suffixURI

```solidity
mapping(enum ISmolTraitShop.TraitType => string) suffixURI
```

### traitTypeToLastId

```solidity
mapping(enum ISmolTraitShop.TraitType => uint256) traitTypeToLastId
```

### traitToInfo

```solidity
mapping(uint256 => struct ISmolTraitShop.Trait) traitToInfo
```

### traitIdsForSale

```solidity
struct EnumerableSetUpgradeable.UintSet traitIdsForSale
```

### traitIdsOwnedBySmol

```solidity
mapping(uint256 => struct EnumerableSetUpgradeable.UintSet) traitIdsOwnedBySmol
```

### smolToEquippedTraits

```solidity
mapping(uint256 => struct ISmolTraitShop.SmolBrain) smolToEquippedTraits
```

### _getLimitedOfferIdAndGroupForTrait

```solidity
function _getLimitedOfferIdAndGroupForTrait(uint256 _traitId) internal view returns (uint32 limitedOfferId_, uint8 groupId_)
```

### _getTypeForTrait

```solidity
function _getTypeForTrait(uint256 _traitId) internal view returns (enum ISmolTraitShop.TraitType traitType_)
```

### __SmolTraitShopState_init

```solidity
function __SmolTraitShopState_init() internal
```

## SmolTraitShopView

External and internal view functions used by SmolTraitShop.

### getEquippedTraits

```solidity
function getEquippedTraits(uint256 _smolId) external view returns (struct ISmolTraitShop.SmolBrain)
```

Get SmolBrain struct with all currently equipped traits for selected smol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ISmolTraitShop.SmolBrain | SmolBrain struct with trait id numbers that have been equipped to a smol. |

### getTraitInfo

```solidity
function getTraitInfo(uint256 _traitId) external view returns (struct ISmolTraitShop.Trait)
```

Get all info for a specific trait.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ISmolTraitShop.Trait | Trait struct containing all info for a selected trait id. |

### getTraitsOwnedBySmol

```solidity
function getTraitsOwnedBySmol(uint256 _smolId) external view returns (uint256[])
```

Get all trait ids for a trait type that are currently owned by selected smol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | Array containing trait id numbers that have been unlocked for smol. |

### getTraitsForSale

```solidity
function getTraitsForSale(enum ISmolTraitShop.TraitType _traitType) external view returns (uint256[] traitTypeForSale_)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| traitTypeForSale_ | uint256[] | containing trait id numbers that can be bought for that trait type. |

### getAllTieredTraitsPerEvent

```solidity
function getAllTieredTraitsPerEvent(uint256 _limitedOfferId) external view returns (uint256[] subgroup1, uint256[] subgroup2, uint256[] subgroup3)
```

Get all trait ids that have been added to subgroups for a given event number and trait type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _limitedOfferId | uint256 | Number associated with the event where trait subgroups were decided. (1 = smoloween) |

### _checkBeforePurchase

```solidity
function _checkBeforePurchase(address _userAddress, uint256 _smolId, uint256 _traitId) internal view returns (uint256 price)
```

_Various checks that must be made before any trait purchase._

### _checkSmolOwnership

```solidity
function _checkSmolOwnership(address _userAddress, uint256 _smolId) internal view
```

_Verify user is owner of smol._

### _checkMagicBalance

```solidity
function _checkMagicBalance(address _userAddress, uint256 _amount) internal view
```

_Check balance of magic for user._

### _checkWhitelistStatus

```solidity
function _checkWhitelistStatus(address _userAddress, bytes32[] _proof, uint256 _traitId, uint256 _limitedOfferId, uint256 _groupId) internal view
```

_Verify merkle proof for user and check if allocation has been claimed._

### _checkBeforeEquip

```solidity
function _checkBeforeEquip(uint256 _smolId, uint256 _traitId) internal view
```

_Check used for ownership when equipping upgrades._

### _isTraitInType

```solidity
function _isTraitInType(enum ISmolTraitShop.TraitType _traitType, uint256 _traitId) internal pure returns (bool isInType_)
```

### __SmolTraitShopView_init

```solidity
function __SmolTraitShopView_init() internal
```

## ISmolTreasureMetadataStore

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

## SmolTreasureMetadataStore

### initialize

```solidity
function initialize() external
```

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, struct TreasureMetadata[] _metadatas) external
```

### hasMetadataForTreasureId

```solidity
function hasMetadataForTreasureId(uint256 _treasureId) external view returns (bool)
```

### getRandomTreasureForTier

```solidity
function getRandomTreasureForTier(uint8 _tier, uint256 _randomNumber) external view returns (uint256)
```

### getMetadataForTreasureId

```solidity
function getMetadataForTreasureId(uint256 _treasureId) external view returns (struct TreasureMetadata)
```

## SmolTreasureMetadataStoreState

### tierToMintableTreasureIds

```solidity
mapping(uint8 => struct EnumerableSetUpgradeable.UintSet) tierToMintableTreasureIds
```

### treasureIdToMetadata

```solidity
mapping(uint256 => struct TreasureMetadata) treasureIdToMetadata
```

### __SmolTreasureMetadataStoreState_init

```solidity
function __SmolTreasureMetadataStoreState_init() internal
```

## TreasureMetadata

```solidity
struct TreasureMetadata {
  enum TreasureCategory category;
  uint8 tier;
  uint32 craftingBreakOdds;
  bool isMintable;
  uint256 consumableIdDropWhenBreak;
}
```

## TreasureCategory

```solidity
enum TreasureCategory {
  NONE,
  EARTH,
  EXTRA,
  FIRE,
  SPIRIT,
  WATER,
  WIND
}
```

## ISmolTreasures

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) external
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

## SmolTreasures

### initialize

```solidity
function initialize() external virtual
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `id` and `amount` arrays will be 1.

Calling conditions (for each `id` and `amount` pair):

- When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
of token type `id` will be  transferred to `to`.
- When `from` is zero, `amount` tokens of token type `id` will be minted
for `to`.
- when `to` is zero, `amount` of ``from``'s tokens of token type `id`
will be burned.
- `from` and `to` are never both zero.
- `ids` and `amounts` have the same, non-zero length.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external virtual
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _id, uint256 _amount) external
```

### adminSafeBatchTransferFrom

```solidity
function adminSafeBatchTransferFrom(address _from, address _to, uint256[] _ids, uint256[] _amounts) external
```

### burn

```solidity
function burn(address account, uint256 id, uint256 value) public
```

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) public
```

### setBaseUri

```solidity
function setBaseUri(string _baseURI) external
```

### getNameOfTreasure

```solidity
function getNameOfTreasure(uint256 typeId) private pure returns (string)
```

### uri

```solidity
function uri(uint256 typeId) public view returns (string)
```

## SmolTreasuresState

### BaseUriChanged

```solidity
event BaseUriChanged(string _newUri)
```

### baseURI

```solidity
string baseURI
```

### __SmolTreasuresState_init

```solidity
function __SmolTreasuresState_init() internal
```

## ITemplate

## Template

### initialize

```solidity
function initialize() external
```

## TemplateContracts

### __TemplateContracts_init

```solidity
function __TemplateContracts_init() internal
```

### setContracts

```solidity
function setContracts(address _randomizerAddress) external
```

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

## TemplateState

### randomizer

```solidity
contract IRandomizer randomizer
```

### __TemplateState_init

```solidity
function __TemplateState_init() internal
```

## GymMock

### WEEK

```solidity
uint256 WEEK
```

### platesPerWeek

```solidity
uint256 platesPerWeek
```

_18 decimals_

### totalPlatesStored

```solidity
uint256 totalPlatesStored
```

_18 decimals_

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

_unix timestamp_

### smolBodiesSupply

```solidity
uint256 smolBodiesSupply
```

### smolBodies

```solidity
contract SmolBodiesMock smolBodies
```

### timestampJoined

```solidity
mapping(uint256 => uint256) timestampJoined
```

### JoinGym

```solidity
event JoinGym(uint256 tokenId)
```

### DropGym

```solidity
event DropGym(uint256 tokenId, uint256 plates, uint256 level)
```

### SetPlatesPerWeek

```solidity
event SetPlatesPerWeek(uint256 platesPerWeek)
```

### SmolBodiesSet

```solidity
event SmolBodiesSet(address smolBodies)
```

### initialize

```solidity
function initialize() external
```

### onlySmolBodyOwner

```solidity
modifier onlySmolBodyOwner(uint256 _tokenId)
```

### atGym

```solidity
modifier atGym(uint256 _tokenId, bool expectedAtGym)
```

### updateTotalPlates

```solidity
modifier updateTotalPlates(bool isJoining)
```

### totalPlates

```solidity
function totalPlates() public view returns (uint256)
```

### platesEarned

```solidity
function platesEarned(uint256 _tokenId) public view returns (uint256 plates)
```

### isAtGym

```solidity
function isAtGym(uint256 _tokenId) public view returns (bool)
```

### join

```solidity
function join(uint256 _tokenId) external
```

### drop

```solidity
function drop(uint256 _tokenId) external
```

### setSmolBodies

```solidity
function setSmolBodies(address _smolBodies) external
```

### setPlatesPerWeek

```solidity
function setPlatesPerWeek(uint256 _platesPerWeek) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _platesPerWeek | uint256 | Number of plate points to earn a week, 18 decimals |

## Mock1155

### constructor

```solidity
constructor() public
```

### mint

```solidity
function mint(address _account, uint256 _id, uint256 _amount, bytes _data) external
```

## Mock20

### constructor

```solidity
constructor() public
```

### mint

```solidity
function mint(address _account, uint256 _amount) external
```

### burn

```solidity
function burn(address _from, uint256 _amount) external
```

## Mock20Upgradeable

### initialize

```solidity
function initialize() public
```

### mint

```solidity
function mint(address to, uint256 amount) external
```

### burn

```solidity
function burn(address _from, uint256 _amount) external
```

## Mock721

### constructor

```solidity
constructor() public
```

### safeMint

```solidity
function safeMint(address _to, uint256 _tokenId) external
```

## SchoolMock

### WEEK

```solidity
uint256 WEEK
```

### iqPerWeek

```solidity
uint256 iqPerWeek
```

_18 decimals_

### totalIqStored

```solidity
uint256 totalIqStored
```

_18 decimals_

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

_unix timestamp_

### smolBrainSupply

```solidity
uint256 smolBrainSupply
```

### smolBrain

```solidity
contract SmolBrainsMock smolBrain
```

### timestampJoined

```solidity
mapping(uint256 => uint256) timestampJoined
```

### JoinSchool

```solidity
event JoinSchool(uint256 tokenId)
```

### DropSchool

```solidity
event DropSchool(uint256 tokenId)
```

### SetIqPerWeek

```solidity
event SetIqPerWeek(uint256 iqPerWeek)
```

### SmolBrainSet

```solidity
event SmolBrainSet(address smolBrain)
```

### initialize

```solidity
function initialize() external
```

### onlySmolBrainOwner

```solidity
modifier onlySmolBrainOwner(uint256 _tokenId)
```

### atSchool

```solidity
modifier atSchool(uint256 _tokenId, bool expectedAtSchool)
```

### updateTotalIQ

```solidity
modifier updateTotalIQ(bool isJoining)
```

### totalIQ

```solidity
function totalIQ() public view returns (uint256)
```

### iqEarned

```solidity
function iqEarned(uint256 _tokenId) public view returns (uint256 iq)
```

### isAtSchool

```solidity
function isAtSchool(uint256 _tokenId) public view returns (bool)
```

### join

```solidity
function join(uint256 _tokenId) external
```

### drop

```solidity
function drop(uint256 _tokenId) external
```

### setSmolBrain

```solidity
function setSmolBrain(address _smolBrain) external
```

### setIqPerWeek

```solidity
function setIqPerWeek(uint256 _iqPerWeek) external
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _iqPerWeek | uint256 | NUmber of IQ points to earn a week, 18 decimals |

## SmolBodiesMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external
```

### getGender

```solidity
function getGender(uint256 _tokenId) public pure returns (uint256)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### setURI

```solidity
function setURI() external
```

### getLevel

```solidity
function getLevel(uint256) public pure returns (uint256 level)
```

### scanPlates

```solidity
function scanPlates(uint256) public pure returns (uint256 plates)
```

### averagePlates

```solidity
function averagePlates() public pure returns (uint256)
```

## SmolBodiesPetsMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolPetMint

```solidity
event SmolPetMint(address to, uint256 tokenId, string tokenURI)
```

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overriden in child contracts._

## SmolBrainsMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external
```

### getGender

```solidity
function getGender(uint256 _tokenId) public pure returns (uint256)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### setURI

```solidity
function setURI() external
```

### scanBrain

```solidity
function scanBrain(uint256 _tokenId) public pure returns (uint256 IQ)
```

### brainz

```solidity
function brainz(uint256 _tokenId) public pure returns (uint256 IQ)
```

### averageIQ

```solidity
function averageIQ() public pure returns (uint256)
```

## SmolBrainsPetsMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolPetMint

```solidity
event SmolPetMint(address to, uint256 tokenId, string tokenURI)
```

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overriden in child contracts._

## SmolCarsMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolCarMint

```solidity
event SmolCarMint(address to, uint256 tokenId, string tokenURI)
```

### initialize

```solidity
function initialize() external
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overriden in child contracts._

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

## SmolLandMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal
```

## SmolTreasuresMock

### initialize

```solidity
function initialize() external virtual
```

### mint

```solidity
function mint(address _to, uint256 _id, uint256 _amount) external virtual
```

## IOwnable

### owner

```solidity
function owner() external view returns (address)
```

