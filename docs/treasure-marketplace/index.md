# Solidity API

## TreasureMarketplace

This contract allows you to buy and sell NFTs from token contracts that are approved by the contract owner.
        Please note that this contract is upgradeable. In the event of a compromised ProxyAdmin contract owner,
        collectable tokens and payments may be at risk. To prevent this, the ProxyAdmin is owned by a multi-sig
        governed by the TreasureDAO council.

_This contract does not store any tokens at any time, it's only collects details "the sale" and approvals
        from both parties and preforms non-custodial transaction by transfering NFT from owner to buying and payment
        token from buying to NFT owner._

### ListingOrBid

```solidity
struct ListingOrBid {
  uint64 quantity;
  uint128 pricePerItem;
  uint64 expirationTime;
  address paymentTokenAddress;
}
```

### CollectionOwnerFee

```solidity
struct CollectionOwnerFee {
  uint32 fee;
  address recipient;
}
```

### TokenApprovalStatus

```solidity
enum TokenApprovalStatus {
  NOT_APPROVED,
  ERC_721_APPROVED,
  ERC_1155_APPROVED
}
```

### TREASURE_MARKETPLACE_ADMIN_ROLE

```solidity
bytes32 TREASURE_MARKETPLACE_ADMIN_ROLE
```

TREASURE_MARKETPLACE_ADMIN_ROLE role hash

### INTERFACE_ID_ERC721

```solidity
bytes4 INTERFACE_ID_ERC721
```

ERC165 interface signatures

### INTERFACE_ID_ERC1155

```solidity
bytes4 INTERFACE_ID_ERC1155
```

### BASIS_POINTS

```solidity
uint256 BASIS_POINTS
```

the denominator for portion calculation, i.e. how many basis points are in 100%

### MAX_FEE

```solidity
uint256 MAX_FEE
```

the maximum fee which the owner may set (in units of basis points)

### MAX_COLLECTION_FEE

```solidity
uint256 MAX_COLLECTION_FEE
```

the maximum fee which the collection owner may set

### MIN_PRICE

```solidity
uint256 MIN_PRICE
```

the minimum price for which any item can be sold

### paymentToken

```solidity
contract IERC20Upgradeable paymentToken
```

the default token that is used for marketplace sales and fee payments. Can be overridden by collectionToTokenAddress.

### fee

```solidity
uint256 fee
```

fee portion (in basis points) for each sale, (e.g. a value of 100 is 100/10000 = 1%). This is the fee if no collection owner fee is set.

### feeReceipient

```solidity
address feeReceipient
```

address that receives fees

### listings

```solidity
mapping(address => mapping(uint256 => mapping(address => struct TreasureMarketplace.ListingOrBid))) listings
```

mapping for listings, maps: nftAddress => tokenId => offeror

### tokenApprovals

```solidity
mapping(address => enum TreasureMarketplace.TokenApprovalStatus) tokenApprovals
```

NFTs which the owner has approved to be sold on the marketplace, maps: nftAddress => status

### feeWithCollectionOwner

```solidity
uint256 feeWithCollectionOwner
```

fee portion (in basis points) for each sale. This is used if a separate fee has been set for the collection owner.

### collectionToCollectionOwnerFee

```solidity
mapping(address => struct TreasureMarketplace.CollectionOwnerFee) collectionToCollectionOwnerFee
```

Maps the collection address to the fees which the collection owner collects. Some collections may not have a seperate fee, such as those owned by the Treasure DAO.

### collectionToPaymentToken

```solidity
mapping(address => address) collectionToPaymentToken
```

Maps the collection address to the payment token that will be used for purchasing. If the address is the zero address, it will use the default paymentToken.

### weth

```solidity
contract IERC20Upgradeable weth
```

The address for weth.

### tokenBids

```solidity
mapping(address => mapping(uint256 => mapping(address => struct TreasureMarketplace.ListingOrBid))) tokenBids
```

mapping for token bids (721/1155): nftAddress => tokneId => offeror

### collectionBids

```solidity
mapping(address => mapping(address => struct TreasureMarketplace.ListingOrBid)) collectionBids
```

mapping for collection level bids (721 only): nftAddress => offeror

### areBidsActive

```solidity
bool areBidsActive
```

Indicates if bid related functions are active.

### priceTrackerAddress

```solidity
address priceTrackerAddress
```

Address of the contract that tracks sales and prices of collections.

### UpdateFee

```solidity
event UpdateFee(uint256 fee)
```

The fee portion was updated

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fee | uint256 | new fee amount (in units of basis points) |

### UpdateFeeWithCollectionOwner

```solidity
event UpdateFeeWithCollectionOwner(uint256 fee)
```

The fee portion was updated for collections that have a collection owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fee | uint256 | new fee amount (in units of basis points) |

### UpdateCollectionOwnerFee

```solidity
event UpdateCollectionOwnerFee(address _collection, address _recipient, uint256 _fee)
```

A collection's fees have changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collection | address | The collection |
| _recipient | address | The recipient of the fees. If the address is 0, the collection fees for this collection have been removed. |
| _fee | uint256 | The fee amount (in units of basis points) |

### UpdateFeeRecipient

```solidity
event UpdateFeeRecipient(address feeRecipient)
```

The fee recipient was updated

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| feeRecipient | address | the new recipient to get fees |

### TokenApprovalStatusUpdated

```solidity
event TokenApprovalStatusUpdated(address nft, enum TreasureMarketplace.TokenApprovalStatus status, address paymentToken)
```

The approval status for a token was updated

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nft | address | which token contract was updated |
| status | enum TreasureMarketplace.TokenApprovalStatus | the new status |
| paymentToken | address | the token that will be used for payments for this collection |

### TokenBidCreatedOrUpdated

```solidity
event TokenBidCreatedOrUpdated(address bidder, address nftAddress, uint256 tokenId, uint64 quantity, uint128 pricePerItem, uint64 expirationTime, address paymentToken)
```

### CollectionBidCreatedOrUpdated

```solidity
event CollectionBidCreatedOrUpdated(address bidder, address nftAddress, uint64 quantity, uint128 pricePerItem, uint64 expirationTime, address paymentToken)
```

### TokenBidCancelled

```solidity
event TokenBidCancelled(address bidder, address nftAddress, uint256 tokenId)
```

### CollectionBidCancelled

```solidity
event CollectionBidCancelled(address bidder, address nftAddress)
```

### BidAccepted

```solidity
event BidAccepted(address seller, address bidder, address nftAddress, uint256 tokenId, uint64 quantity, uint128 pricePerItem, address paymentToken, enum BidType bidType)
```

### ItemListed

```solidity
event ItemListed(address seller, address nftAddress, uint256 tokenId, uint64 quantity, uint128 pricePerItem, uint64 expirationTime, address paymentToken)
```

An item was listed for sale

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seller | address | the offeror of the item |
| nftAddress | address | which token contract holds the offered token |
| tokenId | uint256 | the identifier for the offered token |
| quantity | uint64 | how many of this token identifier are offered (or 1 for a ERC-721 token) |
| pricePerItem | uint128 | the price (in units of the paymentToken) for each token offered |
| expirationTime | uint64 | UNIX timestamp after when this listing expires |
| paymentToken | address | the token used to list this item |

### ItemUpdated

```solidity
event ItemUpdated(address seller, address nftAddress, uint256 tokenId, uint64 quantity, uint128 pricePerItem, uint64 expirationTime, address paymentToken)
```

An item listing was updated

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seller | address | the offeror of the item |
| nftAddress | address | which token contract holds the offered token |
| tokenId | uint256 | the identifier for the offered token |
| quantity | uint64 | how many of this token identifier are offered (or 1 for a ERC-721 token) |
| pricePerItem | uint128 | the price (in units of the paymentToken) for each token offered |
| expirationTime | uint64 | UNIX timestamp after when this listing expires |
| paymentToken | address | the token used to list this item |

### ItemCanceled

```solidity
event ItemCanceled(address seller, address nftAddress, uint256 tokenId)
```

An item is no longer listed for sale

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seller | address | former offeror of the item |
| nftAddress | address | which token contract holds the formerly offered token |
| tokenId | uint256 | the identifier for the formerly offered token |

### ItemSold

```solidity
event ItemSold(address seller, address buyer, address nftAddress, uint256 tokenId, uint64 quantity, uint128 pricePerItem, address paymentToken)
```

A listed item was sold

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seller | address | the offeror of the item |
| buyer | address | the buyer of the item |
| nftAddress | address | which token contract holds the sold token |
| tokenId | uint256 | the identifier for the sold token |
| quantity | uint64 | how many of this token identifier where sold (or 1 for a ERC-721 token) |
| pricePerItem | uint128 | the price (in units of the paymentToken) for each token sold |
| paymentToken | address | the payment token that was used to pay for this item |

### UpdateSalesTracker

```solidity
event UpdateSalesTracker(address _priceTrackerAddress)
```

The sales tracker contract was update

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _priceTrackerAddress | address | the new address to call for sales price tracking |

### constructor

```solidity
constructor() public
```

### initialize

```solidity
function initialize(uint256 _initialFee, address _initialFeeRecipient, contract IERC20Upgradeable _initialPaymentToken) external
```

Perform initial contract setup

_The initializer modifier ensures this is only called once, the owner should confirm this was properly
        performed before publishing this contract address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _initialFee | uint256 | fee to be paid on each sale, in basis points |
| _initialFeeRecipient | address | wallet to collets fees |
| _initialPaymentToken | contract IERC20Upgradeable | address of the token that is used for settlement |

### createListing

```solidity
function createListing(address _nftAddress, uint256 _tokenId, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken) external
```

Creates an item listing. You must authorize this marketplace with your item's token contract to list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftAddress | address | which token contract holds the offered token |
| _tokenId | uint256 | the identifier for the offered token |
| _quantity | uint64 | how many of this token identifier are offered (or 1 for a ERC-721 token) |
| _pricePerItem | uint128 | the price (in units of the paymentToken) for each token offered |
| _expirationTime | uint64 | UNIX timestamp after when this listing expires |
| _paymentToken | address |  |

### updateListing

```solidity
function updateListing(address _nftAddress, uint256 _tokenId, uint64 _newQuantity, uint128 _newPricePerItem, uint64 _newExpirationTime, address _paymentToken) external
```

Updates an item listing

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftAddress | address | which token contract holds the offered token |
| _tokenId | uint256 | the identifier for the offered token |
| _newQuantity | uint64 | how many of this token identifier are offered (or 1 for a ERC-721 token) |
| _newPricePerItem | uint128 | the price (in units of the paymentToken) for each token offered |
| _newExpirationTime | uint64 | UNIX timestamp after when this listing expires |
| _paymentToken | address |  |

### createOrUpdateListing

```solidity
function createOrUpdateListing(address _nftAddress, uint256 _tokenId, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken) external
```

### _createListingWithoutEvent

```solidity
function _createListingWithoutEvent(address _nftAddress, uint256 _tokenId, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken) internal
```

Performs the listing and does not emit the event

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftAddress | address | which token contract holds the offered token |
| _tokenId | uint256 | the identifier for the offered token |
| _quantity | uint64 | how many of this token identifier are offered (or 1 for a ERC-721 token) |
| _pricePerItem | uint128 | the price (in units of the paymentToken) for each token offered |
| _expirationTime | uint64 | UNIX timestamp after when this listing expires |
| _paymentToken | address |  |

### cancelListing

```solidity
function cancelListing(address _nftAddress, uint256 _tokenId) external
```

Remove an item listing

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftAddress | address | which token contract holds the offered token |
| _tokenId | uint256 | the identifier for the offered token |

### cancelManyBids

```solidity
function cancelManyBids(struct CancelBidParams[] _cancelBidParams) external
```

### createOrUpdateTokenBid

```solidity
function createOrUpdateTokenBid(address _nftAddress, uint256 _tokenId, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken) external
```

Creates a bid for a particular token.

### createOrUpdateCollectionBid

```solidity
function createOrUpdateCollectionBid(address _nftAddress, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken) external
```

### _createBidWithoutEvent

```solidity
function _createBidWithoutEvent(address _nftAddress, uint64 _quantity, uint128 _pricePerItem, uint64 _expirationTime, address _paymentToken, struct TreasureMarketplace.ListingOrBid _bid) private
```

### acceptCollectionBid

```solidity
function acceptCollectionBid(struct AcceptBidParams _acceptBidParams) external
```

### acceptTokenBid

```solidity
function acceptTokenBid(struct AcceptBidParams _acceptBidParams) external
```

### _acceptBid

```solidity
function _acceptBid(struct AcceptBidParams _acceptBidParams, enum BidType _bidType) private
```

### buyItems

```solidity
function buyItems(struct BuyItemParams[] _buyItemParams) external payable
```

Buy multiple listed items. You must authorize this marketplace with your payment token to completed the buy or purchase with eth if it is a weth collection.

### _buyItem

```solidity
function _buyItem(struct BuyItemParams _buyItemParams) private returns (uint256)
```

### _payFees

```solidity
function _payFees(struct TreasureMarketplace.ListingOrBid _listOrBid, uint256 _quantity, address _collectionAddress, address _from, address _to, address _paymentTokenAddress, bool _usingEth) private
```

_pays the fees to the marketplace fee recipient, the collection recipient if one exists, and to the seller of the item._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _listOrBid | struct TreasureMarketplace.ListingOrBid | the item that is being purchased/accepted |
| _quantity | uint256 | the quantity of the item being purchased/accepted |
| _collectionAddress | address | the collection to which this item belongs |
| _from | address |  |
| _to | address |  |
| _paymentTokenAddress | address |  |
| _usingEth | bool |  |

### _transferAmount

```solidity
function _transferAmount(address _from, address _to, uint256 _amount, contract IERC20Upgradeable _paymentToken, bool _usingEth) private
```

### getPaymentTokenForCollection

```solidity
function getPaymentTokenForCollection(address _collection) public view returns (address)
```

### _getPaymentTokenForListing

```solidity
function _getPaymentTokenForListing(struct TreasureMarketplace.ListingOrBid listedItem) private view returns (address)
```

### setFee

```solidity
function setFee(uint256 _newFee, uint256 _newFeeWithCollectionOwner) public
```

Updates the fee amount which is collected during sales, for both collections with and without owner specific fees.

_This is callable only by the owner. Both fees may not exceed MAX_FEE_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newFee | uint256 | the updated fee amount is basis points |
| _newFeeWithCollectionOwner | uint256 |  |

### setCollectionOwnerFee

```solidity
function setCollectionOwnerFee(address _collectionAddress, struct TreasureMarketplace.CollectionOwnerFee _collectionOwnerFee) external
```

Updates the fee amount which is collected during sales fro a specific collection

_This is callable only by the owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collectionAddress | address | The collection in question. This must be whitelisted. |
| _collectionOwnerFee | struct TreasureMarketplace.CollectionOwnerFee | The fee and recipient for the collection. If the 0 address is passed as the recipient, collection specific fees will not be collected. |

### setFeeRecipient

```solidity
function setFeeRecipient(address _newFeeRecipient) public
```

Updates the fee recipient which receives fees during sales

_This is callable only by the owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newFeeRecipient | address | the wallet to receive fees |

### setTokenApprovalStatus

```solidity
function setTokenApprovalStatus(address _nft, enum TreasureMarketplace.TokenApprovalStatus _status, address _paymentToken) external
```

Sets a token as an approved kind of NFT or as ineligible for trading

_This is callable only by the owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nft | address | address of the NFT to be approved |
| _status | enum TreasureMarketplace.TokenApprovalStatus | the kind of NFT approved, or NOT_APPROVED to remove approval |
| _paymentToken | address |  |

### setWeth

```solidity
function setWeth(address _wethAddress) external
```

### setPriceTracker

```solidity
function setPriceTracker(address _priceTrackerAddress) public
```

Updates the fee recipient which receives fees during sales

_This is callable only by the owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _priceTrackerAddress | address | the wallet to receive fees |

### toggleAreBidsActive

```solidity
function toggleAreBidsActive() external
```

### pause

```solidity
function pause() external
```

Pauses the marketplace, creatisgn and executing listings is paused

_This is callable only by the owner. Canceling listings is not paused._

### unpause

```solidity
function unpause() external
```

Unpauses the marketplace, all functionality is restored

_This is callable only by the owner._

### whenBiddingActive

```solidity
modifier whenBiddingActive()
```

## BuyItemParams

```solidity
struct BuyItemParams {
  address nftAddress;
  uint256 tokenId;
  address owner;
  uint64 quantity;
  uint128 maxPricePerItem;
  address paymentToken;
  bool usingEth;
}
```

## AcceptBidParams

```solidity
struct AcceptBidParams {
  address nftAddress;
  uint256 tokenId;
  address bidder;
  uint64 quantity;
  uint128 pricePerItem;
  address paymentToken;
}
```

## CancelBidParams

```solidity
struct CancelBidParams {
  enum BidType bidType;
  address nftAddress;
  uint256 tokenId;
}
```

## BidType

```solidity
enum BidType {
  TOKEN,
  COLLECTION
}
```

## TreasureNFTPriceTracker

### treasureMarketplaceContract

```solidity
address treasureMarketplaceContract
```

### legionContract

```solidity
address legionContract
```

### legionMetadata

```solidity
address legionMetadata
```

### collectionToFloorTypeToPriceAvg

```solidity
mapping(address => mapping(enum FloorType => uint256)) collectionToFloorTypeToPriceAvg
```

### initialize

```solidity
function initialize(address _treasureMarketplaceContract, address _legionContract, address _legionMetadata) external
```

Perform initial contract setup

_The initializer modifier ensures this is only called once, the owner should confirm this was properly
        performed before publishing this contract address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _treasureMarketplaceContract | address | address of treasure marketplace |
| _legionContract | address | address of the legion collection |
| _legionMetadata | address |  |

### recordSale

```solidity
function recordSale(address _collection, uint256 _tokenId, uint256 _salePrice) external
```

Record sale price and update floor pricing averages

_If an average does not yet exist, the new average will be _salePrice
        avg will be stored as FloorType.FLOOR unless special sub-floor criteria is met_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collection | address | Address of the collection that had a token sale |
| _tokenId | uint256 | The token sold |
| _salePrice | uint256 | The amount the sale was for |

### getAveragePriceForCollection

```solidity
function getAveragePriceForCollection(address _collection, enum FloorType _floorType) external view returns (uint256)
```

Return the current floor average for a given collection

_Provide a floor type to receive a recorded sub-floor average
        Collections not containing subfloor records should be queried with FloorType.FLOOR_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collection | address | address of collection to get floor price average of |
| _floorType | enum FloorType | the sub-floor average of the given collection |

## ILegionMetadataStore

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256 _tokenId) external view returns (enum LegionGeneration, enum LegionRarity)
```

## LegionRarity

```solidity
enum LegionRarity {
  LEGENDARY,
  RARE,
  SPECIAL,
  UNCOMMON,
  COMMON,
  RECRUIT
}
```

## LegionGeneration

```solidity
enum LegionGeneration {
  GENESIS,
  AUXILIARY,
  RECRUIT
}
```

## ITreasureNFTPriceTracker

### AveragePriceUpdated

```solidity
event AveragePriceUpdated(address _collection, enum FloorType _floorType, uint256 _oldAverage, uint256 _salePrice, uint256 _newAverage)
```

### recordSale

```solidity
function recordSale(address _collection, uint256 _tokenId, uint256 _salePrice) external
```

### getAveragePriceForCollection

```solidity
function getAveragePriceForCollection(address _collection, enum FloorType _floorType) external view returns (uint256)
```

## FloorType

```solidity
enum FloorType {
  FLOOR,
  SUBFLOOR1,
  SUBFLOOR2,
  SUBFLOOR3
}
```

## ERC1155Mintable

### mint

```solidity
function mint(address to, uint256 id, uint256 amount) public
```

## ERC20Mintable

### mint

```solidity
function mint(address _to, uint256 _amount) public
```

## ERC721Mintable

### mint

```solidity
function mint(address to) public
```

_Creates a new token for `to`. Its token ID will be automatically
assigned (and available on the emitted {IERC721-Transfer} event), and the token
URI autogenerated based on the base URI passed at construction.

See {ERC721-_mint}.

Requirements:

- the caller must have the `MINTER_ROLE`._

## LegionMetadataStoreMock

### gen

```solidity
enum LegionGeneration gen
```

### rarity

```solidity
enum LegionRarity rarity
```

### constructor

```solidity
constructor(enum LegionGeneration _gen, enum LegionRarity _rarity) public
```

### genAndRarityForLegion

```solidity
function genAndRarityForLegion(uint256) external view returns (enum LegionGeneration gen_, enum LegionRarity rarity_)
```

## MockWeth

### name

```solidity
string name
```

### symbol

```solidity
string symbol
```

### decimals

```solidity
uint8 decimals
```

### MAX_INT

```solidity
uint256 MAX_INT
```

### Approval

```solidity
event Approval(address src, address guy, uint256 wad)
```

### Transfer

```solidity
event Transfer(address src, address dst, uint256 wad)
```

### Deposit

```solidity
event Deposit(address dst, uint256 wad)
```

### Withdrawal

```solidity
event Withdrawal(address src, uint256 wad)
```

### balanceOf

```solidity
mapping(address => uint256) balanceOf
```

### allowance

```solidity
mapping(address => mapping(address => uint256)) allowance
```

### fallback

```solidity
fallback() external payable
```

### deposit

```solidity
function deposit() public payable
```

### withdraw

```solidity
function withdraw(uint256 wad) public
```

### totalSupply

```solidity
function totalSupply() public view returns (uint256)
```

### approve

```solidity
function approve(address guy, uint256 wad) public returns (bool)
```

### transfer

```solidity
function transfer(address dst, uint256 wad) public returns (bool)
```

### transferFrom

```solidity
function transferFrom(address src, address dst, uint256 wad) public returns (bool)
```

## PlaceholderToken

## ERC1155BaseUpgradeable

### _uri

```solidity
string _uri
```

### __ERC1155BaseUpgradeable_init

```solidity
function __ERC1155BaseUpgradeable_init() internal
```

### uri

```solidity
function uri(uint256 _typeId) public view returns (string)
```

### setUri

```solidity
function setUri(string uri_) external
```

### supportsInterface

```solidity
function supportsInterface(bytes4 _interfaceId) public view returns (bool)
```

## UtilitiesUpgradeable

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

### supportsInterface

```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual returns (bool)
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

## ITroveBadges

### adminMint

```solidity
function adminMint(address _to, uint256 _id) external
```

## TroveBadges

### initialize

```solidity
function initialize() external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal
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

### adminMint

```solidity
function adminMint(address _to, uint256 _id) external
```

## TroveBadgesAdmin

### __TroveBadgesAdmin_init

```solidity
function __TroveBadgesAdmin_init() internal
```

## TroveBadgesState

### BadgeAlreadyClaimed

```solidity
error BadgeAlreadyClaimed(address _claimer, uint256 _tokenId)
```

### __TroveBadgesState_init

```solidity
function __TroveBadgesState_init() internal
```

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

## TroveClaimerAdmin

### __TroveClaimerAdmin_init

```solidity
function __TroveClaimerAdmin_init() internal
```

### setTroveBadges

```solidity
function setTroveBadges(address _badgeAddress) external
```

### setValidator

```solidity
function setValidator(address _validator) external
```

### setBadgeStatus

```solidity
function setBadgeStatus(address _badgeAddress, uint256 _badgeId, bool enabled) external
```

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

## Context

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address payable)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes)
```

## Ownable

_Contract module which provides a basic access control mechanism, where
there is an account (an owner) that can be granted exclusive access to
specific functions.

By default, the owner account will be the one that deploys the contract. This
can later be changed with {transferOwnership}.

This module is used through inheritance. It will make available the modifier
`onlyOwner`, which can be applied to your functions to restrict their use to
the owner._

### _owner

```solidity
address _owner
```

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### constructor

```solidity
constructor(address initialOwner) public
```

_Initializes the contract setting the deployer as the initial owner._

### owner

```solidity
function owner() public view returns (address)
```

_Returns the address of the current owner._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Throws if called by any account other than the owner._

### renounceOwnership

```solidity
function renounceOwnership() public virtual
```

_Leaves the contract without owner. It will not be possible to call
`onlyOwner` functions anymore. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby removing any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public virtual
```

_Transfers ownership of the contract to a new account (`newOwner`).
Can only be called by the current owner._

## Proxy

_This abstract contract provides a fallback function that delegates all calls to another contract using the EVM
instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to
be specified by overriding the virtual {_implementation} function.

Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a
different contract through the {_delegate} function.

The success and return data of the delegated call will be returned back to the caller of the proxy._

### _delegate

```solidity
function _delegate(address implementation) internal
```

_Delegates the current call to `implementation`.

This function does not return to its internall call site, it will return directly to the external caller._

### _implementation

```solidity
function _implementation() internal view virtual returns (address)
```

_This is a virtual function that should be overriden so it returns the address to which the fallback function
and {_fallback} should delegate._

### _fallback

```solidity
function _fallback() internal
```

_Delegates the current call to the address returned by `_implementation()`.

This function does not return to its internall call site, it will return directly to the external caller._

### fallback

```solidity
fallback() external payable
```

_Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other
function in the contract matches the call data._

### receive

```solidity
receive() external payable
```

_Fallback function that delegates calls to the address returned by `_implementation()`. Will run if call data
is empty._

### _beforeFallback

```solidity
function _beforeFallback() internal virtual
```

_Hook that is called before falling back to the implementation. Can happen as part of a manual `_fallback`
call, or as part of the Solidity `fallback` or `receive` functions.

If overriden should call `super._beforeFallback()`._

## ProxyAdmin

_This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an
explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}._

### constructor

```solidity
constructor(address owner) public
```

### getProxyImplementation

```solidity
function getProxyImplementation(contract TransparentUpgradeableProxy proxy) public view returns (address)
```

_Returns the current implementation of `proxy`.

Requirements:

- This contract must be the admin of `proxy`._

### getProxyAdmin

```solidity
function getProxyAdmin(contract TransparentUpgradeableProxy proxy) public view returns (address)
```

_Returns the current admin of `proxy`.

Requirements:

- This contract must be the admin of `proxy`._

### changeProxyAdmin

```solidity
function changeProxyAdmin(contract TransparentUpgradeableProxy proxy, address newAdmin) public
```

_Changes the admin of `proxy` to `newAdmin`.

Requirements:

- This contract must be the current admin of `proxy`._

### upgrade

```solidity
function upgrade(contract TransparentUpgradeableProxy proxy, address implementation) public
```

_Upgrades `proxy` to `implementation`. See {TransparentUpgradeableProxy-upgradeTo}.

Requirements:

- This contract must be the admin of `proxy`._

### upgradeAndCall

```solidity
function upgradeAndCall(contract TransparentUpgradeableProxy proxy, address implementation, bytes data) public payable
```

_Upgrades `proxy` to `implementation` and calls a function on the new implementation. See
{TransparentUpgradeableProxy-upgradeToAndCall}.

Requirements:

- This contract must be the admin of `proxy`._

## TransparentUpgradeableProxy

_This contract implements a proxy that is upgradeable by an admin.

To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector
clashing], which can potentially be used in an attack, this contract uses the
https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two
things that go hand in hand:

1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if
that call matches one of the admin functions exposed by the proxy itself.
2. If the admin calls the proxy, it can access the admin functions, but its calls will never be forwarded to the
implementation. If the admin tries to call a function on the implementation it will fail with an error that says
"admin cannot fallback to proxy target".

These properties mean that the admin account can only be used for admin actions like upgrading the proxy or changing
the admin, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due
to sudden errors when trying to call a function from the proxy implementation.

Our recommendation is for the dedicated account to be an instance of the {ProxyAdmin} contract. If set up this way,
you should think of the `ProxyAdmin` instance as the real administrative inerface of your proxy._

### constructor

```solidity
constructor(address initialLogic, address initialAdmin, bytes _data) public payable
```

_Initializes an upgradeable proxy managed by `_admin`, backed by the implementation at `_logic`, and
optionally initialized with `_data` as explained in {UpgradeableProxy-constructor}._

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```

_Emitted when the admin account has changed._

### _ADMIN_SLOT

```solidity
bytes32 _ADMIN_SLOT
```

_Storage slot with the admin of the contract.
This is the keccak-256 hash of "eip1967.proxy.admin" subtracted by 1, and is
validated in the constructor._

### ifAdmin

```solidity
modifier ifAdmin()
```

_Modifier used internally that will delegate the call to the implementation unless the sender is the admin._

### admin

```solidity
function admin() external returns (address)
```

_Returns the current admin.

NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.

TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the
https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
`0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`_

### implementation

```solidity
function implementation() external returns (address)
```

_Returns the current implementation.

NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.

TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the
https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
`0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`_

### changeAdmin

```solidity
function changeAdmin(address newAdmin) external
```

_Changes the admin of the proxy.

Emits an {AdminChanged} event.

NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}._

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```

_Upgrade the implementation of the proxy.

NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}._

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```

_Upgrade the implementation of the proxy, and then call a function from the new implementation as specified
by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the
proxied contract.

NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}._

### _admin

```solidity
function _admin() internal view returns (address)
```

_Returns the current admin._

### _setAdmin

```solidity
function _setAdmin(address newAdmin) private
```

_Stores a new address in the EIP1967 admin slot._

### _beforeFallback

```solidity
function _beforeFallback() internal virtual
```

_Makes sure the admin cannot access the fallback function. See {Proxy-_beforeFallback}._

## UpgradeableProxy

_This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an
implementation address that can be changed. This address is stored in storage in the location specified by
https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn't conflict with the storage layout of the
implementation behind the proxy.

Upgradeability is only provided internally through {_upgradeTo}. For an externally upgradeable proxy see
{TransparentUpgradeableProxy}._

### constructor

```solidity
constructor(address _logic, bytes _data) public payable
```

_Initializes the upgradeable proxy with an initial implementation specified by `_logic`.

If `_data` is nonempty, it's used as data in a delegate call to `_logic`. This will typically be an encoded
function call, and allows initializating the storage of the proxy like a Solidity constructor._

### Upgraded

```solidity
event Upgraded(address implementation)
```

_Emitted when the implementation is upgraded._

### _IMPLEMENTATION_SLOT

```solidity
bytes32 _IMPLEMENTATION_SLOT
```

_Storage slot with the address of the current implementation.
This is the keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1, and is
validated in the constructor._

### _implementation

```solidity
function _implementation() internal view returns (address impl)
```

_Returns the current implementation address._

### _upgradeTo

```solidity
function _upgradeTo(address newImplementation) internal
```

_Upgrades the proxy to a new implementation.

Emits an {Upgraded} event._

### _setImplementation

```solidity
function _setImplementation(address newImplementation) private
```

_Stores a new address in the EIP1967 implementation slot._

## Address

_Collection of functions related to the address type_

### isContract

```solidity
function isContract(address account) internal view returns (bool)
```

_Returns true if `account` is a contract.

[IMPORTANT]
====
It is unsafe to assume that an address for which this function returns
false is an externally-owned account (EOA) and not a contract.

Among others, `isContract` will return false for the following
types of addresses:

 - an externally-owned account
 - a contract in construction
 - an address where a contract will be created
 - an address where a contract lived, but was destroyed
====_

### sendValue

```solidity
function sendValue(address payable recipient, uint256 amount) internal
```

_Replacement for Solidity's `transfer`: sends `amount` wei to
`recipient`, forwarding all available gas and reverting on errors.

https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
of certain opcodes, possibly making contracts go over the 2300 gas limit
imposed by `transfer`, making them unable to receive funds via
`transfer`. {sendValue} removes this limitation.

https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].

IMPORTANT: because control is transferred to `recipient`, care must be
taken to not create reentrancy vulnerabilities. Consider using
{ReentrancyGuard} or the
https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]._

### functionCall

```solidity
function functionCall(address target, bytes data) internal returns (bytes)
```

_Performs a Solidity function call using a low level `call`. A
plain`call` is an unsafe replacement for a function call: use this
function instead.

If `target` reverts with a revert reason, it is bubbled up by this
function (like regular Solidity function calls).

Returns the raw returned data. To convert to the expected return value,
use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].

Requirements:

- `target` must be a contract.
- calling `target` with `data` must not revert.

_Available since v3.1.__

### functionCall

```solidity
function functionCall(address target, bytes data, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
`errorMessage` as a fallback revert reason when `target` reverts.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
but also transferring `value` wei to `target`.

Requirements:

- the calling contract must have an ETH balance of at least `value`.
- the called Solidity function must be `payable`.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
with `errorMessage` as a fallback revert reason when `target` reverts.

_Available since v3.1.__

### _functionCallWithValue

```solidity
function _functionCallWithValue(address target, bytes data, uint256 weiValue, string errorMessage) private returns (bytes)
```

## OptimizedTransparentUpgradeableProxy

_This contract implements a proxy that is upgradeable by an admin.

To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector
clashing], which can potentially be used in an attack, this contract uses the
https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two
things that go hand in hand:

1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if
that call matches one of the admin functions exposed by the proxy itself.
2. If the admin calls the proxy, it can access the admin functions, but its calls will never be forwarded to the
implementation. If the admin tries to call a function on the implementation it will fail with an error that says
"admin cannot fallback to proxy target".

These properties mean that the admin account can only be used for admin actions like upgrading the proxy or changing
the admin, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due
to sudden errors when trying to call a function from the proxy implementation.

Our recommendation is for the dedicated account to be an instance of the {ProxyAdmin} contract. If set up this way,
you should think of the `ProxyAdmin` instance as the real administrative inerface of your proxy._

### _ADMIN

```solidity
address _ADMIN
```

### constructor

```solidity
constructor(address initialLogic, address initialAdmin, bytes _data) public payable
```

_Initializes an upgradeable proxy managed by `_admin`, backed by the implementation at `_logic`, and
optionally initialized with `_data` as explained in {UpgradeableProxy-constructor}._

### _ADMIN_SLOT

```solidity
bytes32 _ADMIN_SLOT
```

_Storage slot with the admin of the contract.
This is the keccak-256 hash of "eip1967.proxy.admin" subtracted by 1, and is
validated in the constructor._

### ifAdmin

```solidity
modifier ifAdmin()
```

_Modifier used internally that will delegate the call to the implementation unless the sender is the admin._

### admin

```solidity
function admin() external returns (address)
```

_Returns the current admin.

NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.

TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the
https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
`0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`_

### implementation

```solidity
function implementation() external returns (address)
```

_Returns the current implementation.

NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.

TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the
https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
`0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`_

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```

_Upgrade the implementation of the proxy.

NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}._

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```

_Upgrade the implementation of the proxy, and then call a function from the new implementation as specified
by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the
proxied contract.

NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}._

### _admin

```solidity
function _admin() internal view returns (address)
```

_Returns the current admin._

### _beforeFallback

```solidity
function _beforeFallback() internal virtual
```

_Makes sure the admin cannot access the fallback function. See {Proxy-_beforeFallback}._

## ERC165

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

## EIP173Proxy

Proxy implementing EIP173 for ownership management

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### constructor

```solidity
constructor(address implementationAddress, address ownerAddress, bytes data) public payable
```

### owner

```solidity
function owner() external view returns (address)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

### transferOwnership

```solidity
function transferOwnership(address newOwner) external
```

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```

### onlyOwner

```solidity
modifier onlyOwner()
```

### _owner

```solidity
function _owner() internal view returns (address adminAddress)
```

### _setOwner

```solidity
function _setOwner(address newOwner) internal
```

## Proxy

### ProxyImplementationUpdated

```solidity
event ProxyImplementationUpdated(address previousImplementation, address newImplementation)
```

### receive

```solidity
receive() external payable virtual
```

### fallback

```solidity
fallback() external payable
```

### _fallback

```solidity
function _fallback() internal
```

### _setImplementation

```solidity
function _setImplementation(address newImplementation, bytes data) internal
```

## ERC165

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

## EIP173Proxy

Proxy implementing EIP173 for ownership management

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### constructor

```solidity
constructor(address implementationAddress, address ownerAddress, bytes data) public payable
```

### owner

```solidity
function owner() external view returns (address)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 id) external view returns (bool)
```

### transferOwnership

```solidity
function transferOwnership(address newOwner) external
```

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external
```

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```

### onlyOwner

```solidity
modifier onlyOwner()
```

### _owner

```solidity
function _owner() internal view returns (address adminAddress)
```

### _setOwner

```solidity
function _setOwner(address newOwner) internal
```

## EIP173ProxyWithReceive

Proxy implementing EIP173 for ownership management that accept ETH via receive

### constructor

```solidity
constructor(address implementationAddress, address ownerAddress, bytes data) public payable
```

### receive

```solidity
receive() external payable
```

## Proxy

### ProxyImplementationUpdated

```solidity
event ProxyImplementationUpdated(address previousImplementation, address newImplementation)
```

### receive

```solidity
receive() external payable virtual
```

### fallback

```solidity
fallback() external payable
```

### _fallback

```solidity
function _fallback() internal
```

### _setImplementation

```solidity
function _setImplementation(address newImplementation, bytes data) internal
```

## Proxied

### proxied

```solidity
modifier proxied()
```

to be used by initialisation / postUpgrade function so that only the proxy's admin can execute them
It also allows these functions to be called inside a contructor
even if the contract is meant to be used without proxy

### onlyProxyAdmin

```solidity
modifier onlyProxyAdmin()
```

### _proxyAdmin

```solidity
function _proxyAdmin() internal view returns (address ownerAddress)
```

