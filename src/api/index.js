
function fetchList(pageName) { 
    if(pageName === 'AboutChurchView') {
        return new Promise((resolve) => {
            resolve([            
                {   key: '1',
                    title: '유초등부 예배',
                    contents: ['일시 : 주일 아침 9시', '장소 : 새빛교회 본당']
                },
                {   key: '2',
                    title: '주일 낮 예배',
                    contents: ['일시 : 주일 아침 11시', '장소 : 새빛교회 본당']
                },
                {   key: '3',
                    title: '젊은 예배',
                    contents: ['일시 : 주일 낮 2시', '장소 : 새빛교회 본당']
                },
                {   key: '4',
                    title: '중고청 젊은 예배',
                    contents: ['일시 : 주일 낮 4시', '장소 : 새빛교회 본당']
                },
                {   key: ' ',
                    title: '* 예배 시간 변경 안내',
                    contents: ['코로나19로 인해 오프라인 예배는 정부 규정에 따라 인원수에 맞춰 드려집니다.', '온라인 예배 : 유튜브 "새빛 교회" 검색 어린이 예배 아침 9시, 대예배 오전 11시 실시간 온라인 예배', '당분간 새벽 예배, 수요 예배는 집에서 각자 드리시기 바랍니다.']
                }
            ]);
        });
    } else if (pageName === 'NewLightNewsView') {
        return new Promise((resolve) => {
            resolve([            
                {   key: '1',
                    title: '2021.7.11 둘째주 새빛소식',
                    contents: ['1. 오늘은 맥추감사 주일입니다.', '2. 박판오장로님이 던킨도너츠를 헌신하셨습니다.', '3. 수도권 거리두기 4단계 격상으로 7월 2주간(7/18, 7/25) 영상으로 예배를 드립니다.'],
                    url: 'http://www.newlights.net/bbs/view.php?id=notice&page=1&sn1=&divpage=1&sn=off&ss=on&sc=on&select_arrange=headnum&desc=asc&no=523'
                },
                {   key: '2',
                    title: '2021.7.4 첫째주 새빛소식',
                    contents: ['1. 특별한 광고가 없는 한 계속해서 부분적으로 시간과 구역을 나누어서 예배를 드립니다.', '2. 다음 주는 맥추감사주일로 지킵니다.', '3. 예배드릴 때 옷을 단정하게 입으시기를 바랍니다. (배꼽티, 나시는 안됩니다..)'],
                    url: 'http://www.newlights.net/bbs/view.php?id=notice&page=1&sn1=&divpage=1&sn=off&ss=on&sc=on&select_arrange=headnum&desc=asc&no=522'
                },
                {   key: '3',
                    title: '2021.6.27 넷째주 새빛소식',
                    contents: ['1. 특별한 광고가 없는 한 계속해서 부분적으로 시간과 구역을 나누어서 예배를 드립니다.', '2. 등록 : 서귀현 이정숙 이수연 이단비 최수정 양경옥', '3. 지난 주 직분자 투표 결과입니다.', '(장로선출:박천중 이선호, 권사선출:최효순 김동선 윤경순, 안수집사선출: 박대성 이성태)'],
                    url: 'http://www.newlights.net/bbs/view.php?id=notice&page=1&sn1=&divpage=1&sn=off&ss=on&sc=on&select_arrange=headnum&desc=asc&no=521'
                },
                {   key: '4',
                    title: '2021.6.20 셋째주 새빛소식',
                    contents: ['1. 특별한 광고가 없는 한 계속해서 부분적으로 시간과 구역을 나누어서 예배를 드립니다.', '2. 예배 후에 직분자 선출투표(장로, 권사, 안수집사)가 있습니다.', '3. 장로님들이 떡을 헌신하셨습니다.'],
                    url: 'http://www.newlights.net/bbs/view.php?id=notice&page=1&sn1=&divpage=1&sn=off&ss=on&sc=on&select_arrange=headnum&desc=asc&no=521'
                },
                {   key: '5',
                    title: '2021.6.13 둘째주 새빛소식',
                    contents: ['1. 특별한 광고가 없는 한 계속해서 부분적으로 시간과 구역을 나누어서 예배를 드립니다.', '2. 다음 주에 직분자 선출투표(장로, 권사, 안수집사)가 있습니다.'],
                    url: 'http://www.newlights.net/bbs/view.php?id=notice&page=1&sn1=&divpage=1&sn=off&ss=on&sc=on&select_arrange=headnum&desc=asc&no=519'
                }
            ]);
        });
    } else if (pageName === 'WorshipGuideView') {
        return new Promise((resolve) => {
            resolve([            
                {   key: '1',
                    title: '터다지기반',
                    contents: ['대상: 믿기 시작한 청/장년','장소 : 새빛교회 교육관']
                },
                {   key: '2',
                    title: '장로 기도회',
                    contents: ['대상: 장로', '장소 : 새빛교회 교육관']
                },
                {   key: '3',
                    title: '여구역장 성경공부',
                    contents: ['대상: 여구역장', '장소 : 새빛교회 교육관']
                },
                {   key: '4',
                    title: '제자 훈련',
                    contents: ['대상: 리더 추천자', '장소 : 새빛교회 교육관']
                },
                {   key: '5',
                    title: '청년 헬퍼 훈련',
                    contents: ['대상: 청년 헬퍼 및 청년 리더 추천자', '장소 : 새빛교회 교육관']
                },
                {   key: '6',
                    title: '청년 리더 및 헬퍼 훈련',
                    contents: ['대상: 청년 리더 및 헬퍼', '장소 : 새빛교회']
                }
            ]);
        });
    } else if (pageName === 'WayToComeView') {
        return new Promise((resolve) => {
            resolve([            
                {   key: '1',
                    title: '교회 이름',
                    contents: ['새빛교회']
                },
                {   key: '2',
                    title: '전화 번호',
                    contents: ['02-893-2017']
                },
                {   key: '3',
                    title: '교회 주소',
                    contents: ['경기 광명시 하안로 258 경향빌딩 4층 새빛교회', '[인근 지하철: 독산역(1호선), 철산역(7호선)]']
                },
                {   key: '4',
                    title: '주차 정보',
                    contents: ['상가 내 작은주차장 (5대)']
                },
            ]);
        });
    }    
}

export 
{
    fetchList
};