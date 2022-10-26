export class UsageTagHelper {

    static getUsageTags(){
  
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
          'value': 'myvodacomapp: upgrades: usage (query)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': `myvodacomapp: upgrades: usage`
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'query'
        },
        {
          'key': 'pagename',
          'value': `myvodacomapp: upgrades: usage: start`
        }
      ];
    }
  
    static getContractTags() {
  
      return [
        {
          'key': 'myvodacom.appname',
          'value': 'myvodacomapp: upgrades: contract (query)'
        },
        {
          'key': 'myvodacom.appstep',
          'value': `myvodacomapp: upgrades: contract`
        },
        {
          'key': 'myvodacom.apptype',
          'value': 'query'
        },
        {
          'key': 'pagename',
          'value': `myvodacomapp: upgrades: usage: start`
        }
      ];
    }
  }