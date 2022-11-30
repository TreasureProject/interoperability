# Solidity API

## UpgradeableProxy

_This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an
implementation address that can be changed. This address is stored in storage in the location specified by
https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn't conflict with the storage layout of the
implementation behind the proxy.

Upgradeability is only provided internally through {_upgradeTo}. For an externally upgradeable proxy see
{TransparentUpgradeableProxy}._

### constructor

```solidity
constructor(address _logic, bytes _data) public payable
```

_Initializes the upgradeable proxy with an initial implementation specified by `_logic`.

If `_data` is nonempty, it's used as data in a delegate call to `_logic`. This will typically be an encoded
function call, and allows initializating the storage of the proxy like a Solidity constructor._

### Upgraded

```solidity
event Upgraded(address implementation)
```

_Emitted when the implementation is upgraded._

### _IMPLEMENTATION_SLOT

```solidity
bytes32 _IMPLEMENTATION_SLOT
```

_Storage slot with the address of the current implementation.
This is the keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1, and is
validated in the constructor._

### _implementation

```solidity
function _implementation() internal view returns (address impl)
```

_Returns the current implementation address._

### _upgradeTo

```solidity
function _upgradeTo(address newImplementation) internal
```

_Upgrades the proxy to a new implementation.

Emits an {Upgraded} event._

### _setImplementation

```solidity
function _setImplementation(address newImplementation) private
```

_Stores a new address in the EIP1967 implementation slot._

