function toggleLanguage() {
    document.getElementById("english-icon-about").classList.toggle('on');
    document.getElementById("chinese-icon-about").classList.toggle('on');
    document.getElementById("english-icon-about").classList.toggle('off');
    document.getElementById("chinese-icon-about").classList.toggle('off');

    document.querySelectorAll('[id^="english-about"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="chinese-about"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="english-about"]').forEach(
        node => node.classList.toggle('off'))
    document.querySelectorAll('[id^="chinese-about"]').forEach(
        node => node.classList.toggle('off'))
}
