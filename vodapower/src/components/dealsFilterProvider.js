import {
    CacheStrategy
  } from './constants';
  
  export class DealsFilterProvider {
  
    static insight = AppCore.Insight.with('Upgrades', 'DealsFilterProvider');
  
    static async getManufacturers() {
  
      try {
  
        const ret = await AppCore.DataStore.DEPRECATED_fetchItem(
          '/cloud-app/rest/services/v1/apps/devices/manufacturers',
          'GET',
          {},
          {},
          {},
          CacheStrategy.None,
          false
        );
  
        const response = AppCore.Helper.resolveDataStoreResultToProviderResult(
          ret,
          'We failed to get manufacturer list.'
        );
  
        response.ok = AppCore.Validation.isValidResult(response);
  
        if (ret.status === 404 || response.result.length < 1) {
  
          response.noDevices = true
        }
  
        return response
  
      } catch (e) {
  
        DealsFilterProvider.insight.error(e);
  
        return {
          ok: false,
          error: e,
          trace: null,
          result: null
        };
      }
    }
  
    static async getModels(manufacturer) {
  
      try {
  
        if (!manufacturer) {
  
          return {
            ok: false,
            error: new Error('Invalid Manufacturers Type'),
            result: null,
            trace: null
          };
        }
  
        const ret = await AppCore.DataStore.DEPRECATED_fetchItem(
          '/cloud-app/rest/services/v1/apps/devices/models',
          'GET',
          {
            manufacturer: manufacturer
          },
          {},
          {},
          CacheStrategy.None,
          false
        );
  
        const response = AppCore.Helper.resolveDataStoreResultToProviderResult(
          ret,
          'We failed to get model list.'
        );
  
        response.ok = AppCore.Validation.isValidResult(response);
        let returnedModels = [];
  
        for(let i = 0; i < response.result.length; i++) {
          if (response.result[i].model) {
  
            returnedModels.push(response.result[i].model);
          }
        };
  
        response.result = returnedModels;
  
        if (ret.status === 404 || response.result.length < 1) {
  
          response.noDevices = true;
        };
  
        return response
  
      } catch (e) {
  
        DealsFilterProvider.insight.error(e);
  
        return {
          ok: false,
          error: e,
          trace: null,
          result: null
        };
      }
    }
  }
  