console.log("-js connected-")


// const reportForm = {



// }

$('.navDrop').click(function(){
    console.log('Clicked')
   
    $('.picAppear').html(" ")
    $('.mainSections').css({ display:'flex', flexDirection: 'column'}) 
    $( '.mainSections' ).blur({display: 'none'})  
    $('.picAppear').prepend(' <img class="logopic" src="/images/react.png" />') 
    $('.picAppear').css({display:"flex", marginBottom:"25px"  }) 
    // $('.profileMain').css({ display:'flex', flexDirection: 'column'}) 
    $('.mainTitle').css({ backgroundImage: ('url(/images/talk.png)')}) 

})

$('mainCircles').addClass('animated infinite tada');
$('mainCircles2').addClass('animated infinite tada');
$('mainCircles3').addClass('animated infinite tada');
$('mainCircles4').addClass('animated infinite tada');



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
    $('.herokuLink').html("Heroku Link (Contract App): https://floating-journey-26764.herokuapp.com/")
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
    $('.subPageMain2').html(" ")
    $('.subPageMain2').html("Brand Statement <br><hr>As a Junior Web Developer, I am looking to develop my skills and abilities to program dynamically rendered web-pages and server-side applications. I plan to increase the efficiency and quality of the applications I build. My sales background allows me to approach this industry with a consumer-driven focus, geared towards bridging the cap between highly-functional programs and elegantly-designed UIs. The cornerstone of the successes I intend to reach, are fundamentally tied to the ability for me to learn new concepts as a software development professional. I plan to contribute my creative energy and ideas towards significantly impacting this industry with exceptional products and applications.")
   
})

$('.mainCircles2').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html(" ")

    $('.subPageMain2').html('<br><br><strong>Ralph Dickerson (AWDA Tech Specialists ) :</strong> rdickerson@atlanta.ga.gov <br><hr> <strong>Jamie King (General Assembly Instructor: )</strong>jamie.king@generalassemb.ly <br><hr> <strong>Cassandra Powell (New Horizons Career Coach: )</strong>cpowell@nhgeorgia.com<br><hr> ')


   
})

$('.mainCircles3').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html(" <strong>Phone :</strong> (716) 717-5001 <br><hr> <strong>Email :</strong> jmwofford@gmail.com <br><hr> <strong>GitHub :</strong> https://github.com/Jmwofford <br><hr> <strong>LinkedIn :</strong> https://www.linkedin.com/in/jordan-m-wofford-aa079630/")

   
})

$('.mainCircles4').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html("About Me <br><br><hr> <strong>Birth Place: </strong> Buffalo, NY <br><br><strong>Education: </strong> Lindenwood University <br><br> <strong>Major: </strong> International Business <br><br> <strong>Tech Stack (Preferred): </strong> MERNS ")
    $('.subPageMain2').prepend(' <img class="jordanpic" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/37204441_3534743683316_6145159505408688128_n.jpg?_nc_cat=0&oh=1e19bbbbcf9550e2d39118581ac1e186&oe=5BE7C801" />')


})


$('.mainCircles5').click(function(){
    console.log('Clicked')
    $('.subPageMain2').html("Report Me + Add A Form")

   
})
