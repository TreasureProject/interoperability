# Solidity API

## HarvesterFactory

### HF_ADMIN

```solidity
bytes32 HF_ADMIN
```

_master admin, manages other roles and can change core config_

### HF_DEPLOYER

```solidity
bytes32 HF_DEPLOYER
```

_can deploy and enable/disable harvesters_

### HF_BEACON_ADMIN

```solidity
bytes32 HF_BEACON_ADMIN
```

_can upgrade proxy implementation for harvester and nftHandler_

### nftHandlerBeacon

```solidity
contract UpgradeableBeacon nftHandlerBeacon
```

### harvesterBeacon

```solidity
contract UpgradeableBeacon harvesterBeacon
```

### harvesters

```solidity
struct EnumerableSet.AddressSet harvesters
```

### magic

```solidity
contract IERC20 magic
```

_Magic token addr_

### middleman

```solidity
contract IMiddleman middleman
```

### deployedHarvesters

```solidity
mapping(address => bool) deployedHarvesters
```

### HarvesterDeployed

```solidity
event HarvesterDeployed(address harvester, address nftHandler)
```

### Magic

```solidity
event Magic(contract IERC20 magic)
```

### Middleman

```solidity
event Middleman(contract IMiddleman middleman)
```

### HarvesterExists

```solidity
error HarvesterExists()
```

### NotHarvester

```solidity
error NotHarvester()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(contract IERC20 _magic, contract IMiddleman _middleman, address _admin, address _harvesterImpl, address _nftHandlerImpl) external
```

### getHarvester

```solidity
function getHarvester(uint256 _index) external view returns (address)
```

### getAllHarvesters

```solidity
function getAllHarvesters() external view returns (address[])
```

### getAllHarvestersLength

```solidity
function getAllHarvestersLength() external view returns (uint256)
```

### deployHarvester

```solidity
function deployHarvester(address _admin, struct IHarvester.CapConfig _depositCapPerWallet, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

### enableHarvester

```solidity
function enableHarvester(contract IHarvester _harvester) external
```

### disableHarvester

```solidity
function disableHarvester(contract IHarvester _harvester) external
```

### setMagicToken

```solidity
function setMagicToken(contract IERC20 _magic) external
```

### setMiddleman

```solidity
function setMiddleman(contract IMiddleman _middleman) external
```

### upgradeHarvesterTo

```solidity
function upgradeHarvesterTo(address _newImplementation) external
```

_Upgrades the harvester beacon to a new implementation._

### upgradeNftHandlerTo

```solidity
function upgradeNftHandlerTo(address _newImplementation) external
```

_Upgrades the nft handler beacon to a new implementation._

