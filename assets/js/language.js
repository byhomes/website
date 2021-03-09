function toggleLanguage() {
    document.getElementById("english-icon-index").classList.toggle('on');
    document.getElementById("chinese-icon-index").classList.toggle('on');
    document.getElementById("english-icon-index").classList.toggle('off');
    document.getElementById("chinese-icon-index").classList.toggle('off');

    document.querySelectorAll('[id^="english-index"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="chinese-index"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="english-index"]').forEach(
        node => node.classList.toggle('off'))
    document.querySelectorAll('[id^="chinese-index"]').forEach(
        node => node.classList.toggle('off'))



}
