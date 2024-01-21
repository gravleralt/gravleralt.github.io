// Accessibility module

// Bold Text
function BoldText(){
    var boldText = document.getElementById('boldText');
    var textIcon = document.getElementById('textIcon');
    document.body.classList.toggle("bold-weight");
    if(document.body.classList.contains("bold-weight")){
        boldText.classList.add('active');
        textIcon.classList.add('active');
        // BoldLoop('div');
        var divv = document.getElementsByTagName("div");

        for(var item in divv){
            if(item){
                divv[item].style.fontWeight = "bold";
            }
        }

    }else{
        boldText.classList.remove('active');
        textIcon.classList.remove('active');

        var divv1 = document.getElementsByTagName('div');
    
        for(var item in divv1){
            if(item){
                divv1[item].style.fontWeight = "500";
            }
            // }catch(e){
            //     console.log(e)
            // }
        }
        // LightLoop('div');
    }
};

// function BoldLoop(tag){
//     var tagg = document.getElementsByTagName(tag);

//     for(var item in tagg){
//         tagg[item].style.fontWeight = "bold";
//     }
// }

// function LightLoop(tag){
//     var tagg = document.getElementsByTagName(tag);
    
//     for(var item in tagg){
//         tagg[item].style.fontWeight = "500";
//     }
// }

// Contrast
function InvertBody(){
    
    var invertBody = document.getElementById('invertBody');
    var invertIcon = document.getElementById('invertIcon');
    document.body.classList.toggle("invert");
    if(document.body.classList.contains("invert")){
        invertBody.classList.add('active');
        invertIcon.classList.add('active');
        
    }else{
        invertBody.classList.remove('active');
        invertIcon.classList.remove('active');
        
    }
    
};

// Highlight links
function HighlightLinks(){
    
    var highlightLink = document.getElementById('highlightLink');
    var linkIcon = document.getElementById('linkIcon');
    highlightLink.classList.toggle("active");
    linkIcon.classList.toggle("active");
    // document.body.classList.toggle("link");
    if(highlightLink.classList.contains("active")){
        LinkLoop('a');
        // var links = document.querySelectorAll('a');
        // links.style.textDecoration = "red wavy underline overline !important";
    }else{
        LinkRemoveLoop('a');
    }

};

function LinkLoop(tag){
    var tagg = document.getElementsByTagName(tag);
    for(var item in tagg){
        tagg[item].style.textDecoration = "red underline";
    }
}

function LinkRemoveLoop(tag){   
    var tagg = document.getElementsByTagName(tag);
    
    for(var item in tagg){
        tagg[item].style.textDecoration = "none";
        // tagg[item].style.color = "#637DAA";
    }
}


// Adjust font sizing using JQuery
var $affectedElements = $("p, h1, h2, h3, h4, h5, h6, a"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});
var percent2 = 0;
$("#btn-increase").click(function(){
    if(percent2 < 60){
        percent2 = percent2 + 10;
        changeFontSize(1);
        if(percent2 == 0 ){
            document.getElementById("font-size-defualt").innerHTML = "Default"
        }else{
            document.getElementById("font-size-defualt").innerHTML = percent2 + "%";
        }
    }
    
})

$("#btn-decrease").click(function(){
    if(percent2 > -40){
        percent2 = percent2 - 10;
        changeFontSize(-1);
    
        if(percent2 == 0 ){
            document.getElementById("font-size-defualt").innerHTML = "Default"
        }else{
            document.getElementById("font-size-defualt").innerHTML = percent2 + "%";
        }
    }
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}

// Adjust line height
(function(){
    
    var lineHeightAdd = document.getElementById('btn-increase-line-height');
    var lineHeightSub = document.getElementById('btn-decrease-line-height');
    // var lineHeightDefualt = document.getElementById('line-height-defualt');
    var lineheightStyle = getComputedStyle(document.body)

    var percent = 0;
    lineHeightAdd.addEventListener('click', function(){
        if(percent <= 20){
            document.body.style.lineHeight =  (parseFloat(lineheightStyle.lineHeight) / 16) + (0.4) + "em";
            percent = percent + 10
            if(lineheightStyle.lineHeight == "24px"){
                document.getElementById("line-height-defualt").innerHTML = "Default"
            }else{
                // document.getElementById("line-height-defualt").innerHTML = lineheightStyle.lineHeight;
                document.getElementById("line-height-defualt").innerHTML = percent + "%";
            }
        }
    })
    lineHeightSub.addEventListener('click', function(){
        if(percent >= -10){
            document.body.style.lineHeight =  (parseFloat(lineheightStyle.lineHeight) / 16) - (0.4) + "em";
            percent = percent - 10
            if(lineheightStyle.lineHeight == "24px"){
                document.getElementById("line-height-defualt").innerHTML = "Default"
            }else{
                // document.getElementById("line-height-defualt").innerHTML = lineheightStyle.lineHeight;
                document.getElementById("line-height-defualt").innerHTML = percent + "%";
            }
        }
    })
    
})();


// Adjust letter spacing
(function(){
    
    var letterSpaceAdd = document.getElementById('letter-space-add');
    var letterSpaceSub = document.getElementById('letter-space-sub');
    // var lineHeightDefualt = document.getElementById('line-height-defualt');
    var letterSpaceStyle = getComputedStyle(document.body)

    var percent1 = 0;
    letterSpaceAdd.addEventListener('click', function(){
        if(percent1 <= 20){
            document.body.style.letterSpacing =  (parseFloat(letterSpaceStyle.letterSpacing) / 16) + (0.1) + "em";
            percent1 = percent1 + 10;
            if(letterSpaceStyle.letterSpacing == "0.2px"){
                document.getElementById("letter-space-defualt").innerHTML = "Default"
            }else{
                // document.getElementById("letter-space-defualt").innerHTML = letterSpaceStyle.letterSpacing;
                document.getElementById("letter-space-defualt").innerHTML = percent1 + "%";
            }
        }
    })
    letterSpaceSub.addEventListener('click', function(){
        if(percent1 > -10 ){
            document.body.style.letterSpacing =  (parseFloat(letterSpaceStyle.letterSpacing) / 16) - (0.1) + "em";
            percent1 = percent1 - 10;
            // document.body.style.lineHeight =  (parseFloat(lineheightStyle.lineHeight) / 16) - (0.4) + "em";
            if(letterSpaceStyle.letterSpacing == "0.2px"){
                document.getElementById("letter-space-defualt").innerHTML = "Default"
            }else{
                // document.getElementById("letter-space-defualt").innerHTML = letterSpaceStyle.letterSpacing;
                document.getElementById("letter-space-defualt").innerHTML = percent1 + "%";
            }
        }
    })
    
})();

// Pointer size
function ChangeMouse(){
    
    var mouseBody = document.getElementById('mouseBody');
    var mouseIcon = document.getElementById('mouseIcon');
    mouseBody.classList.toggle("active");
    mouseIcon.classList.toggle("active");
    document.body.classList.toggle('cursor');
    
};

function SetDefault(){
    // history.go(0)
    location.reload();
    // Pointer size /mouse/
    // MouseDefault();

    // // Letter-spacing
    // LetterSpaceDefault();
 
    // // Line height
    // LineHeightDefault();

    // // Contrast
    // ContrastDefault();

    // // Hightlight link
    // HighlightDefault();

    // // Bold text
    // BoldTextDefault();       
}

// function MouseDefault(){
//     document.getElementById('mouseBody').classList.remove('active'); 
//     document.getElementById('mouseIcon').classList.remove('active');
//     document.body.classList.remove('cursor');
// }

// function LetterSpaceDefault(){
//     document.body.style.letterSpacing = "0.2px";
//     document.getElementById("letter-space-defualt").innerHTML = "Default"
// }

// function LineHeightDefault(){
//     document.body.style.lineHeight = "24px";
//     document.getElementById("line-height-defualt").innerHTML = "Default"
// }

// function ContrastDefault(){
//     if(document.body.classList.contains('invert')){
//         document.body.classList.remove("invert");
//         document.getElementById('invertBody').classList.remove('active');
//         document.getElementById('ivnertIcon').classList.remove('active');
//     }
// }

// function HighlightDefault(){
//     document.getElementById('highlightLink').classList.remove('active');
//     document.getElementById('linkIcon').classList.remove('active');
//     LinkRemoveLoop('a');
// }

// function BoldTextDefault(){
//     if(document.body.classList.contains('bold-weight')){
//         BoldText();
//     }
// }