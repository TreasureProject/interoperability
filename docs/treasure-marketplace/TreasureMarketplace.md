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

