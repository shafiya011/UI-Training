// <!-- input,focus,blur,submit -->
    // <!-- keyboardevents  keydown,keyup,keypress -->
    var button=document.getElementById('submit')
    button.onmouseover=()=>{
        console.log('mouse over')
    }
    button.onmouseup =()=>{
        console.log('mouse up')
    }
    // button.onmousedown =()=>{
    //     console.log('mouse down')
    // }
    // button.onmouseleave =()=>{
    //     console.log('mouse leave')
    // }
    // button.onmouseenter =()=>{
    //     console.log('mouse enter')
    // }
    button.ondblclick=()=>{
        console.log('doubleclick')
    }