(function (win) {
    var MYAPP,
        adIndex = 0,
        srcIndex = 0,
        html,
        srcs;

    //helper function to load scripts
    //JavaScript Patterns book
    function require(file, callback) {
        var script = document.getElementsByTagName('script')[0],
            newjs = document.createElement('script'),
            calledBack = false;

        if (typeof callback !== "function") {
            //noop
            callback = function () {};
        }

            // IE
        newjs.onreadystatechange = function () {
            if (newjs.readyState === 'loaded' || newjs.readyState === 'complete') {
                newjs.onreadystatechange = null;
                if (!calledBack) {
                    callback();
                    calledBack = true;
                }
            }
        };

        // others
        newjs.onload = function () {
            if (!calledBack) {
                callback();
                calledBack = true;
            }
        };

        newjs.src = file;
        script.parentNode.insertBefore(newjs, script);
    }

    //variable for html content and external scripts
    win.MYAPP = win.MYAPP || {
        html: [],
        srcs: []
    };

    MYAPP = win.MYAPP;
    html = MYAPP.html;
    srcs = MYAPP.srcs;

    //Add some HTML content to MYAPP.html
    html.push('<div>AD CONTENT HERE</div>');
    html.push('<div>ANOTHER AD HERE</div>');

    //Other external sources that will be loaded async... Array of objects with file and optional callback to run
    //when loaded.
    srcs.push({file: 'https://raw.githubusercontent.com/nguyenlehaison/wedding_embed_js/main/embedded_jsfile.js', callback: DoWork});

    //Load the scripts
    for (srcIndex = 0; srcIndex < srcs.length; srcIndex++) {
        require(srcs[srcIndex].file, srcs[srcIndex].callback);
    }

    //Do stuff with HTML content
    var displayAd = document.createElement("div");
    displayAd.innerHTML = html[adIndex];
    adIndex = (adIndex + 1) % html.length;
    document.body.appendChild(displayAd);
    //Rotate Ads every 3 seconds.
    window.setInterval(function () {
        var len = html.length;
        if (len && adIndex <= len) {
            displayAd.innerHTML = html[adIndex];
            adIndex = (adIndex + 1) % len;
        }
    }, 3000);

    //Sample callback function to be executed after script is loaded
    function DoWork() {
        win.$(function () {
            const _listeners = [];
// Used to make sure the listener functions are triggered once and only once
var _triggered = false;
// All listeners defined by the user are triggered here
function _onTrigger(e) {
    // We want to make sure we trigger this function once and only once
    if (_triggered) {
        return;
    }
    _triggered = true;
    for (var listener of _listeners) { // run all the user-defined listeners
        listener();
    }
    // Remove the listeners
    document.removeEventListener('mousedown', _onTrigger);
    // document.removeEventListener('mousemove', _onTrigger);
    document.removeEventListener('touchstart', _onTrigger);
    // document.removeEventListener('scroll', _onTrigger);
    document.removeEventListener('keydown', _onTrigger);
    // Finally, release local listeners
    while (_listeners.length) {
        _listeners.pop();
    }
}
// Make sure we're in a browser before adding our Main listener
// Makes safe for SSR with Next.js, Gatsby etc.
if (typeof window !== 'undefined') {
    // Trigger our main function on any input from the user in the browser
    document.addEventListener('mousedown', _onTrigger);
    // document.addEventListener('mousemove', _onTrigger);
    document.addEventListener('touchstart', _onTrigger);
    // document.addEventListener('scroll', _onTrigger);
    document.addEventListener('keydown', _onTrigger);
}
            console.log('Jquery loaded');
            // document.getElementById('wrapper').click();
            const playBtn = () => {
                let audiobtn;
                
                do {
                    audiobtn = document.getElementsByClassName('bii-player')[0]
                } while(!audiobtn)
                audiobtn.firstElementChild.click();
            }
            let checkOpen = false;
            const aud = document.getElementsByTagName('audio');

            const setVolumn = (value, to) => {
                setTimeout(() => {
                    if (checkOpen || !_triggered) {return}
                    const run = () => {
                        try {
                            aud[0].volume = value;
                            if (aud[0].duration > 0 && !aud[0].paused) {
                                checkOpen = true;
                            } else {
                                playBtn();
                                // aud[0].play();
                            }
                        } catch (e) {
                            console.error('aaaa',e);
                        }
                    }
                    run();
                }, to);
            }

            for(let i = 1; i <= 600; i++) {
                setVolumn('.2',i ? 1500*i : 1000);
            }
            console.clear();
            console.info(
            '%c🤵‍♂️Hải Sơn và 👰‍♀️Phi Nhung xin chào! 🎉🎉',
            `
                font-family: 'Marmelad', sans-serif;
                font-weight: 500;
                font-size: 2.5rem;
                color: #AA4A44;
                display: block;
                padding: 32px;
                background-color: #fffcf3;
                border-color: #fffcf3;
                width: 400px;
                border-radius: 6px;
                border: 1px #fffcf3 solid;
            `
            )
        });
    }

}(window));


