console.log("-js connected-")


// const reportForm = {



// }

$('.navDrop').click(function(){
    console.log('Clicked')
    $('.mainSections').css({ display:'flex', flexDirection: 'column'})    
})

$('.exampleDiv2').click(function(){
    console.log('Clicked')
    $('.exDivShow2').css({ backgroundImage:('url(/images/goatt.png)')})
    $('.herokuLink').html("Heroku Link: https://safe-sea-48470.herokuapp.com/goats")
    $('.githubLink').html("GitHub Link: https://git.generalassemb.ly/jmwofford/GoatCRUD")
})


$('.exampleDiv7').click(function(){
    console.log('Clicked')
    $('.exDivShow2').css({ backgroundImage:('url(/images/jeopardy.png'),backgroundSize: "cover" })
    $('.herokuLink').html("Jeopardy Heroku")
    $('.githubLink').html(" GitHub Link:https://git.generalassemb.ly/jmwofford/Jeopardy_game")
})



$('.exampleDiv8').click(function(){
    console.log('Clicked')
    $('.exDivShow2').css({ backgroundImage:('url(/images/contract.png)')})
    $('.herokuLink').html("Heroku Link (Contract App): ")
    $('.githubLink').html("GitHub Link: https://git.generalassemb.ly/jmwofford/Project3Actual ")
})



$('.exampleDiv9').click(function(){
    console.log('Clicked')
    $('.exDivShow2').css({ backgroundImage:('url(/images/chic.png)')})
    $('.herokuLink').html("Others Heroku")
    $('.githubLink').html("Others Git")
})

// ===========================



$('.mainCircles').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html("As a junior web developer I am looking to develop my skills and abilities to program dynamically rendered web-pages and server-side applications, to increase the efficiency and quality of the applications I build. My sales background allows me to approach this industry with a consumer-driven focus geared towards bridging the cap between highly-functional programs and elegantly-designed UIs . The cornerstone of the successes I intend to reach are fundamentally tied to the ability for me to learn new concepts as a software development professional. I plan to contribute my creative energy and ideas to significantly impacting this industry with exceptional products and applications.")
   
})

$('.mainCircles2').click(function(){
    console.log('Clicked')
    $('.subPageMain2').prepend(' <img class="logopic" src="/images/mongodb.png" />')

    $('.subPageMain2').prepend(' <img class="logopic" src="/images/react.png" />')
    $('.subPageMain2').prepend(' <img class="logopic" src="/images/rubyrails.png" />')
    $('.subPageMain2').prepend(' <img class="logopic" src="/images/jquery.gif" />')
    $('.subPageMain2').prepend(' <img class="logopic" src="/images/nodejs.png" />')

   
})

$('.mainCircles3').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html(" Investment Ideas +Add a Picture/Chart")

   
})

$('.mainCircles4').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html("some text belongs here  ")
    $('.subPageMain2').prepend(' <img class="jordanpic" src="/images/jmwga2.jpg" />')


})


$('.mainCircles5').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html("Report Me + Add A Form")

   
})
