import {
    Messages,
    CacheStrategy
  } from './constants';
  
  export class PastUsageProvider {
  
    // static insight = AppCore.Insight.with('Upgrades', 'PastUsageProvider');
  
    static checkIfUnlimited = (value) => {
  
      if (PastUsageProvider.checkIfEmpty(value)==='-') {
  
        return '-';
      }
      
      if (value === -1 || value ==='-1') {
  
        return 'Unlimited';
      }
  
      return value;
    }
  
    static checkIfEmpty = (value) => {
      
      // if (AppCore.Validation.isNullOrEmpty(value)) {
  
      //   return '-';
      // }
  
      return value;
    }
  
    static getMonetaryValue = (value) => {
  
      if (PastUsageProvider.checkIfEmpty(value.toString()) === '-'){
  
        return '-';
      }
      
      // return AppCore.Helper.formatAmount(value);
    }
  
    static isEmpty = (obj) => {
  
     for(let key in obj) {
  
       return false;
     }
  
     return true;
    }
  
    static convertMBtoGB = (MegaBytes) => {
  
      if (MegaBytes ==='Unlimited' || MegaBytes==='-') {
  
        return MegaBytes;
      }
  
      if (Number(MegaBytes) >= 1000) {
        
          return parseFloat(MegaBytes / 1024).toFixed(2) + 'GB';
      }
  
      return MegaBytes + 'MB';
    }
  
    static getUnits = (value,units) => {
      
      if (value==='-') {
  
        return value;
      }
  
      return value+' '+units;
    } 
  
    static isGreater = (val1,val2) => {
  
      if(val2 === 'Unlimited' || val2==='-' || val1==='-'){
  
        return false;
      }
  
      val1 = parseFloat(val1);
      val2 = parseFloat(val2);
  
      if(val1 === val2){
  
        return false;
      }
  
      if(val1 > val2){
  
        return true;
      }
  
      return false;
    }
  
    static async getPastUsage(msisdn){
  
      try {
  
        // if (!AppCore.Validation.isValidMsisdn(msisdn)) {
  
        //   return {
        //     ok: false,
        //     trace: null,
        //     result: null,
        //     error: Error('Invalid Msisdn'),
        //   };
        // }
  
        let url = '/cloud-app/rest/services/v1/apps/customer/consumption';
  
        // let res = await AppCore.DataStore.DEPRECATED_fetchItem(
        //   url,
        //   'GET',
        //   { msisdn: msisdn },
        //   {},
        //   null,
        //   CacheStrategy.None
        // );
  
        // const ret = AppCore.Helper.resolveDataStoreResultToProviderResult(
        //   res,
        //   Messages.StandardErrorMessage
        // );
  
        // ret.ok = AppCore.Validation.isValidResult(ret);
        
        if (ret.result) {
          
          let resultSet = ret.result;
  
          let data = PastUsageProvider.convertMBtoGB(PastUsageProvider.checkIfUnlimited(resultSet?.consumption?.usage?.data?.toString() || '-'));
          let voice = PastUsageProvider.getUnits(PastUsageProvider.checkIfUnlimited(resultSet?.consumption?.usage?.voice?.toString() || '-'), 'minutes');
          let sms = PastUsageProvider.getUnits(PastUsageProvider.checkIfUnlimited(resultSet?.consumption?.usage?.sms?.toString() || '-'), 'SMSs');
          let avgSpend = resultSet?.consumption?.averageSpend || '-';
  
          let packageData = '-';
          let packageVoice = '-';
          let packageSms = '-';
          let contractType = '-';
          let planType = '-';
  
          let currentDeal = resultSet?.currentDeal?.packages || {};
  
          if (!PastUsageProvider.isEmpty(currentDeal)) {
  
            packageData = PastUsageProvider.convertMBtoGB(PastUsageProvider.checkIfUnlimited((currentDeal.includedData?.toString() || '-')));
            packageVoice = PastUsageProvider.getUnits(PastUsageProvider.checkIfUnlimited(currentDeal.includedMinutes?.toString() || '-'), 'minutes');
            packageSms = PastUsageProvider.getUnits(PastUsageProvider.checkIfUnlimited(currentDeal.includedSms?.toString() || '-'), 'SMSs');
            contractType = PastUsageProvider.checkIfEmpty(currentDeal.packageTypeName);
            planType = PastUsageProvider.checkIfEmpty(currentDeal.planType);
          }
          
          let bill = resultSet?.consumption?.bill || '-';
          let monthlyContract = PastUsageProvider.getMonetaryValue(resultSet?.customer?.totalMonthlySubscription || '-');
          let accountSummary = resultSet?.accountSummery || {};
  
          let startDate ='-';
          let endDate = '-';
  
          if (Object.keys(accountSummary).length > 0) {
  
            startDate = PastUsageProvider.checkIfEmpty(accountSummary.startDate);
            endDate = PastUsageProvider.checkIfEmpty(accountSummary.endDate);
          }
          
          let currentDevice = PastUsageProvider.checkIfEmpty(resultSet?.currentDevice?.deviceModel || '-');
          let deviceCost = PastUsageProvider.getMonetaryValue(resultSet?.consumption?.handsetFinance || '-');
          let planName = PastUsageProvider.checkIfEmpty(resultSet?.customer?.currentTariff || '-');
          let planCost = PastUsageProvider.getMonetaryValue(resultSet?.consumption?.subscription || '-');
  
          let totalBill = PastUsageProvider.getMonetaryValue((avgSpend - bill).toString());
  
          let dataOverUse = PastUsageProvider.isGreater(PastUsageProvider.checkIfUnlimited(resultSet?.consumption?.usage?.data?.toString() || '-'),PastUsageProvider.checkIfUnlimited(currentDeal.includedData?.toString() || '-'));
          let voiceOverUse = PastUsageProvider.isGreater(voice,packageVoice);
          let smsOverUse = PastUsageProvider.isGreater(sms,packageSms);
          let billOverUse = PastUsageProvider.isGreater(avgSpend,bill);
  
          let parsedResult = {
            dataOverUse: dataOverUse,
            voiceOverUse: voiceOverUse,
            smsOverUse: smsOverUse,
            billOverUse: billOverUse,
            data: data,
            voice: voice,
            sms: sms,
            avgSpend: PastUsageProvider.getMonetaryValue(avgSpend.toString()),
            packageData: packageData,
            packageVoice: packageVoice,
            packageSms: packageSms,
            bill: PastUsageProvider.getMonetaryValue(bill.toString()),
            monthlyContract: monthlyContract,
            contractType: contractType,
            startDate: startDate,
            endDate: endDate,
            currentDevice: currentDevice,
            deviceCost: deviceCost,
            planType: planType,
            planName: planName,
            planCost: planCost,
            totalBill: totalBill
          };
  
          ret.parsedResult = parsedResult;
        }
  
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
  