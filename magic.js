console.log("-js connected-")


$('.exampleDiv2').click(function(){
    console.log('Clicked')
    $('.exDivShow').css({ background: 'blue'})
    $('.herokuLink').html("GOAT HEROKU")
    $('.githubLink').html("GitHub Link:https://git.generalassemb.ly/jmwofford/GoatCRUD")
})


$('.exampleDiv7').click(function(){
    console.log('Clicked')
    $('.exDivShow').css({ backgroundImage:('url(/images/jeopardy.png'),backgroundSize: "cover" })
    $('.herokuLink').html("Jeopardy Heroku")
    $('.githubLink').html(" GitHub Link:https://git.generalassemb.ly/jmwofford/Jeopardy_game")
})



$('.exampleDiv8').click(function(){
    console.log('Clicked')
    $('.exDivShow').css({ background: 'green'})
    $('.herokuLink').html("Heroku Link (Contract App): ")
    $('.githubLink').html("GitHub Link: https://git.generalassemb.ly/jmwofford/Project3Actual ")
})



$('.exampleDiv9').click(function(){
    console.log('Clicked')
    $('.exDivShow').css({ background: 'pink'})
    $('.herokuLink').html("Others Heroku")
    $('.githubLink').html("Others Git")
})

