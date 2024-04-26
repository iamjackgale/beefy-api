const devMultisig = '0x9D138aDAFC29A36497e0791084920b7B18e0AE48';
const treasuryMultisig = '0x9F9FE15FDa14eAA2d878Ed667C805A7CC13c2560';
const hw = '0xdAec0E93A98b6184816dFDA318B1A01EAF026164';

export const beefyfinance = {
  devMultisig: devMultisig,
  treasuryMultisig: treasuryMultisig,
  strategyOwner: '0x3060A3Bd573cAf95c10CCAA03F80cd1c1D27B746',
  vaultOwner: '0x8D9D2bf4E843042f51EE218E295CD34ccbED670F',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: hw,
  launchpoolOwner: devMultisig,
  rewardPool: '0x0000000000000000000000000000000000000000',
  treasury: '0x8cE3fE8b9Ec8Ab80967c9771909385E3e3A272fA',
  beefyFeeRecipient: '0x8cE3fE8b9Ec8Ab80967c9771909385E3e3A272fA',
  multicall: '0x1E9231Cc9782D9F8e213736F6dAC00020D8271cB',
  bifiMaxiStrategy: '0x0000000000000000000000000000000000000000',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0x9292B01182c6d18612deA8fd4e603CC1C733516B',
  /// vaultFactory: '0x42F93644403C6cA1dD4F6446aA720F019a757FEA',
  zap: '0x744A1Ca08f0787bFF426cA3A734711EAc2772675',
  zapTokenManager: '0xAD579b6c9F0b66101806957018B7D965c6B1fa92',
} as const;
