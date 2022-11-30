# Solidity API

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

