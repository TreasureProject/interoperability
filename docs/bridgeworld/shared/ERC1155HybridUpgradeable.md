# Solidity API

## ERC1155HybridUpgradeable

### TokenTraitChanged

```solidity
event TokenTraitChanged(uint256 _tokenId, struct ERC1155HybridUpgradeable.TraitData _traitData)
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
  enum ERC1155HybridUpgradeable.PropertyType propertyType;
}
```

### TraitData

```solidity
struct TraitData {
  string name;
  string description;
  string url;
  struct ERC1155HybridUpgradeable.Property[] properties;
}
```

### tokenIdToTraitData

```solidity
mapping(uint256 => struct ERC1155HybridUpgradeable.TraitData) tokenIdToTraitData
```

### tokenIdToPropertyNameToPropertyValue

```solidity
mapping(uint256 => mapping(string => string)) tokenIdToPropertyNameToPropertyValue
```

### __ERC1155Hybrid_init

```solidity
function __ERC1155Hybrid_init() internal
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_Hook that is called before any token transfer. This includes minting
and burning, as well as batched variants.

The same hook is called on both single and batched variants. For single
transfers, the length of the `ids` and `amounts` arrays will be 1.

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

### uploadTraitData

```solidity
function uploadTraitData(uint256 _tokenId, struct ERC1155HybridUpgradeable.TraitData _traitData) external
```

### exists

```solidity
function exists(uint256 _tokenId) public view returns (bool)
```

### propertyValueForToken

```solidity
function propertyValueForToken(uint256 _tokenId, string _propertyName) public view returns (string)
```

### uri

```solidity
function uri(uint256 _tokenId) public view returns (string)
```

### _generateAttributeString

```solidity
function _generateAttributeString(struct ERC1155HybridUpgradeable.TraitData _traitData) private view returns (string)
```

### tokenIdExists

```solidity
modifier tokenIdExists(uint256 _tokenId)
```

### __gap

```solidity
uint256[48] __gap
```

