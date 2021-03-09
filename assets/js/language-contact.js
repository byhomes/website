function toggleLanguage() {
    document.getElementById("english-icon-contact").classList.toggle('on');
    document.getElementById("chinese-icon-contact").classList.toggle('on');
    document.getElementById("english-icon-contact").classList.toggle('off');
    document.getElementById("chinese-icon-contact").classList.toggle('off');

    document.querySelectorAll('[id^="english-contact"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="chinese-contact"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="english-contact"]').forEach(
        node => node.classList.toggle('off'))
    document.querySelectorAll('[id^="chinese-contact"]').forEach(
        node => node.classList.toggle('off'))

    return false;

}
