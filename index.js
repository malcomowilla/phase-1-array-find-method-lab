// code your solution here



// function superbowlWin(array_objects) {
//     for (const record of array_objects) {
//         if (record.result === "W") {
//             return record.year
//         }
//     }
// }





function superbowlWin( array) {
    const finding = array.find((element)=>element.result === 'W' )

    if (finding) {
        return finding.year
    } else {
        return undefined
    }
}






















