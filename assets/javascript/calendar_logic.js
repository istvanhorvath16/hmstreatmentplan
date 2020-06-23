class Calendar{




constructor(){
    
    this._daysDomElementAssigning();

}





_daysDomElementAssigning(){


    let nextButton=document.querySelector("#next-round");
    let previousButton=document.querySelector("#previous-round");
    let monthName=document.querySelector(".calendar-month");
    let currentMonth= new Date(); 
    let thisMonth= currentMonth.getMonth() + 1;
    let clickCounter= 0;
    let monthList=[ {name: "January" , number: 1}, 
    {name: "February" , number: 2},
    {name: "March" , number: 3}, 
    {name: "April" , number: 4}, 
    {name: "May" , number: 5}, 
    {name: "June" , number: 6},
    {name: "July" , number: 7},
    {name: "August" , number: 8},
    {name: "September" , number: 9},
    {name: "October" , number: 10},
    {name: "November" , number: 11},
    {name: "December" , number: 12},
    ];
    
    
    function _headerMonth(numValue){
    monthList.forEach( month => {
        if(month.number===thisMonth+numValue)
        monthName.innerText=`${month.name}`;
    })
    }
    
    nextButton.addEventListener("click", () => {
         _headerMonth(1);
         thisMonth+=1;
         clickCounter=1;  
        });
    
    previousButton.addEventListener("click",() => {
         _headerMonth(1);
         thisMonth-=1;
         clickCounter=1;  
        } );
    
    if(clickCounter==0) {
        _headerMonth(0);
    }
        
    
    
let calendarDays= document.getElementsByClassName('calendar-days');


function _daysInMonth (month, year) { 
        return new Date(year, month, 0).getDate(); 
}

let index=0;
    
for(let day of calendarDays) {
   
    let $dayNumberElement= document.createElement('p');
    $dayNumberElement.innerText=`${index}`;
    $dayNumberElement.classList.add('day-number');
    console.log(day);
    index++;
    day.appendChild($dayNumberElement);
}


}
}


const day= new Calendar();





