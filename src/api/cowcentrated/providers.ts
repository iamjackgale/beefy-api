import { arbitrum } from '../../../packages/address-book/src/address-book/arbitrum';
import { optimism } from '../../../packages/address-book/src/address-book/optimism';
import { base } from '../../../packages/address-book/src/address-book/base';
import { linea } from '../../../packages/address-book/src/address-book/linea';
import { bsc } from '../../../packages/address-book/src/address-book/bsc';
import { avax } from '../../../packages/address-book/src/address-book/avax';
import { scroll } from '../../../packages/address-book/src/address-book/scroll';
import { AnyCowClm, CowProvider } from './types';

export const providers = {
  ramses: {
    poolTradingRewardTokens: {
      arbitrum: [arbitrum.tokens.RAM, arbitrum.tokens.ARB],
    },
  },
  pancakeswap: {
    poolTradingRewardTokens: {
      arbitrum: [arbitrum.tokens.CAKE],
      bsc: [bsc.tokens.CAKE],
    },
  },
  velodrome: {
    poolTradingRewardTokens: {
      optimism: [optimism.tokens.VELOV2],
    },
  },
  aerodrome: {
    poolTradingRewardTokens: {
      base: [base.tokens.AERO],
    },
  },
  nile: {
    poolTradingRewardTokens: {
      linea: [linea.tokens.NILE],
    },
  },
  pharaoh: {
    poolTradingRewardTokens: {
      avax: [avax.tokens.PHAR, avax.tokens.sAVAX, avax.tokens.ggAVAX],
    },
  },
  nuri: {
    poolTradingRewardTokens: {
      scroll: [scroll.tokens.NURI],
    },
  },
} as const satisfies Record<string, CowProvider>;

export function getCowProvider(providerId: string | undefined): CowProvider | undefined {
  return providerId ? providers[providerId] : undefined;
}

export function getCowProviderForClm(clm: AnyCowClm): CowProvider | undefined {
  return getCowProvider(clm.providerId);
}
