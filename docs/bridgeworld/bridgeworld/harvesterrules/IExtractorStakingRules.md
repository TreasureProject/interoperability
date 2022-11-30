# Solidity API

## IExtractorStakingRules

### canReplace

```solidity
function canReplace(address _user, address _nft, uint256 _tokenId, uint256 _amount, uint256 _replacedSpotId) external returns (address user, uint256 replacedTokenId, uint256 replacedAmount)
```

Checks if extractor can be replaced

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address |  |
| _nft | address |  |
| _tokenId | uint256 | token Id of new extractor |
| _amount | uint256 | must be 1, only 1 extractor at a time can be replaced |
| _replacedSpotId | uint256 | index of stakedExtractor mapping for replaced extractor |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | wallet address that staked replaced NFT |
| replacedTokenId | uint256 | tokenId of replaced NFT |
| replacedAmount | uint256 | amount of replaced NFT, must be 1 for ERC721 |

