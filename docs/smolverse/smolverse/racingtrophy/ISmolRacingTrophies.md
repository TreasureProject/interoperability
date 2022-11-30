# Solidity API

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

