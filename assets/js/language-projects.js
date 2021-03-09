function toggleLanguage() {
    document.getElementById("english-icon-projects").classList.toggle('on');
    document.getElementById("chinese-icon-projects").classList.toggle('on');
    document.getElementById("english-icon-projects").classList.toggle('off');
    document.getElementById("chinese-icon-projects").classList.toggle('off');

    document.querySelectorAll('[id^="english-projects"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="chinese-projects"]').forEach(
        node => node.classList.toggle('on'))
    document.querySelectorAll('[id^="english-projects"]').forEach(
        node => node.classList.toggle('off'))
    document.querySelectorAll('[id^="chinese-projects"]').forEach(
        node => node.classList.toggle('off'))



}
