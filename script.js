const tripDays = [
  {
    day: "抵达日",
    date: "6月1日",
    route: "抵达喀什",
    location: "喀什",
    distance: "整备",
    highlights: ["入住古城附近", "确认司机集合时间", "补给防晒、饮用水和零食"],
    bestTime: "傍晚适合古城散步，光线柔和、节奏轻",
    outfit: "舒适出片：白色或奶油色T恤/薄衬衫，配浅蓝牛仔裤或卡其半裙，外搭薄防晒衫。颜色选奶油白、浅蓝、杏色，和喀什土墙很搭；鞋子穿软底小白鞋，随身小包放身份证、墨镜、润唇膏。",
    schedule: [
      { time: "15:00-16:30", plan: "抵达喀什后办理入住，先休息、整理行李。" },
      { time: "17:00-18:00", plan: "补给防晒、饮用水、零食和常用药。" },
      { time: "19:00-20:30", plan: "古城附近轻松吃饭散步，确认第二天司机集合时间。" },
      { time: "22:00-22:30", plan: "早点休息，把外套、证件、水和充电宝放进随手包。" }
    ],
    note: "第一晚留给适应、整理和休息。第二天开始进入帕米尔高原线。"
  },
  {
    day: "Day 1",
    date: "6月2日",
    route: "喀什 - 白沙湖北岸 - 火山 - 塔县",
    location: "塔县",
    distance: "高原长线",
    highlights: ["白沙湖北岸", "火山地貌", "抵达塔县"],
    bestTime: "白沙湖以上午到午后顺光为佳，傍晚前抵达塔县更稳",
    outfit: "舒适出片：内搭白色/浅灰速干长袖，外穿浅卡其或雾蓝冲锋衣，下装选深色直筒裤。白沙湖适合白、蓝、浅驼色，画面干净；帽子选米色宽檐帽或棒球帽，墨镜、防晒、围巾放随手包。",
    schedule: [
      { time: "08:30-09:00", plan: "喀什出发，早餐吃稳一点，车上备水和零食。" },
      { time: "12:00-13:00", plan: "白沙湖北岸观景拍照，湖面和雪山光线更清透。" },
      { time: "15:00-15:40", plan: "火山地貌停留，注意风大和日晒。" },
      { time: "18:00-19:00", plan: "抵达塔县入住，放慢节奏，减少剧烈活动。" }
    ],
    note: "海拔逐步升高，少跑跳，多喝水，车上备好外套和墨镜。"
  },
  {
    day: "Day 2",
    date: "6月3日",
    route: "塔县 - 盘龙古道 - 班迪尔蓝湖 - 帕米尔之眼 - 下午茶 - 托格伦夏湿地 - 塔县",
    location: "塔县",
    distance: "环线游玩",
    highlights: ["盘龙古道", "班迪尔蓝湖", "帕米尔之眼", "托格伦夏湿地"],
    bestTime: "盘龙古道适合上午，蓝湖适合中午前后，湿地适合傍晚柔光",
    outfit: "舒适出片：浅色针织/衬衫打底，外搭硬挺风衣或短外套，下装可选米白长裙加保暖打底，或浅卡其工装裤。班迪尔蓝湖适合白、奶黄、浅驼；湿地傍晚适合一点红棕或焦糖色。鞋子要防滑。",
    schedule: [
      { time: "09:00-11:00", plan: "塔县出发去盘龙古道，上午山路光影更立体。" },
      { time: "12:00-13:00", plan: "班迪尔蓝湖观景，湖色在高光时段更亮。" },
      { time: "15:00-16:30", plan: "帕米尔之眼和下午茶，留出休息和拍照时间。" },
      { time: "18:00-19:00", plan: "托格伦夏湿地看傍晚光线，再返回塔县。" }
    ],
    note: "这天景观密度很高，适合穿有层次的衣服，风大时拍照更从容。"
  },
  {
    day: "Day 3",
    date: "6月4日",
    route: "塔县 - 慕士塔格冰川公园 - 喀拉库勒湖 - 奥依塔克红山 - 喀什市",
    location: "喀什",
    distance: "返程长线",
    highlights: ["慕士塔格冰川公园", "喀拉库勒湖", "奥依塔克红山", "回到喀什"],
    bestTime: "冰川公园适合上午，喀拉库勒湖适合午后，红山适合下午斜光",
    outfit: "舒适出片：吸汗内搭加轻羽绒/冲锋衣，颜色选冰川白、银灰、雾蓝，和雪山湖面最协调。下装深灰或黑色长裤更耐脏，鞋子穿防滑运动鞋；拍照时可以加一条浅色围巾提亮脸部。",
    schedule: [
      { time: "08:30-09:00", plan: "塔县退房出发，先去慕士塔格冰川公园。" },
      { time: "10:00-12:00", plan: "冰川公园游览，边走边适应海拔，不赶路。" },
      { time: "13:30-14:30", plan: "喀拉库勒湖观景，湖面、雪山和云影更容易出片。" },
      { time: "16:00-17:00", plan: "奥依塔克红山看下午斜光，之后回喀什入住。" }
    ],
    note: "冰川公园温差明显，轻便羽绒或冲锋衣最好放在随手可拿的位置。"
  },
  {
    day: "Day 4",
    date: "6月5日",
    route: "喀什 - 伊宁",
    location: "伊宁",
    distance: "城市转场",
    highlights: ["抵达伊宁", "休整", "补给"],
    bestTime: "转场日以舒适为主，傍晚抵达后轻松散步最合适",
    outfit: "舒适出片：转场日穿柔软T恤或薄卫衣，配宽松牛仔裤/运动长裤，外搭轻薄开衫。颜色选浅灰、奶白、鼠尾草绿，坐车舒服也不显乱；鞋子选不勒脚的运动鞋，随身包尽量轻。",
    schedule: [
      { time: "09:00-12:00", plan: "喀什出发去伊宁，按交通安排预留充足时间。" },
      { time: "15:00-16:30", plan: "抵达伊宁后入住，洗漱休整、整理照片。" },
      { time: "18:30-20:00", plan: "轻松晚餐，补给第二天赛湖需要的水和防晒。" },
      { time: "21:30-22:00", plan: "检查相机、电池、墨镜和外套。" }
    ],
    note: "这天以转场为主，晚上可以轻松吃饭、整理照片和衣物。"
  },
  {
    day: "Day 5",
    date: "6月6日",
    route: "伊宁 - 赛里木湖环湖 - 果子沟大桥 - 伊宁",
    location: "伊宁",
    distance: "约300km / 4-5h",
    highlights: ["赛里木湖环湖", "果子沟大桥", "返回伊宁"],
    bestTime: "赛里木湖上午到午后湖色最亮，果子沟大桥适合下午顺路观景",
    outfit: "舒适出片：赛湖风大，建议白色上衣加湖蓝/薄荷绿防风外套，下装选浅色直筒裤或牛仔裤。想更出片可以带一条白色或鹅黄色披肩，湖边拍照很亮；帽子、墨镜、防晒霜一定随身补涂。",
    schedule: [
      { time: "08:30-09:00", plan: "伊宁出发前往赛里木湖，避开太晚出发的强烈顶光。" },
      { time: "11:00-13:00", plan: "赛里木湖开始环湖，湖色清亮，适合主拍照。" },
      { time: "14:30-15:30", plan: "继续环湖或择点下午茶，风大时减少久站。" },
      { time: "16:30-17:10", plan: "果子沟大桥观景，之后返回伊宁。" }
    ],
    note: "赛湖风大且紫外线强，帽子、墨镜、防晒霜要随身。"
  },
  {
    day: "Day 6",
    date: "6月7日",
    route: "伊宁 - 夏塔自驾 - 特克斯八卦城 - 特克斯",
    location: "特克斯",
    distance: "约370km / 6h",
    highlights: ["夏塔", "特克斯八卦城", "入住特克斯"],
    bestTime: "夏塔适合上午到午后，特克斯八卦城适合傍晚散步",
    outfit: "舒适出片：夏塔适合山野感，穿速干内搭加浅卡其/橄榄绿外套，下装选工装裤或弹力长裤。颜色推荐奶白、草绿、浅棕；可带红色/橘色小披肩或丝巾做点睛。鞋子必须防滑好走。",
    schedule: [
      { time: "08:00-08:30", plan: "伊宁出发，长车程日尽量早点走。" },
      { time: "11:30-14:30", plan: "抵达夏塔游玩，雪山、草甸和河谷适合慢慢看。" },
      { time: "15:30-18:30", plan: "离开夏塔前往特克斯，路上补水休息。" },
      { time: "19:00-20:00", plan: "特克斯八卦城傍晚散步，入住慢途民宿。" }
    ],
    note: "车程较长，早餐吃稳一点，移动电源和水放在手边。"
  },
  {
    day: "Day 7",
    date: "6月8日",
    route: "特克斯 - 库尔德宁自驾 - 那拉提",
    location: "那拉提",
    distance: "约260km / 5h",
    highlights: ["库尔德宁", "山谷草原", "抵达那拉提"],
    bestTime: "库尔德宁上午至下午光线舒服，抵达那拉提后傍晚看草原层次",
    outfit: "舒适出片：库尔德宁森林草原适合温柔自然色，穿白色针织/卫衣，外搭浅绿或米色夹克，下装选浅蓝牛仔裤或卡其长裤。颜色推荐奶油白、鼠尾草绿、浅牛仔蓝；草地可能潮，鞋底要稳。",
    schedule: [
      { time: "08:30-09:00", plan: "特克斯出发去库尔德宁，沿途山谷景色逐渐展开。" },
      { time: "11:00-13:00", plan: "库尔德宁自驾游览，森林和草原光线柔和。" },
      { time: "14:30-15:30", plan: "午后择点拍照和休息，避免把体力消耗太满。" },
      { time: "17:30-18:30", plan: "前往那拉提入住，傍晚看草原光影。" }
    ],
    note: "草原天气变得快，薄外套、防水鞋或防滑鞋会很实用。"
  },
  {
    day: "Day 8",
    date: "6月9日",
    route: "那拉提自驾 - 轻旅拍 - 下午茶 - 萌宠互动 - 那拉提镇看星星",
    location: "那拉提",
    distance: "约50km / 1h",
    highlights: ["轻旅拍", "下午茶", "抱小羊", "星空"],
    bestTime: "旅拍适合上午或傍晚柔光，星空安排在天黑后、避开强光处",
    outfit: "舒适出片：这是主拍照日，可以穿白色/奶油色长裙、牛仔套装，或红色小面积点缀。草原上白色最仙、红色最醒目、牛仔最松弛；白天配草帽或编织包，晚上看星星另备厚外套和围巾。",
    schedule: [
      { time: "09:30-10:30", plan: "那拉提自驾，上午先看草原和远山，光线干净。" },
      { time: "11:00-12:30", plan: "轻旅拍主时段，服装和配饰尽量提前放随手包。" },
      { time: "15:30-17:00", plan: "下午茶和萌宠互动，抱小羊适合轻松抓拍。" },
      { time: "22:30-23:10", plan: "那拉提镇看星星，穿厚外套，减少手机强光。" }
    ],
    note: "这天节奏轻，可以安排最好看的衣服。晚上看星星注意保暖。"
  },
  {
    day: "Day 9",
    date: "6月10日",
    route: "那拉提镇 - 途观唐布拉百里画廊 - 独库北段 - 乌鲁木齐",
    location: "乌鲁木齐",
    distance: "约520km / 6h",
    highlights: ["唐布拉百里画廊", "独库北段", "抵达乌鲁木齐"],
    bestTime: "唐布拉适合上午到午后边走边看，独库北段需优先服从路况和管制",
    outfit: "舒适出片：长途日以抗温差为主，穿柔软内搭、轻便外套和舒适长裤。唐布拉适合浅驼、奶白、草绿，独库路段冷时直接加围巾；鞋子选软底运动鞋，随手包放晕车药、水和充电线。",
    schedule: [
      { time: "08:00-08:30", plan: "那拉提出发，提前和司机确认独库北段通行情况。" },
      { time: "10:30-12:00", plan: "途观唐布拉百里画廊，上午山谷色彩更清爽。" },
      { time: "13:30-16:30", plan: "进入独库北段，以路况和停车点为准安排观景。" },
      { time: "19:30-20:30", plan: "抵达乌鲁木齐入住，整理行李和返程物品。" }
    ],
    note: "长途返城日，提前确认独库路况和司机发车时间。"
  },
  {
    day: "Day 10",
    date: "6月11日",
    route: "乌鲁木齐送机",
    location: "乌鲁木齐",
    distance: "返程",
    highlights: ["整理行李", "预留机场时间", "返程"],
    bestTime: "返程日不安排硬景点，优先预留机场和市区交通时间",
    outfit: "舒适出片：返程穿不容易皱的浅色上衣、宽松长裤和易穿脱外套。颜色选奶白、浅灰、浅蓝，机场拍照也清爽；鞋子选方便安检和走路的运动鞋，液体和喷雾提前托运整理。",
    schedule: [
      { time: "09:00-10:30", plan: "按航班时间退房，整理托运行李和随身物品。" },
      { time: "起飞前3小时", plan: "从市区出发去机场，给安检和路况留余量。" },
      { time: "起飞前2小时", plan: "办理值机和安检，证件、充电宝、相机电池随身。" },
      { time: "起飞前1小时", plan: "保存照片和订单截图，液体喷雾确认已托运。" }
    ],
    note: "把证件、充电宝、相机电池放随身包，液体和喷雾提前整理。"
  }
];

const hotels = [
  { date: "6月1日", city: "喀什", name: "喀什全季酒店（古城商业街店）", nights: "1晚" },
  { date: "6月2日", city: "塔县", name: "塔县格美酒店", nights: "1晚" },
  { date: "6月3日", city: "塔县", name: "塔县格美酒店", nights: "1晚" },
  { date: "6月4日", city: "喀什", name: "喀什格林东方（古城）", nights: "1晚" },
  { date: "6月5日", city: "伊宁", name: "伊宁云端酒店", nights: "1晚" },
  { date: "6月6日", city: "伊宁", name: "伊宁云端酒店", nights: "1晚" },
  { date: "6月7日", city: "特克斯", name: "特克斯慢途民宿", nights: "1晚" },
  { date: "6月8日", city: "那拉提", name: "十二时节民宿", nights: "1晚" },
  { date: "6月9日", city: "那拉提", name: "十二时节民宿", nights: "1晚" },
  { date: "6月10日", city: "乌鲁木齐", name: "乌市丽呈花盛", nights: "1晚" }
];

const foodRecommendations = [
  {
    date: "6月1日",
    city: "喀什",
    note: "抵达日按到达时间选择，晚餐可以稍微有仪式感。",
    lunch: [
      { name: "纺织厂古城烤包子", address: "喀什古城周边，可导航店名", dishes: "牛肉烤包子、酸奶", price: "约15-30元/人" },
      { name: "喀什美食一条街", address: "喀什古城美食街区域", dishes: "干煸炒面、烤肉、石榴汁", price: "约25-50元/人" }
    ],
    dinner: [
      { name: "诺澜美食", address: "喀什市解放北路18号，老新华书店旁", dishes: "架子肉、烤鸽子、薄皮包子", price: "约80-120元/人" },
      { name: "汗巴扎夜市", address: "喀什古城内", dishes: "烤鸽子、缸子肉、面肺子米肠子", price: "约40-80元/人" }
    ]
  },
  {
    date: "6月2日",
    city: "喀什-塔县",
    note: "这天车程长，午饭以顺路快吃为主，晚饭建议热汤锅。",
    lunch: [
      { name: "白沙湖游客服务区简餐", address: "G314白沙湖景区服务区一带", dishes: "拌面、抓饭、热汤", price: "约30-60元/人" },
      { name: "喀拉库勒湖沿线毡房餐食", address: "喀拉库勒湖景区沿线", dishes: "羊肉汤、抓饭、奶茶", price: "约40-80元/人" }
    ],
    dinner: [
      { name: "塔县雷记高原牦牛骨汤锅馆", address: "塔什库尔干县库尔干路009号", dishes: "牦牛骨汤锅、牦牛肉、素菜拼盘", price: "约60-90元/人" },
      { name: "西域牛王铜锅牦牛", address: "塔什库尔干县塔什库尔干路065号", dishes: "铜锅牦牛肉、热汤、蔬菜", price: "约70-110元/人" }
    ]
  },
  {
    date: "6月3日",
    city: "塔县",
    note: "景点密集，午饭别太重，晚饭补主食和热量。",
    lunch: [
      { name: "寻羊品味餐厅", address: "塔什库尔干县奇石广场旅游产品商业街152/022号", dishes: "羊肉抓饭、烤肉、拌面", price: "约50-80元/人" },
      { name: "火炬快餐厅", address: "塔什库尔干县城内，可导航店名", dishes: "炒菜、拉面、烤肉", price: "约35-60元/人" }
    ],
    dinner: [
      { name: "冰山来客塔吉克美食餐厅", address: "塔什库尔干县城内，可导航店名", dishes: "牦牛肉火锅、塔吉克风味热菜", price: "约80-120元/人" },
      { name: "塔县伊犁回民餐厅", address: "塔县慕士塔格路分店", dishes: "拌面、炒菜、丸子汤", price: "约40-70元/人" }
    ]
  },
  {
    date: "6月4日",
    city: "塔县-喀什",
    note: "返程日午饭顺路简单吃，回喀什后再好好吃。",
    lunch: [
      { name: "喀拉库勒湖沿线简餐", address: "喀拉库勒湖景区沿线", dishes: "抓饭、拌面、奶茶", price: "约35-70元/人" },
      { name: "奥依塔克景区周边餐点", address: "奥依塔克红山/冰川公园周边", dishes: "拌面、烤肉、热汤", price: "约35-70元/人" }
    ],
    dinner: [
      { name: "马氏案板牛蹄（喀什总店）", address: "喀什市吐曼路6号B1楼121-124号，你好酒店右侧", dishes: "案板牛蹄、野蘑菇烧鸡", price: "约50-80元/人" },
      { name: "诺澜美食", address: "喀什市解放北路18号，老新华书店旁", dishes: "架子肉、烤鸽子、鹰嘴豆饭", price: "约80-120元/人" }
    ]
  },
  {
    date: "6月5日",
    city: "伊宁",
    note: "转场日看抵达时间，晚餐选集中型餐饮更省心。",
    lunch: [
      { name: "机场/车站简餐", address: "按当天交通点就近选择", dishes: "抓饭、拌面、丸子汤", price: "约30-60元/人" },
      { name: "伊蕉叶·宴会", address: "伊宁市深圳路449号", dishes: "新疆菜、干锅花菜、家常热菜", price: "约50-90元/人" }
    ],
    dinner: [
      { name: "丝路之光美食聚", address: "伊宁市重庆北路501号中亚之门商业E区2楼201号", dishes: "新疆菜、烤肉、抓饭", price: "约50-90元/人" },
      { name: "澜特色餐厅", address: "伊宁市滨河大道999号", dishes: "野菌汤、和牛沙拉、精致西餐", price: "约180-300元/人" }
    ]
  },
  {
    date: "6月6日",
    city: "伊宁-赛里木湖",
    note: "赛湖风大，午饭热一点；回伊宁可以加甜品。",
    lunch: [
      { name: "赛里木湖景区游客中心餐厅", address: "赛里木湖景区游客中心", dishes: "拌面、抓饭、热汤", price: "约40-80元/人" },
      { name: "果子沟沿线餐厅", address: "果子沟大桥沿线服务点", dishes: "烤肉、丸子汤、拌面", price: "约40-80元/人" }
    ],
    dinner: [
      { name: "古兰丹姆冰淇淋", address: "伊宁市斯大林街三巷一带，可导航就近分店", dishes: "手工冰淇淋、酸奶、夹沙", price: "约15-35元/人" },
      { name: "丝路之光美食聚", address: "伊宁市重庆北路501号中亚之门商业E区2楼201号", dishes: "新疆菜、烤肉、特色小吃", price: "约50-90元/人" }
    ]
  },
  {
    date: "6月7日",
    city: "伊宁-特克斯",
    note: "夏塔游玩时间长，午饭建议景区或镇上快吃，晚饭再进城。",
    lunch: [
      { name: "夏塔景区游客中心餐厅", address: "昭苏夏塔景区游客中心", dishes: "拌面、抓饭、热饮", price: "约40-80元/人" },
      { name: "昭苏县城顺路餐厅", address: "昭苏县城主街，可按司机建议选择", dishes: "烤肉、拌面、丸子汤", price: "约35-70元/人" }
    ],
    dinner: [
      { name: "秘制椒麻鸡烧烤", address: "特克斯县美食街秘制椒麻鸡店", dishes: "椒麻鸡、特色羊排揪片子、烤肉", price: "约50-80元/人" },
      { name: "八卦城夜市/美食街", address: "特克斯八卦城美食街区域", dishes: "烤肉、烤包子、奶茶、抓饭", price: "约30-70元/人" }
    ]
  },
  {
    date: "6月8日",
    city: "特克斯-那拉提",
    note: "库尔德宁当天适合吃热菜，晚餐在那拉提镇更从容。",
    lunch: [
      { name: "库尔德宁景区周边农家乐", address: "巩留库尔德宁景区周边", dishes: "土鸡、拌面、野菜热菜", price: "约50-90元/人" },
      { name: "巩留县城顺路餐厅", address: "巩留县城主街，可按司机建议选择", dishes: "抓饭、烤肉、丸子汤", price: "约35-70元/人" }
    ],
    dinner: [
      { name: "那拉提居阁客栈·餐厅", address: "新源县那拉提镇天马西街五巷008号", dishes: "大盘鸡、烤羊腿、牛羊肉", price: "约70-120元/人" },
      { name: "小蓝鲸旅游美食城", address: "新源县那拉提镇东街二十七巷", dishes: "大盘鸡、烤肉、拌面", price: "约50-80元/人" }
    ]
  },
  {
    date: "6月9日",
    city: "那拉提",
    note: "轻旅拍日不要吃太撑，晚饭留给星空前的舒服热菜。",
    lunch: [
      { name: "那拉提镇轻食/咖啡店", address: "那拉提镇主街，可导航就近店", dishes: "咖啡、简餐、甜品", price: "约35-70元/人" },
      { name: "小蓝鲸旅游美食城", address: "新源县那拉提镇东街二十七巷", dishes: "拌面、炒菜、烤肉", price: "约50-80元/人" }
    ],
    dinner: [
      { name: "那拉提居阁客栈·餐厅", address: "新源县那拉提镇天马西街五巷008号", dishes: "大盘鸡、烤羊腿、家常热菜", price: "约70-120元/人" },
      { name: "那拉提镇夜市/烧烤摊", address: "那拉提镇主街夜市区域", dishes: "烤肉、烤馕、奶茶", price: "约30-70元/人" }
    ]
  },
  {
    date: "6月10日",
    city: "那拉提-乌鲁木齐",
    note: "独库长途日，午饭以路况和司机建议为准，晚饭选乌市经典。",
    lunch: [
      { name: "乔尔玛/独库沿线餐点", address: "独库北段沿线服务点", dishes: "拌面、丸子汤、烤肉", price: "约40-80元/人" },
      { name: "唐布拉沿线农家乐", address: "唐布拉百里画廊沿线", dishes: "土鸡、拌面、奶茶", price: "约50-90元/人" }
    ],
    dinner: [
      { name: "吾吾子百年非遗羊羔肉（大巴扎黑金店）", address: "乌鲁木齐市天山区和平南路273号，青海大寺旁", dishes: "清炖羊肉、吾吾子手抓肉、酸奶", price: "约80-130元/人" },
      { name: "疆麦儿现拉黄面·烧烤（明园旗舰店）", address: "乌鲁木齐市明园西路40号", dishes: "现拉黄面、小羔羊烤串", price: "约35-70元/人" }
    ]
  },
  {
    date: "6月11日",
    city: "乌鲁木齐",
    note: "送机日控制时间，选离酒店或机场路线顺的店。",
    lunch: [
      { name: "疆麦儿现拉黄面·烧烤（明园旗舰店）", address: "乌鲁木齐市明园西路40号", dishes: "黄面、小羔羊烤串、豆豆汤", price: "约35-70元/人" },
      { name: "小尕子（明园三楼店）", address: "乌鲁木齐市沙依巴克区明园西路1号火宴山3楼", dishes: "烤羊排、拉条子、手抓羊肉", price: "约70-120元/人" }
    ],
    dinner: [
      { name: "机场简餐", address: "乌鲁木齐天山国际机场航站楼内", dishes: "简餐、面食、咖啡", price: "约40-90元/人" },
      { name: "吾吾子百年非遗羊羔肉（大巴扎黑金店）", address: "乌鲁木齐市天山区和平南路273号，青海大寺旁", dishes: "手抓肉、清炖羊肉、烤串", price: "约80-130元/人" }
    ]
  }
];

const checklist = [
  { group: "证件与支付", items: ["身份证", "驾驶证/备用证件", "少量现金", "银行卡", "机票/订单截图", "边防证如需"] },
  { group: "穿搭与防护", items: ["冲锋衣或轻羽绒", "薄外套", "舒适运动鞋", "帽子", "墨镜", "防晒霜", "润唇膏", "保湿面霜"] },
  { group: "电子设备", items: ["手机充电器", "移动电源", "相机/电池", "车载充电线", "耳机", "备用存储卡"] },
  { group: "长途车程", items: ["饮用水", "零食", "晕车药", "纸巾湿巾", "颈枕", "垃圾袋"] },
  { group: "高原与应急", items: ["常用药", "肠胃药", "感冒药", "创可贴", "葡萄糖或能量糖", "个人保险信息"] }
];

const tips = [
  { title: "车程提醒", body: "这趟行程有多天长距离移动，早上出发前把水、纸巾、外套、充电宝放在随手包里。", tone: "长途" },
  { title: "天气与温差", body: "喀什、塔县、赛湖、那拉提体感差异很大，夏天也建议带能挡风的外套。", tone: "天气" },
  { title: "高原节奏", body: "塔县和慕士塔格一线海拔较高，刚到时动作放慢，少饮酒，不要剧烈运动。", tone: "高原" },
  { title: "安检与证件", body: "新疆安检较常见，身份证随身放好。涉及边境区域时提前和定制团确认边防证要求。", tone: "证件" },
  { title: "独库路段", body: "独库公路受天气和管制影响较大，6月10日前一天请司机再次确认通行情况。", tone: "路况" },
  { title: "拍照准备", body: "白沙湖、赛里木湖、那拉提光线很强，浅色衣物、墨镜、防晒和补妆用品会很有用。", tone: "拍照" }
];

const storeKey = "xinjiang-web-checklist";
const checked = JSON.parse(localStorage.getItem(storeKey) || "{}");
const $ = (selector) => document.querySelector(selector);

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text, message) {
  try {
    if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(input);
    showToast(copied ? message : "可长按文字复制");
  }
}

function renderTrip() {
  $("#tripList").innerHTML = tripDays.map((item) => `
    <article class="day-card">
      <div class="date-rail">
        <strong>${item.date}</strong>
        <span>${item.day}</span>
      </div>
      <div class="day-body">
        <div class="card-top">
          <div class="place">${item.location}</div>
          <div class="tag">${item.distance}</div>
        </div>
        <div class="route">${item.route}</div>
        <div class="chips">${item.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}</div>
        <div class="best-time">
          <span>最佳观赏</span>
          <p>${item.bestTime}</p>
        </div>
        <div class="outfit">
          <span>每日穿搭</span>
          <p>${item.outfit}</p>
        </div>
        <div class="day-schedule">
          ${item.schedule.map((slot) => `
            <div class="schedule-row">
              <time>${slot.time}</time>
              <p>${slot.plan}</p>
            </div>
          `).join("")}
        </div>
        <div class="note">${item.note}</div>
        <button class="copy-btn" data-copy="${item.route}" type="button">复制路线</button>
      </div>
    </article>
  `).join("");
}

function renderHotels() {
  $("#hotelList").innerHTML = hotels.map((hotel) => `
    <article class="hotel-card">
      <div class="hotel-meta">
        <span>${hotel.date} · ${hotel.nights}</span>
        <span>${hotel.city}</span>
      </div>
      <h3>${hotel.name}</h3>
      <p>点击下方按钮复制酒店名，到地图或订单里搜索会更快。</p>
      <button class="copy-btn" data-copy="${hotel.city} ${hotel.name}" type="button">复制酒店</button>
    </article>
  `).join("");
}

function renderFood() {
  const renderMeal = (title, shops) => `
    <div class="food-meal">
      <div class="meal-label">${title}</div>
      <div class="food-options">
        ${shops.map((shop) => `
          <button class="food-option" data-copy="${shop.name} ${shop.address}" type="button">
            <span class="food-option-head">
              <strong>${shop.name}</strong>
              <em>${shop.price}</em>
            </span>
            <span class="food-dishes">${shop.dishes}</span>
            <span class="food-address">${shop.address}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  $("#foodList").innerHTML = foodRecommendations.map((day) => `
    <article class="food-card">
      <div class="food-meta">
        <span>${day.date}</span>
        <span>${day.city}</span>
      </div>
      ${renderMeal("午饭", day.lunch)}
      ${renderMeal("晚饭", day.dinner)}
      <div class="food-note">${day.note}</div>
    </article>
  `).join("");
}

function renderChecklist() {
  $("#checklistGroups").innerHTML = checklist.map((group) => `
    <section class="check-group">
      <h3>${group.group}</h3>
      <div class="check-items">
        ${group.items.map((label) => {
          const key = `${group.group}-${label}`;
          const isChecked = checked[key] ? "is-checked" : "";
          const mark = checked[key] ? "✓" : "";
          return `
            <button class="check-item ${isChecked}" data-key="${key}" type="button">
              <span class="box">${mark}</span>
              <span>${label}</span>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function renderTips() {
  $("#tipList").innerHTML = tips.map((tip) => `
    <article class="tip-card">
      <div class="tip-title">
        <h3>${tip.title}</h3>
        <span>${tip.tone}</span>
      </div>
      <p>${tip.body}</p>
    </article>
  `).join("");
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("is-active"));
      tab.classList.add("is-active");
      $(`#${tab.dataset.panel}`).classList.add("is-active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.body.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyText(copyButton.dataset.copy, "已复制");

    const checkButton = event.target.closest(".check-item");
    if (!checkButton) return;
    const key = checkButton.dataset.key;
    checked[key] = !checked[key];
    localStorage.setItem(storeKey, JSON.stringify(checked));
    renderChecklist();
  });

  $("#resetChecklist").addEventListener("click", () => {
    Object.keys(checked).forEach((key) => delete checked[key]);
    localStorage.removeItem(storeKey);
    renderChecklist();
    showToast("已重置清单");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderTrip();
renderHotels();
renderFood();
renderChecklist();
renderTips();
bindEvents();
registerServiceWorker();
