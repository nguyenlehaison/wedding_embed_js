const removePlayBtn = () => {
    let audiobtn;
    do {
        audiobtn = document.getElementsByClassName('bii-player')[0]
    } while(!audiobtn)
    audiobtn.remove();
}
const setVolumn = (value) => {
    setTimeout(() => {
        try {

        const aud = document.getElementsByTagName('audio');
        
        aud[0].volume = value;
        aud[0].muted = false;
        // aud[1].remove();
        } catch (e) {
            console.error(e);
        }
    }, 1000);
}
// removePlayBtn();
setVolumn('.2');

console.log('check_dâta');
setTimeout(() => {
    console.log('check_dâta_2');
})
