var proof = {};
var transactions = {};
var trxcnt = 0;

/** APIs **/
proof.getProofAccessToken = function (options, callback) {
  proof.callNative("getProofAccessToken", options, callback);
};
proof.closeWebView = function (options, callback) {
  proof.callNative("closeWebView", options, callback);
};
proof.onClickSharedButton = function (options, callback) {
  proof.callNative("onClickSharedButton", options, callback);
};

/** 이 아래 코드는 무시해도 됩니다. **/
proof.callNative = function (functionName, options, callback) {
  var trx_id = proof.getTransactionId();
  transactions[trx_id] = {};
  transactions[trx_id].call = callback;
  transactions[trx_id].options = options;
  window.proof_native_api.call(functionName, JSON.stringify(options), trx_id);
};

proof.event = function (_eventData) {
  const eventData = _eventData.replace(/\n/g, "");
  const eventDataObj = JSON.parse(eventData);
  switch (eventDataObj.eventType) {
    case "CALLBACK_EVENT":
      let trx_id = eventDataObj.transactionId;
      if (trx_id) {
        transactions[trx_id].call(eventDataObj.result_cd, eventDataObj.result_msg, eventDataObj.extra);
        delete transactions[trx_id];
      }
      break;
    default:
      break;
  }
};

proof.getTransactionId = function () {
  var trxTime = new Date().getTime();
  var trxId = trxTime + ":" + pad(trxcnt++, 5);
  trxcnt = trxcnt % 10000;
  return trxId;
};

function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}