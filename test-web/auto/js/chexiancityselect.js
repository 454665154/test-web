(function () {
    //#region 城市列表  
    var localCity =
        [{ provinceCode: "110000", cityCode: "110100", text: "北京", dpt: '20127', carNo: '京A', pName: '北京市', cName: '北京市' },
        { provinceCode: "310000", cityCode: "310100", text: "上海", dpt: '2022003', carNo: '沪A', pName: '上海市', cName: '上海市' },
        { provinceCode: "440000", cityCode: "440100", text: "广州", dpt: '2043503', carNo: '粤A', pName: '广东省', cName: '广州市' },
        { provinceCode: "440000", cityCode: "440300", text: "深圳", dpt: '20516', carNo: '粤B', pName: '广东省', cName: '深圳市' },
        { provinceCode: "320000", cityCode: "320500", text: "苏州", dpt: '24528', carNo: '苏E', pName: '江苏省', cName: '苏州市' },
        { provinceCode: "330000", cityCode: "330100", text: "杭州", dpt: '2120956', carNo: '浙A', pName: '浙江省', cName: '杭州市' },
        { provinceCode: "320000", cityCode: "320100", text: "南京", dpt: '2108904', carNo: '苏A', pName: '江苏省', cName: '南京市' },
        { provinceCode: "120000", cityCode: "120100", text: "天津", dpt: '20321', carNo: '津A', pName: '天津市', cName: '天津市' },
        { provinceCode: "370000", cityCode: "370100", text: "济南", dpt: '2365701', carNo: '鲁A', pName: '山东省', cName: '济南市' },
        { provinceCode: "370000", cityCode: "370200", text: "青岛", dpt: '2113678', carNo: '鲁B', pName: '山东省', cName: '青岛市' },
        { provinceCode: "420000", cityCode: "420100", text: "武汉", dpt: '2091301', carNo: '鄂A', pName: '湖北省', cName: '武汉市' },
        { provinceCode: "430000", cityCode: "430100", text: "长沙", dpt: '22019', carNo: '湘A', pName: '湖南省', cName: '长沙市' },
        { provinceCode: "210000", cityCode: "210100", text: "沈阳", dpt: '20606', carNo: '辽A', pName: '辽宁省', cName: '沈阳市' },
        { provinceCode: "510000", cityCode: "510100", text: "成都", dpt: '2269302', carNo: '川A', pName: '四川省', cName: '成都市' },
        { provinceCode: "500000", cityCode: "500100", text: "重庆", dpt: '21821', carNo: '渝A', pName: '重庆市', cName: '重庆市' },
        { provinceCode: "610000", cityCode: "610100", text: "西安", dpt: '21700', carNo: '陕A', pName: '陕西省', cName: '西安市' },
        { provinceCode: "340000", cityCode: "340100", text: "合肥", dpt: '22528', carNo: '皖A', pName: '安徽省', cName: '合肥市' },
        { provinceCode: "350000", cityCode: "350100", text: "福州", dpt: '21319', carNo: '闽A', pName: '福建省', cName: '福州市' },
        { provinceCode: "220000", cityCode: "220100", text: "长春", dpt: '2082504', carNo: '吉A', pName: '吉林省', cName: '长春市' },
        { provinceCode: "130000", cityCode: "130100", text: "石家庄", dpt: '2242635', carNo: '冀A', pName: '河北省', cName: '石家庄市' }];
    var serverCity = '|110000,北京市,110100,北京市,北京,BeiJing,BJ,20127,京A,1||310000,上海市,310100,上海市,上海,ShangHai,SH,2022003,沪A,2||440000,广东省,440100,广州市,广州,GuangZhou,GZ,2043503, 粤A,6|440300,深圳市,深圳,ShenZhen,SZ,20516,粤B,3|441900,东莞市,东莞,DongGuan,DG,23523,粤S,36|440183,广州市,增城,zengcheng,ZC,20412,粤A|440184,广州市,从化,conghua,CH,2041303,粤A|440185,广州市,新塘,xintang,XT,20412,粤A|440113,广州市,番禺,panyu,PY,2041112,粤A|440114,广州市,花都,huadu,HD,2041408,粤A|440400,珠海市,珠海,ZhuHai,ZH,2041509,粤C|440605,佛山南海　,佛山南海,FoShanNanHai,FSNH,2410420,粤Y,37|440604,佛山禅城　,佛山禅城,FoShanChanCheng,FSCC,2418008,粤E,37|440607,佛山三水　,佛山三水,FoShanShanShui,FSSS,2411112,粤E,37|440608,佛山高明　,佛山高明,FoShanGaoMing,FSGM,2411209,粤E,37|440606,佛山顺德　,佛山顺德,FoShanShunDe,FSSD,24115,粤X,37|442000,中山市,中山,ZhongShan,ZS,24320,粤T|441400,梅州市,梅州,MeiZhou,MZ,2044310,粤 M|440200,韶关市,韶关,ShaoGuan,SG,2041712,粤F|440700,江门市,江门,JiangMen,JM,24412,粤 J|440500,汕头市,汕头,ShanTou,ST,2040905,粤D,43|441300,惠州市,惠州,HuiZhou,HZ,2041010,粤 L|441200,肇庆市,肇庆,ZhaoQing,ZQ,2041613,粤H|445200,揭阳市,揭阳,JieYang,JY,2044407, 粤V|445100,潮州市,潮州,ChaoZhou,CZ,2044207,粤U|441800,清远市,清远,QingYuan,QY,2044011,粤R|440900,茂名市,茂名,MaoMing,MM,2040608,粤K|440800,湛江市, 湛江,ZhanJiang,ZJ,2040412,粤G|441700,阳江市,阳江,YangJiang,YJ,2041811,粤Q|445300, 云浮市,云浮,YunFu,YF,2044107,粤W|441600,河源市,河源,HeYuan,HY,2044505,粤P|441500,汕尾市,汕尾,ShanWei,SW,2044605,粤N||320000,江苏省,320100,南京市,南京,NanJing,NJ,2108904, 苏A,5|320500,苏州市,苏州,SuZhou,SZ,24528,苏E,15|320200,无锡市,无锡,WuXi,WX,2461203,苏B,30|320400,常州市,常州,ChangZhou,CZ,2101278,苏D,39|320600,南通市,南通,NanTong,NT,2101578,苏F|321200,泰州市,泰州,TaiZhou,TZ,2102078,苏M|321000,扬州市,扬州,YangZhou,YZ,2101978,苏K|321100,镇江市,镇江,ZhenJiang,ZJ,21013,苏L|320300,徐州市, 徐州,XuZhou,XZ,2101478,苏C,40|320800,淮安市,淮安,HuaiAn,HA,2101678,苏H,44|320900,盐城市,盐城,YanCheng,YC,2101778,苏J|320582,张家港市,张家港,ZhangJiaGang,ZJG,2450178,苏 E|320583,昆山市,昆山,KunShan,KS,2450278,苏E|320581,常熟市,常熟,ChangShu,CS,2450378, 苏E|320585,太仓市,太仓,TaiCang,TC,2450478,苏E|320584,吴江市,吴江,WuJiang,WJ,2450878, 苏E|320281,江阴市,江阴,JiangYin,JY,2460706,苏B|320282,宜兴市,宜兴,YiXing,YX,2468804, 苏B|321300,宿迁市,宿迁,SuQian,SQ,2102178,苏N|320700,连云港市,连云港,LianYunGang,LYG,2101878,苏G|320322,沛　县,沛县,PeiXian,PX,2101402,苏C|320321, 丰　县,丰县,FengXian,FX,2101407,苏C|320382,邳州市,邳州,PiZhou,PZ,2101403,苏C|320482, 金坛市,金坛,JinTan,JT,2101207,苏D|320481,溧阳市,溧阳,LiYang,LY,210120202,苏D|321081, 仪征市,仪征,YiZheng,YZ,2101901,苏K|321088,江都市,江都,JiangDu,JD,2101902,苏K|321023, 宝应县,宝应县,BaoYingXian,BYX,2101907,苏K|321084,高邮市,高邮,GaoYou,GY,2101906,苏 K|321181,丹阳市,丹阳,DanYang,DY,2101305,苏L|320826,涟水县,涟水县,LianShuiXian,LSX,2101607,苏H|320830,盱眙县,盱眙县,XuYiXian,XYX,2101605,苏H|320831,金湖县,金湖县,JinHuXian,JHX,2101608,苏 H|320829,洪泽县,洪泽县,HongZeXian,HZX,2101606,苏H|320982,大丰市,大丰,DaFeng,DF,2101701,苏J|320981,东台市,东台,DongTai,DT,2101710,苏J|320924,射阳县,射阳县,SheYangXian,SYX,2101705,苏J|320925,建湖县,建湖县,JianHuXian,JHX,2101708,苏 J|320923,阜宁县,阜宁县,FuNingXian,FNX,2101706,苏J|320922,滨海县,滨海县,BinHaiXian,BHX,2101709,苏J|320124, 溧水县,溧水县,LiShuiXian,LSX,2107005,苏A|320125,高淳县,高淳县,GaoChunXian,GCX,2107004,苏A|320323,铜山县,铜山县,TongShanXian,TSX,2101401,苏C|320324,睢宁县,睢宁县,SuiNingXian,SNX,2101409,苏C|320381,新沂市,新沂,XinYi,XY,2101488,苏C|320623,如东县,如东县,RuDongXian,RDX,2101508,苏F|320681,启东市,启东,QiDong,QD,2101509,苏F|320682,如皋市,如皋,RuGao,RG,2101505,苏F|320683,通州市,通州,TongZhou,TZ,2101506,苏F|320684,海门市,海门,HaiMen,HM,2101501,苏F|320721,赣榆县,赣榆县,GanYuXian,GYX,2101805,苏G|320722,东海县,东海县,DongHaiXian,DHX,2101804,苏 G|320723,灌云县,灌云县,GuanYunXian,GYX,2101807,苏G|320724,灌南县,灌南县,GuanNanXian,GNX,2101806,苏G|321182,扬中市,扬中,YangZhong,YZ,2101306,苏L|321183,句容市,句容,JuRong,JR,2101307, 苏L|321281,兴化市,兴化,XingHua,XH,2102005,苏M|321282,靖江市,靖江,JingJiang,JJ,2102002,苏M|321283,泰兴市,泰兴,TaiXing,TX,2102003,苏M|321284,姜堰市,姜堰,JiangYan,JY,2102004,苏M|321322,沭阳县,沭阳县,ShuYangXian,SYX,2102101,苏 N|321323,泗阳县,泗阳县,SiYangXian,SYX,2102188,苏N|321324,泗洪县,泗洪县,SiHongXian,SHX,2102199,苏N||330000,浙江省,330200,宁波市,宁波,NingBo,NB,2291399, 浙B,32|330206,宁波北仑区,宁波北仑,NingBoBeiLun,NBBL,2290199,浙B|330206,北仑区,北仑,BeiLun,BL,2290199,浙B|330211,宁波镇海区,宁波镇海,NingBoZhenHai,NBZH,2290899,浙B|330211,镇海区,镇海,ZhenHai,ZH,2290899,浙B|330212,宁波鄞州区,宁波鄞州,NingBoYinZhou,NBYZ,22903,浙B|330212,鄞州区,鄞州,YinZhou,YZ,22903,浙B|330700,金华市,金华,JinHua,JH,2121256,浙G|330283,宁波奉化市,宁波奉化,NingBoFengHua,NBFH,2290799,浙B|330283,奉化市,奉化,FengHua,FH,2290799,浙 B|330281,宁波余姚市,宁波余姚,NingBoYuYao,NBYY,2290599,浙B|330281,余姚市,余姚,YuYao,YY,2290599,浙B|330282,宁波慈溪市,宁波慈溪,NingBoCiXi,NBCX,2290499,浙B|330282,慈溪市,慈溪,CiXi,CX,2290499,浙 B|330600,绍兴市,绍兴,ShaoXing,SX,24756,浙D|330226,宁波宁海县,宁波宁海,NingBoNingHai,NBNH,2290699,浙B|330226,宁海县,宁海,NingHai,NH,2290699,浙 B|330225,宁波象山县,宁波象山,NingBoXiangShan,NBXS,2291499,浙B|330225,象山县,象山,XiangShan,XS,2291499,浙B|330400,嘉兴市,嘉兴,JiaXing,JX,2121656,浙F|331000,台州市,台州,TaiZhou,TZ,2121478,浙J|331100,丽水市,丽水,LiShui,LS,2121556,浙K|330800,衢州市,衢州,QuZhou,QZ,2122356,浙H|330900,舟山市,舟山,ZhouShan,ZS,2122456,浙L|330500,湖州市,湖州,HuZhou,HZ,2121156,浙E|330109,萧山区,萧山,XiaoShan,XS,2121906,浙A|330183, 富阳市,富阳,FuYang,FY,2120943,浙A|330185,临安市,临安,LinAn,LA,2120942,浙A|330110,余杭区,余杭,YuHang,YH,2120941,浙A|330182,建德市,建德,JianDe,JD,2120945,浙A|330122,桐庐县,桐庐县,TongLuXian,TLX,2120944,浙 A|330127,淳安县,淳安县,ChunAnXian,CAX,2120947,浙A|330100,杭州市,杭州,HangZhou,HZ,2120956,浙A,4|330324, 永嘉县,永嘉县,YongJiaXian,YJX,24809,浙C|330326,平阳县,平阳县,PingYangXian,PYX,24802,浙 C|330327,苍南县,苍南县,CangNanXian,CNX,24803,浙C|330381,瑞安市,瑞安,RuiAn,RA,24801,浙 C|330382,乐清市,乐清,LeQing,LQ,24808,浙C|330421,嘉善县,嘉善县,JiaShanXian,JSX,2121605,浙F|330424,海盐县,海盐县,HaiYanXian,HYX,2121604,浙 F|330481,海宁市,海宁,HaiNing,HN,2121603,浙F|330482,平湖市,平湖,PingHu,PH,2121601,浙 F|330483,桐乡市,桐乡,TongXiang,TX,2121602,浙F|330521, 德清县,德清县,DeQingXian,DQX,2121101,浙E|330522,长兴县,长兴县,ChangXingXian,CXX,2121103,浙E|330523,安吉县,安吉县,AnJiXian,AJX,2121104,浙 E|330621,绍兴县,绍兴县,ShaoXingXian,SXX,24756,浙D|330624,新昌县,新昌县,XinChangXian,XCX,24703,浙 D|330681,诸暨市,诸暨,ZhuJi,ZJ,24701,浙D|330682,上虞市,上虞,ShangYu,SY,24702,浙 D|330683,嵊州市,嵊州,ShengZhou,SZ,24704,浙D|330723,武义县,武义县,WuYiXian,WYX,2121207,浙G|330726,浦江县,浦江县,PuJiangXian,PJX,2121205,浙 G|330781,兰溪市,兰溪,LanXi,LX,2121204,浙G|330782,义乌市,义乌,YiWu,YW,2121202,浙 G|330783,东阳市,东阳,DongYang,DY,2121201,浙G|330784,永康市,永康,YongKang,YK,2121203,浙G|330822,常山县,常山县,ChangShanXian,CSX,2122356,浙 H|330824,开化县,开化县,KaiHuaXian,KHX,2122302,浙H|330825,龙游县,龙游县,LongYouXian,LYX,2122303,浙H|330881,江山市,江山,JiangShan,JS,2122301,浙 H|330921,岱山县,岱山县,DaiShanXian,DSX,2122402,浙 L|331021, 玉环县,玉环县,YuHuanXian,YHX,2121406,浙J|331022,三门县,三门县,SanMenXian,SMX,2121410, 浙J|331023,天台县,天台县,TianTaiXian,TTX,2121411,浙J|331024,仙居县,仙居县,XianJuXian,XJX,2121407,浙J|331081,温岭市,温岭,WenLing,WL,2121405,浙J|331082,临海市,临海,LinHai,LH,2121404,浙J|331121,青田县,青田县,QingTianXian,QTX,2121502,浙K|331122,缙云县,缙云县,JinYunXian,JYX,2121501,浙K|331123,遂昌县,遂昌县,SuiChangXian,SCX,2121503,浙 K|331124,松阳县,松阳县,SongYangXian,SYX,2121505,浙K|331125,云和县,云和县,YunHeXian,YHX,2121506,浙K|331126,庆元县,庆元县,QingYuanXian,QYX,2121508,浙 K|331127,景宁畲族自治县,景宁县,JingNingXian,JNX,2121507,浙K|331181,龙泉市,龙泉,LongQuan,LQ,2121504,浙K|330300,温州市,温州,WenZhou,WZ,24856,浙C,31||370000,山东省,370100,济南市,济南,JiNan,JN,2365701,鲁A,13|370200,青岛市,青岛,QingDao,QD,2113678,鲁B,10|370600,烟台市,烟台,YanTai,YT,2113178,鲁Y,48|371000,威海市,威海,WeiHai,WH,2112879,鲁K|370700,潍坊市,潍坊,WeiFang,WF,2112578,鲁 G|370300,淄博市,淄博,ZiBo,ZB,2112678,鲁C,49|371100,日照市,日照,RiZhao,RZ,2111478,鲁 L|370500,东营市,东营,DongYing,DY,2361312,鲁E|370900,泰安市,泰安,TaiAn,TA,2361208,鲁 J|371200,莱芜市,莱芜,LaiWu,LW,2361504,鲁S|371700,菏泽市,菏泽,HeZe,HZ,2361606,鲁 R|370400,枣庄市,枣庄,ZaoZhuang,ZZ,2361905,鲁D|371600,滨州市,滨州,BinZhou,BZ,2362911,鲁M,7|371400,德州市,德州,DeZhou,DZ,2361708,鲁N|370800,济宁市,济宁,JiNing,JN,2363015,鲁H|370181,章丘市,章丘,ZhangQiu,ZQ,2365608,鲁A|371500,聊城市,聊城,LiaoCheng,LC,2361808,鲁P|371300,临沂市,临沂,LinYi,LY,2113278,鲁Q|370124,平阴县,平阴县,PingYinXian,PYX,2365603,鲁 A|370125,济阳县,济阳县,JiYangXian,JYX,2365605,鲁A|370126,商河县,商河县,ShangHeXian,SHX,2365606,鲁A|370281,胶州市,胶州,JiaoZhou,JZ,2113417,鲁B|370282,即墨市,即墨,JiMo,JM,2113416,鲁B|370283,平度市,平度,PingDu,PD,2113415,鲁B|370284,胶南市,胶南,JiaoNan,JN,2113406,鲁B|370285,莱西市,莱西,LaiXi,LX,2113405,鲁B|370321,桓台县,桓台县,HuanTaiXian,HTX,2112606,鲁C|370322,高青县,高青县,GaoQingXian,GQX,2112612,鲁C|370323,沂源县,沂源县,YiYuanXian,YYX,2112602,鲁 C|370521,垦利县,垦利县,KenLiXian,KLX,2361309,鲁 E|370522,利津县,利津县,LiJinXian,LJX,2361310,鲁E|370523,广饶县,广饶县,GuangRaoXian,GRX,2361301,鲁E|370634,长岛县,长岛县,ChangDaoXian,CDX,2113178,鲁 Y|370681,龙口市,龙口,LongKou,LK,2113101,鲁Y|370682,莱阳市,莱阳,LaiYang,LY,2113108,鲁 Y|370683,莱州市,莱州,LaiZhou,LZ,2113106,鲁Y|370684,蓬莱市,蓬莱,PengLai,PL,2113107,鲁 Y|370685,招远市,招远,ZhaoYuan,ZY,2113103,鲁Y|370686,栖霞市,栖霞,QiXia,QX,2113102,鲁 Y|370687,海阳市,海阳,HaiYang,HY,2113104,鲁Y|370724, 临朐县,临朐县,LinQuXian,LQX,2112508,鲁G|370725,昌乐县,昌乐县,ChangLeXian,CLX,2112510, 鲁G|370781,青州市,青州,QingZhou,QZ,2112501,鲁G|370782,诸城市,诸城,ZhuCheng,ZC,2112504,鲁G|370783,寿光市,寿光,ShouGuang,SG,2112505,鲁G|370784,安丘市,安丘,AnQiu,AQ,2112502,鲁G|370785,高密市,高密,GaoMi,GM,2112503,鲁G|370786,昌邑市,昌邑,ChangYi,CY,2112509,鲁G|371081,文登市,文登,WenDeng,WD,2112801,鲁K|371082,荣成市,荣成,RongCheng,RC,2112804,鲁K|371083,乳山市,乳山,RuShan,RS,2112803,鲁K|371121, 五莲县,五莲县,WuLianXian,WLX,2111401,鲁L|371122,莒　县,莒县,JuXian,JX,2111402,鲁 L|371321,沂南县,沂南县,YiNanXian,YNX,2113205,鲁 Q|371322,郯城县,郯城县,TanChengXian,TCX,2113209,鲁Q|371323,沂水县,沂水县,YiShuiXian,YSX,2113202,鲁Q|371324,苍山县,苍山县,CangShanXian,CSX,2113207,鲁 Q|371325,费　县,费县,FeiXian,FX,2113204,鲁Q|371326,平邑县,平邑县,PingYiXian,PYX,2113201,鲁Q|371327,莒南县,莒南县,JuNanXian,JNX,2113203,鲁 Q|371328,蒙阴县,蒙阴县,MengYinXian,MYX,2113206,鲁Q|371329,临沭县,临沭县,LinShuXian,LSX,2113208,鲁Q||420000,湖北省,420100,武汉市,武汉,WuHan,WH,2091301,鄂A,11|420300,十堰市,十堰,ShiYan,SY,20921, 鄂C|420200,黄石市,黄石,HuangShi,HS,20919,鄂B|420500,宜昌市,宜昌,YiChang,YC,20917,鄂 E|421100,黄冈市,黄冈,HuangGang,HG,20904,鄂J|420600,襄樊市,襄樊,XiangFan,XF,20916,鄂 F|421000,荆州市,荆州,JingZhou,JZ,20918,鄂D|420900,孝感市,孝感,XiaoGan,XG,20906,鄂 K|421300,随州市,随州,SuiZhou,SZ,20907,鄂S|420800,荆门市,荆门,JingMen,JM,20922,鄂 H|429006,天门市,天门,TianMen,TM,2092204,鄂 R|421200,咸宁市,咸宁,XianNing,XN,20953,鄂L|429004,仙桃市,仙桃,XianTao,XT,20924,鄂 M|420700,鄂州市,鄂州,EZhou,EZ,20901,鄂G|429005,潜江市,潜江,QianJiang,QJ,20923,鄂 N|422801,恩施市,恩施,EnShi,ES,20908,鄂Q|420683,枣阳市,枣阳,ZaoYang,ZY,2095102,鄂 F|420821,京山县,京山县,JingShanXian,JSX,2092201,鄂H|420822,沙洋县,沙洋县,ShaYangXian,SYX,2092203,鄂H|420881,钟祥市,钟祥,ZhongXiang,ZX,2092202,鄂 H|420923,云梦县,云梦县,YunMengXian,YMX,2090603,鄂K|420981,应城市,应城,YingCheng,YC,2090604,鄂K|420982,安陆市,安陆,AnLu,AL,2090602,鄂K|420984,汉川市,汉川,HanChuan,HC,2090601,鄂K|422802,利川市,利川,LiChuan,LC,2090803,鄂Q|422822,建始县, 建始县,JianShiXian,JSX,2090801,鄂Q|422823,巴东县,巴东县,BaDongXian,BDX,2090802,鄂 Q|422826,咸丰县,咸丰县,XianFengXian,XFX,2090805,鄂Q|422827,来凤县,来凤县,LaiFengXian,LFX,2090804,鄂Q|420581, 宜都市,宜都,YiDu,YD,2091703,鄂E|420582,当阳市,当阳,DangYang,DY,2091702,鄂E|420583,枝江市,枝江,ZhiJiang,ZJ,2091701,鄂E|420624, 南漳县,南漳县,NanZhangXian,NZX,2091605,鄂F|420625,谷城县,谷城县,GuChengXian,GCX,2091604,鄂F|420684,宜城市,宜城,YiCheng,YC,2091603,鄂F|421022,公安县,公安县,GongAnXian,GAX,2091802,鄂D|421023,监利县,监利县,JianLiXian,JLX,2091801,鄂D|421081,石首市,石首,ShiShou,SS,2091805,鄂D|421087,松滋市,松滋,SongZi,SZ,2091804,鄂D|421121,团风县,团风县,TuanFengXian,TFX,2090408,鄂J|421123,罗田县,罗田县,LuoTianXian,LTX,2090403,鄂J|421125,浠水县,浠水县,XiShuiXian,XSX,2090406,鄂 J|421126,蕲春县,蕲春县,QiChunXian,QCX,2090404,鄂J|421127,黄梅县,黄梅县,HuangMeiXian,HMX,2090405,鄂J|421181,麻城市,麻城,MaCheng,MC,2090402,鄂 J|421182,武穴市,武穴,WuXue,WX,2090401,鄂J|421223,崇阳县,崇阳县,ChongYangXian,CYX,2095303,鄂L|421281,赤壁市,赤壁,ChiBi,CB,2095301,鄂L||210000,辽宁省,210100,沈阳市,沈阳,ShenYang,SY,20606,辽A,12|210200,大连市,大连,DaLian,DL,20712,辽B,23|210300,鞍山市,鞍山,AnShan,AS,20619,辽C,53|210800,营口市,营口,YingKou,YK,20617,辽H|211100,盘锦市,盘锦,PanJin,PJ,20621,辽L|210700,锦州市,锦州,JinZhou,JZ,20614,辽G|211200,铁岭市,铁岭,TieLing,TL,20624,辽M|210600,丹东市,丹东,DanDong,DD,20618,辽F|211000,辽阳市,辽阳,LiaoYang,LY,20615,辽K|211400,葫芦岛市,葫芦岛,HuLuDao,HLD,20620,辽P|210400,抚顺市,抚顺,FuShun,FS,20622,辽D,52|210500,本溪市,本溪,BenXi,BX,20623,辽E|211300,朝阳市,朝阳,ChaoYang,CY,20626,辽N|210900,阜新市,阜新,FuXin,FX,20616,辽J|210281,瓦房店市,瓦房店,WaFangDian,WFD,20708,辽B|210282,普兰店市,普兰店,PuLanDian,PLD,20710,辽 B|210283,庄河市,庄河,ZhuangHe,ZH,20709,辽B|210381,海城市,海城,HaiCheng,HC,2061901,辽 C||510000,四川省,510100,成都市,成都,ChengDu,CD,2269302,川A,9|510400,攀枝花市,攀枝花,PanZhiHua,PZH,2263533,川D|510700,绵阳市,绵阳,MianYang,MY,2263135,川B|510500,泸州市,泸州,LuZhou,LZ,2269006,川E|511900,巴中市,巴中,BaZhong,BZ,22647,川Y|511100,乐山市,乐山,LeShan,LS,2265035,川L|513200,阿坝藏族羌族自治州,阿坝州,ABa,AB,22644,川U|511500,宜宾市,宜宾,YiBin,YB,2263231,川Q|510600,德阳市, 德阳,DeYang,DY,2263037,川F|511600,广安市,广安,GuangAn,GA,2264230,川X|510300,自贡市,自贡,ZiGong,ZG,2263332,川C|511800,雅安市,雅安,YaAn,YA,2264330,川T|511700,达州市,达州,DaZhou,DZ,2263804,川S|510900,遂宁市,遂宁,SuiNing,SN,2263704,川J|513400,凉山彝族自治州,凉山,LiangShan,LS,2263903,川W|513401,西昌市,西昌,XiChang,XC,2263903,川W|511400,眉山市,眉山,MeiShan,MS,2264002,川Z|511300,南充市,南充,NanChong,NC,2263603,川R|512000,资阳市,资阳,ZiYang,ZY,2264102,川M|511000,内江市,内江,NeiJiang,NJ,2263433,川K|510722,三台县,三台县,SanTaiXian,STX,2263130,川 B|510723,盐亭县,盐亭县,YanTingXian,YTX,2263135,川B|510724,安　县,安县,AnXian,AX,2263132, 川B|510725,梓潼县,梓潼县,ZiTongXian,ZTX,2263135,川B|510726,北川羌族自治县,北川县,BeiChuanXian,BCX,2263135,川B|510727,平武县,平武县,PingWuXian,PWX,2263135,川 B|510121,金堂县,金堂县,JinTangXian,JTX,2269302,川 A|510122,双流县,双流县,ShuangLiuXian,SLX,2269302,川A|510124,郫　县,郫县,PiXian,PX,2269302,川A|510129,大邑县,大邑县,DaYiXian,DYX,2269302,川A|510131,蒲江县,蒲江县,PuJiangXian,PJX,2269302,川A|510132,新津县,新津县,XinJinXian,XJX,2269302,川 A|510181,都江堰市,都江堰,DuJiangYan,DJY,2269302,川A|510182,彭州市,彭州,PengZhou,PZ,2269302,川A|510183,邛崃市,邛崃,QiongLai,QL,2269302,川A|510184,崇州市,崇州,ChongZhou,CZ,2269302,川A|510781, 江油市,江油,JiangYou,JY,2263133,川B|510800,广元市,广元,GuangYuan,GY,2264631,川H|511024,威远县,威远县,WeiYuanXian,WYX,2263431,川 K|511025,资中县,资中县,ZiZhongXian,ZZX,2263432,川K|511028,隆昌县,隆昌县,LongChangXian,LCX,2263433,川K|511321,南部县,南部县,NanBuXian,NBX,2263603,川R|511421,仁寿县,仁寿县,RenShouXian,RSX,2264002,川 Z|513300,甘孜藏族自治州,甘孜州,GanZiZhou,GZZ,2264502,川v|511526,珙　县,珙县,GongXian,GX,2263231,川Q||120000,天津市,120100,天津市,天津,TianJin,TJ,20321,津A,7||500000,重庆市,500100,重庆市,重庆,ChongQing,CQ,21821,渝A,14||610000,陕西省,610100,西安市,西安,XiAn,XA,21700,陕A,16|610400,咸阳市,咸阳,XianYang,XY,2173006,陕D|610300,宝鸡市,宝鸡,BaoJi,BJ,2173209,陕C|610500,渭南市,渭南,WeiNan,WN,2173409,陕E|610700,汉中市,汉中,HanZhong,HZ,2173309,陕F|610800,榆林市,榆林,YuLin,YL,2173609,陕K|610600,延安市,延安,YanAn,YA,2173709,陕J|610900,安康市,安康,AnKang,AK,2173809,陕G|610200,铜川市,铜川,TongChuan,TC,2173909,陕B|611000,商洛市,商洛,ShangLuo,SL,2174009,陕H|610122,蓝田县,蓝田县,LanTianXian,LTX,2172205,陕 A|610126,高陵县,高陵县,GaoLingXian,GLX,2172204,陕A|610323,岐山县,岐山县,QiShanXian,QSX,2173201,陕 C|610324,扶风县,扶风县,FuFengXian,FFX,2173202,陕C|610422,三原县,三原县,SanYuanXian,SYX,2173007,陕 D|610423,泾阳县,泾阳县,JingYangXian,JYX,2173012,陕D|610427,彬　县,彬县,BinXian,BX,2173011,陕D|610481,兴平市,兴平,XingPing,XP,2173005,陕D|610521,华　县,华县,HuaXian,HX,2173405,陕E|610525,澄城县,澄城县,ChengChengXian,CCX,2173403,陕E|610526,蒲城县,蒲城县,PuChengXian,PCX,2173404,陕E|610528,富平县,富平县,FuPingXian,FPX,2173406,陕 E|610581,韩城市,韩城,HanCheng,HC,2173410,陕E|610623,子长县,子长县,ZiChangXian,ZCX,2173702,陕 J|610625,志丹县,志丹县,ZhiDanXian,ZDX,2173701,陕J|610626,吴旗县,吴旗县,WuQiXian,WQX,2173704,陕J|610722,城固县,城固县,ChengGuXian,CGX,2173307,陕F|610723,洋　县,洋县,YangXian,YX,2173308,陕 F|610724,西乡县,西乡县,XiXiangXian,XXX,2173311,陕F|610725,勉　县,勉县,MianXian,MX,2173309,陕F|610727,略阳县,略阳县,LueYangXian,LYX,2173312,陕 F|610821,神木县,神木县,ShenMuXian,SMX,2173606,陕K|610822,府谷县,府谷县,FuGuXian,FGX,2173604,陕 K|610823,横山县,横山县,HengShanXian,HSX,2173603,陕K|610824,靖边县,靖边县,JingBianXian,JBX,2173605,陕K|610825,定边县,定边县,DingBianXian,DBX,2173602,陕 K|610826,绥德县,绥德县,SuiDeXian,SDX,2173601,陕K|610827,米脂县,米脂县,MiZhiXian,MZX,2173607,陕K|610928,旬阳县,旬阳县,XunYangXian,XYX,2173801,陕G|611026,柞水县,柞水县,ZuoShuiXian,ZSX,2174001,陕H||410000,河南省,410100,郑州市,郑州,ZhengZhou,ZZ,23224,豫A,21|410300,洛阳市,洛阳,LuoYang,LY,23203,豫C,41|410700,新乡市,新乡,XinXiang,XX,23204,豫G|411400,商丘市,商丘,ShangQiu,SQ,23218,豫N|410200,开封市,开封,KaiFeng,KF,23215,豫B|410500,安阳市,安阳,AnYang,AY,23206,豫E|411000,许昌市,许昌,XuChang,XC,23214,豫K|410800,焦作市,焦作,JiaoZuo,JZ,23207,豫H|411300,南阳市,南阳,NanYang,NY,23211,豫R|410400,平顶山市,平顶山,PingDingShan,PDS,23208,豫D|410900,濮阳市,濮阳,PuYang,PY,23212,豫J|411600,周口市,周口,ZhouKou,ZK,23222,豫P|411500,信阳市,信阳,XinYang,XY,23223,豫S|411100,漯河市,漯河,LuoHe,LH,23216,豫L|411200,三门峡市,三门峡,SanMenXia,SMX,23219,豫M|411700,驻马店市,驻马店,ZhuMaDian,ZMD,23217,豫Q|410881,济源市,济源,JiYuan,JY,23213,豫H|410600,鹤壁市,鹤壁,HeBi,HB,23220,豫F|410122,中牟县, 中牟县,ZhongMouXian,ZMX,2320217,豫A|410181,巩义市,巩义,GongYi,GY,2320213,豫 A|410182,荥阳市,荥阳,XingYang,XY,2320216,豫A|410183,新密市,新密,XinMi,XM,2320214,豫 A|410184,新郑市,新郑,XinZheng,XZ,2320215,豫A|410185,登封市,登封,DengFeng,DF,2320212,豫A|410522,安阳县, 安阳县,AnYangXian,AYX,23206,豫E|410523,汤阴县,汤阴县,TangYinXian,TYX,23206,豫 E|410526,滑　县,滑县,HuaXian,HX,23206,豫E|410527,内黄县,内黄县,NeiHuangXian,NHX,23206,豫E|410581,林州市,林州,LinZhou,LZ,23206,豫E||130000,河北省,130100,石家庄市,石家庄,ShiJiaZhuang,SJZ,2242635,冀A,19|130200,唐山市,唐山,TangShan,TS,22412,冀B,42|130600, 保定市,保定,BaoDing,BD,22415,冀F,12|130300,秦皇岛市,秦皇岛,QinHuangDao,QHD,22411,冀 C|131000,廊坊市,廊坊,LangFang,LF,22414,冀R|130400,邯郸市,邯郸,HanDan,HD,22417,冀D,54|130900,沧州市,沧州,CangZhou,CZ,22416,冀J|130500,邢台市,邢台,XingTai,XT,22418,冀 E|131100,衡水市,衡水,HengShui,HS,22419,冀T|130700,张家口市,张家口,ZhangJiaKou,ZJK,22413,冀G|130800,承德市,承德,ChengDe,CD,22420,冀H||430000,湖南省,430100,长沙市,长沙,ChangSha,CS,22019,湘A,17|430300,湘潭市,湘潭,XiangTan,XT,220030104,湘C|430600,岳阳市,岳阳,YueYang,YY,22004,湘F|430200,株洲市,株洲,ZhuZhou,ZZ,220020104,湘B|431000,郴州市,郴州,ChenZhou,CZ,220110104,湘L|430400,衡阳市,衡阳,HengYang,HY,22008,湘D|430500, 邵阳市,邵阳,ShaoYang,SY,22009,湘E|430700,常德市,常德,ChangDe,CD,22005,湘J|431300,娄底市,娄底,LouDi,LD,220060104,湘K|430900,益阳市,益阳,YiYang,YY,220150104,湘H|431200,怀化市,怀化,HuaiHua,HH,220070104,湘N|431100,永州市,永州,YongZhou,YZ,220100104,湘 M|433101,吉首市,吉首,JiShou,JS,220140104,湘U|430800,张家界市,张家界,ZhangJiaJie,ZJJ,220130104,湘G|430121,长沙县,长沙县,ChangShaXian,CSX,2201213,湘A|430122,望城县,望城县,WangChengXian,WCX,2201214,湘A|430124,宁乡县,宁乡县,NingXiangXian,NXX,2201203, 湘A|430181,浏阳市,浏阳,LiuYang,LY,2201202,湘A|430421,衡阳县,衡阳县,HengYangXian,HYX,2200802,湘D|430481,耒阳市,耒阳,LeiYang,LY,2200805,湘 D|430922,桃江县,桃江县,TaoJiangXian,TJX,2201504,湘H|430923,安化县,安化县,AnHuaXian,AHX,2201505,湘H|430981,沅江市,沅江,YuanJiang,YJ,2201503,湘H|431081, 资兴市,资兴,ZiXing,ZX,2201106,湘L||530000,云南省,530100,昆明市,昆明,KunMing,KM,21638,云A,24|532901,大理市,大理市,DaLiShi,DLS,21625,云L|532529,红河县,红河县,HongHeXian,HHX,21621,云G|530400,玉溪市,玉溪,YuXi,YX,21606,云F|530300,曲靖市,曲靖,QuJing,QJ,21604,云D|530800,普洱市,普洱,PuEr,PE,21627,云J|533100,德宏傣族景颇族自治州,德宏州,DeHongZhou,DHZ,21632,云N|530500, 保山市,保山,BaoShan,BS,21633,云M|530900,临沧市,临沧,LinCang,LC,21626,云S|530700,丽江市, 丽江,LiJiang,LJ,21629,云P|532301,楚雄市,楚雄,ChuXiong,CX,21605,云E|532600,文山壮族苗族自治州,文山州,WenShanZhou,WSZ,21615,云H|530600,昭通市,昭通,ZhaoTong,ZT,21628,云 C|532800,西双版纳傣族自治州,西双版纳,XiShuangBanNa,XSBN,21630,云K|533300,怒江傈僳族自治州,怒江州,NuJiangZhou,NJZ,21634,云Q|533400,迪庆藏族自治州,迪庆州,DiQingZhou,DQZ,21635,云 R|530128,禄劝彝族苗族自治县,禄劝县,LuQuanXian,LQX,2161716,云A|530522,腾冲县,腾冲县,TengChongXian,TCX,2163301,云M|530623,盐津县,盐津县,YanJinXian,YJX,2162803,云 C|530627,镇雄县,镇雄县,ZhenXiongXian,ZXX,2162801,云C|530630,水富县,水富县,ShuiFuXian,SFX,2162802,云C|530723,华坪县,华坪县,HuaPingXian,HPX,2162901,云 P|530824,景谷傣族彝族自治县,景谷县,JingGuXian,JGX,2162701,云J|530921,凤庆县,凤庆县,FengQingXian,FQX,2162601,云S|530922,云　县,云县,YunXian,YX,2162602,云 S|530926,耿马傣族佤族自治县,耿马县,GengMaXian,GMX,2162603,云S|532324,南华县,南华县,NanHuaXian,NHX,2160503,云E|532327,永仁县,永仁县,YongRenXian,YRX,2160505,云 E|532328,元谋县,元谋县,YuanMouXian,YMX,2160501,云E|532329,武定县,武定县,WuDingXian,WDX,2160504,云E|532331,禄丰县,禄丰县,LuFengXian,LFX,2160502,云 E|532501,个旧市,个旧,GeJiu,GJ,2162101,云G|532502,开远市,开远,KaiYuan,KY,2162102,云 G|532522,蒙自县,蒙自县,MengZiXian,MZX,2162103,云G|532524,建水县,建水县,JianShuiXian,JSX,2162107,云G|532525,石屏县,石屏县,ShiPingXian,SPX,2162106,云 G|532526,弥勒县,弥勒县,MiLeXian,MLX,2162105,云G|532527,泸西县,泸西县,LuXiXian,LXX,2162104,云G|532532,河口瑶族自治县,河口县,HeKouXian,HKX,2162108,云 G|532622,砚山县,砚山县,YanShanXian,YSX,2161501,云H|532923,祥云县,祥云县,XiangYunXian,XYX,2162501,云L|532924,宾川县,宾川县,BinChuanXian,BCX,2162502,云 L|532925,弥渡县,弥渡县,MiDuXian,MDX,2162505,云L|532930,洱源县,洱源县,ErYuanXian,EYX,2162504,云L|532932,鹤庆县,鹤庆县,HeQingXian,HQX,2162503,云 L|533102,瑞丽市,瑞丽,RuiLi,RL,2163201,云N|532300,楚雄彝族自治州,楚雄州,ChuXiongZhou,CXZ,21605,云E|532500,红河哈尼族彝族自治州,红河州,HongHeZhou,HHZ,21621,云 G|532900,大理白族自治州,大理州,DaLiZhou,DLZ,21625,云L||220000,吉林省,220100,长春市,长春,ChangChun,CC,2082504,吉A,20|220500,通化市,通化,TongHua,TH,20815,吉E|220800,白城市,白城,BaiCheng,BC,20820,吉G|220600,白山市,白山,BaiShan,BS,20816,吉F|220200,吉林市,吉林,JiLin,JL,20811,吉B,45|220700,松原市,松原,SongYuan,SY,20814,吉J|220300,四平市,四平,SiPing,SP,20812,吉C|222401,延吉市,延吉,YanJi,YJ,20813,吉H|220282,桦甸市,桦甸,HuaDian,HD,20819,吉B|220400,辽源市,辽源,LiaoYuan,LY,20821,吉D|220122,农安县,农安县,NongAnXian,NAX,2082504,吉 A|220181,九台市,九台,JiuTai,JT,2082504,吉A|220182,榆树市,榆树,YuShu,YS,2080108,吉 A|220221,永吉县,永吉县,YongJiXian,YJX,20811,吉B|220281,蛟河市,蛟河,JiaoHe,JH,2081102,吉B|220283,舒兰市,舒兰,ShuLan,SL,2081103,吉B|220284,磐石市,磐石,PanShi,PS,2081101,吉B|220322,梨树县,梨树县,LiShuXian,LSX,20812,吉C|220323,伊通满族自治县,伊通县,YiTongXian,YTX,20812,吉C|220381,公主岭市,公主岭,GongZhuLing,GZL,20812,吉C|220382,双辽市,双辽,ShuangLiao,SL,20812,吉C|220421,东丰县,东丰县,DongFengXian,DFX,20821,吉D|220422,东辽县,东辽县,DongLiaoXian,DLX,20821,吉 D|220521,通化县,通化县,TongHuaXian,THX,20815,吉E|220524,柳河县,柳河县,LiuHeXian,LHX,20815,吉E|220581,梅河口市,梅河口,MeiHeKou,MHK,20815,吉E|220582,集安市,集安,JiAn,JA,20815,吉E|220621,抚松县,抚松县,FuSongXian,FSX,2081602,吉 F|220721,前郭尔罗斯蒙古族自治县,前郭尔罗县,QianGuoErLuoXian,QGELX,20814,吉J|220722,长岭县,长岭县,ChangLingXian,CLX,20814,吉J|220723,乾安县,乾安县,QianAnXian,QAX,2081404,吉 J|220724,扶余县,扶余县,FuYuXian,FYX,2081401,吉J|222404,珲春市,珲春,HuiChun,HC,2081303,吉H|222400,延边朝鲜族自治州,延边,YanBian,YB,20813,吉H||140000,山西省,140100,太原市,太原,TaiYuan,TY,23372,晋A,29|140400,长治市,长治,ChangZhi,CZ,23304,晋 D|140200,大同市,大同,DaTong,DT,23302,晋B,55|140500,晋城市,晋城,JinCheng,JC,23307,晋 E|140700,晋中市,晋中,JinZhong,JZ,23303,晋K|141000,临汾市,临汾,LinFen,LF,23305,晋 L|140300,阳泉市,阳泉,YangQuan,YQ,23308,晋C|140600,朔州市,朔州,ShuoZhou,SZ,23311,晋 F|141100,吕梁市,吕梁,LuLiang,LL,23312,晋J|140800,运城市,运城,YunCheng,YC,23306,晋 M|140900,忻州市,忻州,XinZhou,XZ,23310,晋H|140121,清徐县,清徐县,QingXuXian,QXX,2330102,晋A|140122,阳曲县,阳曲县,YangQuXian,YQX,23372,晋 A|140123,娄烦县,娄烦县,LouFanXian,LFX,23372,晋A|140181,古交市,古交,GuJiao,GJ,2330101,晋A|140221,阳高县,阳高县,YangGaoXian,YGX,2330201,晋 B|140222,天镇县,天镇县,TianZhenXian,TZX,23302,晋B|140223,广灵县,广灵县,GuangLingXian,GLX,2330203,晋B|140224,灵丘县,灵丘县,LingQiuXian,LQX,2330203,晋 B|140225,浑源县,浑源县,HunYuanXian,HYX,23302,晋B|140226,左云县,左云县,ZuoYunXian,ZYX,2330202,晋B|140227,大同县,大同县,DaTongXian,DTX,2330201,晋 B|140321,平定县,平定县,PingDingXian,PDX,2330802,晋C|140322,盂　县,盂县,YuXian,YX,2330801,晋C|140421,长治县, 长治县,ChangZhiXian,CZX,2330403,晋D|140423,襄垣县,襄垣县,XiangYuanXian,XYX,2330401,晋D|140424,屯留县,屯留县,TunLiuXian,TLX,23304,晋 D|140425,平顺县,平顺县,PingShunXian,PSX,23304,晋D|140426,黎城县,黎城县,LiChengXian,LCX,2330404,晋D|140427,壶关县,壶关县,HuGuanXian,HGX,23304,晋 D|140428,长子县,长子县,ChangZiXian,CZX,23304,晋D|140429,武乡县,武乡县,WuXiangXian,WXX,23304,晋D|140430,沁　县,沁县,QinXian,QX,23304,晋D|140431,沁源县, 沁源县,QinYuanXian,QYX,23304,晋D|140481,潞城市,潞城,LuCheng,LC,2330402,晋D|140521,沁水县,沁水县,QinShuiXian,QSX,2330703,晋 E|140522,阳城县,阳城县,YangChengXian,YCX,2330701,晋E|140524,陵川县,陵川县,LingChuanXian,LCX,23307,晋E|140525,泽州县,泽州县,ZeZhouXian,ZZX,23307,晋 E|140581,高平市,高平,GaoPing,GP,2330702,晋E|140621,山阴县,山阴县,ShanYinXian,SYX,2331101,晋F|140622,应　县,应县,YingXian,YX,2331101,晋 F|140623,右玉县,右玉县,YouYuXian,YYX,23311,晋F|140624,怀仁县,怀仁县,HuaiRenXian,HRX,2331101,晋F|140722,左权县,左权县,ZuoQuanXian,ZQX,2330306,晋 K|140723,和顺县,和顺县,HeShunXian,HSX,2330306,晋K|140724,昔阳县,昔阳县,XiYangXian,XYX,23303,晋K|140725,寿阳县,寿阳县,ShouYangXian,SYX,2330307,晋 K|140726,太谷县,太谷县,TaiGuXian,TGX,2330305,晋K|140727,祁　县,祁县,QiXian,QX,2330304,晋K|140728,平遥县,平遥县,PingYaoXian,PYX,2330302,晋K|140729, 灵石县,灵石县,LingShiXian,LSX,2330303,晋K|140781,介休市,介休,JieXiu,JX,2330301,晋 K|140821,临猗县,临猗县,LinYiXian,LYX,2330606,晋M|140822,万荣县,万荣县,WanRongXian,WRX,23306,晋 M|140823,闻喜县,闻喜县,WenXiXian,WXX,2330601,晋M|140824,稷山县,稷山县,JiShanXian,JSX,23306, 晋M|140825,新绛县,新绛县,XinJiangXian,XJX,23306,晋M|140826,绛　县,绛县,JiangXian,JX,2330604,晋M|140827,垣曲县,垣曲县,YuanQuXian,YQX,2330605,晋 M|140828,夏　县,夏县,XiaXian,XX,23306,晋M|140829,平陆县,平陆县,PingLuXian,PLX,23306, 晋M|140830,芮城县,芮城县,RuiChengXian,RCX,23306,晋M|140881,永济市,永济,YongJi,YJ,2330603,晋M|140882,河津市,河津,HeJin,HJ,2330602,晋M|140921,定襄县,定襄县,DingXiangXian,DXX,23310,晋 H|140922,五台县,五台县,WuTaiXian,WTX,23310,晋H|140926,静乐县,静乐县,JingLeXian,JLX,23310,晋H|140928,五寨县,五寨县,WuZhaiXian,WZX,23310,晋H|141021,曲沃县,曲沃县,QuWoXian,QWX,2330506,晋 L|141022,翼城县,翼城县,YiChengXian,YCX,2330507,晋L|141023,襄汾县,襄汾县,XiangFenXian,XFX,2330504,晋L|141024,洪洞县,洪洞县,HongDongXian,HDX,2330502,晋 L|141025,古　县,古县,GuXian,GX,23305,晋L|141026,安泽县,安泽县,AnZeXian,AZX,23305,晋 L|141027,浮山县,浮山县,FuShanXian,FSX,23305,晋L|141028,吉　县,吉县,JiXian,JX,23305,晋 L|141029,乡宁县,乡宁县,XiangNingXian,XNX,2330505,晋L|141030,大宁县,大宁县,DaNingXian,DNX,23305,晋L|141031,隰　县,隰县,XiXian,XX,23305,晋L|141032,永和县,永和县,YongHeXian,YHX,23305,晋L|141033,蒲　县,蒲县,PuXian,PX,2330508,晋L|141034,汾西县, 汾西县,FenXiXian,FXX,23305,晋L|141081,侯马市,侯马,HouMa,HM,2330501,晋L|141082,霍州市, 霍州,HuoZhou,HZ,2330503,晋L|141121,文水县,文水县,WenShuiXian,WSX,2331204,晋J|141122,交城县,交城县,JiaoChengXian,JCX,2331204,晋 J|141123,兴　县,兴县,XingXian,XX,23312,晋J|141124,临　县,临县,LinXian,LX,2331203,晋 J|141125,柳林县,柳林县,LiuLinXian,LLX,2331203,晋J|141126,石楼县,石楼县,ShiLouXian,SLX,23312,晋J|141127,岚　县,岚县,LanXian,LX,23312,晋J|141128,方山县,方山县,FangShanXian,FSX,23312,晋J|141129,中阳县,中阳县,ZhongYangXian,ZYX,23312,晋 J|141130,交口县,交口县,JiaoKouXian,JKX,23312,晋J|141181,孝义市,孝义,XiaoYi,XY,2331201,晋J|141182,汾阳市,汾阳,FenYang,FY,2331202,晋J||340000,安徽省,340100,合肥市,合肥,HeFei,HF,22528,皖A,8|341600,亳州市,亳州,BoZhou,BZ,22517,皖 S|340200,芜湖市,芜湖,WuHu,WH,22502,皖B|341800,宣城市,宣城,XuanCheng,XC,22516,皖 P|340300,蚌埠市,蚌埠,BangBu,BB,22503,皖C|341300,宿州市,宿州,SuZhou,SZ,22511,皖 L|341400,巢湖市,巢湖,ChaoHu,CH,22514,皖Q|340500,马鞍山市,马鞍山,MaAnShan,MAS,22505,皖E|341200,阜阳市,阜阳,FuYang,FY,22510,皖K|341100,滁州市,滁州,ChuZhou,CZ,22512,皖M|341500,六安市,六安,LiuAn,LA,22513,皖 N|340600,淮北市,淮北,HuaiBei,HB,22506,皖F|341000,黄山市,黄山,HuangShan,HS,22509,皖 J|341700,池州市,池州,ChiZhou,CZ,22515,皖R|340400,淮南市,淮南,HuaiNan,HN,22504,皖D,46|340700,铜陵市,铜陵,TongLing,TL,22507,皖G|340121,长丰县,长丰县,ChangFengXian,CFX,2252603,皖A|340122,肥东县,肥东县,FeiDongXian,FDX,2252601,皖 A|340123,肥西县,肥西县,FeiXiXian,FXX,2252602,皖A|340221,芜湖县, 芜湖县,WuHuXian,WHX,2250201,皖B|340222,繁昌县,繁昌县,FanChangXian,FCX,2250203,皖 B|340223,南陵县,南陵县,NanLingXian,NLX,2250202,皖B|340321,怀远县, 怀远县,HuaiYuanXian,HYX,2250303,皖C|340322,五河县,五河县,WuHeXian,WHX,2250302,皖 C|340323,固镇县,固镇县,GuZhenXian,GZX,2250301,皖C|340421,凤台县,凤台县,FengTaiXian,FTX,2250401,皖 D|340521,当涂县,当涂县,DangTuXian,DTX,2250501,皖E|340621,濉溪县, 濉溪县,SuiXiXian,SXX,2250601,皖F|340721,铜陵县,铜陵县,TongLingXian,TLX,2250701,皖G|340800,安庆市,安庆,AnQing,AQ,22508,皖H|340822,怀宁县,怀宁县,HuaiNingXian,HNX,2250802,皖H|340823,枞阳县,枞阳县,ZongYangXian,ZYX,2250801,皖H|340824,潜山县,潜山县,QianShanXian,QSX,2250804,皖 H|340825,太湖县,太湖县,TaiHuXian,THX,2250807,皖H|340826,宿松县,宿松县,SuSongXian,SSX,2250805,皖H|340827,望江县,望江县,WangJiangXian,WJX,2250806,皖 H|340828,岳西县,岳西县,YueXiXian,YXX,2250808,皖H|340881,桐城市,桐城,TongCheng,TC,2250803,皖H|341021,歙　县, 歙县,SheXian,SX,2250902,皖J|341022,休宁县,休宁县,XiuNingXian,XNX,2250904,皖 J|341023,黟　县,黟县,YiXian,YX,22509,皖J|341024,祁门县,祁门县,QiMenXian,QMX,2250903, 皖J|341122,来安县,来安县,LaiAnXian,LAX,2251206,皖M|341124,全椒县,全椒县,QuanJiaoXian,QJX,2251203,皖M|341125,定远县,定远县,DingYuanXian,DYX,2251201,皖 M|341126,凤阳县,凤阳县,FengYangXian,FYX,2251202,皖M|341181,天长市,天长,TianChang,TC,2251204,皖M|341182,明光市,明光,MingGuang,MG,2251205,皖M|341221,临泉县,临泉县,LinQuanXian,LQX,2251007,皖 K|341222,太和县,太和县,TaiHeXian,THX,2251008,皖K|341225,阜南县,阜南县,FuNanXian,FNX,2251003,皖K|341226,颍上县,颍上县,YingShangXian,YSX,2251009,皖 K|341282,界首市,界首,JieShou,JS,2251004,皖K|341321,砀山县,砀山县,DangShanXian,DSX,2251104,皖L|341322,萧　县,萧县,XiaoXian,XX,2251101,皖L|341323,灵璧县,灵璧县,LingBiXian,LBX,2251102,皖 L|341324,泗　县,泗县,SiXian,SX,2251103,皖L|341421,庐江县,庐江县,LuJiangXian,LJX,2251404,皖Q|341422,无为县,无为县,WuWeiXian,WWX,2251402,皖Q|341423,含山县,含山县,HanShanXian,HSX,2251403,皖 Q|341424,和　县,和县,HeXian,HX,2251401,皖Q|341521,寿　县,寿县,ShouXian,SX,2251305,皖 N|341522,霍邱县,霍邱县,HuoQiuXian,HQX,2251303,皖N|341523,舒城县,舒城县,ShuChengXian,SCX,2251302,皖N|341524,金寨县,金寨县,JinZhaiXian,JZX,2251304,皖 N|341525,霍山县,霍山县,HuoShanXian,HSX,2251303,皖N|341621,涡阳县,涡阳县,WoYangXian,WYX,2251702,皖 S|341622,蒙城县,蒙城县,MengChengXian,MCX,2251703,皖S|341623,利辛县,利辛县,LiXinXian,LXX,2251701,皖S|341721,东至县,东至县,DongZhiXian,DZX,2251501,皖R|341722,石台县,石台县,ShiTaiXian,STX,2251502,皖 R|341723,青阳县,青阳县,QingYangXian,QYX,2251502,皖R|341821,郎溪县,郎溪县,LangXiXian,LXX,2251605,皖 P|341822,广德县,广德县,GuangDeXian,GDX,2251602,皖P|341823,泾　县,泾县,JingXian,JX,2251601,皖P|341824,绩溪县,绩溪县,JiXiXian,JXX,2251604,皖P|341825,旌德县,旌德县,JingDeXian,JDX,2251601,皖P|341881,宁国市,宁国,NingGuo,NG,2251603,皖 P||520000,贵州省,520100,贵阳市,贵阳,GuiYang,GY,22115,贵A,25|520400,安顺市,安顺,AnShun,AS,22110,贵G|520200,六盘水市,六盘水,LiuPanShui,LPS,22105,贵B|520300,遵义市, 遵义,ZunYi,ZY,22104,贵C|522401,毕节市,毕节,BiJie,BJ,22108,贵F|522701,都匀市,都匀,DuYun,DY,22109,贵J|522201,铜仁市,铜仁,TongRen,TR,2210799,贵D|522600,黔东南苗族侗族自治州,黔东南州,QianDongNanZhou,QDNZ,2211199,贵H|520121,开阳县,开阳县,KaiYangXian,KYX,22115,贵A|520122,息烽县,息烽县,XiFengXian,XFX,22115,贵 A|520123,修文县,修文县,XiuWenXian,XWX,22115,贵A|520181,清镇市,清镇,QingZhen,QZ,22115,贵A|520222,盘　县,盘县,PanXian,PX,2201501,贵B|520321,遵义县,遵义县,ZunYiXian,ZYX,2210402,贵C|520322,桐梓县,桐梓县,TongZiXian,TZX,2210403,贵 C|520323,绥阳县,绥阳县,SuiYangXian,SYX,2210404,贵C|520324,正安县,正安县,ZhengAnXian,ZAX,2210415,贵C|520325,道真仡佬族苗族自治县,道真仡县,DaoZhenGeXian,DZGX,2210405,贵C|520326,务川仡佬族苗族自治县,务川仡县,WuChuanGeXian,WCGX,2210406,贵C|520327,凤冈县,凤冈县,FengGangXian,FGX,2210414, 贵C|520328,湄潭县,湄潭县,MeiTanXian,MTX,2210407,贵C|520330,习水县,习水县,XiShuiXian,XSX,2210410,贵C|520381,赤水市,赤水,ChiShui,CS,2210408,贵C|520382,仁怀市,仁怀,RenHuai,RH,2210409,贵C|520421,平坝县,平坝县,PingBaXian,PBX,2211001,贵G|522223,玉屏侗族自治县,玉屏县,YuPingXian,YPX,2210705,贵D|522225,思南县,思南县,SiNanXian,SNX,2210701,贵 D|522301,兴义市,兴义,XingYi,XY,22112,贵E|522423,黔西县,黔西县,QianXiXian,QXX,2210802,贵F|522424,金沙县,金沙县,JinShaXian,JSX,2210801,贵 F|522425,织金县,织金县,ZhiJinXian,ZJX,2210803,贵F|522702,福泉市,福泉,FuQuan,FQ,2210903,贵J|522725,瓮安县,瓮安县,WengAnXian,WAX,2210902,贵J|522727,平塘县,平塘县,PingTangXian,PTX,2210906,贵J|522731,惠水县,惠水县,HuiShuiXian,HSX,2210901,贵J||360000,江西省,360100,南昌市,南昌,NanChang,NC,22211,赣A,26|361100,上饶市,上饶,ShangRao,SR,22203,赣E|360800,吉安市,吉安,JiAn,JA,22208,赣D|360700,赣州市,赣州,GanZhou,GZ,22206,赣B|360900,宜春市,宜春,YiChun,YC,22210,赣C|360400,九江市,九江,JiuJiang,JJ,22201,赣G|361000,抚州市,抚州,FuZhou,FZ,22207,赣F|360300,萍乡市,萍乡,PingXiang,PX,22209,赣J|360500,新余市,新余,XinYu,XY,22205,赣K|360200,景德镇市,景德镇,JingDeZhen,JDZ,22202,赣H|360600,鹰潭市,鹰潭,YingTan,YT,22204,赣L|360121,南昌县,南昌县,NanChangXian,NCX,2220009,赣A|360122,新建县,新建县,XinJianXian,XJX,2220010,赣A|360123,安义县,安义县,AnYiXian,AYX,2220011,赣 A|360281,乐平市,乐平,LePing,LP,2220201,赣H|360323,芦溪县,芦溪县,LuXiXian,LXX,2220901,赣J|360424,修水县,修水县,XiuShuiXian,XSX,2220103,赣 G|360429,湖口县,湖口县,HuKouXian,HKX,2220104,赣G|360430,彭泽县,彭泽县,PengZeXian,PZX,2220105,赣G|360481,瑞昌市,瑞昌,RuiChang,RC,2220102,赣G|360521, 分宜县,分宜县,FenYiXian,FYX,2220501,赣K|360681,贵溪市,贵溪,GuiXi,GX,2220401,赣 L|360721,赣　县,赣县,GanXian,GX,2220608,赣B|360722,信丰县,信丰县,XinFengXian,XFX,2220602,赣B|360723,大余县,大余县,DaYuXian,DYX,2220616,赣 B|360727,龙南县,龙南县,LongNanXian,LNX,2220603,赣B|360729,全南县,全南县,QuanNanXian,QNX,2220607,赣B|360730,宁都县,宁都县,NingDuXian,NDX,2220605,赣 B|360731,于都县,于都县,YuDuXian,YDX,2220610,赣B|360732,兴国县,兴国县,XingGuoXian,XGX,2220601,赣B|360735,石城县,石城县,ShiChengXian,SCX,2220615,赣 B|360781,瑞金市,瑞金,RuiJin,RJ,2220606,赣B|360782,南康市,南康,NanKang,NK,2220604,赣 B|360822,吉水县,吉水县,JiShuiXian,JSX,2220806,赣D|360823,峡江县,峡江县,XiaJiangXian,XJX,2220802,赣D|360824,新干县,新干县,XinGanXian,XGX,2220805,赣 D|360825,永丰县,永丰县,YongFengXian,YFX,2220801,赣D|360826,泰和县,泰和县,TaiHeXian,THX,2220809,赣D|360827,遂川县,遂川县,SuiChuanXian,SCX,2220807,赣 D|360829,安福县,安福县,AnFuXian,AFX,2220804,赣D|360830,永新县,永新县,YongXinXian,YXX,2220803,赣D|360881,井冈山市,井冈山,JingGangShan,JGS,2220808,赣 D|360921,奉新县,奉新县,FengXinXian,FXX,2221005,赣C|360923,上高县,上高县,ShangGaoXian,SGX,2221003,赣C|360981,丰城市,丰城,FengCheng,FC,2221001,赣 C|360982,樟树市,樟树,ZhangShu,ZS,2221004,赣C|360983,高安市,高安,GaoAn,GA,2221002,赣 C|361021,南城县,南城县,NanChengXian,NCX,2220701,赣F|361022,黎川县,黎川县,LiChuanXian,LCX,2220703,赣F|361023,南丰县,南丰县,NanFengXian,NFX,2220702,赣 F|361029,东乡县,东乡县,DongXiangXian,DXX,2220704,赣F|361121,上饶县,上饶县,ShangRaoXian,SRX,2220307,赣E|361122,广丰县,广丰县,GuangFengXian,GFX,2220302,赣 E|361123,玉山县,玉山县,YuShanXian,YSX,2220304,赣E|361124,铅山县,铅山县,QianShanXian,QSX,2220305,赣E|361126,弋阳县,弋阳县,YiYangXian,YYX,2220308,赣 E|361127,余干县,余干县,YuGanXian,YGX,2220306,赣E|361128,鄱阳县,鄱阳县,PoYangXian,PYX,2220303,赣E|361181,德兴市,德兴,DeXing,DX,2220301,赣E||630000,青海省,630100,西宁市,西宁,XiNing,XN,22705,青A,58|632100,海东地区,海东地区,HaiDongDiQu,HDDQ,22711,青B|632800,海西蒙古族藏族自治州,海西州,HaiXiZhou,HXZ,22712,青 H|630121,大通回族土族自治县,大通县,DaTongXian,DTX,2270501,青A|630122,湟中县,湟中县,HuangZhongXian,HZX,2270515,青A|632121,平安县,平安县,PingAnXian,PAX,22711,青 B|632122,民和回族土族自治县,民和县,MinHeXian,MHX,22711,青B|632123,乐都县,乐都县,LeDuXian,LDX,22711,青B|632126,互助土族自治县,互助县,HuZhuXian,HZX,22711,青 B|632200,海北藏族自治州,海北州,HaiBeiZhou,HBZ,2270503,青C|632521,共和县,共和县,GongHeXian,GHX,2270504,青E|632801,格尔木市,格尔木,GeErMu,GEM,22712,青H|632802,德令哈市,德令哈,DeLingHa,DLH,2271201,青H||230000,黑龙江省,230100,哈尔滨市,哈尔滨,HaErBin,HEB,21922,黑A,22|230600,大庆市,大庆,DaQing,DQ,2195108,黑E,50|230200,齐齐哈尔市,齐齐哈尔,QiQiHaEr,QQHE,2195208,黑B,51|230300,鸡西市,鸡西,JiXi,JX,2195307,黑G|230800,佳木斯市,佳木斯,JiaMuSi,JMS,2195408,黑D|230400,鹤岗市,鹤岗,HeGang,HG,2196003,黑H|230500,双鸭山市,双鸭山,ShuangYaShan,SYS,2195904,黑J|231200,绥化市,绥化,SuiHua,SH,2195609,黑 M|230700,伊春市,伊春,YiChun,YC,2195706,黑F|231100,黑河市,黑河,HeiHe,HH,2195807,黑 N|230900,七台河市,七台河,QiTaiHe,QTH,2196102,黑K|231000,牡丹江市,牡丹江,MuDanJiang,MDJ,2195507,黑C|230123,依兰县,依兰县,YiLanXian,YLX,2195402,黑 A|230124,方正县,方正县,FangZhengXian,FZX,2193108,黑A|230125,宾　县,宾县,BinXian,BX,2193106,黑A|230126,巴彦县,巴彦县,BaYanXian,BYX,2193107,黑A|230181,阿城市,阿城,ACheng,AC,21922,黑A|230182,双城市,双城,ShuangCheng,SC,21922,黑A|230183,尚志市,尚志,ShangZhi,SZ,21922,黑A|230184,五常市,五常,WuChang,WC,21922,黑A|230229,克山县,克山县,KeShanXian,KSX,2195201,黑B|230281,讷河市,讷河,NeHe,NH,2195202,黑B|230381,虎林市,虎林,HuLin,HL,2195302,黑 G|230382,密山市,密山,MiShan,MS,2195301,黑G|230521,集贤县,集贤县,JiXianXian,JXX,2195901,黑J|230523,宝清县,宝清县,BaoQingXian,BQX,2195906,黑 J|230621,肇州县,肇州县,ZhaoZhouXian,ZZX,2195107,黑 E|230722,嘉荫县,嘉荫县,JiaYinXian,JYX,2195707,黑 F|230781,铁力市,铁力,TieLi,TL,2195703,黑F|230882,富锦市,富锦,FuJin,FJ,2195405,黑D|230921,勃利县,勃利县,BoLiXian,BLX,2196105,黑K|231025,林口县,林口县,LinKouXian,LKX,2195503,黑C|231081,绥芬河市,绥芬河,SuiFenHe,SFH,2195502,黑C|231084,宁安市,宁安,NingAn,NA,2195504,黑C|231121,嫩江县,嫩江县,NenJiangXian,NJX,2195802,黑 N|231181,北安市,北安,BeiAn,BA,2195804,黑N|231221,望奎县,望奎县,WangKuiXian,WKX,2195606,黑M|231223,青冈县,青冈县,QingGangXian,QGX,2195603,黑M|231226,绥棱县,绥棱县,SuiLengXian,SLX,2195604,黑 M|231281,安达市,安达,AnDa,AD,2195610,黑M|231282,肇东市,肇东,ZhaoDong,ZD,2195605,黑 M|231283,海伦市,海伦,HaiLun,HL,2195602,黑M|232700,大兴安岭市,大兴安岭,DaXingAnLing,DXAL,2196202,黑P||450000,广西壮族自治区,450100,南宁市,南宁,NanNing,NN,21401,桂A,27|450200,柳州市,柳州,LiuZhou,LZ,21409,桂B|450900,玉林市,玉林,YuLin,YL,21412,桂K|450300,桂林市,桂林,GuiLin,GL,21403,桂C,38|451000,百色市,百色,BaiSe,BS,21415,桂L|450500,北海市,北海,BeiHai,BH,21414,桂E|450800,贵港市,贵港,GuiGang,GG,21413,桂R|451200,河池市,河池,HeChi,HC,2141601,桂M|450400,梧州市,梧州,WuZhou,WZ,21417,桂D|451100,贺州市,贺州,HeZhou,HZ,21424,桂J|450600,防城港市,防城港,FangChengGang,FCG,21423,桂P|450700,钦州市,钦州,QinZhou,QZ,21422,桂N|451300,来宾市,来宾,LaiBin,LB,21428,桂G|451400,崇左市,崇左,ChongZuo,CZ,21429,桂F|450122,武鸣县,武鸣县,WuMingXian,WMX,2143001,桂A|450126,宾阳县,宾阳县,BinYangXian,BYX,2143002,桂 A|450127,横　县,横县,HengXian,HX,2143004,桂A|450221,柳江县,柳江县,LiuJiangXian,LJX,2140903,桂B|450223,鹿寨县,鹿寨县,LuZhaiXian,LZX,2140904,桂 B|450321,阳朔县,阳朔县,YangShuoXian,YSX,2140306,桂C|450322,临桂县,临桂县,LinGuiXian,LGX,2140308,桂 C|450323,灵川县,灵川县,LingChuanXian,LCX,2140302,桂C|450324,全州县,全州县,QuanZhouXian,QZX,2140303,桂C|450330,平乐县,平乐县,PingLeXian,PLX,2140304,桂 C|450331,荔蒲县,荔蒲县,LiPuXian,LPX,2140305,桂C|450332,恭城瑶族自治县,恭城县,GongChengXian,GCX,2140307,桂C|450481,岑溪市,岑溪,CenXi,CX,2141701,桂D|450521,合浦县,合浦县,HePuXian,HPX,2141402,桂E|450681,东兴市,东兴,DongXing,DX,2142302,桂P|450721,灵山县, 灵山县,LingShanXian,LSX,2142201,桂N|450821, 平南县,平南县,PingNanXian,PNX,2141301,桂R|450881,桂平市,桂平,GuiPing,GP,2141302,桂 R|450921,容　县,容县,RongXian,RX,2141202,桂 K|450922,陆川县,陆川县,LuChuanXian,LCX,2141209,桂K|450923,博白县,博白县,BoBaiXian,BBX,2141204,桂K|450981,北流市,北流,BeiLiu,BL,2141201,桂K|451022,田东县,田东县,TianDongXian,TDX,2141503,桂 L|451023,平果县,平果县,PingGuoXian,PGX,2141502,桂L|451025,靖西县,靖西县,JingXiXian,JXX,2141504,桂L|451031,隆林各族自治县,隆林各族县,LongLinGeZuXian,LLGZX,2141501,桂L|451122,钟山县,钟山县,ZhongShanXian,ZSX,2142401,桂J|451221,南丹县,南丹县,NanDanXian,NDX,2141602,桂 M|451228,都安瑶族自治县,都安县,DuAnXian,DAX,2141603,桂M|451281,宜州市,宜州,YiZhou,YZ,2141601,桂M|451421,扶绥县,扶绥县,FuSuiXian,FSX,2143003,桂 F||150000,内蒙古自治区,150100,呼和浩特市,呼和浩特,HuHeHaoTe,HHHT,23125,蒙A,34|150200,包头市,包头,BaoTou,BT,23102,蒙B,56|150600,鄂尔多斯市,鄂尔多斯,EErDuoSi,EEDS,23120,蒙K|150400,赤峰市,赤峰,ChiFeng,CF,23119,蒙D|150500,通辽市,通辽,TongLiao,TL,23126,蒙G|150300,乌海市,乌海,WuHai,WH,23127,蒙C|150800,巴彦淖尔市,巴彦淖尔,BaYanNaoEr,BYNE,23128,蒙L|150900,乌兰察布市,乌兰察布,WuLanChaBu,WLCB,23129,蒙J|150700,呼伦贝尔市,呼伦贝尔,HuLunBeiEr,HLBE,23118,蒙E|152500,锡林郭勒盟,锡林郭勒盟,XiLinGuoLeMeng,XLGLM,23131,蒙H|152200,兴安盟,兴安盟,XingAnMeng,XAM,23130,蒙 F|150122,托克托县,托克托县,TuoKeTuoXian,TKTX,2312503,蒙A|150221,土默特右旗,土默特右旗,TuMoTeYouQi,TMTYQ,2310202,蒙B|150223,达尔罕茂明安联合旗,达尔罕茂明安联合旗,DaErHanMaoMingAnLianHeQi,DEHMMALHQ,2310207,蒙B|150422,巴林左旗,巴林左旗,BaLinZuoQi,BLZQ,2311902,蒙D|150429,宁城县,宁城县,NingChengXian,NCX,2311903,蒙D|150525,奈曼旗,奈曼旗,NaiManQi,NMQ,2312601,蒙 G|150621,达拉特旗,达拉特旗,DaLaTeQi,DLTQ,2312003,蒙K|150622,准格尔旗,准格尔旗,ZhunGeErQi,ZGEQ,2312001,蒙 K|150626,乌审旗,乌审旗,WuShenQi,WSQ,2312006,蒙K|150627,伊金霍洛旗,伊金霍洛旗,YiJinHuoLuoQi,YJHLQ,2312002,蒙K|150781,满洲里市,满洲里,ManZhouLi,MZL,2311801,蒙E|150924,兴和县,兴和县,XingHeXian,XHX,2312901,蒙 J|152201,乌兰浩特市,乌兰浩特,WuLanHaoTe,WLHT,23130,蒙F|152502,锡林浩特市,锡林浩特,XiLinHaoTe,XLHT,23131,蒙H||650000,新疆维吾尔自治区,650100,乌鲁木齐市,乌鲁木齐,WuLuMuQi,WLMQ,22380,新A,35|652800,巴音郭楞蒙古自治州,巴音郭楞州,BaYinGuoLengZhou,BYGLZ,22306,新M|652301,昌吉市,昌吉,ChangJi,CJ,22301,新 B|650200,克拉玛依市,克拉玛依,KeLaMaYi,KLMY,22324,新J|652901,阿克苏市,阿克苏,AKeSu,AKS,22325,新N|653101,喀什市,喀什,KaShi,KS,22333,新Q|654003,奎屯市,奎屯,KuiTun,KT,22331,新F|659001,石河子市,石河子,ShiHeZi,SHZ,22335,新A|654000,伊犁哈萨克自治州,伊犁哈萨克州,YiLiHaSaKeZhou,YLHSKZ,22302,新F|652201,哈密市,哈密,HaMi,HM,22332,新 L|654201,塔城市,塔城,TaCheng,TC,22334,新G|654301,阿勒泰市,阿勒泰,ALeTai,ALT,22336,新 H|652101,吐鲁番市,吐鲁番,TuLuFan,TLF,22307,新K|652700,博尔塔拉蒙古自治州,博尔塔拉州,BoErTaLaZhou,BETLZ,22337,新E|650121,乌鲁木齐县,乌鲁木齐县,WuLuMuQiXian,WLMQX,22380,新A|652122,鄯善县,鄯善县,ShanShanXian,SSX,2230702,新 K|652100,吐鲁番地区,吐鲁番地区,TuLuFanDiQu,TLFDQ,22307,新K|652302,阜康市,阜康,FuKang,FK,2230104,新B|652303,米泉市,米泉,MiQuan,MQ,2230105,新B|652323,呼图壁县,呼图壁县,HuTuBiXian,HTBX,2230102,新B|652324,玛纳斯县,玛纳斯县,MaNaSiXian,MNSX,2230103,新 B|652325,奇台县,奇台县,QiTaiXian,QTX,2230101,新B|652300,昌吉回族自治州,昌吉州,ChangJiZhou,CJZ,22306,新B|652701,博乐市,博乐,BoLe,BL,22337,新E|652801,库尔勒市,库尔勒,KuErLe,KEL,22306,新M|652822,轮台县,轮台县,LunTaiXian,LTX,2230603,新M|652827,和静县,和静县,HeJingXian,HJX,2230602,新M|652923,库车县,库车县,KuCheXian,KCX,2232503,新 N|653001,阿图什市,阿图什,ATuShi,ATS,2233304,新P|654002,伊宁市,伊宁,YiNing,YN,22302,新 F|654022,察布查尔锡伯自治县,察布查尔锡伯县,ChaBuChaErXiBoXian,CBCEXBX,2230203,新F|654025, 新源县,新源县,XinYuanXian,XYX,2230201,新F|653201,和田市,和田,HeTian,HT,22338,新R|654202,乌苏市,乌苏,WuSu,WS,2233104,新 G|654221,额敏县,额敏县,EMinXian,EMX,2233405,新G|654223,沙湾县,沙湾县,ShaWanXian,SWX,2233105,新G||640000,宁夏回族自治区,640100,银川市,银川,YinChuan,YC,22818,宁A,57|640300,吴忠市,吴忠,WuZhong,WZ,2280307,宁C|640200,石嘴山市,石嘴山,ShiZuiShan,SZS,2280105,宁B|640400,固原市,固原,GuYuan,GY,2281303,宁D|640500,中卫市,中卫,ZhongWei,ZW,2281204,宁E||350000,福建省,350100,福州市,福州,FuZhou,FZ,21319,闽A,18|350500,泉州市,泉州,QuanZhou,QZ,21310,闽C,47|350200,厦门市,厦门,XiaMen,XM,2302116,闽D,33|350800,龙岩市,龙岩,LongYan,LY,21315,闽F|350300,莆田市,莆田,PuTian,PT,21316,闽 B|350900,宁德市,宁德,NingDe,ND,21314,闽J|350400,三明市,三明,SanMing,SM,21311,闽 G|350600,漳州市,漳州,ZhangZhou,ZZ,21312,闽E|350181,福清市,福清,FuQing,FQ,21317,闽 A|350700,南平市,南平,NanPing,NP,21313,闽H|351000,晋江市,晋江,JinJiang,JJ,21322,闽C|350122,连江县,连江县,LianJiangXian,LJX,2131905,闽A|350123,罗源县,罗源县,LuoYuanXian,LYX,2131908,闽A|350124,闽清县,闽清县,MinQingXian,MQX,2131910,闽 A|350125,永泰县,永泰县,YongTaiXian,YTX,2131912,闽A|350128,平潭县,平潭县,PingTanXian,PTX,2131909,闽A|350182,长乐市,长乐,ChangLe,CL,2131911,闽A|350322,仙游县, 仙游县,XianYouXian,XYX,21316,闽B|350421,明溪县,明溪县,MingXiXian,MXX,2131115,闽 G|350423,清流县,清流县,QingLiuXian,QLX,2131116,闽G|350424,宁化县,宁化县,NingHuaXian,NHX,2131112,闽G|350425,大田县,大田县,DaTianXian,DTX,2131113,闽 G|350426,尤溪县,尤溪县,YouXiXian,YXX,2131107,闽G|350427,沙　县,沙县,ShaXian,SX,2131106,闽G|350428,将乐县,将乐县,JiangLeXian,JLX,2131108,闽 G|350429,泰宁县,泰宁县,TaiNingXian,TNX,2131117,闽G|350430,建宁县,建宁县,JianNingXian,JNX,2131114,闽G|350481,永安市,永安,YongAn,YA,2131110,闽G|350524,安溪县,安溪县,AnXiXian,AXX,2131015,闽C|350525,永春县,永春县,YongChunXian,YCX,2131010,闽 C|350526,德化县,德化县,DeHuaXian,DHX,2131017,闽C|350581,石狮市,石狮,ShiShi,SS,2131013,闽C|350583,南安市,南安,NanAn,NA,2131011,闽C|350622,云霄县,云霄县,YunXiaoXian,YXX,2131217,闽E|350623,漳浦县,漳浦县,ZhangPuXian,ZPX,2131210, 闽E|350624,诏安县,诏安县,ZhaoAnXian,ZAX,2131223,闽E|350625,长泰县,长泰县,ChangTaiXian,CTX,2131215,闽E|350626,东山县,东山县,DongShanXian,DSX,2131213,闽 E|350627,南靖县,南靖县,NanJingXian,NJX,2131220,闽E|350681,龙海市,龙海,LongHai,LH,2131216,闽E|350721,顺昌县,顺昌县,ShunChangXian,SCX,2131312,闽H|350722,浦城县,浦城县,PuChengXian,PCX,2131313,闽 H|350723,光泽县,光泽县,GuangZeXian,GZX,2131317,闽H|350724,松溪县,松溪县,SongXiXian,SXX,2131316,闽H|350781,邵武市,邵武,ShaoWu,SW,2131307,闽H|350782,武夷山市,武夷山,WuYiShan,WYS,2131308,闽H|350783,建瓯市,建瓯,JianOu,JO,2131309,闽 H|350784,建阳市,建阳,JianYang,JY,2131314,闽H|350821,长汀县,长汀县,ChangTingXian,CTX,2131506,闽F|350822,永定县,永定县,YongDingXian,YDX,2131502,闽F|350823,上杭县,上杭县,ShangHangXian,SHX,2131501,闽 F|350824,武平县,武平县,WuPingXian,WPX,2131504,闽F|350825,连城县,连城县,LianChengXian,LCX,2131508,闽F|350881,漳平市,漳平,ZhangPing,ZP,2131503,闽 F|350921,霞浦县,霞浦县,XiaPuXian,XPX,2131409,闽J|350922,古田县,古田县,GuTianXian,GTX,2131410,闽 J|350924,寿宁县,寿宁县,ShouNingXian,SNX,2131413,闽J|350981,福安市,福安,FuAn,FA,2131408,闽J||460000,海南省,460100,海口市,海口,HaiKou,HK,21560,琼A,28|469002,琼海市,琼海,QiongHai,QH,2150013,琼C|469003,儋州市,儋州,DanZhou,DZ,2150011,琼C|469005,文昌市,文昌,WenChang,WC,2150014,琼C|469006,万宁市,万宁,WanNing,WN,2150017,琼C|469007,东方市,东方,DongFang,DF,2150012,琼D|469025,定安县,定安县,DingAnXian,DAX,2150022,琼C|469027,澄迈县,澄迈县,ChengMaiXian,CMX,2150019,琼C|469030,白沙黎族自治县,白沙,BaiSha,BS,2150024,琼D|469031,昌江黎族自治县,昌江,ChangJiang,CJ,2150016,琼D|469034,陵水黎族自治县,陵水,LingShui,LS,2150023,琼D|469029,洋浦,洋浦,YangPu,YP,21570,琼E|469026,屯昌县,屯昌县,TunChangXian,TCX,21500,琼C|469028,临高县,临高县,LinGaoXian,LGX,21500,琼C|469036,琼中黎族苗族自治县,琼中,QiongZhong,QZ,21500,琼D|460200,三亚市,三亚,SanYa,SY,21510,琼B||620000,甘肃省,620100,兰州市,兰州,LanZhou,LZ,23480,甘A,59|620900,酒泉市,酒泉,JiuQuan,JQ,23402,甘F|620400,白银市,白银,BaiYin,BY,2340306,甘D|620800,平凉市,平凉,PingLiang,PL,2340402,甘L|620500,天水市, 天水,TianShui,TS,2340502,甘E|621000,庆阳市,庆阳,QingYang,QY,23406,甘M|620600,武威市, 武威,WuWei,WW,2340702,甘H|620700,张掖市,张掖,ZhangYe,ZY,2340902,甘G|620200,嘉峪关市,嘉峪关,JiaYuGuan,JYG,2341302,甘B|620300,金昌市,金昌,JinChang,JC,2341102,甘C|621200, 陇南市,陇南,LongNan,LN,23410,甘K|621100,定西市,定西,DingXi,DX,23412,甘J||540000,西藏自治区,540100,拉萨市,拉萨,LaSa,LS,2370101,藏A,60||';

    


    function city_info() {//获取城市的数组 

        var city_arr = []; // 城市
        var city_arr_info = [];
        var arr1, arr2;

        arr1 = serverCity.split('||');

        for (var i = 0 ; i < arr1.length; i++) {
            arr2 = arr1[i].split('|');
            for (var j = 0; j < arr2.length; j++) {
                if ($.trim(arr2[j]).length != 0) {
                    city_arr.push(arr2[j]);
                }
            }
        }
        for (var i = 0 ; i < city_arr.length; i++) {

            city_arr_info[i] = city_arr[i].split(',');

            if (city_arr_info[i].length == 10) {
                for (var j = 2 ; j < city_arr_info[i].length; j++) {
                    city_arr_info[i][j - 2] = city_arr_info[i][j];
                }
                city_arr_info[i].length = city_arr_info[i].length - 2;
                // console.log(city_arr_info);
            }

        }

        city_arr_info.sort(function (a, b) {
            return a[4].localeCompare(b[4]);
        });

        //for (var i = 0 ; i < city_arr_info.length; i++) {
        //    console.log(city_arr_info[i][4]);
        //}

        var a_z = ['安丘', '安陆', '安康', '阿坝', '安阳', '安华', '阿克苏', '安顺', '安庆', '北京', '本溪', '保定', '白城', '包头', '保山', '宝鸡', '北海', '蚌埠', '巴彦淖尔', '百色', '巴中', '重庆', '成都', '长春', '长沙', '沧州', '长治', '常德', '潮州', '朝阳', '巢湖', '池州', '承德', '滁州', '楚雄', '赤峰', '长白山', '常州', '大连', '大庆', '大同', '大理', '大兴安岭', '德州', '丹东', '德宏', '东莞', '达州', '鄂尔多斯', '鄂州', '恩施', '福州', '佛山', '抚顺', '阜新', '阜阳', '防城港', '抚州', '福清', '广州', '广安', '赣州', '贵阳', '固原', '桂林', '杭州', '合肥', '哈尔滨', '海口', '邯郸', '衡阳', '衡水', '黄冈', '怀化', '哈密', '黄山', '汉中', '贺州', '惠州', '呼和浩特', '呼伦贝尔', '黄石', '鹤岗', '济南', '吉林', '济宁', '吉安', '晋城', '锦州', '晋江', '九江', '鸡西', '金华', '佳木斯', '焦作', '九江', '酒泉', '嘉兴', '荆州', '建瓯', '建阳', '开封', '昆明', '喀什', '克州', '克拉玛依', '库车县', '奎屯', '洛阳', '拉萨', '丽江', '辽阳', '泸州', '柳州', '莱州', '莱阳', '莱芜', '兰州', '廊坊', '丽水', '葫芦岛', '连云港', '辽源', '临汾', '娄底', '陇南', '龙岩', '吕梁', '龙海', '六盘水', '马鞍山', '梅州', '绵阳', '牡丹江', '满洲里', '茂名', '眉山', '南京', '南昌', '南宁', '宁波', '南通', '南充', '怒江', '内江', '南平', '南阳', '南安', '南城县', '盘锦', '攀枝花', '平凉', '平阳', '平顶山', '莆田', '濮阳', '普洱', '青岛', '秦皇岛', '曲靖', '衢州', '七台河', '齐齐哈尔', '琼海', '琼中', '泉州', '庆阳', '钦州', '日照', '仁怀', '上海', '深圳', '苏州', '沈阳', '石家庄', '三亚', '四平', '汕头', '双鸭山', '绍兴', '商丘', '三门峡', '松原', '宿州', '十堰', '韶关', '邵阳', '太原', '台州', '泰安', '唐山', '天津', '通化', '吐鲁番', '铜陵', '天水', '泰州', '铁岭', '通辽', '武汉', '威海', '温州', '武昌', '乌鲁木齐', '潍坊', '芜湖', '乌海', '五常', '无锡', '西安', '厦门', '西宁', '西双版纳', '咸阳', '咸宁', '邢台', '许昌', '徐州', '烟台', '延安', '延边', '延吉', '盐城', '扬州', '阳泉', '伊春', '义乌', '玉溪', '岳阳', '营口', '宜春', '宜宾', '榆林', '郑州', '张家口', '张家界', '中山', '淄博', '遵义', '枣庄', '漳州', '舟山', '张掖', '昭通', '肇庆', '镇江', '驻马店', '珠海'];


        var t_arr = [];
        for (var i = 0 ; i < city_arr_info.length; i++) {
            for (var j = 0 ; j < a_z.length; j++) {
                a_z[j] == city_arr_info[i][2] && t_arr.push(city_arr_info[i]);
            }
        }

        for (var j = 0 ; j < a_z.length; j++) {
            //a_z[j] == city_arr_info[i][2] && t_arr.push(city_arr_info[i]);

            for (var i = 0 ; i < city_arr_info.length; i++) {

                a_z[j] == city_arr_info[i][2] && t_arr.push(city_arr_info[i]);
                break;
            }

        }



        for (var i = 0 ; i < t_arr.length; i++) {
            // console.log(t_arr[i]);
        }
        //  console.log(t_arr[0]);

        city_info = function () { return t_arr };

        return t_arr;
    }

    //#endregion 城市列表

    //#region 城市组件

    var hot_city = $('#hot_city');
    var part_city = $('#part_city');
    var city_index = $('#city_index');
    var xiala_list = $('#xiala_list');
    var city_txt = $('#city_txt');
    var allcity = $('#allcity');

    for (var i = 0; i < localCity.length; i++) {
        var li = $('<li></li>');
        li.appendTo(hot_city);
        var a = $('<a>' + localCity[i].text + '</a>');
        a.appendTo(li);
        a.attr('href', 'javascript:');

        var cityCode = $('<input type ="hidden" name="cityCode" />');
        cityCode.appendTo(a);
        cityCode.val(localCity[i].cityCode);

        var provinceCode = $('<input type ="hidden" name="provinceCode" />');
        provinceCode.appendTo(a);
        provinceCode.val(localCity[i].provinceCode);
        //console.log(city_info()[i]);

        var cityName = $('<input type ="hidden" name="cityName" />');
        cityName.appendTo(a);
        cityName.val(localCity[i].text);
    }

    $('#hot_city a').click(function (e) {
        //console.log($(this).find('input[name=cityCode]').val());
        $('#show_cityname').hide();
        $('#allcity').hide();
        //console.log($(this).find('input[name=cityCode]').val() + ':' + $(this).find('input[name=provinceCode]').val());
        city_txt.val($(this).find('input[name=cityName]').val());
        //city_txt.attr('cityCode', $(this).find('input[name=cityCode]').val());
        //city_txt.attr('provinceCode', $(this).find('input[name=provinceCode]').val());

        $('#cityCode_name').val($(this).find('input[name=cityCode]').val());
        $('#provinceCode_name').val($(this).find('input[name=provinceCode]').val());
    });

    hot_city.hide();
    part_city.hide();

    hot_city.show();

    city_info();

    //宽度
    if ($.browser.msie && $.browser.version > 8) {
        $('#allcity').css('width', 375)
    }

    //显示城市列表 
    city_index.find('li').click(function () {

        city_index.find('li').removeClass('gomered');
        $(this).addClass('gomered');

        if ($(this).find('input[name="hot_city"]').length > 0) { //热门城市
            hot_city.show();
            part_city.hide();
        }
        else {//字母索引
            var max_word = $(this).find('input[name="max_word"]').val();
            var min_word = $(this).find('input[name="min_word"]').val();

            part_city.html('');

            for (var min = min_word.charCodeAt(), max = max_word.charCodeAt(), i = min; i <= max; i++) {

                var div = $('<div></div>');

                var p = $('<p></p>');
                p.html(String.fromCharCode(i));
                p.appendTo(div);

                var ul = $('<ul></ul>');
                ul.appendTo(div);

                for (var j = 0 ; j < city_info().length; j++) {
                    if (city_info()[j][4].substr(0, 1) == String.fromCharCode(i)) {
                        var li = $('<li></li>');
                        li.appendTo(ul);

                        var a = $('<a>' + city_info()[j][2] + '</a>');
                        a.appendTo(li);
                        a.attr('href', 'javascript:');

                        var cityCode = $('<input type ="hidden" />');
                        cityCode.appendTo(a);
                        cityCode.attr('name', 'cityCode');
                        cityCode.val(city_info()[j][0]);

                        var provinceCode = $('<input type ="hidden" name="provinceCode" />');
                        provinceCode.appendTo(a);
                        provinceCode.val(city_info()[j][5]);

                        var cityName = $('<input type ="hidden" name="cityName" />');
                        cityName.appendTo(a);
                        cityName.val(city_info()[j][2]);
                    }
                }

                ul.find('li').length > 0 && div.appendTo(part_city);

                //hot_city.hide();
                //part_city.hide();

                //part_city.show();

            }

            hot_city.hide();
            part_city.hide();

            part_city.show();
        }

        $('#part_city a').unbind('click').click(function (e) {
            $('#show_cityname').hide();
            $('#allcity').hide();
            // console.log($(this).find('input[name=cityCode]').val() + ':' + $(this).find('input[name=provinceCode]').val());

            city_txt.val($(this).find('input[name=cityName]').val());
            //city_txt.attr('cityCode', $(this).find('input[name=cityCode]').val());
            //city_txt.attr('provinceCode', $(this).find('input[name=provinceCode]').val());
            $('#cityCode_name').val($(this).find('input[name=cityCode]').val());
            $('#provinceCode_name').val($(this).find('input[name=provinceCode]').val());
        });
    });

    //显示下拉
    var cur_xiala = -1;
    var xiala = [];//["110000", "北京市", "北京", "BeiJing", "BJ", "20127", "京A", "1"]
    var reg = new RegExp();
    var xiala_city = {

        pinyin: function (str) {
            reg = new RegExp("^" + str, 'i');
            for (var i = 0 ; i < city_info().length; i++) {
                if (reg.test(city_info()[i][4])) {
                    xiala.push(city_info()[i]);
                    if (xiala.length >= 6) {
                        break;
                    }
                }
            }
            //  console.log(city_info().length);
        }, pinyin_shouzimu: function (str) {
            //console.log(1);
            if (xiala.length >= 6) {
                return;
            }
            reg = new RegExp("^" + str, 'i');
            for (var i = 0 ; i < city_info().length; i++) {
                if (reg.test(city_info()[i][3])) {
                    xiala.push(city_info()[i]);
                    if (xiala.length >= 6) {
                        break;
                    }
                }
            }

        },
        hanzi: function (str) {
            if (xiala.length >= 6) {
                return;
            }
            reg = new RegExp("^" + str, 'i');
            for (var i = 0 ; i < city_info().length; i++) {
                if (reg.test(city_info()[i][2])) {
                    xiala.push(city_info()[i]);
                    if (xiala.length >= 6) {
                        break;
                    }
                }
            }
        }

    }

    $('#show_cityname').click(function () {
        $(this).hide();
        $('#city_txt').focus();
    });
    $('#city_txt').focus(function () {
        $('#show_cityname').hide();
        $('#showcity').trigger('click');
    });
    $('#city_txt').blur(function () {
        if ($(this).val().length == 0) {
            $('#show_cityname').show();
        } else {
            $('#show_cityname').hide();
        }
    });

    $('#city_txt').keyup(function (e) {

        if ($.trim($(this).val()) == '') {
            $('#allcity').hide();
            $('#xiala_list').hide();
            return;
        }

        $('#allcity').hide();
        $('#cityCode_name').val('');
        $('#provinceCode_name').val('');

        var str = $(this).val().toUpperCase();
        xiala = [];
        for (var fn in xiala_city) {
            xiala_city[fn](str);
        }



        xiala_list.html('');

        if (xiala.length == 0) {
            $('<li>' + '对不起，没有找到' + $(this).val() + '</li>').appendTo(xiala_list);
            xiala_list.find('li').show();
            return;
        }

        for (var i = 0 ; i < xiala.length; i++) {

            if ($.trim($(this).val()).substr(0, 1).charCodeAt() < 255) {
                $('<li><p class="pinyin"><span class ="color_c00">' + xiala[i][3].substr(0, $(this).val().length) + '</span>' + xiala[i][3].substr($(this).val().length) + '</p>' + xiala[i][2] + '</li>').appendTo(xiala_list);
            }
            else {
                $('<li>' + '<p class="pinyin">' + xiala[i][3] + '</p>' + '<span class ="color_c00">' + xiala[i][2].substr(0, $(this).val().length) + '</span>' + xiala[i][2].substr($(this).val().length) + '</li>').appendTo(xiala_list);
            }

            if ($(this).val() == xiala[i][2]) {
                $('#cityCode_name').val(xiala[i][0]);
                $('#provinceCode_name').val(xiala[i][5]);
            }
        }

        xiala_list.show();
        xiala_list.find('li').show();

        xiala_list.find('li').hover(function () {
            $(this).addClass('bg_color_f8');
        }, function () {
            $(this).removeClass('bg_color_f8');
        });
        xiala_list.find('li').each(function (i) {
            $(this).click(function () {
                //console.log(xiala[i]);
                city_txt.val(xiala[i][2]);
                $('#cityCode_name').val(xiala[i][0]);
                $('#provinceCode_name').val(xiala[i][5]);
                xiala_list.hide();
                $('#allcity').hide();
            });
        });





        //方向键盘
        if (xiala_list.length > 0) {

            new function () {

                switch (e.keyCode) {
                    case 37://左
                        break;
                    case 38://上
                        cur_xiala--;


                        if (cur_xiala < 0) {
                            cur_xiala = xiala.length - 1;
                        }
                        xiala_list.find('li').removeClass('bg_color_f8');
                        xiala_list.find('li').eq(cur_xiala).addClass('bg_color_f8');


                        break;
                    case 39://右
                        break;
                    case 40://下
                        //  alert();
                        cur_xiala++;
                        if (cur_xiala == xiala.length) {
                            cur_xiala = 0;
                        }
                        xiala_list.find('li').removeClass('bg_color_f8');

                        xiala_list.find('li').eq(cur_xiala).addClass('bg_color_f8');

                        break;
                    case 13://enter

                        xiala_list.find('li').eq(cur_xiala).trigger('click');
                        break;
                    default:
                }
                //console.log(cur_xiala);

            }

        }
    });

    $('html').click(function (e) {

        //return;

        var flag = true; //是否隐藏
        var parent = e.target;

        while (parent) {
            if (parent == $('#gome_city').get(0)) {
                flag = false;
            }
            parent = parent.parentNode;
        }

        if (flag) {
            xiala_list.hide();
            allcity.hide();
        }
    });


    $('#showcity').click(function () {
        $('#hot_city').hide();
        $('#part_city').hide();

        $('#hot_city').show();

        $('#allcity').show();
        $('#city_index').find('li').removeClass('gomered');
        $('#city_index').find('li').eq(0).addClass('gomered');
    });

    $('#baojia_submit').click(function () {
        $('#provinceCode_name').val($('#cityCode_name').val().substr(0, 2) + '0000');
        if ($.trim($('#cityCode_name').val()).length == 0 || $.trim($('#provinceCode_name').val()).length == 0) {
            alert('请选择城市');
            return;
        }
        $('#frm_baojia').submit();
    });

    $('#baojia_submit').hover(function () {
        $(this).removeClass('bg_c00');
        $(this).addClass('bg_d00');
    }, function () {
        $(this).removeClass('bg_d00');
        $(this).addClass('bg_c00');
    });



    //#endregion
})();