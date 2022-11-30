# Solidity API

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

