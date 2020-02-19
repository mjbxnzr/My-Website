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
    template:`
    <div class="Status">
        <div class="age">
            <div class="one_third">
                <strong>Age</strong>
                <span>23</span> 
            </div>
        </div>
        <div class="location">
            <div class="one_third">
                <strong>Location</strong>
                <span>Kuala Lumpur</span>
            </div>
        </div>
        <div class="DOB">
            <div class="no_border">
            <strong>D.O.B.</strong>
            <span>16/12/97</span>
            </div> 
        </div>
    </div>
    `
})

new Vue({
    el:'#app',
    delimiters:["[[","]]"]
})

new Vue({
    el:'#stats',
    delimiters:["[[","]]"]
})
