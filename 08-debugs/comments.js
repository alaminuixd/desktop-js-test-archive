/* 
mergeArrayOfObject(){
    merged === copy of {
        [
            { id: 1, name: "John" },
            { id: 2, name: "Alice" },
        ];
    }
    1) first loop with (i):
        --this will iterate < 2 OR (0, 1) times as arrObj2 has 2 length
        a) 1st loop iteration 0 : 
            found = fasle;
            2) second loop with (j)
            --this will iterate < merged.length (0, 1) times
                a) iteration 0
                    if(
                        merged[j].id or merged[0].id whic is "1" ===
                        arrObj2[i].id or arrobj2[0].id which is "2"
                    ){
                    1st iteration is false. So don't break and iterate again
                    }
                b) iteration 1
                    if(
                        merged[j].id or merged[1].id whic is "2" ===
                        arrObj2[i].id or arrobj2[0].id which is "3"
                    ){
                    2nd iteration is false. So don't break and iterate again
                    but max iteratin is over so get into 1st loop 2nd iteration
                    }
            if(!found) OR found is not "true" {
                merged.push(arrObj2[i]) which is 0 item and the following:
                { id: 2, age: 30 }
                Now "merged" array is:
                [
                    { id: 1, name: "John" },
                    { id: 2, name: "Alice" },
                    { id: 2, age: 30 }
                ];
            }

        b) 1st loop iteration 1:
        found = fasle;
            2) second loop with (j)
            --this will iterate < merged.length (0, 1) times
                a) iteration 0
                    if(
                        merged[j].id or merged[0].id whic is "1" ===
                        arrObj2[i].id or arrobj2[0].id which is "2"
                    ){
                    1st iteration is false. So don't break and iterate again
                    }
                b) iteration 1
                    if(
                        merged[j].id or merged[1].id whic is "2" ===
                        arrObj2[i].id or arrobj2[0].id which is "3"
                    ){
                    2nd iteration is false. So don't break and iterate again
                    but max iteratin is over so get into 1st loop 2nd iteration
                    }
            if(!found) OR found is not "true" {
                merged.push(arrObj2[i]) which is 0 item and the following:
                { id: 2, age: 30 }
                Now "merged" array is:
                [
                    { id: 1, name: "John" },
                    { id: 2, name: "Alice" },
                    { id: 2, age: 30 }
                ];
            }    

}

Total iterations of the nested loop (j) = Length of arrObj1 + Length of arrObj2

*/
/* 
**Outer Loop (i) - First Iteration (i = 0):

Iterates over each object in array2.
arrObj2[i] is { id: 2, age: 30 }.
Inner loop compares { id: 2, age: 30 } with each object in merged.
First iteration: Compares { id: 2, age: 30 } with { id: 1, name: "John" } (No match).
Second iteration: Compares { id: 2, age: 30 } with { id: 2, name: "Alice" } (Match).
found is set to true, loop breaks.
Since { id: 2, age: 30 } is found in merged, it's not added to merged.
merged remains [{ id: 1, name: "John" }, { id: 2, name: "Alice" }].
**Outer Loop (i) - Second Iteration (i = 1):

Iterates over each object in array2.
arrObj2[i] is { id: 3, name: "Bob" }.
Inner loop compares { id: 3, name: "Bob" } with each object in merged.
First iteration: Compares { id: 3, name: "Bob" } with { id: 1, name: "John" } (No match).
Second iteration: Compares { id: 3, name: "Bob" } with { id: 2, name: "Alice" } (No match).
Since { id: 3, name: "Bob" } is not found in merged, it's added to merged.
merged becomes [{ id: 1, name: "John" }, { id: 2, name: "Alice" }, { id: 3, name: "Bob" }].
The total iterations of the nested loop (j) are equal to the length of array1 plus the length of array2, which matches your provided calculation.
*/
