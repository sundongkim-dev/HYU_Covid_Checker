var code = '$("#c37_b").prop("checked", true);$("#c38_b").prop("checked", true);$("#c39_b").prop("checked", true);$("#c40_b").prop("checked", true);$("#c41_b").prop("checked", true);document.getElementById("btn_confirm").click();';

chrome.scripting.executeScript({
    code: code
}, function(){
    // 위 코드 실행 후 해당 함수 호출. reuslt에 결과 반환
    console.log("Done");
});