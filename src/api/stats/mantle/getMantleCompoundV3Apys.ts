import { MANTLE_CHAIN_ID as chainId } from '../../../constants';
import getCompoundV3ApyData from '../common/getCompoundV3Apys';
import { CompoundV3ApyParams, CompoundV3Pool } from '../common/getCompoundV3Apys';

const pools: CompoundV3Pool[] = require('../../../data/mantle/compoundPools.json');
const params: CompoundV3ApyParams = {
  chainId,
  pools,
  compOracleId: 'COMP',
  secondsPerBlock: 1, // Sonne reports rates per second, not pet block
  //log: true,
};

const getMantleCompoundV3Apys = async () => {
  return getCompoundV3ApyData(params);
};

module.exports = { getMantleCompoundV3Apys };
