var app = new Vue({
	el:'#about',
	data:{
		title:'I am ...',
        content:"An artificial Intelligence graduate from University of Malaya.",
        content2:`As an AI student I am equipped with the skills related to mathematics, Artificial Neural Network, Image Processing
        and Natural Language Processing. However, during my final year project I was given a challenge to develop a website.
        To fast forward I did a full stack web development using HTML, CSS, Javascript, Python and Django. Without having
        any classes to understand web developmet I did self-learn everything from scratch and did a website and succesfully
        deployed online using Heroku free service.`
    },
    delimiters:["[[","]]"]
});

Vue.component('Pic_prof',{
    template:`
    <div class="shape-outer circle">
        <div class="shape-inner circle"></div>
    </div>  
  `
})

Vue.component('stats',{
    template:`<h3>
    Age: 23 years old
    <br>DOB: 16 December 1997
    <br>Hobby: Go to the gym but.. <br>haven't step into the gym <br>for a while now ^_^
    <br>Location: Kuala Lumpur
    </h3>`
})

new Vue({
    el:'#app',
    delimiters:["[[","]]"]
})

new Vue({
    el:'#stats',
    delimiters:["[[","]]"]
})
