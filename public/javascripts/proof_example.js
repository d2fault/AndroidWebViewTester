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

function onClickSharedButton() {
  var options = {};
  options.url = "https://zuzu-web.vercel.app/result/view/3"
  console.log("onClickSharedButton");
  proof.onClickSharedButton(options, function (result_cd, result_msg, extra) {
    console.log(result_cd + result_msg + JSON.stringify(extra));
  });
}