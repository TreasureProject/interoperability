# Solidity API

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

