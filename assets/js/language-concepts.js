function toggleLanguage() {
    document.getElementById("english-icon-concepts").classList.toggle('on');
    document.getElementById("chinese-icon-concepts").classList.toggle('on');
    document.getElementById("english-icon-concepts").classList.toggle('off');
    document.getElementById("chinese-icon-concepts").classList.toggle('off');

    document.querySelectorAll('[id^="english-concepts"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="chinese-concepts"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="english-concepts"]').forEach(
        node => node.classList.toggle('off'))
    document.querySelectorAll('[id^="chinese-concepts"]').forEach(
        node => node.classList.toggle('off'))
}
