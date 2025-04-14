import type { Token } from '../../../types/token.js';

const BERA = {
  name: 'Wrapped Bera',
  address: '0x6969696969696969696969696969696969696969',
  symbol: 'WBERA',
  oracleId: 'WBERA',
  decimals: 18,
  chainId: 80094,
  website: 'https://www.berachain.com/',
  description: 'Learn, integrate, and build on a new modular EVM with Berachain.',
  bridge: 'berachain-canonical',
  logoURI: '',
  documentation: 'https://docs.berachain.com/',
} as const satisfies Token;

export const tokens = {
  BERA,
  WBERA: BERA,
  WNATIVE: BERA,
  WETH: {
    name: 'WETH',
    symbol: 'WETH',
    oracleId: 'WETH',
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    chainId: 80094,
    decimals: 18,
    website: 'https://weth.io/',
    description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
    logoURI: 'https://arbiscan.io/token/images/weth_28.png',
    documentation: 'https://ethereum.org/en/developers/docs/',
    bridge: 'layerzero',
  },
  HONEY: {
    name: 'Honey',
    symbol: 'HONEY',
    oracleId: 'HONEY',
    address: '0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce',
    chainId: 80094,
    decimals: 18,
    logoURI: '',
    website: 'https://honey.berachain.com/',
    description:
      'Turn your favorite stables into Honey. Leverage liquidity incentives on various platforms.',
    documentation: 'https://docs.berachain.com/',
    bridge: 'native',
  },
  BGT: {
    name: 'Bera Governance Token',
    symbol: 'BGT',
    oracleId: 'BGT',
    address: '0x656b95E550C07a9ffe548bd4085c72418Ceb1dba',
    chainId: 80094,
    decimals: 18,
    logoURI: '',
    website: 'https://www.berachain.com/',
    description:
      '$BGT is earned by performing certain actions in dApps with whitelisted Reward Vaults. Most of the time, this is related to providing liquidity, but it is not limited to this. Reward Vault deposits correspond to some form of productive activity on Berachain.',
    documentation: 'https://docs.berachain.com/learn/pol/tokens/bgt',
    bridge: 'native',
  },
  USDCe: {
    name: 'Bridged USDC (Stargate)',
    symbol: 'USDCe',
    oracleId: 'USDCe',
    address: '0x549943e04f40284185054145c6E4e9568C1D3241',
    chainId: 80094,
    decimals: 6,
    logoURI: '',
    website: 'https://www.centre.io/',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    documentation: '',
    bridge: 'layerzero',
  },
  BYUSD: {
    name: 'Bera pyUSD',
    symbol: 'BYUSD',
    oracleId: 'BYUSD',
    address: '0x688e72142674041f8f6Af4c808a4045cA1D6aC82',
    chainId: 80094,
    decimals: 6,
    logoURI: '',
    website: 'https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd',
    description:
      'Bera LayerZero Bridged PYUSD. PayPal USD (PYUSD) is a stablecoin backed by secure and highly liquid assets.',
    documentation: '',
    bridge: 'layerzero',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    oracleId: 'WBTC',
    address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
    chainId: 80094,
    decimals: 8,
    logoURI: '',
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    documentation: '',
    bridge: 'layerzero',
  },
  iBGT: {
    name: 'Infrared Bera Governance Token',
    symbol: 'iBGT',
    oracleId: 'iBGT',
    address: '0xac03CABA51e17c86c921E1f6CBFBdC91F8BB2E6b',
    chainId: 80094,
    decimals: 18,
    logoURI: '',
    website: 'https://infrared.finance/ibgt',
    description:
      'Infrared’s iBGT, a liquid version of Berachain’s Governance Token (BGT), helps you maximize Proof of Liquidity (PoL) rewards.',
    documentation: 'https://infrared.finance/docs/ibgt-rewards',
    bridge: 'native',
  },
  iBERA: {
    name: 'Infrared Bera',
    symbol: 'iBERA',
    oracleId: 'iBERA',
    address: '0x9b6761bf2397Bb5a6624a856cC84A3A14Dcd3fe5',
    chainId: 80094,
    decimals: 18,
    logoURI: '',
    website: 'https://infrared.finance/ibera',
    description:
      'iBERA is Infrared’s liquid staking solution that makes staking BERA tokens accessible to everyone.',
    documentation: 'https://infrared.finance/education/ibera',
  },
  OHM: {
    name: 'Olympus',
    address: '0x18878Df23e2a36f81e820e4b47b4A40576D3159C',
    symbol: 'OHM',
    oracleId: 'OHM',
    decimals: 9,
    chainId: 80094,
    website: 'https://www.olympusdao.finance/',
    description:
      'Olympus is building OHM, a community-owned, decentralized and censorship-resistant reserve currency that is asset-backed, deeply liquid and used widely across Web3.',
    documentation: 'https://docs.olympusdao.finance/',
    bridge: 'layerzero',
  },
  NAV: {
    name: 'NavFinance',
    address: '0x6536cEAD649249cae42FC9bfb1F999429b3ec755',
    symbol: 'NAV',
    oracleId: 'NAV',
    decimals: 18,
    chainId: 80094,
    website: 'https://nav.finance/',
    documentation: 'https://docs.nav.finance/',
    description:
      'NAV Finance is a regulated on-chain hedge fund offering Structured Investment Products (SIPs) designed for high-growth opportunities in DeFi.',
    bridge: 'native',
  },
  bm: {
    name: 'bm',
    address: '0xb749584F9fC418Cf905d54f462fdbFdC7462011b',
    symbol: 'bm',
    oracleId: 'bm',
    decimals: 18,
    chainId: 80094,
    website: 'https://www.bmbm.lol/',
    description:
      'bm, short for Bera Morning, is a widely recognized term in the Berachain community and the first meme coin ever launched on Berachain.',
    bridge: 'native',
    risks: ['LARGE_HOLDERS'],
  },
  LBGT: {
    name: 'Liquid BGT',
    address: '0xBaadCC2962417C01Af99fb2B7C75706B9bd6Babe',
    symbol: 'LBGT',
    oracleId: 'LBGT',
    decimals: 18,
    chainId: 80094,
    website: 'https://www.berapaw.com/',
    documentation: 'https://docs.berapaw.com/',
    description:
      'The Liquid Bera Governance Token ($LBGT) is a core component of BeraPaw. It tokenizes Berachain’s native Governance, BGT, into a liquid, transferable asset. This innovation simplifies participation in Berachain’s Proof of Liquidity (PoL) by automating rewards and delegations while providing users with the flexibility to trade and utilize $LBGT across decentralized finance (DeFi) ecosystems.',
    bridge: 'native',
    risks: ['NO_TIMELOCK'],
  },
  YEET: {
    name: 'YEET',
    address: '0x08A38Caa631DE329FF2DAD1656CE789F31AF3142',
    symbol: 'YEET',
    oracleId: 'YEET',
    decimals: 18,
    chainId: 80094,
    website: 'https://www.yeetit.xyz/',
    documentation: 'https://docs.yeetit.xyz/',
    description:
      'Yeet offers three core products: the Yeet Game, YeetBonds, and Vault. The Yeet Game combines DeFi and on-chain gaming, allowing players to win $BERA and $YEET prizes. YeetBonds is an open marketplace for OTC sales where users can buy Berachain ecosystem tokens at a discount, in collaboration with Bond Protocol. The Vault is a yield product that farms liquidity and compounds rewards using a complex DeFi yield farming strategy, simplified for users.',
    bridge: 'native',
    risks: ['LARGE_HOLDERS'],
  },
  USDbr: {
    name: 'USDbr',
    address: '0x6d4223DAE2a8744a85a6d44e97f3F61679f87ee6',
    symbol: 'USDbr',
    oracleId: 'USDbr',
    decimals: 18,
    chainId: 80094,
    website: 'https://nome.gg/',
    documentation: 'https://nome-protocol.gitbook.io/nomeprotocol',
    description:
      'Nome Protocol is a synthetic asset protocol designed to provide scalable, algorithmic liquidity for the Berachain ecosystem. It operates through $USDbr, an elastic, algorithmic stablecoin, and $NOME, its governance and staking asset.',
    bridge: 'native',
    risks: ['NO_TIMELOCK'],
  },
} as const satisfies Record<string, Token>;
