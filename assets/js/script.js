// TODO: Declare any global variables we need
let headFlips = 0;
let tailFlips = 0;

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    // Flip Button Click Handler
    document.getElementById('flip').addEventListener('click', () => {
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM 
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell 
        
        //random outcome generator
        let flippedHeads = Math.random() < 0.5
        //heads vs tails actions
        if (flippedHeads) {
            //display for heads
            document.getElementById('penny-picture').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You flipped Heads.'
            //heads counter
            headFlips += 1
        }
        else {
            //display for tails
            document.getElementById('penny-picture').src ='assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You flipped Tails.'
            //tails counter
            tailFlips += 1
        }
        // TODO: Calculate the total number of rolls/flips
        let totalFlips = headFlips + tailFlips
        // Make variables to track the percentages of heads and tails
        let percentHeads = 0
        let percentTails = 0
        //calculating percentages
        if (totalFlips > 0) {
            percentHeads = Math.round((headFlips / totalFlips) * 100)
            percentTails = Math.round((tailFlips / totalFlips) * 100)
        }
        //update scoreboard
        document.getElementById('heads').textContent = headFlips
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailFlips
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
    //Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    document.getElementById('clear').addEventListener('click', function () {
        //reseting varables to zero
        headFlips = 0
        tailFlips = 0
        let totalFlips = headFlips + tailFlips
        let percentHeads = 0
        let percentTails = 0
        //update message
        document.getElementById('message').textContent = 'Let\'s Start Flipping.'
        //calculating percent heads and tails
        if (totalFlips > 0) {
            percentHeads = Math.round((headFlips / totalFlips) * 100)
            percentTails = Math.round((tailFlips / totalFlips) * 100)
        }
        //update scoreboard
        document.getElementById('heads').textContent = headFlips
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailFlips
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})