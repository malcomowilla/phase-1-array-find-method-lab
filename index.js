// code your solution here



function superbowlWin(array_objects) {
    for (const record of array_objects) {
        if (record.result === "W") {
            return record.year
        }
    }
}

