import getBalancerPrices from '../common/balancer/getBalancerPrices';
import { BASE_CHAIN_ID as chainId } from '../../../constants';
import balancerPools from '../../../data/base/balancerPools.json';
import auraPools from '../../../data/base/auraLpPools.json';
import balancerV3Pools from '../../../data/base/balancerV3pools.json';
import getBalancerV3Prices from '../common/balancer/getBalancerV3Prices';

const pools = [...balancerPools, ...auraPools];

const getBalancerBasePrices = async tokenPrices => {
  const prices = await getBalancerPrices(chainId, pools, tokenPrices);
  const pricesV3 = await getBalancerV3Prices(chainId, balancerV3Pools, tokenPrices);
  return { ...prices, ...pricesV3 };
};

export default getBalancerBasePrices;
