/*

*/
var appState = 0; //disable save until  Refresh key used...

var commsLog = 0; //value=0 disables alerts and logging

function saveMoment(el) {

  //can we save yet? not unless refresh key used...
  if (appState == 1) {

    if (html5_storage()) {
      //toggle off the Safety Moment
      showSavePanel(el);

      //call save to local storage
      var curSafetyId = document.getElementById('SmId').innerHTML;
      var curSafetyText = document.getElementById('safeTMo').innerHTML;
      var curSafetyHead = document.getElementById('headLine').innerHTML;
      var curSafetyTtl = document.getElementById('SmTtl').innerHTML;

      if (commsLog == 1)
      {
      console.log("local SMId = " + curSafetyId);
      console.log("local SMHead = " + curSafetyHead);
      console.log("local SMText = " + curSafetyText);
      console.log("local SMText = " + curSafetyTtl);
      }

      //save the current safety moment to localstorage
      tryToSave("SmId", curSafetyId);
      tryToSave("SmHead", curSafetyHead);
      tryToSave("SmText", curSafetyText);
      tryToSave("SmTtl", curSafetyTtl);

      //fetch local storage
      var checkSMId = localStorage.getItem("SmId");
      var checkSMHead = localStorage.getItem("SmHead");
      var checkSMText =  localStorage.getItem("SmText");
      var checkSMTtl = localStorage.getItem("SmTty");
     }
  }
}

function tryToSave(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch(e) {
    if (isQuotaExceeded(e)) {
      // Storage full, do some clean-up
      flushSafetyMo();
    }
  }
}

function continueSafetyMoment(el) {
  // toggle off the Save Dialog
  // toggle on the Safety Moment
    var elem = document.getElementById('showIt');
  elem.style.display = 'block';
  elem.style.visibility = 'visible';

  var elem2 = document.getElementById('saveIt');
  elem2.style.display = 'none';
  elem2.style.visibility = 'hidden';

}

function showSavePanel(el) {
      //toggle off the Safety Moment
      var elem2 = document.getElementById('showIt');
      elem2.style.display = 'none';
      elem2.style.visibility = 'hidden';

      //toggle on the Save Dialog
      var elem = document.getElementById('saveIt');
      elem.style.display = 'block';
      elem.style.visibility = 'visible';
}

function getNext() {
  appState = 1; // enable the save feature.
  // if (commsLog == 1) console.log('appstate = ' + appState);

  //aim is for the Safety Moments to come from JSON data file rather than in this function...

  //get current displayed safety moment into elements
  var elem = document.getElementById('safeTMo');
  var elem2 = document.getElementById('headLine');
  var elem3 = document.getElementById('SmId');
  var elem4 = document.getElementById('SmTtl');

  var fancyMoment = 'To operate a fire extinguisher, remember \'PASS\'' + '<div id="u20" class="axtext">' + '<p><span style="font-family:\'Arial-BoldMT\', \'Arial Bold\', \'Arial\';font-weight:700;color:#C68E00;">' + '<img id="u19_img" class="img" src="https://jsbin-user-assets.s3.amazonaws.com/peterthepig/transparent.gif">' + 'P' + '</span><span style="font-family:\'ArialMT\', \'Arial\';font-weight:400;color:#000059;">' + 'ull Pin' + '</span></p>' + '</div>' + '<div id="u21" class="ax_paragraph">' +  '<div id="u22" class="axtext">' + '<p><span style="font-family:\'Arial-BoldMT\', \'Arial Bold\', \'Arial\';font-weight:700;color:#C68E00;">' + '<img id="u21_img" class="img" src="https://jsbin-user-assets.s3.amazonaws.com/peterthepig/transparent.gif">' + 'A' + '</span><span style="font-family:\'ArialMT\', \'Arial\';font-weight:400;color:#000059;">' + 'im Low' + '</span></p>' + '</div>' + '</div>' + '<div id="u24" class="axtext">' + ' <p><span style="font-family:\'Arial-BoldMT\', \'Arial Bold\', \'Arial\';font-weight:700;color:#C68E00;">' + '<img id="u23_img" class="img" src="https://jsbin-user-assets.s3.amazonaws.com/peterthepig/transparent.gif">' + 'S' + '</span><span style="font-family:\'ArialMT\', \'Arial\';font-weight:400;color:#000059;">' + 'queeze' + '</span></p>' + '</div>' + '<div id="u26" class="axtext">' + ' <p><span style="font-family:\'Arial-BoldMT\', \'Arial Bold\', \'Arial\';font-weight:700;color:#C68E00;">' + '<img id="u25_img" class="img" src="https://jsbin-user-assets.s3.amazonaws.com/peterthepig/transparent.gif">' + 'S' + '</span><span style="font-family:\'ArialMT\', \'Arial\';font-weight:400;color:#000059;">' + 'weep' + '<img id="u26_img" class="img" src="https://jsbin-user-assets.s3.amazonaws.com/peterthepig/transparent.gif">' + '</span></p>' + '</div>';

  if (elem3.innerHTML == 'SM_ES_001') {
     elem.innerHTML  = 'Keep all tools in good condition with regular maintenance.';
     elem2.innerHTML = 'Hand & Power Tools';
    elem3.innerHTML = 'SM_HPT_001';
    elem4.innerHTML = '2015/11/21 14:15';
    //elem3.style.display = 'none';
  }
  else {
    if (elem3.innerHTML == 'SM_HPT_001') {
      elem.innerHTML = 'Safety guards must not be removed when using tools. It increases potential for injury, and is illegal';
      elem2.innerHTML = 'Ladder Safety';
      elem3.innerHTML = 'SM_LS_001';
      elem4.innerHTML = '2015/11/30 13:30';

    //elem3.style.display = 'none';
    }
    else {
      if (elem3.innerHTML == 'SM_LS_001') {
        elem.innerHTML = fancyMoment;
        elem2.innerHTML = 'Fire Safety';
        elem3.innerHTML = 'SM_FS_001';
        elem4.innerHTML = '2015/11/21 10:45';
        //elem3.style.display = 'none';
      } // if
      else {
        if (elem3.innerHTML == 'SM_FS_001') {
          elem.innerHTML = 'Avoid texting or cell phone use when climbing stairs';
          elem2.innerHTML = 'Slips, Trips &amp; Falls';
          elem3.innerHTML = 'SM_STP_001';
          elem4.innerHTML = '2015/11/21 14:00';
          //elem3.style.display = 'none';
        } //if
        else {
          if (elem3.innerHTML == 'SM_STP_001') {
            elem.innerHTML = 'Do not cycle on the right side of the road, cycle on the correct (left) side of the road';
            elem2.innerHTML = 'Bicycle Safety';
            elem3.innerHTML = 'SM_BS_001';
            elem4.innerHTML = '2015/08/21 15:00';
            //elem3.style.display = 'none';
          }
          else {
            if (elem3.innerHTML == 'SM_BS_001') {
              elem.innerHTML = 'Don’t use electrical equipment in damp or wet conditions.';
              elem2.innerHTML = 'Electrical Safety';
              elem3.innerHTML = 'SM_ES_001';
              elem4.innerHTML = '2015/12/30 11:30';
              //elem3.style.display = 'none';
            }
            else {
              if (elem3.innerHTML == 'Summer2015') {
                 elem.innerHTML = 'Don’t use electrical equipment in damp or wet conditions.';
              elem2.innerHTML = 'Electrical Safety';
              elem3.innerHTML = 'SM_ES_001';
              elem4.innerHTML = '2015/12/30 11:30';
              //elem3.style.display = 'none';
              }
              else {console.log('not found');}
            }
          }
        }
      } //else
    } //else
  } //else

} //function

function getLocalStorageSafetyMoment(el) {
  if (!html5_storage()) {
    console.log("no local storage!");
  }
  else {
    //we have local storage capability, so...
    if (commsLog == 1) console.log("yes local SM storage!");

    //check for local safety message
    if (localStorage.getItem("SmId") != null) {
      var savedSafetyMoId = localStorage.getItem("SmId");
      var savedSafetyMoHead = localStorage.getItem("SmHead");
      var savedSafetyMoText = localStorage.getItem("SmText");
      var savedSafetyMoTtl = localStorage.getItem("SmTtl");

      //to use local saved one, get handles for the containers...
      var elem = document.getElementById('safeTMo');
      var elem2 = document.getElementById('headLine');
      var elem3 = document.getElementById('SmId');
      var elem4 = document.getElementById('SmTtl');

      //... and then place Safety Moment into the HTML
      elem.innerHTML = savedSafetyMoText;
      elem2.innerHTML = savedSafetyMoHead;
      elem3.innerHTML = savedSafetyMoId;
      elem4.innerHTML = savedSafetyMoTtl;

      //evidence...
      if (commsLog == 1) {
        console.log("local safety mo id = " + savedSafetyMoId);
        console.log("local safety mo head = " + savedSafetyMoHead);
        console.log("local safety mo text = " + savedSafetyMoText);
        console.log("local safety mo Ttl = " + savedSafetyMoTtl);
      }

    //call routine to enable show of safety moment
    continueSafetyMoment(el);
    }
    else {if (commsLog == 1) console.log('no moments');}
  }
}

function checkUpFront() {
  //onload for the page
   if (commsLog == 1) console.log("onload");

  if (!html5_storage()) {
    console.log("no local storage!");
    var elemSav = document.getElementById('ftrSav');
    elemSav.disabled = true;
    var elemRet = document.getElementById('ftrRet');
    elemRet.disabled = true;
  }
  else {
    //we have local storage capability...

    //check the Ttl for the local safety message
    var dateNow = new Date();

    //Ttl into elem4
    var elem4 = localStorage.getItem("SmTtl");
    //check we have a date...
    if (commsLog == 1) console.log('checkit' + ' ' + elem4);

    if (elem4 != null) {
      if (commsLog == 1) console.log('check for mo ' + elem4);

      //parse elem4.innerHTML date into date + time elements
      var e4Y = (elem4.substring(0, 4)), e4M = parseInt((elem4.substring(5, 7)))-1, e4D = (elem4.substring(8, 10)), e4Hr = (elem4.substring(11, 13)), e4Mn = (elem4.substring(14, 16));
      // remembering javaScript months are 0 based

      if (commsLog == 1) console.log(e4Y + ' ' + e4M + ' ' + e4D + ' ' + e4Hr + ' ' + e4Mn);
      //set up a date from elem 4
      var d = new Date(e4Y, e4M, e4D, e4Hr, e4Mn, 0);
      var timeNow = formatDate();
      //console.log(timeNow);

      if (commsLog == 1) console.log(d.toString());
      if (commsLog == 1) console.log(dateNow.toString());
      if (d < dateNow) {
        //flush local storage for safety mo
        if (commsLog == 1) console.log('flush!');
        flushSafetyMo();
      }
    }

    //the following two statements are provided only for a reset
    //flush local storage for safety mo
    //flushSafetyMo();
    //flush local storage for campaign message
    //flushCampaignMessage();

  }
}


//utility function for returning date
function formatDate() {
    var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-') + ' ' + myDate;
}

//utility function instead of Modenizr
function html5_storage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    console.log(e.toString());
    return false;
  }
}

//utility to check if storage quota exceeded
function isQuotaExceeded(e) {
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true;
          break;
        case 1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true;
          }
          break;
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true;
    }
  }
  return quotaExceeded;
}

//flush local storage for SM
function flushSafetyMo() {
  localStorage.removeItem("SmId");
  localStorage.removeItem("SmHead");
  localStorage.removeItem("SmText");
  localStorage.removeItem("SmTtl");
}

//flush local storage for CM
function flushCampaignMessage() {
  localStorage.removeItem("CmId");
  localStorage.removeItem("CmText");
}
/*
Function List
==============
saveMoment - saves the current safety moment - the action from the Save key

continueSafetyMoment - next step after a save of the current safety moment

getNext - see the next safety moment - the action from the Refresh Key

getLocalStorageSafetyMoment - see the saved local safety moment - the action from the retrieve key

checkUpFront - partially in development - this function is: 1. the function called by onload() 2. is aimed at presenting a Campaign Message

html5_storage - utility function to check local storage is available to the browser

flushSafetyMo - utility function to remove the "SmId" and "SmText" local storage items

flushCampaignMessage - in development - utility function to remove the "CmId" and "CmText" local storage items
*/
/*
How to get the safety moment app to work with Mobile Safari on iOs 7...
When the Safari browser is used switch out of Private mode before using the app. This is because iOs 7 wipes all local storage by policy when the browser is in Private mode. So to use local storage to hold a safety moment you need to switch Private `Mode off. The policy implemented is nshttpcookiestorage

*/
 /* Advanced use of the campaign message is commented out for now...
    //console.log("yes local CM storage!");

    //check for campaign message to 'splash' over the screen at load-time
    var campaignMessageId = localStorage.getItem("CmId");
    var campaignMessageText = localStorage.getItem("CmText");

    //check local storage for campaign message
    if (campaignMessageId == null || campaignMessageText == null) {

      //fetch current campaign message as none exists
      campaignMessageId = "Summer2015";
      campaignMessageText = "In the Summer sun, always apply suncream and drink plenty of water";

      //set local storage to current campaign
      localStorage.setItem("CmId", campaignMessageId);
      localStorage.setItem("CmText", campaignMessageText);
    }
    else {
      //campaign message exists, so compare with current one to see if out of date
      localStorage.setItem("CmId", campaignMessageId);
      localStorage.setItem("CmText", campaignMessageText);
      if (campaignMessageId != "Summer2015") {
        //so set local to seasonal campaign message
        campaignMessageId = "Summer2015";
        campaignMessageText = "In the Summer sun, always apply suncream and drink plenty of water";
      }
    }

    */











