export class DealsTagHelper {

    static findADeal() {
  
      return [
        {
          'key': 'myvodacom.pageview',
          'value': '1'
        },
        {
          'key': 'myvodacom.appstarted',
          'value': '1'
        },
        {
          'key': 'myvodacom.appfinished',
          'value': '1'
        },
        {
          'key': 'myvodacom.appname',
          'value': 'myvodacomapp: upgrades: find a deal (query)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': 'myvodacomapp: upgrades: find a deal'
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'query'
        },
        {
          'key': 'pagename',
          'value': 'myvodacomapp: upgrades: deals: find a deal'
        }
      ];
    };
  
    static allDeals() {
  
      return [
        {
          'key': 'myvodacom.pageview',
          'value': '1'
        },
        {
          'key': 'myvodacom.appname',
          'value': 'myvodacomapp: upgrades: deals (transaction)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': 'myvodacomapp: upgrades: deals: all deals'
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'transaction'
        },
        {
          'key': 'pagename',
          'value': 'myvodacomapp: upgrades: deals: deals'
        }
      ];
    };
  
    static filterWithDevice() {
  
      return [
        {
          'key': 'myvodacom.pageview',
          'value': '1'
        },
        {
          'key': 'myvodacom.appname',
          'value': 'myvodacomapp: upgrades: deals (transaction)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': 'myvodacomapp: upgrades: deals: filter with device'
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'transaction'
        },
        {
          'key': 'pagename',
          'value': 'myvodacomapp: upgrades: deals: filter'
        }
      ];
    };
  
  
    static filterWithoutDevice() {
  
      return [
        {
          'key': 'myvodacom.pageview',
          'value': '1'
        },
        {
          'key': 'myvodacom.appname',
          'value': 'myvodacomapp: upgrades: deals (transaction)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': 'myvodacomapp: upgrades: deals: filter without device'
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'transaction'
        },
        {
          'key': 'pagename',
          'value': 'myvodacomapp: upgrades: deals: filter'
        }
      ];
    };
  
    static filterModel(model) {
  
      return [
        {
          'key': 'myvodacom.tooluse',
          'value': '1'
        },
        {
          'key': 'myvodacom.toolname',
          'value': 'myvodacomapp: upgrades: filter model'
        },
        {
          'key': 'myvodacom.filterquery',
          'value': `${model}`
        }
      ];
    };
  
    static filterBrand(brand) {
  
      return [
        {
          'key': 'myvodacom.tooluse',
          'value': '1'
        },
        {
          'key': 'myvodacom.toolname',
          'value': 'myvodacomapp: upgrades: filter brand'
        },
        {
          'key': 'myvodacom.filterquery',
          'value': `${brand}`
        }
      ];
    };
  
    static noResultsFound() {
  
      return [
        {
          'key': 'myvodacom.pageview',
          'value': '1'
        },
        {
          'key': 'pagename',
          'value': 'myvodacomapp: upgrades: filter no results found'
        }
      ];
    };
  }