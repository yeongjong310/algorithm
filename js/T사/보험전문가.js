/*
 * 현재 온라인인 보험 전문가의 목록을 반환하도록 함수를 작성해주세요.
 * (반환 타입: Promise<string[]>)
 */
async function solution(fetchExperts, fetchIsExpertOnline) {
  // 보험 전문가의 목록을 반환하는 비동기 함수 (반환 타입: Promise<string[]>)
  const experts = await fetchExperts(); [1, 2, 3]
  
  // 보험 전문가가 온라인인지 여부를 반환하는 함수 (반환 타입: Promise<boolean>)

  const isOnlines = await Promise.all(experts.map(expert => fetchIsExpertOnline(expert)));
  
  return experts.filter((expert, i) => isOnlines[i])
}