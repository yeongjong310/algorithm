function solution(n, edges, s, e) {
    var answer = 0;
    const map = Array.from({length: n}, () => Array(n).fill(0));
    const visited = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        const island1 = edges[i][0]
        const island2 = edges[i][1]
        const weight = edges[i][2]
        map[island1][island2] = weight;
        map[island2][island1] = weight;
    }
    
    let weight = 
    function crossBridge(island) {
        if (island === e) Math.max(answer, map[]) 
        if (map[])
        for (let i = 0; i < n; i++) {
            if ()
        }
    }
        
    crossBridge(s);
    
    console.log(map)
    return answer;
}

console.log(
    solution(5,
        [[1, 2, 5],
        [1, 3, 3],
        [1, 4, 2],
        [2, 4, 2],
        [3, 4, 4],
        [4, 5, 3]], 1, 5
    )
) //3
