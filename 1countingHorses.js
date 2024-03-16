// A group of horses just ran past Farmer Thomas, and he would like to figure out how many horses were there. However, Farmer Thomas has a bad eye sight, and cannot really see the horses that are now distant. He did remember the sound of their galloping though, and he wants your help in figuring out how many horses (and the length of their legs) were in that group.

// Each horse will make a thumping noise every step as its hooves hit the ground. Farmer Thomas has recorded the sound as strings like this (the following record is 15 seconds long):

// 000100010001000
// where each number represents how many thumps he heard in that second.

// However, there's a catch; horses with longer legs take bigger steps, resulting in longer intervals between thumps. Specifically, a horse with leg length n will thump every n seconds.

// A single horse with leg length 2 will sound like:

// 01010101010101
// The same rule applies when there are multiple horses. Two horses with leg length 2 and 3 sound like:

// 0111020111
// Note that the sixth digit is 2 since both horses thump in that second.

// Input
// A string of any length that represents the sound of the horses' galloping (as described above).

// Output
// An array of length equivalent to the amount of horses where each element represents the leg length of a horse.

// For example, this input

// 0111020111
// should return [2, 3].

// Notes
// There could be multiple horses with the same leg length. 0020020020020 is the sound of 2 horses, both of which have leg length of 3.
// The thump cycle of all horses is synchronized at the start of the sound string. This means that you don't have to worry about phase offsets.
// The length of the sound string is always greater than or equal the longest leg length (meaning that every horse will jump at least once in the string).
// Your output will be sorted in the tests for comparison purpose (your answer doesn't need to be sorted).
// Constraints
// len(sound_str) <= 1000
// len(horses) <= 9 (random tests)
// len(horses) <= 10 (trivial tests)

const countHorses = (sound) => {
    let indexArr = [];
    let stepTotalArr = [];
    sound.map((ele, index) => {
        if(ele > 0){
            for(let i = 0; i < ele; i++){
                indexArr.push(index)
            }
            // indexArr.push(index)
            // stepTotalArr.push(ele)
        }
    })



    console.log(indexArr)
    // console.log(stepTotalArr)
}


countHorses([0,0,2,0,0,2,0,0,2,0,0,2,0])