// Help fn 

// Back ticks ``se jaise likha waisa print hoga , next line to next line (multiple lines me) , ' ', " " me single line me aata


function helpFn() {
    console.log(`
    List of All the commands:
                node main.js tree "directoryPath"
                node main.js organize "directoryPath"
                node main.js help
                `);
}

// export karne k liye - obj banao key daalo aage func
module.exports={
    helpKey: helpFn
}