function fillTable() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")

    if (table.style.backgroundPosition == 'left bottom' && chair.style.backgroundPosition != 'right bottom' && sofa.style.backgroundPosition != 'right bottom' && cabin.style.backgroundPosition != 'right bottom' && arm_chair.style.backgroundPosition != 'right bottom' && shelf.style.backgroundPosition != 'right bottom') {
        console.log(table.style.backgroundColor)
        table.style.backgroundPosition = 'right bottom'
        table.style.color = 'white'
        table.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (table.style.backgroundPosition != 'left bottom') {
        table.style.backgroundPosition = 'left bottom'
        table.style.color = 'black'
        table.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"

    }

}
function fillChair() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")
    if (chair.style.backgroundPosition == 'left bottom' && table.style.backgroundPosition != 'right bottom' && sofa.style.backgroundPosition != 'right bottom' && cabin.style.backgroundPosition != 'right bottom' && arm_chair.style.backgroundPosition != 'right bottom' && shelf.style.backgroundPosition != 'right bottom') {
        chair.style.backgroundPosition = 'right bottom'
        chair.style.color = 'white'
        chair.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (chair.style.backgroundPosition != 'left bottom') {
        chair.style.backgroundPosition = 'left bottom'
        chair.style.color = 'black'
        chair.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"
    }

}

function fillSofa() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")
    if (sofa.style.backgroundPosition == 'left bottom' && table.style.backgroundPosition != 'right bottom' && chair.style.backgroundPosition != 'right bottom' && cabin.style.backgroundPosition != 'right bottom' && arm_chair.style.backgroundPosition != 'right bottom' && shelf.style.backgroundPosition != 'right bottom') {
        sofa.style.backgroundPosition = 'right bottom'
        sofa.style.color = 'white'
        sofa.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (sofa.style.backgroundPosition != 'left bottom') {
        sofa.style.backgroundPosition = 'left bottom'
        sofa.style.color = 'black'
        sofa.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"
    }

}

function fillCabin() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")
    if (cabin.style.backgroundPosition == 'left bottom' && table.style.backgroundPosition != 'right bottom' && chair.style.backgroundPosition != 'right bottom' && sofa.style.backgroundPosition != 'right bottom' && arm_chair.style.backgroundPosition != 'right bottom' && shelf.style.backgroundPosition != 'right bottom') {
        cabin.style.backgroundPosition = 'right bottom'
        cabin.style.color = 'white'
        cabin.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (cabin.style.backgroundPosition != 'left bottom') {
        cabin.style.backgroundPosition = 'left bottom'
        cabin.style.color = 'black'
        cabin.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"

    }

}

function fillArmChair() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")
    if (arm_chair.style.backgroundPosition == 'left bottom' && table.style.backgroundPosition != 'right bottom' && chair.style.backgroundPosition != 'right bottom' && sofa.style.backgroundPosition != 'right bottom' && cabin.style.backgroundPosition != 'right bottom' && shelf.style.backgroundPosition != 'right bottom') {
        arm_chair.style.backgroundPosition = 'right bottom'
        arm_chair.style.color = 'white'
        arm_chair.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (arm_chair.style.backgroundPosition != 'left bottom') {
        arm_chair.style.backgroundPosition = 'left bottom'
        arm_chair.style.color = 'black'
        arm_chair.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"
    }

}

function fillShelf() {
    let keep = document.getElementById("keep-going")
    let table = document.getElementById("table")
    let chair = document.getElementById("chair")
    let sofa = document.getElementById("sofa")
    let cabin = document.getElementById("cabin")
    let arm_chair = document.getElementById("arm-chair")
    let shelf = document.getElementById("shelf")
    if (shelf.style.backgroundPosition == 'left bottom' && table.style.backgroundPosition != 'right bottom' && chair.style.backgroundPosition != 'right bottom' && sofa.style.backgroundPosition != 'right bottom' && cabin.style.backgroundPosition != 'right bottom' && arm_chair.style.backgroundPosition != 'right bottom') {
        shelf.style.backgroundPosition = 'right bottom'
        shelf.style.color = 'white'
        shelf.style.transition = ".3s"
        keep.style.opacity = '1'
        keep.style.transition = ".5s"
    }

    else if (shelf.style.backgroundPosition != 'left bottom') {
        shelf.style.backgroundPosition = 'left bottom'
        shelf.style.color = 'black'
        shelf.style.transition = ".3s"
        keep.style.opacity = '0'
        keep.style.transition = ".2s"
    }


}