function getProofAccessToken() {
  var options = {};
  console.log("getProofAccessToken");
  proof.getProofAccessToken(options, function (result_cd, result_msg, extra) {
    console.log(result_cd + result_msg + JSON.stringify(extra));
  });
}

function closeWebView() {
  var options = {};
  console.log("closeWebView");
  proof.closeWebView(options, function (result_cd, result_msg, extra) {
    console.log(result_cd + result_msg + JSON.stringify(extra));
  });
}