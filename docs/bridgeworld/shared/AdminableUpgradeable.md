# Solidity API

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

