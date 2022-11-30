# Solidity API

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

