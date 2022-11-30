# Solidity API

## NftHandler

### NH_ADMIN

```solidity
bytes32 NH_ADMIN
```

### DEFAULT_ID

```solidity
uint256 DEFAULT_ID
```

_if `allowedNfts` is set for DEFAULT_ID as `tokenId`,
     that value will be used as default for all collection,
     unless specified differently_

### harvester

```solidity
contract IHarvester harvester
```

Gets harvester address linked to this contract

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |

### allowedNfts

```solidity
mapping(address => mapping(uint256 => struct INftHandler.NftConfig)) allowedNfts
```

_NFT address => tokenId => config_

### stakingRulesUsage

```solidity
mapping(address => uint256) stakingRulesUsage
```

_StakingRules => usage (number of contracts/tokens using given rules)_

### allStakingRules

```solidity
struct EnumerableSet.AddressSet allStakingRules
```

_Set of all registered StakingRules contracts_

### stakedNfts

```solidity
mapping(address => mapping(address => mapping(uint256 => uint256))) stakedNfts
```

_user => NFT address => tokenId => amount_

### getUserBoost

```solidity
mapping(address => uint256) getUserBoost
```

Gets cached user boost

_Cached boost is re-calculated on the fly on stake and unstake NFT by user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |

### Staked

```solidity
event Staked(address user, address nft, uint256 tokenId, uint256 amount)
```

### Unstaked

```solidity
event Unstaked(address user, address nft, uint256 tokenId, uint256 amount)
```

### Replaced

```solidity
event Replaced(address user, address nft, uint256 tokenId, uint256 amount, uint256 replacedSpotId)
```

### NftConfigSet

```solidity
event NftConfigSet(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig)
```

### InvalidNftAddress

```solidity
error InvalidNftAddress()
```

### NothingToStake

```solidity
error NothingToStake()
```

### NoStakingRules

```solidity
error NoStakingRules()
```

### InvalidData

```solidity
error InvalidData()
```

### WrongAmountForERC721

```solidity
error WrongAmountForERC721()
```

### NftAlreadyStaked

```solidity
error NftAlreadyStaked()
```

### NftNotAllowed

```solidity
error NftNotAllowed()
```

### NftNotStaked

```solidity
error NftNotStaked()
```

### AmountTooBig

```solidity
error AmountTooBig()
```

### StakingRulesRequired

```solidity
error StakingRulesRequired()
```

### MustBeERC1155

```solidity
error MustBeERC1155()
```

### WrongInterface

```solidity
error WrongInterface()
```

### NotIExtractorStakingRules

```solidity
error NotIExtractorStakingRules()
```

### validateInput

```solidity
modifier validateInput(address _nft, uint256 _amount)
```

### processStake

```solidity
modifier processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount)
```

### processUnstake

```solidity
modifier processUnstake(address _user, address _nft, uint256 _tokenId, uint256 _amount)
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _admin, address _harvester, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

_Initialized by factory during deployment_

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### getAllStakingRules

```solidity
function getAllStakingRules() external view returns (address[])
```

### getAllStakingRulesLength

```solidity
function getAllStakingRulesLength() external view returns (uint256)
```

### getStakingRules

```solidity
function getStakingRules(address _nft, uint256 _tokenId) public view returns (contract IStakingRules)
```

Gets staking rules contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nft | address | NFT contract address for which to read staking rules contract address |
| _tokenId | uint256 | token id for which to read staking rules contract address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IStakingRules | staking rules contract address |

### getSupportedInterface

```solidity
function getSupportedInterface(address _nft, uint256 _tokenId) public view returns (enum INftHandler.Interfaces)
```

### getNftBoost

```solidity
function getNftBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) public view returns (uint256 boost)
```

Gets given NFT boost for user

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |
| _nft | address | address of NFT contract |
| _tokenId | uint256 | token Id of NFT for which to calculate the boost |
| _amount | uint256 | amount of tokens for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated boost for given NFT for given user as percentage, 1e18 == 100% |

### getHarvesterTotalBoost

```solidity
function getHarvesterTotalBoost() public view returns (uint256 boost)
```

Gets harvester boost to calculate rewards allocation

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated harvester boost to calculate rewards allocation |

### stakeNft

```solidity
function stakeNft(address _nft, uint256 _tokenId, uint256 _amount) public
```

### batchStakeNft

```solidity
function batchStakeNft(address[] _nft, uint256[] _tokenId, uint256[] _amount) external
```

### unstakeNft

```solidity
function unstakeNft(address _nft, uint256 _tokenId, uint256 _amount) public
```

### batchUnstakeNft

```solidity
function batchUnstakeNft(address[] _nft, uint256[] _tokenId, uint256[] _amount) external
```

### replaceExtractor

```solidity
function replaceExtractor(address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) public
```

### batchReplaceExtractor

```solidity
function batchReplaceExtractor(address[] _nft, uint256[] _tokenId, uint256[] _amount, uint256[] _replacedSpotId) external
```

### setNftConfig

```solidity
function setNftConfig(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig) external
```

### _setNftConfig

```solidity
function _setNftConfig(address _nft, uint256 _tokenId, struct INftHandler.NftConfig _nftConfig) internal
```

