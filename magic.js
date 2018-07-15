console.log("-js connected-")




$('.mainTitle').click(function(){

    const alterMain =$(this)
    $(this).html(<h2>This has dynamically changed</h2> )
    
    
})


//  $('.e100').click(function () {

//     const popup = $(this)
//     $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
//     $(this).prepend('<img id="clock" src="timer30.gif" />')
//     $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
//     $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
//     $(this).append('<button class="isright">Billie Jean</button')
//     $(this).append('<button class="iswrong">Bonita AppleBum</button')
//     setTimeout(function () {
//         popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
//     }, 30000);