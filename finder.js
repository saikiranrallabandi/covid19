//---------------------------------------------------------------------
//---------PUT YOUR CONFIGURATION HERE OF YOUR DESIRED RETAILER--------
//---------------------------------------------------------------------
const instacartCookie         = 'XXXXX'; //to find availability in Instacart, replace XXXXX with value of `cookie` you collected in Step 3
const amazonWholesfoodCookie  = 'XXXXX'; //to find availability in Amazon Wholes Food, replace XXXXX with value of `cookie` you collected in Step 3
const amazonFreshCookie       = 'XXXXX'; //to find availability in Amazon Fresh, replace XXXXX with value of `cookie` you collected in Step 3
const costcoSamedayCookie     = "_gcl_au=1.1.7797430.1584984840; WRUID21112018=2701958391153009; _cs_c=1; __stripe_mid=fd9b168d-b40b-4a69-8cde-62ff9201628b; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2237903300%22%2C%22c%22%3A1584985010196%2C%22l%22%3A1584985010196%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2264d03afa-018e-4f2e-df3c-cf74dc375205%22%2C%22c%22%3A1584985010200%2C%22l%22%3A1584985010200%7D; __ssid=6e1bc217ecc1755203a661776ffa222; ftr_ncd=6; _fbp=fb.1.1584985020111.862990603; BVBRANDID=2011e36b-571f-47e6-9e36-2e6959f2e3db; _CT_RS_=Recording; __CT_Data=gpv=80&ckp=tld&dm=costco.com&apv_59_www33=80&cpv_59_www33=80&rpv_59_www33=70; ctm={'pgv':8518134753472022|'vst':3313686586189496|'vstr':3126390088173265|'intr':1586193949389|'v':1|'lvst':735}; _cs_ex=1586448322; direct_retailer_zip_code=94086; ajs_anonymous_id=%22c9c5160b-68c2-40a5-a392-a3f9f9273914%22; ahoy_visitor=b5777d22-d43e-4892-8b37-c2f6f36e5631; ahoy_visit=bdfca564-d8fb-4d70-b9c1-7532c065aeb1; ajs_group_id=null; amplitude_idundefinedcostco.com=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; AKA_A2=A; bm_sz=2C9DC9E01FBDEFCEBBC5661C6448F63C~YAAQ3rfvxwTuk1hxAQAAL+nlcQdqxsF3vtF1O7eTUsk8CqiM3+8CH45xl6Ycbb6NNwsgrJmKifB5oQ0e1janA2EV74sxARB3yHusSBAXYmJtmcJA1tmYm4cRfLuHOnNZsrsSp3bvN2pReJRVdxM461x8OQRoc+70a6HQ1SgP28MBzr/RoQ48dW9Da6f4bO1J; check=true; AMCVS_97B21CFE5329614E0A490D45%40AdobeOrg=1; AMCV_97B21CFE5329614E0A490D45%40AdobeOrg=-330454231%7CMCMID%7C54424700301363957393303277927199762029%7CMCAAMLH-1587358626%7C9%7CMCAAMB-1587358626%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1586761026s%7CNONE%7CMCAID%7C2F2EC0F90515E3ED-600009F620141EE3%7CvVersion%7C3.1.2; s_cc=true; mbox=PC#9e71548bb3fa47a9882fdf055a5e3d71.32_0#1649392961|session#d0db20ec1c9742b48cf1b5f2e8a347bc#1586755687; ak_bmsc=EEAD38EFA90A442CE7D7668867E1DCD8C7EFB7DEE44B000021F1935E86B23F0C~plydlwnN3diLOXHlHtc9n8+Vctcjky+vwydHg0JqJNSkwvChGyKsy60FCFpakgrzWq+d0ubf1SY2bFDvsL3M0qFDZw7RImxTF+PbkSEU8muI1Vj9abmToBZ29SZRdz8O04UdUueHeM6LJbiDBCbSlYJkr4eCN3DGkjKYLEKrInQlPbB72DTZqPYrU839NXMxy3Xt1QGOtf2zByu6+XCVTrPK126/BmzPYsizrLEuU8ojVsT1uVBOK7DdItWkjto3ko; _abck=0643B1705B56E848A03ECC7ECDB86644~0~YAAQ3rfvxxPuk1hxAQAAWe/lcQPaMizZQsdJQiV6Ygtfy+6QLvenMn+7+Zq+pAXVMPVlX308WMU1s5ASoikVqHe//q8Duj1N2nPsHFwkcegdCsh1UHmjcwvXthia5L4tA7jBpp4fknU294Pk5ZW0seP7PTlFt49tu/d8h0aDCc93UTcCFKXgqtHX2jvmZD0j3n986b+wJAC2M6KmJ0nMXDfwTElR2Cww1EAr/6wmnqDoDnQR9J3i6UQmtIIe0pcUmQwQgGOFrGRY8E9XDdFL6iLRTBvXez9UOD/qFmmyyY35mnYeVCuAhKd2imQ5UvphjRMArvdJPg==~-1~-1~-1; s_sq=cwcostcocomprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dhttps%25253A%25252F%25252Fwww.costco.com%25252Flogon-instacart%2526link%253DSign%252520In%2526region%253DLogonForm%2526.activitymap%2526.a%2526.c; memberPrimaryPostal=94086; mSign=1; bm_sv=26D7DB32AFB252354ECA5620B3B61497~1b32QdtUQBE9kkuEPH5x0+rUXb4tH3mFUvpbRUinA6BiFpVv2gqwL5w7bDW6BProdQetcHfLMAuA5zpAjrUAe2QxF6Od0vJnLMQ58XBYVZGsMKqrDI+TWdGxCnJbHjBMPRZ/ufJSrDmAQS2F5hn96nl5W7crmuP3pjHTMnR9zRU=; remember_user_token=W1szNzkwMzMwMF0sIiQyYSQxMCRGUnltUkJVNTBoVXBuVXFRQ2d5TVR1IiwiMTU4Njc1MzkyMy40MjMxMjQzIl0%3D--8968a75c7c4dd3cf7df1b8ee7f5b099d52b669b7; build_sha=fe0a365cd5fb93509a4e536d1396e98564670194; __stripe_sid=ff48b040-26cc-4638-a83c-c4a01abcfaaa; ajs_user_id=%2237903300%22; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%225986becd-3ae8-8575-1965-44f47bbd9cb0%22%2C%22e%22%3A1586755725354%2C%22c%22%3A1586753925355%2C%22l%22%3A1586753925355%7D; forterToken=7b1af340c5b54d1fb82be59629756add_1586753924526__UDF43_9ck; amplitude_id_b87e0e586f364c2c189272540d489b01costco.com=eyJkZXZpY2VJZCI6ImNhMTJiM2NmLTQxYWItNDRlOC1iN2ZkLTA1ZWI0OWQ1YWM0YVIiLCJ1c2VySWQiOiIzNzkwMzMwMCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4Njc1MzgxNDU3MCwibGFzdEV2ZW50VGltZSI6MTU4Njc1Mzk1NTI1NiwiZXZlbnRJZCI6MzU3LCJpZGVudGlmeUlkIjoyOSwic2VxdWVuY2VOdW1iZXIiOjM4Nn0=; _instacart_session=ajJMbTAyM0o0ZU5VY3lDclJLdEV5Z3BOWHczT003dkQrUU9PMmF5MmNCMnlZa1lRN1kydGtFVVdtWHl4R0VtTlJPZFhmS2t5V0lCU2Ewemc0K2NaSG5LamhkUG8rZHo5N2FzZTR4a0RsSzJsWFlPU3hJVnAraCtSVjdZUmxsd1hvM08yYjA3aThyYjErSGUxVzhOLzVFYzBqOWVzSUNZQTd1cW5MZWU5UEpGOFQxNWUvUkM1K2pwNm1IaytIaEoyVFdGV0hMTDJIeU14RDVpZUZhL0Nmb0JlUVlxUlRxTWs5SkRkN1pEMzdGOGsxSmpFckoyRDF1TEp3emwzVWNjOHVxVWt4OUZGRzUwdUozaUt5UFlxMkk1L1k0VjdkcC81M3F4T1l4dmVXSGk0dER2UCtLb0M2YkFuVXYzNEdmK2hOWGNGUVVLdEU5WjVEbHc1ZjZjRld3PT0tLVZTWURVZ1NVRVkweHYxUEo2ZUk2SHc9PQ%3D%3D--4420ed915b5cb53ac969ef6628c02339a0a8aa68";
let retalierConfig = {
  'amazonwholesfood': {
    'label': 'Amazon Wholes Food',
    'url': 'https://www.amazon.com/gp/buy/shipoptionselect/handlers/display.html?hasWorkingJavascript=1',
    'signature': 'Next available',
    'responseDataType': 'html',
    'cookie': amazonWholesfoodCookie,
    'cookieStr': 'amazonWholesfoodCookie'
  },
  'instacart': {
    'label': 'InstaCart',
    'url': 'https://www.instacart.com/v3/retailers/1/delivery_options?source=web`',
    'signature': 'green_window',
    'responseDataType': 'json',
    'cookie': instacartCookie,
    'cookieStr': 'instacartCookie'
  },
  'costcosameday': {
    'label': 'Costco Sameday',
    'url': 'https://sameday.costco.com/v3/retailers/5/delivery_options?source=web`',
    'signature': 'green_window',
    'responseDataType': 'json',
    'cookie': costcoSamedayCookie,
    'cookieStr': 'costcoSamedayCookie'
  },
  'amazonfresh': {
    'label': 'Amazon Fresh',
    'url': '',
    'signature': '',
    'responseDataType': '',
    'cookie': amazonFreshCookie,
    'cookieStr': 'amazonFreshCookie'
  }
};

let   checkingInEveryXminutes = 1; //Minimum value is 1 minute
const sleep     = require('sleep');
const https     = require('https')
const player    = require('play-sound')();
const minFrequency  = 1;

//Don't bombard by checking in every less than minFrequency minute(s)
checkingInEveryXminutes = (checkingInEveryXminutes < minFrequency) ? minFrequency : checkingInEveryXminutes;

//Accept the command line argument
let retailerNamePassed = (process.argv.slice(2)[0]);
let retailerNames = Object.keys(retalierConfig);
if (retailerNamePassed) {
  if (!retailerNames.includes(retailerNamePassed.substring(1))) {
    console.log(`Invalid retailer name. It must be one of these ${retailerNames.toString()}`);
    process.exit(4);
  } else {
    retailerNamePassed = retailerNamePassed.substring(1);
  }
} else {
  console.log(`Missing the retailer name. It must be one of these ${retailerNames.toString()}`);
  process.exit(5);
}

let retailer = retalierConfig[retailerNamePassed];

function beep() {
  player.play('beep.mp3', function (err) {
    return;
  });
}

function pingRetailer(retailer, freqInterval, confirmConfig) {
  const options = {
    headers: {'Cookie': retailer.cookie}
  }

  const req = https.get(retailer.url, options, resp => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
      let responseString = '';
      if (resp.statusCode != 200){
        if (confirmConfig) {
          console.error(`** FAILED (CODE1) ** YOU HAVE INCORRECT VALUE OF ${retailer.cookieStr} AT THE TOP LINE OF finder.js`);
        }
        console.error(`Response code: ${resp.statusCode}`);
        if (retailer.responseDataType == 'json') {
          try { //https://nodejs.org/en/knowledge/errors/what-is-try-catch/#but-wait-isn-t-it-node-js-convention-to-not-use-try-catch
            //Notorious JSON parsing - but not a show stopper.
            console.error(JSON.parse(data).error);
          } catch (e) {
            console.log(e);
          }
        } else {
          console.error(data);
        }
        if (confirmConfig) { //return only first time, else continue
          return;
        } else {
          console.log('Retailers server encountered some hiccup, so waiting for 2 minutes before restarting with hope server will come back. If this message keeps showing for more than 5 times, then manually kill the script and start again. In rare case, retailer may expire the cookie, if that is the case, then re-collect the cookie and enter it at top of finder.js again.');
          // Hoping server response may recover, so lets sleep for 2 minutes, and then restart with user input sleep timing
          sleep.sleep(2*60);
        }
      } else if (retailer.cookieStr == 'amazonWholesfoodCookie') {
        //Amazon wholesfood has different check - it returns 200 even cookie is wrong, so need to check the presence of this string
        if (!data.includes('Select a day')) {
          console.error(`** FAILED (CODE2) ** YOU HAVE INCORRECT VALUE OF ${retailer.cookieStr} AT THE TOP LINE OF finder.js`);
          return;
        }
      } else {
        if (confirmConfig) {
          console.log(`** SUCCESS ** YOUR COOKIE VALUE OF ${retailer.cookieStr} IS CORRECT, NOW LET THE FINDER FIND AND ALERT YOU. MAKE SURE YOU KEEP THIS TERMINAL WINDOW & CHECKOUT PAGE OPEN WITH YOUR LAPTOP SOUND AT MAX`);
          console.log("--------------------------------------------------------------------");
        }
      }

      if (retailer.responseDataType == 'json') {
        responseString = JSON.stringify(data);
      } else {
        let responseString = data;
      }

      if(responseString.indexOf(retailer.signature) > -1) {
        console.log(`${new Date().toString()} - ******** WOHOOOO FOUND A DELIVERY WINDOW, GO TO YOUR ALREADY OPENED CART WEB PAGE AND REFRESH THE PAGE TO SEE AVAILABLE WINDOWS *********`);
        while(true) {
          beep();
          sleep.sleep(2);
        }
      } else {
        console.log(`${new Date().toString()} - No delivery window found for ${retailer.label}, using cookie value of ${retailer.cookieStr}. Next check in ${freqInterval} minute(s)`);
        sleep.sleep(freqInterval*60);
        pingRetailer(retailer, freqInterval, false);
      }
    });

  });

  //On error
  req.on('error', error => {
    console.error(error);
  });

  req.end();
}

console.log(`
Starting the Delivery finder for ${retailer.label} with this configuration:
----------------------------------------------------------------------------------
URL =====> ${retailer.url}
checkingInEveryXminutes =====> ${checkingInEveryXminutes} minute(s)
Cookie =====> ${retailer.cookie}
----------------------------------------------------------------------------------
`);

pingRetailer(retailer, checkingInEveryXminutes, true);
