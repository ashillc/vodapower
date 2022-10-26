import {
  Messages,
  CacheStrategy
} from './constants';

export class EligibilityCheckProvider {

  static insight = AppCore.Insight.with('Upgrades', 'EligibilityCheckProvider');

  static async getEligibilityStatus(msisdn, isCbu) {

    try {

      if (!AppCore.Validation.isValidMsisdn(msisdn)) {

        return {
          ok: false,
          trace: null,
          result: null,
          error: Error('Invalid Msisdn'),
        };
      }

      const res = await AppCore.DataStore.fetchItem(
        'cloud-app/rest/services/v1/apps/product-offering/qualification/upgrade/:msisdn',
        {
          method: 'GET',
          pathParameters: {
            msisdn: msisdn
          },
          queryParameters: {
            idType: 'upgrade',
            msisdn: msisdn,
            isCbu: isCbu
          },
          strategy: CacheStrategy.None
        }
      );

      const ret = AppCore.Helper.resolveDataStoreResultToProviderResult(
        res,
        Messages.StandardErrorMessage
      );

      ret.ok = AppCore.Validation.isValidResult(ret);

      return ret;

    } catch (error) {

      return {
        ok: false,
        trace: null,
        result: null,
        error: error,
      };
    }
  }
}
