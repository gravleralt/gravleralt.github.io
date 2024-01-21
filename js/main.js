function darkModeMobile(bool, isLong){
    let danImg = document.getElementById('danImg');
    let path
    if(isLong === "long"){
        path = "/static/assets/img/"
    }else{
        path = "/static/assets/img/"
    }

    if(bool === "true"){
        document.body.classList.add("dark-theme");
        danImg.src = `${path}dark-logo.png`
    }else{
        document.body.classList.remove("dark-theme");
        danImg.src = `${path}light-logo.png`
    }
};

function eyeToggler(){
    var eyeToggle = document.getElementById('togglePassword');
    var passs = document.getElementById('pass');

    if(document.getElementById('togglePassword').src.match('/static/assets/img/Eye.svg') ){
        eyeToggle.src = '/static/assets/img/eye-hide.svg'
        passs.setAttribute('type','text')
    }else{
        eyeToggle.src = '/static/assets/img/Eye.svg'
        passs.setAttribute('type','password')
    }
}

function eyeChange(passId, imgId){
    var pass = document.getElementById(passId);
    if (document.getElementById(imgId).src.match('/static/assets/img/Eye.svg')) {
        document.getElementById(imgId).src = '/static/assets/img/eye-hide.svg'
        pass.setAttribute('type','text')
    } else {
        document.getElementById(imgId).src = '/static/assets/img/Eye.svg'
        pass.setAttribute('type','password')
    }
}

function AccessibePanelOpen(){
    try{
        var panell = document.getElementById('panel');
        var panelBack = document.getElementById('panel-back');
        panell.classList.add('openPanel');
        panelBack.classList.add('active');
    }catch(err){
        alert(err);
    }
}

function AccessibePanelClose(){
    try{
        var panell = document.getElementById('panel');
        var panelBack = document.getElementById('panel-back');
        panell.classList.remove('openPanel');
        panelBack.classList.remove('active');
    }catch(err){
        alert(err);
    }
}

{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mobile = urlParams.get('mobile')
    const dark = urlParams.get('isdark')

    if(mobile){
        var cssId = "mobile"
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';

        var loc = window.location.pathname
        var dir = loc.substring(0, loc.lastIndexOf('/'));

        // console.log(dir)
        if(dir === '/pages/form' || dir === '/pages/utility'){
            link.href = '/static/assets/css/mobile.css';
            // dark mode set
            darkModeMobile(dark, "long");
        }else{
            link.href = '/static/assets/css/mobile.css';
            // dark mode set
            darkModeMobile(dark, "short");
        }

        link.media = 'all';
        head.appendChild(link);

        var panelCont = document.getElementById("citizen");
        // var panel = document.getElementById("ct");
        //
        // panel.classList.remove("custom-card-wrapper")

    }
}

// Mobile
{
    let aaa = 'e'

    $('.rd1').click(function(e){
        $('.regHeader').text('РД эхний үсгээ сонгоно уу');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('show');
        } else {
            $('#alphabet.loginAlphabet').show();
        }
        aaa = "m1";
    });

    $('.rd2').click(function(e){
        $('.regHeader').text('РД хоёр дахь үсгээ сонгоно уу');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('show');
        } else {
            $('#alphabet.loginAlphabet').show();
        }
        aaa = "m2";
    });

    $('.item').click(function(e){
        e.preventDefault();
        var text = $(this).text();
        if (aaa == "m1") {
            $('.rd1').text(text);
        } else {
            $('.rd2').text(text);
        }
        $('#' + aaa).css('border', '1px solid #637DAA');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('hide');
        } else {
            $('#alphabet.loginAlphabet').hide();
        }
    });

    $('.rd11').click(function(e){
        $('.regHeader').text('РД эхний үсгээ сонгоно уу');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('show');
        } else {
            $('#alphabet_child.loginAlphabet').show();
        }
        aaa = "m1";
    });

    $('.rd22').click(function(e){
        $('.regHeader').text('РД хоёр дахь үсгээ сонгоно уу');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('show');
        } else {
            $('#alphabet_child.loginAlphabet').show();
        }
        aaa = "m2";
    });

    $('.item2').click(function(e){
        e.preventDefault();
        var text = $(this).text();
        if (aaa == "m1") {
            $('.rd11').text(text);
        } else {
            $('.rd22').text(text);
        }
        $('#' + aaa).css('border', '1px solid #637DAA');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#alphabetModal.loginAlphabet').modal('hide');
        } else {
            $('#alphabet_child.loginAlphabet').hide();
        }
    });
}

var dark_mode = $('#dark_mode').data('dark');
var mobile_mode = $('#dark_mode').data('mobile');

darkModeMobile(dark_mode)

if(mobile_mode == 'True'){
    var cssId = "mobile"
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';

    var loc = window.location.pathname
    var dir = loc.substring(0, loc.lastIndexOf('/'));

    if(dir === '/pages/form' || dir === '/pages/utility'){
        link.href = '/static/assets/css/mobile.css';
    }else{
        link.href = '/static/assets/css/mobile.css';
    }

    link.media = 'all';
    head.appendChild(link);

    var panel = document.getElementById("ct");

    panel.classList.remove("custom-card-wrapper")
} else if (mobile_mode == 'False') {
    $('#mobile').remove();
    var panel = document.getElementById("ct");
    panel.classList.add("custom-card-wrapper")
}


// Dark mode for E-mongolia App
function darkModeMobile(bool){
    var type = 'light';
    if (bool == 'True') {
        type = 'dark';
    }
    let danImg = document.getElementById('danImg');
    danImg.src = '/static/assets/img/' + type + '-logo.webp'
    document.body.classList.add(type + "-theme");
};
