function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        answer.push(arr1[i] | arr2[i]);
    }

    return answer
        .map(num => 
             num
             .toString(2)
             .replace(/1|0/g, char => +char ? "#" : " ") // replace의 콜백함수를 넘겨주어 대체할 값을 유동적으로 선택할 수 있다.
             .padStart(arr1.length, " ") // padStart를 사용하면 string의 길이를 고정시킬 수 있다.
        );
}

