// Today Object Data Type
let jubayer = {
    name: "jubayer",
    Roll: 1,
    relationship: true,
    bankName: "islami bank",
    myFuntion: function(){
        console.log('jubu is here');
    },
    friend: ['Helal', 'Habib', 'Jubayer', 'Abdullah']
};

jubayer.myFuntion();
console.log(jubayer.bankName);
console.log(jubayer.friend);

let car = {
    running: function(){
        console.log("The car is running.........");
    },
    stopCar: function (){
        console.log("The car is stop now ");
    },
};
car.running();
car.stopCar();