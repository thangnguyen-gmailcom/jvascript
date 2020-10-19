let listImg = document.getElementsByTagName("img");
let contain = document.getElementById("contain");
contain.addEventListener("click", insertImage);
let saveImage = [
    [
        "funny-cat1_part1x1.jpg",
        "monkey_part1x1.jpg",
        "panda_swap_part1x1.jpg",
    ],
    [
        "funny-cat1_part2x1.jpg",
        "monkey_part2x1.jpg",
        "panda_swap_part2x1.jpg",
    ],
    [
        "funny-cat1_part3x1.jpg",
        "monkey_part3x1.jpg",
        "panda_swap_part3x1.jpg",
    ],
    [
        "funny-cat1_part4x1.jpg",
        "monkey_part4x1.jpg",
        "panda_swap_part4x1.jpg",
    ],
    [
        "funny-cat1_part5x1.jpg",
        "monkey_part5x1.jpg",
        "panda_swap_part5x1.jpg",
    ]
];
let arrCheck = [];
function init(){
    for (let i=0; i <listImg.length ; i++){
        let random = Math.floor(Math.random()*3);
        arrCheck.push(random);
        listImg[i].src = `img/${saveImage[i][random]}`;
    }
}
function insertImage(e){
    let random = Math.floor(Math.random()*3);
    let temp = e.target.id.charAt(e.target.id.length - 1);
    e.target.src = `img/${saveImage[temp - 1][random]}`;
    arrCheck[temp - 1] = random ;
    if (checkPuzzle() == true){
        for(i=0; i<listImg.length ; i++){
            listImg[i].classList.add("red");
        }
    }else {
        for(i=0 ; i<listImg.length ; i++){
            listImg[i].classList.remove("red");
        }
    }
}
function checkPuzzle(){
    let check = false;
    if(arrCheck.length < 5){
        return false;
    }
    for(i=0; i < arrCheck.length - 1; i ++){
        if(arrCheck[i] == arrCheck[i+1]){
            check = true;
        }else{
            check = false;
            return check;
        }
    }
    return check;
}
init();