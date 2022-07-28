
const tableData = [
{"자산군": "주식자산", "세부": "해외주식", "투자전략": "대표지수 추종 ETF 적극 활용하여 국가·지역 시장수익률 추구 / SPDR S&P500 ETF 등 규모, 거래대금, 보수율, 유동성 등 고려", },
{"자산군": "주식자산", "세부": "국내주식", "투자전략": "추세적인 상승 기대감이 낮은 국내 증시는 스타일 및 테마 중심 투자", },
{"자산군": "채권자산", "세부": "해외채권", "투자전략": "미국, 유럽,아시아 투자로 이자수익 추구 / 글로벌채권펀드 또는 국채 및 회사채의 만기별 대표 ETF 편입", },
{"자산군": "채권자산", "세부": "국내채권", "투자전략": "만기 4년 기준 단기·중기·장기 채권 비중 조정과 유동성 비중 고려 / 이자율이 높은 매칭형 채권 입찰 및 공모주 펀드 고려", },
{"자산군": "대체자산", "세부": "리츠", "투자전략": "개별 리츠의 밸류에이션에 따른 편입비중 조정으로 안정성 제고", },
{"자산군": "대체자산", "세부": "글로벌인컴", "투자전략": "배당주,우선주, 채권, 전환사채 등 안정적 인컴 추구", },
{"자산군": "대체자산", "세부": "헤지펀드", "투자전략": "협의 후 시장 상황에 따라 에너지, 금속, 농산물 관련 ETF 투자", },
{"자산군": "대체자산", "세부": "원자재", "투자전략": "대표지수 추종 ETF 적극 활용하여 국가·지역 시장수익률 추구 / SPDR S&P500 ETF 등 규모, 거래대금, 보수율, 유동성 등 고려", },
{"자산군": "TAA Overlay",  "세부": "금/달러", "투자전략": "Risk off 시 성과를 보호할 수 있는 안전자산(달러단기채권, ETF 등)", },
{"자산군": "TAA Overlay", "세부":  "변동성 관리", "투자전략": "시장 상황에 따라 지수 선물 및 변동성(VIX) ", }
];

console.log(tableData.length);
console.log(tableData[0]);
console.log(tableData[0]["자산군"]);


const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr
}



const newPerson = (p) => {
  const statusChance = Math.random();
  console.log(p);
  console.log(tableData[p]);

  return {
    assetClass1: tableData[p]["자산군"],
    assetClass2: tableData[p]["세부"],
    Strategy: tableData[p]["투자전략"],
    SAA: Math.floor(Math.random() * 100),
    Port: Math.floor(Math.random() * 100),
    Range:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(d),

        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
