$("#c37_b").prop("checked", true);
$("#c38_b").prop("checked", true);
$("#c39_b").prop("checked", true);
$("#c40_b").prop("checked", true);
$("#c41_b").prop("checked", true);
document.getElementById('btn_confirm').click();

chrome.tabs.executeScript({
    code: '$("#c37_b").prop("checked", true);$("#c38_b").prop("checked", true);$("#c39_b").prop("checked", true);$("#c40_b").prop("checked", true);$("#c41_b").prop("checked", true);document.getElementById("btn_confirm").click();'
})