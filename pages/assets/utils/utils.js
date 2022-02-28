//create a function that return a random number between min and max
export default function getRandomNumber() {
    var min = 1718;
    var max = 3429;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}