const productData = [
  {
    //테마분류: season [summer, city, reserve, online, offline ]
    //상세분류: icon [new, limit, '']
    id: 1,
    category: "mug",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/mug/Mug1.jpg",
        title: "프렌치 서머 라인 머그 355ml",
        kor: "프렌치 서머 라인 머그 355ml",
        eng: "French summer line mug 355ml",
        text: "화이트와 실버의 컬러 배색 및 입체적인 라인 음각으로 클래식함이 느껴지는 355ml 용량의 머그입니다.",
        icon: "new",
        season: "summer",
      },
      {
        id: 2,
        imgurl: "../../images/product/mug/Mug2.jpg",
        title: "SS 리저브 블랙 DW 머그 355ml",

        kor: "SS 리저브 블랙 DW 머그 355ml",
        eng: "SS reserve black dw mug 355ml",
        text: "심플한 블랙 컬러와 리저브 로고가 매치된 고급스러운 스테인리스 스틸 컵입니다.",
        icon: "new",
        season: "reserve",
      },
      {
        id: 3,
        imgurl: "../../images/product/mug/Mug3.jpg",
        title: "그레이 리저브 머그 355ml",

        kor: "그레이 리저브 머그 355ml",
        eng: "Gray reserve mug 355ml",
        text: "그레이 컬러로 세련된 355ml 머그입니다.",
        icon: "new",
        season: "reserve",
      },
      {
        id: 4,
        imgurl: "../../images/product/mug/Mug4.jpg",
        title: "그린 사이렌 도트 머그 237ml",

        kor: "그린 사이렌 도트 머그 237ml",
        eng: "Green siren dot mug 237ml",
        text: "법랑 머그의 쉐입을 한 세라믹 머그로서, 트렌디한 감성의 디자인이 결합된 237ml 상품입니다.",
        icon: "new",
        season: "",
      },
      {
        id: 5,
        imgurl: "../../images/product/mug/Mug5.jpg",
        title: "도도새 머그 355mll",

        kor: "도도새 머그 355ml",
        eng: "Dodo mug 355ml",
        text: "별을 안고 있는 도도새 피규어 장식의 리드가 돋보이는 355ml 용량의 머그입니다.",
        icon: "",
        season: "",
      },
      {
        id: 6,
        imgurl: "../../images/product/mug/Mug6.jpg",
        title: "사이렌 클래식 민트 머그 237ml",

        kor: "사이렌 클래식 민트 머그 237ml",
        eng: "Siren classic mint mug 237ml",
        text: "민트 컬러와 사이렌 로고가 매치된 237ml 머그입니다.",
        icon: "",
        season: "",
      },
      {
        id: 7,
        imgurl: "../../images/product/mug/Mug7.jpg",
        title: "사이렌 하우스 머그 473ml",

        kor: "사이렌 하우스 머그 237ml",
        eng: "Siren house mug 237ml",
        text: "클래식한 디자인과 사이렌 로고가 매치된 237ml 머그입니다.",
        icon: "",
        season: "",
      },
      {
        id: 8,
        imgurl: "../../images/product/mug/Mug8.jpg",
        title: "야나칸 머메이트 핀칭컵 240ml",
        kor: "야나칸 머메이트 핀칭컵 240ml",
        eng: "Yarnnakarn mermaid pinching cup 240ml",
        text: "머메이드 컬렉션의 메인 아이템으로, 야나칸 디자이너가 스타벅스 코리아만을 위해 특별히 디자인한 신규 모델",
        icon: "",
        season: "online",
      },
      {
        id: 9,
        imgurl: "../../images/product/mug/Mug9.jpg",
        title: "제주 조랑말 머그 355ml",

        kor: "제주 조랑말 머그 355ml",
        eng: "Jeju pony mug 355ml",
        text: "유채꽃 밭에서 휴식을 취하는 조랑말을 담은 355ml 용량의 머그입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 10,
        imgurl: "../../images/product/mug/Mug10.jpg",
        title: "커뮤니티스토어 베어 머그 355ml",

        kor: "커뮤니티스토어 베어 머그 355ml",
        eng: "Community Store Bear Mug 355ml",
        text: "북극곰 주변으로 따뜻하고 차가운 색들의나뭇잎 조합이 매력적인 355ml 용량의 머그입니다.",
        icon: "",
        season: "offline",
      },
    ],
  },
  {
    id: 2,
    category: "glass",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/glass/Glass1.jpg",
        title: "사이렌 글라스 콜드컵 503ml",

        kor: "사이렌 글라스 콜드컵 503ml",
        eng: "Siren glass coldcup 503ml",
        text: "실리콘 슬리브가 매치된 클래식한 디자인의 503ml의 글라스 콜드컵입니다.",
        icon: "new",
        season: "",
      },
      {
        id: 2,
        imgurl: "../../images/product/glass/Glass2.jpg",
        title: "프렌치 서머 라인 글라스 444ml",

        kor: "프렌치 서머 라인 글라스 444ml",
        eng: "French summer line glass 444ml",
        text: "블루 컬러의 그러데이션으로 청량함이 느껴지는 찬 음료 전용 444ml 용량의 글라스입니다.",
        icon: "new, limit",
        season: "summer",
      },
      {
        id: 3,
        imgurl: "../../images/product/glass/Glass3.jpg",
        title: "그린 사이렌 글라스 500ml",

        kor: "그린 사이렌 글라스 500ml",
        eng: "Green siren glass 500ml",
        text: "그린 컬러에 사이렌 로고를 더한 500ml 용량의 글라스 컵입니다.",
        icon: "new",
        season: "",
      },
      {
        id: 4,
        imgurl: "../../images/product/glass/Glass4.jpg",
        title: "제주 감귤 글라스 355ml",

        kor: "제주 감귤 글라스 355ml",
        eng: "Jeju tangerine glass 355ml",
        text: "제주의 감귤나무를 담은 355ml 용량의 글라스입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 5,
        imgurl: "../../images/product/glass/Glass5.jpg",
        title: "제주 스태킹 글라스 2p 세트",

        kor: "제주 스태킹 글라스 2p 세트",
        eng: "Jeju stacking glass 2p set",
        text: "제주의 봄을 담은 스태킹 글라스 세트(2p)입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 6,
        imgurl: "../../images/product/glass/Glass6.jpg",
        title: "리저브 골드 핸들 글라스 473ml",

        kor: "리저브 골드 핸들 글라스 473m",
        eng: "Reserve gold handle glass 473ml",
        text: "골드 컬러의 리저브 로고가 매치된 글라스로서 그란데 사이즈 입니다. 싱글월로 제작되어 무게가 가벼우며, 핸들이 있어 실용적으로 사용하실 수 있습니다.",
        icon: "",
        season: "reserve",
      },
    ],
  },
  {
    id: 3,
    category: "plastic",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/plastic/Plastic1.jpg",
        title: "파스텔 블루 텀블러 473ml",

        kor: "파스텔 블루 텀블러 473ml",
        eng: "Pastel bule tumbler 473ml",
        text: "파스텔 블루 컬러의 텀블러입니다.텀블러 겉면은 재활용 플라스틱으로 제작하여 지속가능성을 겸비하였습니다.",
        icon: "new",
        season: "",
      },
      {
        id: 2,
        imgurl: "../../images/product/plastic/Plastic2.jpg",
        title: "파스텔 핑크 텀블러 473ml",

        kor: "파스텔 핑크 텀블러 473ml",
        eng: "Pastel pink tumbler 473ml",
        text: "파스텔 핑크 컬러의 텀블러입니다.텀블러 겉면은 재활용 플라스틱으로 제작하여 지속가능성을 겸비하였습니다.",
        icon: "new",
        season: "",
      },
      {
        id: 3,
        imgurl: "../../images/product/plastic/Plastic3.jpg",
        title: "골드 칼리도스코프 콜드컵 710ml",

        kor: "골드 칼리도스코프 콜드컵 710ml",
        eng: "Gold calidoscope cold cup 710ml",
        text: "반짝이는 컬러가 돋보이는 710ml 용량의 찬 음료 전용 플라스틱 텀블러입니다.",
        icon: "",
        season: "",
      },
      {
        id: 4,
        imgurl: "../../images/product/plastic/Plastic4.jpg",
        title: "그린 리유저블 콜드컵 709ml",

        kor: "그린 리유저블 콜드컵 709ml",
        eng: "Green reusable coldcup 709ml",
        text: "스타벅스를 상징하는 클래식한 그린색 바디에 민트 컬러의 스트로를 포인트로 준 709ml 용량의 찬 음료 전용 리유저블 컵입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 5,
        imgurl: "../../images/product/plastic/Plastic5.jpg",
        title: "그린 워드마크 폼 콜드컵 473ml",

        kor: "그린 워드마크 폼 콜드컵 473ml",
        eng: "Green wordmark foam cold cup 473ml",
        text: "스타벅스 워드마크가 돋보이는 473ml 용량의 찬 음료 전용 플라스틱 텀블러입니다",
        icon: "",
        season: "",
      },
      {
        id: 6,
        imgurl: "../../images/product/plastic/Plastic6.jpg",
        title: "사이렌 커피 체리 콜드컵 473ml",

        kor: "사이렌 커피 체리 콜드컵 473ml",
        eng: "Siren coffee cherry cold cup 473ml",
        text: "민트 컬러 배색과 커피 체리의 잎사귀 일러스트의 조화로 시즌에 구애 없이 사용할 수 있는 473ml 용량의 찬 음료 전용 플라스틱 텀블러입니다",
        icon: "",
        season: "",
      },
      {
        id: 7,
        imgurl: "../../images/product/plastic/Plastic7.jpg",
        title: "크레이브 하우스 워터보틀 500ml",

        kor: "크레이브 하우스 워터보틀 500ml",
        eng: "Crave house waterbottle 500ml",
        text: "심플한 디자인으로 시즌에 구애받지 않고 사용 할 수 있는 찬 음료 전용의 500ml 워터보틀입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 8,
        imgurl: "../../images/product/plastic/Plastic8.jpg",
        title: "제주 동백 레나 워터보틀 473ml",

        kor: "제주 동백 레나 워터보틀 473ml",
        eng: "Jeju camellia rena waterbottle 473ml",
        text: "사랑의 의미이자 제주를 상징하는 동백꽃의 아름다움을 담은 찬 음료 전용의 473ml 워터보틀입니다.",
        icon: "",
        season: "offline",
      },
    ],
  },
  {
    id: 4,
    category: "stainless",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/stainless/Stainless1.jpg",
        title: "SS 프렌치 서머 데비 텀블러 473ml",

        kor: "SS 프렌치 서머 데비 텀블러 473ml",
        eng: "SS french summer debbie tumbler 473ml",
        text: "프렌치 정원의 여유로운 여름 날 무드를 담은 473ml 용량 스테인리스 스틸 텀블러입니다.",
        icon: "new, limit",
        season: "summer",
      },
      {
        id: 2,
        imgurl: "../../images/product/stainless/Stainless2.jpg",
        title: "SS 경주 투어 텀블러 355ml",

        kor: "SS 경주 투어 텀블러 355ml",
        eng: "SS Gyeongju tour tumbler 355ml",
        text: "벚꽃이 흐드러지는 봄의 경주를 디자인 한 상품입니다. 도시 전체가 박물관인 경주를 나타내기 위해 다양한 유물 및 유적지를 수채화 느낌으로 표현하였고, 특히 첨성대 위에는 별 등을 함께 그려 넣어 신비로운 경주를 나타내었습니다.",
        icon: "",
        season: "city",
      },
      {
        id: 3,
        imgurl: "../../images/product/stainless/Stainless3.jpg",
        title: "SS 나수 하우스 텀블러 355ml",

        kor: "SS 나수 하우스 텀블러 355ml",
        eng: "SS nasu house tumbler 355ml",
        text: "심플한 디자인과 크림 컬러 배색으로 시즌에 상관없이 사용할 수 있는 355ml 용량의 스테인리스 스틸 텀블러입니다.",

        icon: "",
        season: "offline",
      },
      {
        id: 4,
        imgurl: "../../images/product/stainless/Stainless4.jpg",
        title: "SS 뉴트럴 밸류 텀블러 473ml",

        kor: "SS 뉴트럴 밸류 텀블러 473ml",
        eng: "SS Neutral value tumbler 473ml",
        text: "심플한 디자인으로 보냉/보온 기능이 우수한 473ml의 스테인리스 스틸 텀블러입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 5,
        imgurl: "../../images/product/stainless/Stainless5.jpg",
        title: "SS 도도새 코나 텀블러 237ml",

        kor: "SS 도도새 코나 텀블러 237ml",
        eng: "SS Dodo Kona tumbler 237ml",
        text: "휴대하기 편리하고 귀여운 사이즈감의 텀블러에 도도새 피규어 리드가 특징인 237ml 용량의 스테인리스 스틸 텀블러입니다",
        icon: "",
        season: "",
      },
      {
        id: 6,
        imgurl: "../../images/product/stainless/Stainless6.jpg",
        title: "SS 리저브 그레이 텀블러 355ml",

        kor: "SS 리저브 그레이 텀블러 355ml",
        eng: "SS reserve gray tumbler 355ml",
        text: "실버 컬러로 세련된 355ml 용량의 스테인리스 스틸 텀블러입니다.",
        icon: "",
        season: "reserve",
      },
      {
        id: 7,
        imgurl: "../../images/product/stainless/Stainless7.jpg",
        title: "SS 미르 리저브 골드 텀블러 473ml",

        kor: "SS 미르 리저브 골드 텀블러 473ml",
        eng: "SS miir reserve gold tumbler 473ml",
        text: "골드와 그레이의 조화로 고급스러움을 담아낸 473ml 용량의 텀블러입니다.",
        icon: "",
        season: "reserve",
      },
      {
        id: 8,
        imgurl: "../../images/product/stainless/Stainless8.jpg",
        title: "SS 부산 투어 텀블러 355m",

        kor: "SS 부산 투어 텀블러 355m",
        eng: "SS Busan tour tumbler 355ml",
        text: "밤 하늘의 불꽃처럼 화려한 관광의 도시, 부산을 소개하는 상품입니다. 대한민국에서 손꼽히는 관광 도시임을 나타내기 위해 화려한 분위기로 디자인 하였습니다",

        icon: "",
        season: "city",
      },
      {
        id: 9,
        imgurl: "../../images/product/stainless/Stainless9.jpg",
        title: "SS 블랙 탱크 텀블러 503ml",

        kor: "SS 블랙 탱크 텀블러 503ml",
        eng: "SS black tank tumbler 503ml",
        text: "블랙 그러데이션 컬러에 사이렌 로고를 더한 503ml 용량의 텀블러입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 10,
        imgurl: "../../images/product/stainless/Stainless10.jpg",
        title: "SS 서울 투어 텀블러 355ml",

        kor: "SS 서울 투어 텀블러 355ml",
        eng: "SS Seoul tour tumbler 355ml",
        text: "서울의 노을 지는 하늘과 서울의 상징인 여러 조형물과 장소가 함께 디자인 된 상품입니다. 현대적인 건축과 전통의 문화유산들이 어우러져 있는 도시의 특징을 표현하고자 하였습니다",
        icon: "",
        season: "city",
      },
      {
        id: 11,
        imgurl: "../../images/product/stainless/Stainless11.jpg",
        title: "SS 스탠리 리저브 골드 텀블러 473ml",

        kor: "SS 스탠리 리저브 골드 텀블러 473ml",
        eng: "SS stanley reserve gold tumbler 473ml",
        text: "심플한 골드 컬러로 고급스러움을 담아낸 473ml 용량의 텀블러입니다.",
        icon: "",
        season: "reserve",
      },
      {
        id: 12,
        imgurl: "../../images/product/stainless/Stainless12.jpg",
        title: "SS 제주 투어 텀블러 355ml",

        kor: "SS 제주 투어 텀블러 355ml",
        eng: "SS Jeju tour tumbler 355ml",
        text: "봄이 되면 노랗게 물 드는 대한민국의 가장 큰 섬 제주를 표현한 상품입니다. 제주의 여러 특징적인 요소들을 동화책 그림처럼 표현하여 찾아보는 재미가 있습니다.",
        icon: "",
        season: "city",
      },
      {
        id: 13,
        imgurl: "../../images/product/stainless/Stainless13.jpg",
        title: "SS 코리아 블랙 텀블러 473ml",

        kor: "SS 코리아 블랙 텀블러 473ml",
        eng: "SS Korea black tumbler 473ml",
        text: "오얏꽃으로 한국의 미를 표현한 473ml 용량의 스테인리스 스틸 텀블러입니다.",
        icon: "limit",
        season: "online",
      },
      {
        id: 14,
        imgurl: "../../images/product/stainless/Stainless14.jpg",
        title: "SS 콩코드 하우스 텀블러 473ml",

        kor: "SS 콩코드 하우스 텀블러 473ml",
        eng: "SS concord house tumbler 473ml",
        text: "스타벅스 헤리티지 컬러에 사이렌 로고를 더한 473ml 용량의 스테인리스 스틸 텀블러입니다.",

        icon: "limit",
        season: "online",
      },
    ],
  },
  {
    id: 5,
    category: "flask",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/thermos/Thermos1.jpg",
        title: "JNO 하우스 보온병 500ml",

        kor: "JNO 하우스 보온병 500ml",
        eng: "JNO house thermos 500ml",
        text: "심플한 화이트 컬러에 사이렌 로고를 더한 500ml 용량의 보온병입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 2,
        imgurl: "../../images/product/thermos/Thermos2.jpg",
        title: "프렌치 서머 FFW 보온병 1000ml",

        kor: "프렌치 서머 FFW 보온병 1000ml",
        eng: "French summer FFW vacuum 1000ml",
        text: "라이트 블루 컬러와 클래식한 무드 패턴의 조화가 돋보이는 1000ml 대용량 보온병입니다.",
        icon: "limit",
        season: "summer",
      },
      {
        id: 3,
        imgurl: "../../images/product/thermos/Thermos3.jpg",
        title: "프렌치 서머 캐리 핸들 보온병 500ml",

        kor: "프렌치 서머 캐리 핸들 보온병 500ml",
        eng: "French summer carry handle vacuum 500ml",
        text: "여름날의 프렌치 정원의 일러스트가 포인트인 500ml 용량의 핸들 보온병입니다. 첫 출시되는 상품으로 리드에 루프형 캐리 핸들이 있어 휴대가 편리합니다.",
        icon: "limit",
        season: "summer",
      },
    ],
  },

  {
    id: 6,
    category: "accessory",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/accessory/Accessory1.jpg",
        title: "블랙앤그린 실리콘 코스터 4p",

        kor: "블랙앤그린 실리콘 코스터 4p",
        eng: "Black&Green Silicone Coaster 4P",
        text: "블랙 사이렌 코스터 2개와 그린 사이렌 코스터 2개 그리고 케이스로 구성된 세트 상품입니다.",
        icon: "limit",
        season: "",
      },
      {
        id: 2,
        imgurl: "../../images/product/accessory/Accessory2.jpg",
        title: "여수돌산 패브릭 코스터 세트 (3P)",

        kor: "여수돌산 패브릭 코스터 세트 (3P)",
        eng: "Yeosu coaster set (3P)",
        text: "여수의 감성적인 낮과 밤의 풍경을 다양한 분위기로 담아낸 패브릭 코스터 세트(3P)입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 3,
        imgurl: "../../images/product/accessory/Accessory3.jpg",
        title: "제주 베어리스타 머들러",

        kor: "제주 베어리스타 머들러",
        eng: "Jeju bearista muddler",
        text: "돌하르방의 모습을 한 베어리스타가 돋보이는 머들러입니다.",
        icon: "",
        season: "",
      },
      {
        id: 4,
        imgurl: "../../images/product/accessory/Accessory4.jpg",
        title: "스타벅스 베이스볼 베어리스타",

        kor: "스타벅스 베이스볼 베어리스타",
        eng: "Starbucks baseball bearista",
        text: "스타벅스 야구 유니폼을 입고 야구공을 든 베어리스타입니다.",
        icon: "",
        season: "",
      },
      {
        id: 5,
        imgurl: "../../images/product/accessory/Accessory5.jpg",
        title: "스타벅스 하우스 토트백",

        kor: "스타벅스 하우스 토트백",
        eng: "Starbucks house tote bag",
        text: "스타벅스 클래식 컬러로 디자인된 토트백입니다.",
        icon: "",
        season: "",
      },
      {
        id: 6,
        imgurl: "../../images/product/accessory/Accessory6.jpg",
        title: "제주 동백 트래블 파우치",

        kor: "제주 동백 트래블 파우치",
        eng: "Jeju camellia travel pouch",
        text: "사랑의 의미이자 제주를 상징하는 동백꽃의 아름다움을 담은 트래블 파우치입니다.",
        icon: "",
        season: "",
      },
      {
        id: 7,
        imgurl: "../../images/product/accessory/Accessory7.jpg",
        title: "데스티네이션 가죽 케이스",

        kor: "데스티네이션 가죽 케이스",
        eng: "Desti leather case",
        text: "베이지 소가죽으로 심플하고 고급스러운 분위기를 담은 가죽 케이스입니다.",
        icon: "limit",
        season: "",
      },
      {
        id: 8,
        imgurl: "../../images/product/accessory/Accessory8.jpg",
        title: "데스티네이션 미니 크로스 백",

        kor: "데스티네이션 미니 크로스 백",
        eng: "Desti mini cross bag",
        text: "핸드폰과 같은 작은 소지품을 담을 수 있는 콤팩트한 디자인의 미니 크로스백 상품입니다.",
        icon: "limit",
        season: "",
      },
      {
        id: 9,
        imgurl: "../../images/product/accessory/Accessory9.jpg",
        title: "버디 릴와이어 타월",

        kor: "버디 릴와이어 타월",
        eng: "Buddy reel wire towel",
        text: "여주자유CC 점에서만 판매하는 상품입니다.",
        icon: "",
        season: "offline",
      },
      {
        id: 10,
        imgurl: "../../images/product/accessory/Accessory10.jpg",
        title: "버디 멀티 파우치",

        kor: "버디 멀티 파우치",
        eng: "Buddy multi pouch",
        text: "여주자유CC 점에서만 판매하는 상품입니다.",
        icon: "",
        season: "offline",
      },
    ],
  },
  {
    id: 7,
    category: "setproduct",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/gift/Gift1.jpg",
        title: "(c)사이렌 글라스볼 우드스푼세트",

        kor: "(c)사이렌 글라스볼 우드스푼세트",
        eng: "(c)Siren glass bowl wood spoon set",
        text: "선물하기 좋은 글라스볼과 우드 스푼 세트 입니다.시즌에 구애받지 않고 사용 가능한 로고 중심 디자인 상품으로 실용성이 높은 상품입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 2,
        imgurl: "../../images/product/gift/Gift2.jpg",
        title: "리유저블 & 글라스 세트",

        kor: "리유저블 & 글라스 세트",
        eng: "Reusable cup & glass set",
        text: "컴팩트한 240ml 용량의 내열유리 컵 2개, 뚜껑이 있는 리유저블 컵 3개 (1세트), 일회용 플라스틱 병을 재활용 하여 만든 쇼퍼백으로 구성된 세트입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 3,
        imgurl: "../../images/product/gift/Gift3.jpg",
        title: "리유저블 & 머그 세트",

        kor: "리유저블 & 머그 세트",
        eng: "Reusable cup & mug set",
        text: "클래식 355ml 머그, 뚜껑이 있는 리유저블 컵 3개 (1세트), 일회용 플라스틱 병을 재활용 하여 만든 쇼퍼백으로 구성된 세트입니다.",
        icon: "",
        season: "online",
      },
      {
        id: 4,
        imgurl: "../../images/product/gift/Gift4.jpg",
        title: "우리 쌀 파우더",

        kor: "우리 쌀 파우더",
        eng: "Starbucks Rice Powder",
        text: '우리 쌀을 활용해서 만든 스타벅스의 특별한 음료입니다. 한정 기간 동안 매장에서 만나볼 수 있던 "이천햅쌀라떼"를 간편하게 즐겨보세요.',
        icon: "",
        season: "",
      },
      {
        id: 5,
        imgurl: "../../images/product/gift/Gift5.jpg",
        title: "우리 쑥 파우더",

        kor: "우리 쑥 파우더",
        eng: "Starbucks Mugwort Powder",
        text: '우리 쑥을 활용해서 만든 스타벅스의 특별한 음료입니다. 한정 지역의 매장에서 만나볼 수 있던 "제주쑥쑥라떼"를 간편하게 즐겨보세요.',
        icon: "",
        season: "",
      },
    ],
  },
  {
    id: 8,
    category: "tea",
    data: [
      {
        id: 1,
        imgurl: "../../images/product/tea/Tea1.jpg",
        title: "티바나 민트 블렌드 12개입",

        kor: "티바나 민트 블렌드 12개입",
        eng: "Teavana Mint blend 12ea",
        text: "스타벅스에서 새롭게 선보이는 티바나 민트 블렌드 티입니다.",
        icon: "",
        season: "",
      },
      {
        id: 2,
        imgurl: "../../images/product/tea/Tea2.jpg",
        title: "티바나 얼 그레이 12개입",

        kor: "티바나 얼 그레이 12개입",
        eng: "Teavana Earl grey 12ea",
        text: "향기로운 천연 베르가못 오일과 그윽한 라벤더가 함유된 산뜻한 블렌딩 티입니다.",
        icon: "",
        season: "",
      },
      {
        id: 3,
        imgurl: "../../images/product/tea/Tea3.jpg",
        title: "티바나 유스베리 12개입",

        kor: "티바나 유스베리 12개입",
        eng: "TVNA YOUTHBERRY 12CT KR",
        text: "건조사과와 국내산 황차에 건조망고, 건조파인애플 등 다양한 과일들을 블렌딩하여 만들어진 티로, 약간의 산미와 다양한 풍미를 느낄 수 있는 티 입니다.",
        icon: "",
        season: "",
      },
      {
        id: 4,
        imgurl: "../../images/product/tea/Tea4.jpg",
        title: "티바나 제주녹차(15개입)",

        kor: "티바나 제주녹차(15개입)",
        eng: "Teavana Jeju green tea",
        text: "화학비료 대신 유기 비료만을 사용하여 재배한 것이 특징인 유기 녹차",
        icon: "",
        season: "",
      },
    ],
  },
];

export default productData;
