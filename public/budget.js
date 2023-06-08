function getVal() {
    const val = document.querySelector('input').value;
    return val;
}



$(function () {

    if ($("#amount").val() != getVal()) {
        console.log(getVal())

    }
    $("#slider-range").slider({
        step: 100
    });
    $("#slider-range").slider({
        range: true,
        min: 100,
        max: 10000,
        values: [2000, 6000],
        slide: function (event, ui) {
            document.getElementById("amountext").innerHTML = ui.values[0];
            $("#amount").val("₪" + ui.values[0]);
            $("#amount1").val("₪" + ui.values[1]);

        }
    });
    document.getElementById("amountext").innerHTML = $("#slider-range").slider("values", 0);
    $("#amount").val("₪" + $("#slider-range").slider("values", 0));
    $("#amount1").val("₪" + $("#slider-range").slider("values", 1));
    console.log(getVal())

});


function animation() {
    let p = document.getElementById("p")
    let yes = document.getElementById("yes")
    let buttons = document.getElementById("buttons")
    let keep = document.getElementById("keep-going")
    let range = document.getElementById("ran")
    if (p.style.marginRight == "" && no.style.backgroundPosition == 'left bottom') {
        p.style.setProperty('margin-right', 'calc(3vh / 932 * 100)');
        p.style.transition = ".2s"
        range.style.setProperty('height', 'calc(218vh / 932 * 100)');
        range.style.transition = ".2s"
        buttons.style.setProperty('height', 'calc(323vh / 932 * 100)');
        buttons.style.transition = ".2s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"

    } else if (no.style.backgroundPosition == 'left bottom') {
        p.style.marginRight = ""
        p.style.transition = ".2s"
        range.style.setProperty('height', 'calc(55vh / 932 * 100)');
        range.style.transition = ".2s"
        buttons.style.setProperty('height', 'calc(135vh / 932 * 100)')
        buttons.style.transition = ".2s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"

    }
}

function fill() {
    let keep = document.getElementById("keep-going")
    let no = document.getElementById("no")
    let p = document.getElementById("p")
    if (no.style.backgroundPosition == 'left bottom' && p.style.marginRight == "") {
        no.style.backgroundPosition = 'right bottom'
        no.style.color = 'white'
        no.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }
    else if (no.style.backgroundPosition != 'left bottom') {
        no.style.backgroundPosition = 'left bottom'
        no.style.color = 'black'
        no.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"
    }
}
