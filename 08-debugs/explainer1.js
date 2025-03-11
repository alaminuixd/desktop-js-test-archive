/* 
Outer loop 1st iteration:
    Inner loop 1st iteration:
        merged[0].id === arrObj2[0].id: | (1 === 2) (found = false)
    Inner loop 2nd iteration:
        merged[1].id === arrObj2[0].id: | (2 === 2) (found = true)
    After this inner loop, found remains true and it do not execute code in if(!found)

Outer loop 2nd iteration:
    Inner loop 1st iteration:
        merged[0].id === arrObj2[1].id: | (1 === 3) (found = false)
    Inner loop 2nd iteration:
        merged[1].id === arrObj2[1].id: | (2 === 3) (found = false)
    After this inner loop, found changes to false ad none of them true.
    it now get into the if(!found){
        and pushes the arrObj2[1] into merged.
    }
so now merged is:
[
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
]
*/
