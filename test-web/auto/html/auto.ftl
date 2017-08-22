<#import "priceFormat.ftl" as FormatPrice >
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <#--定义TDK-->
            <#if storeConfiguration.tdk?? && (storeConfiguration.tdk.seoTitle)??>
                <title>${(storeConfiguration.tdk.seoTitle)!}</title>
                <meta name="description" content="${(storeConfiguration.tdk.seoDescription)!}">
                <meta name="Keywords" content="${(storeConfiguration.tdk.seoKeyword)!}">
                <#else>
                    <title>汽车销售-汽车用品-国美在线-影音导航、车载电器、汽车内饰、座垫/脚垫、车险、汽车美容、改装配件、安全应急、自驾装备在线销售！</title>
                    <meta name="description" content="国美在线(Gome.com.cn)是国内最专业的汽车销售，车险，影音导航，车载电器，汽车内饰，座垫/脚垫，系统养护，汽车美容，改装配件，安全应急，自驾装备网上购物商城。并为您购买汽车,车险,影音导航，车载电器，汽车内饰，座垫/脚垫，系统养护，汽车美容，改装配件，安全应急，自驾装备提供最新报价、价格、促销、参数、评价、排行、图片等选购信息。">
                    <meta name="Keywords" content="汽车销售,车险，影音导航,车载电器,汽车内饰,座垫/脚垫,系统养护,汽车美容,改装配件,安全应急,自驾装备">
            </#if>
            <#--END-->
                <meta name="renderer" content="webkit">
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                <meta http-equiv="Cache-Control" content="no-siteapp"/>
                <meta http-equiv="Cache-Control" content="no-transform"/>
                <meta http-equiv="pragma" content="no-cache">
                <meta http-equiv="cache-control" content="no-cache">
                <meta http-equiv="expires" content="0">
                <meta name="applicable-device" content="pc">
                <link rel="shortcut icon" href="//app.gomein.net.cn/favicon.ico" type="image/x-icon">
                <#--公共环境变量-->
                    <!--#include virtual="/n/common/global/global.html"-->
                    <#--公共环境变量 end-->
                        <#--公共头部css-->
                            <link rel="stylesheet" href="<!--#include virtual='/n/common/a01/style.html'-->">
                            <link rel="stylesheet" href="/css/car.css">
                            <link rel="stylesheet" href="/css/pindao.css">
                            <#--公共头部css end-->
    </head>
    <body class="baby">
    <!--#include virtual="/n/common/a01/head.html"-->
    <#--END-->


        <#assign gomeImgLoad = storeConfiguration.imageserver+"/grey.gif">

            <#if carHeader??>
                <div class="column">
                    <div class="gome-channel-title">
                        <div class="channel fl"><span class="title">国美汽车</span>
                            <#if carHeader.textProm??>
                                <#list carHeader.textProm as item>
                                    <#assign flag =0>
                                        <#if (item.textOtherAttr?size>0)>
                                            <#list item.textOtherAttr?keys as itemKey>
                                                <#if itemKey="extend" && item.textOtherAttr[itemKey]?? && (item.textOtherAttr[itemKey]?index_of("blue")>=0)>
                                                    <#assign flag =1>
                                                </#if>
                                            </#list>
                                        </#if>
                                        <#if flag==1 >
                                            <a class ="cur" href="${(item.href)!}" data-code="${(item.linkOtherAttr.oldModelId)}" target="_blank"  ><strong>${(item.title)!}</strong></a>
                                            <#else>
                                                <em>|</em><a href="${(item.href)!}" target="_blank" data-code="${(item.linkOtherAttr.oldModelId)}-${(item_index+1)}"><strong>${(item.title)!}</strong></a>
                                        </#if>
                                </#list>
                            </#if>
                        </div>
                        <div class="attention fr"><span><img src="${(carHeader.prom.src)!}" alt="${(carHeader.prom.alt)!}" /></span><wb:follow-button class="follow-button" uid="3598575367" type="red_2" width="136" height="24"></wb:follow-button></div>
                    </div>
                </div>
                <div class="gome-focus-play" id="focus-play">
                    <#if carHeader.promotionPicAd??>
                        <#list carHeader.promotionPicAd as item>
                            <a target="_blank" href="${(item.href)!}" data-code="${(item.linkOtherAttr.oldModelId)}-${(item_index+1)}" title="${(item.title)!}" class="focus-img" <#if item_index==0>style="background:url(${(item.src)!}) 50% 0 no-repeat;"<#else>backsrc="${(item.src)!}"</#if>></a>
                        </#list>
                    </#if>
                </div>
                <div class="column">
                    <div class="gome-navigation">
                        <div class="col-200 fl">
                            <div class="class-navitation">
                                <div class="navCover"></div>
                                <div class="left">
                                    <#if carHeader.fsHeaderCatalogs??>
                                        <#list carHeader.fsHeaderCatalogs as item>
                                            <div class="nav_list">
                                                <div class="nav_left" >
                                                    <h3><span class ="more" >></span> <span class="title">${(item.text)!}</span></h3>
                                                    <ul>
                                                        <#if (item.firstCatalogs)?? && (item.firstCatalogs?size>0)>
                                                            <#list item.firstCatalogs as c1item>
                                                                <#if c1item_index < 6 >
                                                                <li <#if (c1item_index==2||c1item_index==5 )>class ="w"</#if>  ><a href="${(c1item.href)!}"  data-code="${(c1item.linkOtherAttr.oldModelId)!}-${c1item_index+1}" target="_blank">${(c1item.text)!}</a></li>
                                                        </#if>
                                        </#list>
                                    </#if>
                                    </ul>
                                </div>
                                <ul class="nav_right">
                                    <#if (item.firstCatalogs)?? && (item.firstCatalogs?size>0)>
                                        <#list item.firstCatalogs as c1item>
                                            <#if (c1item_index >= 6) >
                                                <li><a href="${(c1item.href)!}"  data-code="${(c1item.linkOtherAttr.oldModelId)!}-${c1item_index+1}" target="_blank">${(c1item.text)!}</a></li>
                                            </#if>
                                        </#list>
                                    </#if>
                                </ul>
                            </div>
                            </#list>
            </#if>
            </div>
            </div>
            </div>
            <div class="col-1000 fl">
                <div class="gome-recommendation" id="tswitch-a">
                    <div class="gome-tab-tag">
                        <#if carHeader.promGoods?? && (carHeader.promGoods?size>0)>
                            <#list carHeader.promGoods as item>
                                <span class="tab-tag <#if (item_index==0)>active</#if>">${(item.title)!}</span>
                            </#list>
                        </#if>
                    </div>
                    <div class="gome-tab-content">

                        <#if (carHeader.promGoods??) && (carHeader.promGoods?size>0)>
                            <#list carHeader.promGoods as gitem>
                                <div class="content-data<#if gitem_index==0> gloadPic</#if>">
                                    <ul class="gome-goods-list">
                                        <#if gitem.goodsList??>
                                            <#list gitem.goodsList as item>
                                                <li class="goods-list<#if (item_index==4) > last</#if>">
                                                    <div class="gpic">
                                                        <a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${item_index+1}" title="${(item.title)!}" target="_blank">
                                                            <img  src="${(gomeImgLoad)!}" gome-src="${(item.goodsImgs[0].src)!}_130.jpg" alt="${(item.name)!}" width="130" height="130" />

                                                        </a>
                                                    </div>
                                                    <p class="ginfo"><a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${item_index+1}" target="_blank">${item.name!}</a></p>
                                                    <div class="gprice" data-target="p-price" data-skuId="${item.skuId}">国美价：
                                                        <strong><span class ="m" productId=${(item.productId)} skuId=${(item.sku)}>¥ <i class="minPrice">${(item.price)!}</i></span></strong>
                                                    </div>
                                                </li>
                                            </#list>
                                        </#if>
                                    </ul>
                                </div>
                            </#list>
                        </#if>
                    </div>
                </div>
            </div>
            <!--<div class="col-230 fr">-->
                <!--<a href="#" target="_blank">
                    <img src="" alt=""/>
                </a>-->
                <!--<div class="gome-goods-filter" id="tswitch-b">
                    <div class="gome-tab-tag">
                        <div class="tab-tag-box top">
                            <span id="tag01" class="tab-tag" roll="ra">汽车用品<em></em><i class="col"></i></span>
                            <span id="tag02" class="tab-tag last" roll="rb">汽车销售<em></em></span>
                        </div>
                        <div class="gome-tab-content">
                            <div class="filter-cate content-data" id="car-accessory" roll="ra">
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择类型</option>
                                </select></div>
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择品类</option>
                                </select></div>
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择品牌</option>
                                </select></div>
                                <a href="javascript:;" class="confirm disabled" target="_blank">查看配件</a>
                            </div>
                            <div class="filter-cate content-data" id="car-carload" roll="rb">
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择品牌</option>
                                </select></div>
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择车系</option>
                                </select></div>
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择车型</option>
                                </select></div>
                                <a href="javascript:;" class="confirm disabled" target="_blank">查看汽车</a>
                            </div>
                            <div class="filter-cate content-data" roll="rc">
                                <iframe id="insuranceFrame" name="insuranceFrame" src="//baoxian.gome.com.cn/car/nfs-file-0001/staticpage/main/gomeAutoMiniWindow.html" scrolling="no" width="209" height="180" frameborder="0"  allowtransparency="true"></iframe>
                            </div>
                            <div class="filter-cate content-data" id="driving-school" roll="rd">
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择服务方式</option>
                                </select></div>
                                <div class="filter-list"><select class="selectMenu">
                                    <option value="" selected="selected">选择服务类别</option>
                                </select></div>
                                <a class="confirm disabled" href="javascript:;">去保养</a>
                            </div>
                        </div>
                        <div class="tab-tag-box bot">
                            <span id="tag03" class="tab-tag" roll="rc">买车险<em></em><i class="col"></i></span>
                            <span id="tag04" class="tab-tag last" roll="rd">维修保养<em></em></span>
                        </div>
                    </div>
                </div>-->
           <!-- </div>-->
            <div class="clear"></div>
            </div>
            </div>
            </#if>


            <div class="vspace"></div>


            <#if adviseFloor??>
                <div class="column">
                    <div class="col-970 fl">
                        <div class="gome-model-head"><h2 class="model-title">${(adviseFloor.name)!}</h2></div>
                        <div class="gome-counselor gloadPic">
                            <ul class="gome-goods-list">
                                <#if (adviseFloor.adviseModules??) && (adviseFloor.adviseModules?size>0)>
                                    <#list adviseFloor.adviseModules as glist>
                                        <li class="goods-list">
                                            <div class="hpic" title="${(glist.head.title)!}">
                                                <img src="${(glist.head.src)!}" alt="${(glist.head.alt)!}"/>
                                                <div class="cover"></div>
                                            </div>
                                            <div class="introd">
                                                <div class="leftBack"></div><div class="rightBack"></div>
                                                <div class="gtitle"><span class="name">${(glist.description.textName)!}</span>
                                                    <#if glist.service??>
                                    <span class="live800 liveDetail live800Store"
                                          lim:company="${(glist.service.text)!}"
                                          lim:page="0"
                                          lim:shopId="${(glist.service.title)!}"
                                          lim:shopName=""
                                          lim:offLineTip="客服暂时不在线"
                                          lim:innerhtm='<i class="consult"></i>咨询'
                                          lim:checkLogin="true">
                                    </span>
                                                    </#if>
                                                </div>

                                                <div class="groom">推荐：<a href="${(glist.goods.detailHref)!}" data-code="${(glist.goods.affixAttr.oldModelId)!}" target="_blank">${(glist.description.textDescription)!}</a></div>
                                                <p class="brief">${(glist.description.content)!}</p>
                                            </div>
                                            <div class="product">
                                                <a href="${(glist.goods.detailHref)!}" data-code="${(glist.goods.affixAttr.oldModelId)!}" target="_blank"><img gome-src="${(glist.goods.manualImg)!}" src="${(gomeImgLoad)!}" alt="${(glist.goods.goodsImgs[0].alt)!}"  width="360" height="190"/></a>
                                                <div class="price" productId="${(glist.goods.productId)!}" skuId="${(glist.goods.skuNo)!}" data-target="p-price" data-skuId="${(glist.goods.skuId)!}">
                                                    <div class="pback"></div><span>¥<i class="minPrice">${(glist.goods.price)!}</i></span>
                                                </div>
                                            </div>
                                        </li>
                                    </#list>
                                </#if>
                            </ul>
                        </div>
                    </div>
                    <div class="col-230 fr">
                        <div class="gome-side-mod side-mod-a">
                            <#if adviseFloor.advises??>
                                <div class="mod-hd">${(adviseFloor.advises.title)!}<span class="tpl"></span></div>
                                <div class="mod-bd" id="slidePage01">
                                    <div class="mod-slide">
                                        <div class="question-list slide-area">
                                            <ul class="slide-list">
                                                <#if (adviseFloor.advises.brandTextlink??)&&(adviseFloor.advises.brandTextlink?size>0)>
                                                    <li>
                                                        <#list adviseFloor.advises.brandTextlink as advise>
                                                            <#assign count=adviseFloor.advises.brandTextlink?size>
                                                                <div frameSrc="${(advise.href)!}" class="list-data<#if (advise_index+1<=3)> top</#if>">
                                                                    <span class="icon">${advise_index+1}</span>
                                                                    <div class="question">
                                                                        <a href="javascript:">${(advise.text)!}</a>
                                                                        <p>${(advise.title)!}</p>
                                                                    </div>
                                                                </div>
                                                                <#if ((count/6)<1) && (advise_index+1)==count>
                                                    </li>
                                                    <#elseif ((count/6)>1) && count%6==0 && (advise_index+1)==count>
                                                        </li>
                                                        <#elseif ((count/6)>1) && (advise_index+1)%6==0>
                                                            </li>
                                                            <li>
                                                                <#elseif ((count/6)>1) && count%6!=0 && (advise_index+1)==count >
                                                            </li>
                                                </#if>
                                                </#list>
                            </#if>

                            </ul>
                        </div>
                    </div>
                    <div class="buy-method">
                        <span class="point">如果你还有类似疑问，快来<a href="javascript:;" id="commquestion">这里</a></span>
                    </div>
                </div>
            </#if>
            </div>
            </div>
            <div class="clear"></div>
            </div>
            </#if>
            <div class="vspace"></div>


            <div class="block clearfix">
                <div class="block_header">
                    <h2><#if vehicles??>${(vehicles.title)!}</#if></h2>
                </div>
                <div class="block_content main-mod-a">
                    <div class="focus-bar">
                        <div class="barBack"></div>
                        <ul class="focus-bar-tab">
                            <li class="selected">级别<span class="arrow"></span></li>
                            <li>价格<span class="arrow"></span></li>
                        </ul>
                        <div class="focus-bar-navs">
                            <#if vehicles??>
                                <#if (vehicles.carType)??>
                                    <#list vehicles.carType as cartype>
                                        <ul class="focus-bar-nav <#if cartype_index==0 >selected</#if>">
                                            <li class="selected">${(cartype.name)!}<em class="point">&gt;</em></li>
                                            <#if (cartype.floorClassList)??>
                                                <#list cartype.floorClassList as classList>
                                                    <li><span>${(classList.title)!}</span><#if (classList.target!)=="hot"><span class="new-icon"></span></#if><em class="point">&gt;</em></li>
                                                </#list>
                                            </#if>
                                        </ul>
                                    </#list>
                                </#if>
                            </#if>
                        </div>
                    </div>
                    <div class="focus-contents">


                        <div class="focus-items selected">
                            <div class="focus-content recommend items gloadPic selected">
                                <div class="sug">
                                    <#list vehicles.carType[0].vehiclesModels as models>
                                        <#if models_index==0>
                                            <div class="focus-block">
                                                <!--无法埋码 -->
                                                <div class="focus-info">
                                                    <div class="title"><a href="${(models.good.detailHref)!}" target="_blank">${(models.good.name)!}</a></div>
                                                    <div class="info">${(models.good.salesPromotionTitle)!}</div>
                                                    <div class="price" productId="${(models.good.productId)!}" skuId="${(models.good.sku)!}" data-target="p-price" data-skuId="${(models.good.skuId)!}"><span class="wanPrice">${(models.good.price?c?string)!}</span>万</div>
                                                    <a href="javascript:;" class="two-dimension">
                                                        <span class="two-dimension-item" style="background-image:url(${(models.good.goodsModel[0].src)!});"></span>
                                                    </a>
                                                </div>
                                                <!--无法埋码 end -->
                                                <div class="logo"><a href="${(models.brand.href)!}" data-code="${(models.brand.linkOtherAttr.oldModelId)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(models.brand.src)!}" alt="${(models.brand.alt)!}" width="80" height="80"></a></div>
                                                <div class="focus-imgs">
                                                    <#if models.carImg??>
                                                        <#list models.carImg as carimg>
                                                            <a href="${carimg.href!}" data-code="${(carimg.linkOtherAttr.oldModelId)!}-${(carimg_index+1)}" target="_blank" <#if carimg_index==0>class="selected"</#if>><img gome-src="${(carimg.src)!}" src="${(gomeImgLoad)!}" alt="${(carimg.alt)!}"></a>
                                                        </#list>
                                                    </#if>
                                                </div>
                                            </div>
                                        </#if>
                                    </#list>
                                    <a href="javascript:;" class="arrows arrow-l"></a>
                                    <a href="javascript:;" class="arrows arrow-r"></a>

                                    <div class="focus-list">
                                        <#list vehicles.carType[0].vehiclesModels as models>
                                            <a href="javascript:;" <#if models_index==0>class="selected"</#if>><img gome-src="${(models.good.manualImg)!}" alt="${(models.good.goodsImgs[0].alt)!}"  src="${(gomeImgLoad)!}" /></a>
                                        </#list>
                                    </div>
                                    <#list vehicles.carType[0].vehiclesModels as models>
                                        <div class="focus-block-inner" style="display:none;">
                                            <!--无法埋码-->
                                            <div class="focus-info">
                                                <div class="title"><a href="${(models.good.detailHref)!}">${(models.good.name)!}</a></div>
                                                <div class="info">${(models.good.description)!}</div>
                                                <div class="price" productId="${(models.good.productId)!}" skuId="${(models.good.sku)!}" data-target="p-price" data-skuId="${(models.good.skuId)!}"><span class="wanPrice">${(models.good.price?c?string)!}</span>万</div>
                                                <a href="javascript:;" class="two-dimension">
                                                    <span class="two-dimension-item" style="background-image:url(${(models.good.goodsModel[0].src)!});"></span>
                                                </a>
                                            </div>
                                            <!--无法埋码 end-->
                                            <div class="logo"><a href="${(models.brand.href)!}" data-code="${(models.brand.linkOtherAttr.oldModelId)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(models.brand.src)!}" alt="${(models.brand.alt)!}" width="80" height="80"></a></div>
                                            <div class="focus-imgs">
                                                <#if models.carImg??>
                                                    <#list models.carImg as carimg>
                                                        <a href="${carimg.href!}" data-code="${(carimg.linkOtherAttr.oldModelId)!}-${(carimg_index+1)}" target="_blank" <#if carimg_index==0>class="selected"</#if>><img gome-src="${(carimg.src)!}" alt="${(carimg.alt)!}" src="${(gomeImgLoad)!}"></a>
                                                    </#list>
                                                </#if>
                                            </div>
                                        </div>
                                    </#list>
                                </div>
                            </div>


                            <#if vehicles??>
                                <#if (vehicles.carType??)!>
                                    <#list vehicles.carType as cartype>
                                        <#if cartype_index==0>
                                            <#if (cartype.floorClassList)??>
                                                <#list cartype.floorClassList as ClassList>

                                                    <div class="focus-content items">
                                                        <#if ClassList.goodsList??>
                                                            <#list ClassList.goodsList as item>
                                                                <dl>
                                                                    <dt><a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${(item_index+1)}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(item.goodsImgs[0].src)!}_160.jpg" alt="${(item.goodsImgs[0].alt)!}" width="180" height="180" /></a></dt>
                                                                    <dd class="title"><a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${(item_index+1)}" target="_blank">${(item.name)!}</a></dd>
                                                                    <dd class="info">${(item.salesPromotionTitle)!}</dd>
                                                                    <dd class="price" productId="${(item.productId)!}" skuId="${(item.sku)!}" data-target="p-price" data-skuId="${(item.skuId)!}"><span class="wanPrice">${(item.price?c?string)!}</span>万</dd>
                                                                    <dd class="two-dimension"></dd>
                                                                    <dd class="collect floor_collect" data-sku="${(item.sku)!}" data-pid="${(item.productId)!}"><span>◥</span><i class="floor_collect_icon"></i></dd>
                                                                </dl>
                                                            </#list>
                                                        </#if>
                                                    </div>

                                                </#list>
                                            </#if>
                                        </#if>
                                    </#list>
                                </#if>
                            </#if>
                        </div>
                        <div class="focus-items">
                            <#if (vehicles.carType[1].vehiclesModels)??>

                                <div class="focus-content recommend items selected">

                                    <div class="sug">
                                        <#list vehicles.carType[1].vehiclesModels as models>
                                            <#if models_index==0>
                                                <div class="focus-block">
                                                    <!--无法埋码-->
                                                    <div class="focus-info">
                                                        <div class="title"><a target="_blank" href="${(models.good.detailHref)!}">${(models.good.name)!}</a></div>
                                                        <div class="info">${(models.good.salesPromotionTitle)!}</div>
                                                        <div class="price" productId="${(models.good.productId)!}" skuId="${(models.good.sku)!}" data-target="p-price" data-skuId="${(models.good.skuId)!}"><span class="wanPrice">${(models.good.price?c?string)!}</span>万</div>
                                                        <a href="javascript:;" class="two-dimension">
                                                            <span class="two-dimension-item" style="background-image:url(${(models.good.goodsModel[0].src)!});"></span>
                                                        </a>
                                                    </div>
                                                    <!--无法埋码 end-->
                                                    <div class="logo"><a href="${(models.brand.href)!}" data-code="${(models.brand.linkOtherAttr.oldModelId)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(models.brand.src)!}" alt="${(models.brand.alt)!}"  width="80" height="80"></a></div>
                                                    <div class="focus-imgs">
                                                        <#if models.carImg?? && models.carImg?size &gt; 0>
                                                            <#list models.carImg as carimg>
                                                                <a href="${carimg.href!}" target="_blank" data-code="${(carimg.linkOtherAttr.oldModelId)!}-${(carimg_index+1)}" <#if carimg_index==0>class="selected"</#if>><img src="${(gomeImgLoad)!}" gome-src="${(carimg.src)!}" alt="${(carimg.alt)!}"></a>
                                                            </#list>
                                                        </#if>
                                                    </div>
                                                </div>
                                            </#if>
                                        </#list>
                                        <a href="javascript:;" class="arrows arrow-l"></a>
                                        <a href="javascript:;" class="arrows arrow-r"></a>
                                        <div class="focus-list">
                                            <#list vehicles.carType[1].vehiclesModels as models>
                                                <a href="javascript:;"<#if models_index==0> class="selected"</#if>><img src="${(gomeImgLoad)!}" gome-src="${(models.good.manualImg)!}" alt="${(models.good.goodsImgs[0].alt)!}" /></a>
                                            </#list>
                                        </div>
                                        <#list vehicles.carType[1].vehiclesModels as models>
                                            <div class="focus-block-inner" style="display:none;">
                                                <div class="focus-info">
                                                    <div class="title"><a href="${(models.good.detailHref)!}">${(models.good.name)!}</a></div>
                                                    <div class="info">${(models.good.description)!}</div>
                                                    <div class="price" productId="${(models.good.productId)!}" skuId="${(models.good.sku)!}" data-target="p-price" data-skuId="${(models.good.skuId)!}"><span class="wanPrice">${(models.good.price?c?string)!}</span>万</div>
                                                    <a href="javascript:;" class="two-dimension">
                                                        <span class="two-dimension-item" style="background-image:url(${(models.good.goodsModel[0].src)!});"></span>
                                                    </a>
                                                </div>
                                                <div class="logo"><a href="${(models.brand.href)!}" data-code="${(models.brand.linkOtherAttr.oldModelId)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(models.brand.src)!}" alt="${(models.brand.alt)!}" width="80" height="80"></a></div>
                                                <div class="focus-imgs">
                                                    <#if models.carImg??>
                                                        <#list models.carImg as carimg>
                                                            <a href="${carimg.href!}" data-code="${(carimg.linkOtherAttr.oldModelId)!}-${(carimg_index+1)}" target="_blank" <#if carimg_index==0>class="selected"</#if>><img gome-src="${(carimg.src)!}" alt="${(carimg.alt)!}" src="${(gomeImgLoad)!}"></a>
                                                        </#list>
                                                    </#if>
                                                </div>
                                            </div>
                                        </#list>
                                    </div>
                                </div>

                            </#if>
                            <#if vehicles??>
                                <#if (vehicles.carType??)!>
                                    <#list vehicles.carType as cartype>
                                        <#if cartype_index==1>
                                            <#if (cartype.floorClassList)??>
                                                <#list cartype.floorClassList as ClassList>

                                                    <div class="focus-content items">
                                                        <#if ClassList.goodsList??>
                                                            <#list ClassList.goodsList as item>
                                                                <dl>
                                                                    <dt><a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${(item_index+1)}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(item.goodsImgs[0].src)!}_160.jpg" alt="${(item.goodsImgs[0].alt)!}" width="180" height="180" /></a></dt>
                                                                    <dd class="title"><a href="${(item.detailHref)!}" data-code="${(item.affixAttr.oldModelId)!}-${(item_index+1)}" target="_blank">${(item.name)!}</a></dd>
                                                                    <dd class="info">${(item.salesPromotionTitle)!}</dd>
                                                                    <dd class="price" productId="${(item.productId)!}" skuId="${(item.sku)!}" data-target="p-price" data-skuId="${(item.skuId)!}"><span class="wanPrice">${(item.price?c?string)!}</span>万</dd>
                                                                    <dd class="two-dimension"></dd>
                                                                    <dd class="collect"><span>◥</span><i class="floor_collect_icon"></i></dd>
                                                                </dl>
                                                            </#list>
                                                        </#if>
                                                    </div>

                                                </#list>
                                            </#if>
                                        </#if>
                                    </#list>
                                </#if>
                            </#if>
                        </div>
                    </div>
                    <ul class="gome-goods-list gloadPic goods-list-f">
                        <#if (vehicles.brand??)!>
                            <#list vehicles.brand as brand>
                                <li class="goods-list <#if (brand_index+1)==8>last</#if>"><a href="${(brand.href)!}" data-code="${(brand.linkOtherAttr.oldModelId)!}-${(brand_index)}" title="${(brand.title)!}" target="_blank"><img href="${(brand.title)!}"  src="${(gomeImgLoad)!}" gome-src="${(brand.src)!}" alt="${(brand.alt)!}" width="90" height="45"></a></li>
                            </#list>
                        </#if>
                    </ul>
                </div>
                <div class="slider-bar">
                    <div class="sell-step">
                        <p class="title"><b>4</b>步买汽车</p>
                    </div>
                    <ul class="sell-step-text">
                        <li><span>1</span>客户选车下订单</li>
                        <li><span>2</span>客服电联客户<br /><span class="hide"></span>确认购买信息</li>
                        <li><span>3</span>客户到店提车</li>
                        <li style="margin:0;"><span>4</span>确认收货并评价</li>
                    </ul>
                    <div class="services"><a href="javascript:" class="triggerLive800 service-btn" data-customer_service_id="3"><em></em>在线客服</a><a class="service-hover" href="javascript:;">
                        <i class="kf">微信语音客服<em class="point"></em></i><i class="mpic"></i>
        <span class="hmask">
        <i class="mask"></i>扫描关注
        </span></a>
                    </div>
                    <div class="gome-main-mod gloadPic main-mod-d">
                        <#if (vehicles.promotion)??>
                            <#if vehicles.promotion.type??>
                                <ul class="gome-goods-list goods-list-d">
                                    <#if vehicles.promotion.type=="0">
                                        <li class="goods-list advert-pos">
                                            <div class="pic"><a href="${(vehicles.promotion.prom.href)!}" data-code="${(vehicles.promotion.prom.linkOtherAttr.oldModelId)!}" title="${(promList.prom.title)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(vehicles.promotion.prom.src)!}" alt="${(vehicles.promotion.prom.alt)!}" width="250" height="307"/></a></div>
                                            <div class="introd">
                                                <div class="name"><a href="${(vehicles.promotion.prom.href)!}" data-code="${(vehicles.promotion.prom.linkOtherAttr.oldModelId)!}" target="_blank">${(promList.prom.title)!}</a></div>
                                                <div class="brief">${(promList.prom.salesPromotionTitle)!}</div>
                                            </div>
                                        </li>
                                        <!--无法埋码-->
                                        <#elseif vehicles.promotion.type=="1">
                                            <li class="goods-list group-goods">
                                                <div class="pic"><a href="${(vehicles.promotion.fsTuanGouGoods.detailHref)!}" target="_blank"><img src="${(vehicles.promotion.fsTuanGouGoods.goodsImgs[0].src)!}_160.jpg" alt="${(vehicles.promotion.fsTuanGouGoods.groupName)!}" width="180" height="180"/></a></div>
                                                <div class="introd">
                                                    <div class="brief">${(vehicles.promotion.fsTuanGouGoods.salesPromotionTitle)!}</div>
                                                    <div class="name"><a href="${(vehicles.promotion.fsTuanGouGoods.detailHref)!}" target="_blank">${(vehicles.promotion.fsTuanGouGoods.groupName)!}</a></div>
                                                </div>
                                                <div class="price"><span class="prix">¥${(vehicles.promotion.fsTuanGouGoods.tuanGouPrice)!}</span><span class="del">¥${(vehicles.promotion.fsTuanGouGoods.gomePrice)!}</span><a href="${(vehicles.promotion.fsTuanGouGoods.detailHref)!}" target="_blank" class="buy">马上团</a></div>
                                            </li>
                                            <#elseif vehicles.promotion.type=="2">
                                                <li class="goods-list panic-goods">
                                                    <div class="top">
                                                        <div class="time" starttime="${(vehicles.promotion.fsRushGoods.startTime)!}" endtime="${(vehicles.promotion.fsRushGoods.endTime)!}" ><span class="hour">14</span>：<span class="minute">20</span>：<span class="second">15</span></div>
                                                        <span class="alt">限量${(vehicles.promotion.fsRushGoods.limitQuantity)!}件</span>
                                                    </div>
                                                    <div class="pic"><a href="${(vehicles.promotion.fsRushGoods.detailHref)!}" target="_blank"><img width="180" height="180" src="${(gomeImgLoad)!}" gome-src="${(vehicles.promotion.fsRushGoods.goodsImgs[0].src)!}_160.jpg" alt="${(vehicles.promotion.fsRushGoods.name)!}" width="180" height="180"/></a></div>
                                                    <div class="introd">
                                                        <div class="price"><span class="prix">¥${(vehicles.promotion.fsRushGoods.rushPrice)!}</span><span class="del">¥${(vehicles.promotion.fsRushGoods.price)!}</span></div>
                                                        <div class="name"><a href="${(vehicles.promotion.fsRushGoods.detailHref)!}" target="_blank">${(vehicles.promotion.fsRushGoods.name)!}</a></div>
                                                        <div class="brief">${(vehicles.promotion.fsRushGoods.salesPromotionTitle)!}</div>
                                                    </div>
                                                </li>
                                                <!--无法埋码 end-->
                                    </#if>
                                </ul>
                            </#if>
                        </#if>
                    </div>
                </div>
            </div>
            <div class="vspace"></div>

            <#if (carFloorsList??)&&(carFloorsList?size>0)>
                <#list carFloorsList as floorList>
                    <div class="column">
                        <div class="col-970 fl">
                            <div class="tswitchContent" id="tswitch${floorList_index+1}">
                                <div class="gome-model-head model-head-b"><h3 class="model-title fl">${(floorList.title)!}</h3>
                                    <div class="gome-tab-tag fr">
                                        <#if (floorList.carTabList??)&&(floorList.carTabList?size>0)>
                                            <#list floorList.carTabList as floorTag>
                                                <span class="tab-tag">${(floorTag.text)!}</span>
                                            </#list>
                                        </#if>
                                    </div>
                                </div>
                                <div class="gome-main-mod gome-tab-content main-mod-a">
                                    <#if (floorList.carTabList??)&&(floorList.carTabList?size>0)>
                                        <#list floorList.carTabList as conData>
                                            <div class="content-data<#if conData_index==0> gloadPic</#if>">
                                                <ul class="gome-goods-list goods-list-a">
                                                    <#if (conData.promotionList??)&&(conData.promotionList?size>0)>
                                                        <#list conData.promotionList as promList>
                                                            <#if promList.type??>
                                                                <#if promList.type=="0">
                                                                    <li class="goods-list advert-pos">
                                                                        <div class="pic"><a href="${(promList.prom.href)!}" data-code="${(promList.prom.linkOtherAttr.oldModelId)!}" title="${(promList.prom.title)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(promList.prom.src)!}" alt="${(promList.prom.alt)!}" width="250" height="307"/></a></div>
                                                                        <div class="introd">
                                                                            <div class="name"><a href="${(promList.prom.href)!}" data-code="${(promList.prom.linkOtherAttr.oldModelId)!}">${(promList.prom.title)!}</a></div>
                                                                            <div class="brief">${(promList.prom.salesPromotionTitle)!}</div>
                                                                        </div>
                                                                    </li>
                                                                    <!--无法埋码-->
                                                                    <#elseif promList.type=="1">
                                                                        <li class="goods-list group-goods">
                                                                            <div class="pic"><a href="${(promList.fsTuanGouGoods.detailHref)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(promList.fsTuanGouGoods.goodsImgs[0].src)!}_160.jpg" alt="${(promList.fsTuanGouGoods.name)!}" width="180" height="180"/></a></div>
                                                                            <div class="introd">
                                                                                <div class="name"><a href="${(promList.fsTuanGouGoods.detailHref)!}" target="_blank">${(promList.fsTuanGouGoods.groupName)!}</a></div>
                                                                                <div class="brief">${(promList.fsTuanGouGoods.groupBrief)!}</div>
                                                                            </div>
                                                                            <div class="price" data-target="p-price" data-skuId="${(promList.fsTuanGouGoods.skuId)!}" data-s="true"><span class="prix">¥${(promList.fsTuanGouGoods.tuanGouPrice)!}</span><span class="del">¥<s class="oPrice">${(promList.fsTuanGouGoods.gomePrice)!}</s></span><a href="${(promList.fsTuanGouGoods.detailHref)!}" class="buy">马上团</a></div>
                                                                        </li>
                                                                        <#elseif promList.type=="2">
                                                                            <li class="goods-list panic-goods">
                                                                                <div class="top">
                                                                                    <div class="time" starttime="${(promList.fsRushGoods.startTime)!}" endtime="${(promList.fsRushGoods.endTime)!}"><span class="hour">14</span>：<span class="minute">20</span>：<span
                                                                                            class="second">15</span></div>
                                                                                    <span class="alt">限量${(promList.fsRushGoods.limitQuantity)!}件</span>
                                                                                </div>
                                                                                <div class="pic"><a href="${(promList.fsRushGoods.detailHref)!}" target="_blank"><img width="180" height="180" src="${(gomeImgLoad)!}" gome-src="${(promList.fsRushGoods.goodsImgs[0].src)!}_160.jpg" alt="${(promList.fsRushGoods.name)!}"/></a></div>
                                                                                <div class="introd">
                                                                                    <div class="price" data-target="p-price" data-skuId="${(promList.fsTuanGouGoods.skuId)!}" data-s="true"><span class="prix">¥${(promList.fsRushGoods.rushPrice)!}</span><span class="del">¥<s class="oPrice">${(promList.fsRushGoods.price)!}</s></span></div>
                                                                                    <div class="name"><a href="${(promList.fsRushGoods.detailHref)!}" target="_blank">${(promList.fsRushGoods.name)!}</a></div>
                                                                                    <div class="brief">${(promList.fsRushGoods.salesPromotionTitle)!}</div>
                                                                                </div>
                                                                            </li>
                                                                            <!--无法埋码 end-->
                                                                </#if>
                                                            </#if>
                                                        </#list>
                                                    </#if>
                                                </ul>
                                                <ul class="gome-goods-list goods-list-b">
                                                    <#if (conData.goods??)&&(conData.goods?size>0)>
                                                        <#list conData.goods as prodsList>
                                                            <li class="goods-list">
                                                                <div class="introd">
                                                                    <div class="name"><a href="${(prodsList.detailHref)!}" data-code="${(prodsList.affixAttr.oldModelId)!}-${prodsList_index+1}" target="_blank">${(prodsList.name)!}</a></div>
                                                                    <div class="brief">${(prodsList.salesPromotionTitle)!}</div>
                                                                    <div class="price" data-target="p-price" data-skuId="${(prodsList.skuId)!}" data-s="true"><span class="prix" skuId="${(prodsList.sku)!}" productId="${(prodsList.productId)!}">¥<i class="minPrice">${(prodsList.price)!}</i></span><span class="del">¥<s class="oPrice">${(prodsList.gomePrice)!}</s></span></div>
                                                                </div>
                                                                <div class="pic"><a href="${(prodsList.detailHref)!}" data-code="${(prodsList.affixAttr.oldModelId)!}-${prodsList_index+1}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(prodsList.goodsImgs[0].src)!}_160.jpg" alt="${(prodsList.name)!}"/></a></div>
                                                                <div class="cover">
                                                        <span class="collect floor_collect" data-image="${(prodsList.goodsImgs[0].src)!}_160.jpg" data-href="${(prodsList.detailHref)!}" data-name="${(prodsList.name)!}" data-price="${(prodsList.price)!}" data-pid="${(prodsList.productId)!}" data-sku="${(prodsList.sku)!}" title="点击收藏" >
                                                            <span>◥</span>
                                                            <i class="floor_collect_icon"></i>
                                                        </span>

                                                                    <div class="mask">
                                                                        <#if (prodsList.goodsModel[0].src)??>
                                                                            <img src="${(prodsList.goodsModel[0].src)!}"/>
                                                                        </#if>
                                                                        <#if (prodsList.goodsModel[0].imgOtherAttr)??>
                                                                            <p>${(prodsList.goodsModel[0].imgOtherAttr.promoDesc)!}</p>
                                                                        </#if>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </#list>
                                                    </#if>
                                                </ul>

                                                <ul class="gome-goods-list goods-list-f">
                                                    <#if (conData.brand??)&&(conData.brand?size>0)>
                                                        <#list conData.brand as brandList>
                                                            <li class="goods-list<#if (brandList_index+1)==8> last</#if>"><a href="${(brandList.href)!}"  data-code="${(brandList.linkOtherAttr.oldModelId)!}-${brandList_index+1}" target="_blank" title="${(brandList.title)!}"><img src="${(gomeImgLoad)!}" gome-src="${(brandList.src)!}" alt="${(brandList.alt)!}"/></a></li>
                                                        </#list>
                                                    </#if>
                                                </ul>
                                            </div>
                                        </#list>
                                    </#if>


                                </div>
                            </div>
                        </div>
                        <div class="col-230 gloadPic fr">
                            <div class="gome-side-mod side-mod-e">
                                <div class="mod-hd"><div class="leftBack"></div><div class="rightBack"></div><span class="tpl">${(floorList.tops.name)!}</span></div>
                                <div class="mod-bd">
                                    <#if (floorList.tops??)&&(floorList.tops.rightTops??)&&(floorList.tops.rightTops?size>0)>
                                        <#list floorList.tops.rightTops as sideList>
                                            <div class="intro-list<#if sideList_index+1==4> intro-last</#if>">
                                                <h3 class="gname"><a href="${(sideList.category.href)!}" data-code="${(sideList.category.linkOtherAttr.oldModelId)!}" target="_blank">${(sideList.category.text)!}</a><em>&gt;</em></h3>
                                                <p>${(sideList.category.title)!}</p>
                                                <ul class="pic-intro">
                                                    <li class="pic"><a href="${(sideList.category.href)!}" data-code="${(sideList.category.linkOtherAttr.oldModelId)!}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="${(sideList.goods.goodsImgs[0].src)!}_120.jpg" alt="${(sideList.goods.name)!}" /></a></li>
                                                    <!--无法埋码-->
                                                    <li class="intro">
                                                        <a href="${(sideList.goods.detailHref)!}" target="_blank">${(sideList.goods.name)!}</a>
                                                        <span class="price" data-target="p-price" data-skuId="${(sideList.goods.skuId)!}" productId="${(sideList.goods.productId)!}" skuId="${(sideList.goods.sku)!}" >¥<i class="minPrice">${(sideList.goods.price)!}</i></span>
                                                    </li>
                                                    <!--无法埋码 end-->
                                                </ul>
                                            </div>
                                        </#list>
                                    </#if>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="vspace"></div>
                </#list>
            </#if>



            <#if theme??>
                <div class="column">
                    <div class="col-970 fl">
                        <div class="gome-model-head model-head-a"><span class="model-title">${(theme.name)!}</span></div>
                        <div class="gome-main-mod gome-tab-content main-mod-b" id="tswitch-c">
                            <ul class="theme-tag">
                                <#if (theme.tabDataList??)&&(theme.tabDataList?size>0)>
                                    <#list theme.tabDataList as tagList>
                                        <li class="tab-tag">
                                            <div class="cover"></div>
                                            <span class="tname">${(tagList.title)!}</span>
                                        </li>
                                    </#list>
                                </#if>
                            </ul>
                            <#if (theme.tabDataList??)&&(theme.tabDataList?size>0)>
                                <#list theme.tabDataList as dataList>
                                    <div class="content-data<#if dataList_index==0> gloadPic</#if>">
                                        <div class="theme-image">
                                            <#if dataList.picture??>
                                                <div class="imgdata"><img src="${(gomeImgLoad)!}" gome-src="${(dataList.picture.src)!}" alt="${(dataList.picture.alt)!}"/></div>
                                            </#if>
                                        </div>
                                        <div class="theme-list">
                                            <ul class="gome-goods-list">
                                                <#if (dataList.goodsList??) && (dataList.goodsList?size>0)>
                                                    <#assign lastNum=dataList.goodsList?size>
                                                        <#list dataList.goodsList as picList>
                                                            <li class="goods-list<#if (picList_index+1)==lastNum> last</#if>">
                                                                <div class="img"><a href="${(picList.detailHref)!}" data-code="${(picList.affixAttr.oldModelId)!}-${picList_index+1}" target="_blank"><img src="${(gomeImgLoad)!}" gome-src="<#if (picList.manualImg!) =="" >${(picList.goodsImgs[0].src)!}_160.jpg<#else>${(picList.manualImg)!}</#if>"  alt="${(picList.goodsImgs[0].alt)!}"/></a></div>
                                        <div class="name"><a href="${(picList.detailHref)!}" data-code="${(picList.affixAttr.oldModelId)!}-${picList_index+1}" target="_blank">${(picList.name)!}</a>
                                            <#if (picList.manualImg!)=="">
                                                <p class="price" data-target="p-price" data-skuId="${picList.skuId}" productId="${(picList.productId)!}" skuId="${(picList.sku)!}">¥<span class="minPrice">${(picList.price)!}</span></p>
                                                <#else>
                                                    <p>${(picList.salesPromotionTitle)!}</p>
                                            </#if>
                                        </div>
                                        </li>
                                </#list>
                            </#if>
                            </ul>
                        </div>
                    </div>
                    </#list>
            </#if>
            </div>
            </div>

            <div class="col-230 gloadPic fr">
                <div class="gome-side-mod side-mod-b">
                    <div class="mod-hd"><span class="tpl">晒单</span><span class="tpr"><a href="${theme.share.href!}" class="more" target="_blank">更多</a></span></div>
                    <div class="mod-bd">
                        <ul class="gome-goods-list goods-list-c">
                            <#if (theme.share.imgList??) && (theme.share.imgList?size>0) >
                                <#list theme.share.imgList as slist>
                                    <li  class="goods-list <#if (slist_index+1)%2==0>m0</#if>"><a href="${(slist.href)!}" data-code="${(slist.linkOtherAttr.oldModelId)!}-${slist_index+1}" target="_blank" title="${(slist.title)!}"><img src="${(gomeImgLoad)!}" gome-src="${(slist.src)!}"  alt="${(slist.alt)!}" width="100" height="100" /></a></li>
                                </#list>
                            </#if>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            </div>
            </#if>


            <div class="vspace"></div>
            <div class="column">
                <div id="tswitch-d">
                    <div class="gome-tab-tag tab-tag-c"><span class="tab-tag active">常见问题</span><span class="tab-tag" data="false" id="myquestion">我的问题</span></div>
                    <div class="gome-main">
                        <div class="gome-main-mod main-mod-c">
                            <div class="gome-tab-content">
                                <div class="tab-data content-data">
                                    <ul class="problem-list">
                                        <#if (carProblems??)&&(carProblems?size>0)>
                                            <#list carProblems as askitem>
                                                <li <#if askitem_index==0>class="checked"</#if> questionId="${(askitem.id?c)!}">
                                                <div class="probox">
                                                    <div class="problem">${(askitem.question)!}<a href="javascript:" class="check">查看回复</a></div>
                                                    <div class="author"><span class="name">${(askitem.userName)!}</span><span class="date">${(askitem.createDate?string("yyyy-MM-dd HH:mm:ss"))!}</span><span class="count">浏览数：${(askitem.browseNumber)!}</span></div>
                                                </div>
                                                <div class="reply"><strong>回复：</strong>${(askitem.replyContent)!}</div>
                                                </li>
                                            </#list>
                                        </#if>
                                    </ul>
                                </div>
                                <div class="tab-data content-data">
                                    <div id="requestTip">正在加载数据，请稍候。。。</div>
                                    <ul class="problem-list" id="problem-list">

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="gome-side-mod side-mod-c">
                            <div class="mod-bd">
                                <div class="prompt">如果有购买、保养、维修、保险、学车方面的问题可以咨询我们的顾问，他们会给您相关的帮助。</div>
                                <div class="ask">我要提问：</div>
                                <div class="entryBord" id="countInput-a">
                                    <div class="count"><span class="nowCount">150</span>/<span class="totalCount">150</span></div>
                                    <textarea class="inputText" id="inputQuestion" placetext="详细描述您的问题以便得到更准确的解答！">详细描述您的问题以便得到更准确的解答！</textarea>
                                    <div class="error">错误提示信息</div>
                                </div>
                                <span class="submit" id="submitQuestion">提交</span>
                                <div class="altMessage">如有商品问题联系<a href="javascript:void(0);" class="onlineService triggerLive800"  data-customer_service_id="3">在线客服</a>寻求解决。</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="vspace"></div>
            <!--尾部开始-->
            <!--#include virtual="/n/common/a01/foot.html"-->
            <!--#include virtual="/n/common/a01/aside.html"-->
            <!--尾部结束-->

            <div id="overContent" class="overContent">
                <a href="javascript:" class="closeOverLayer" id="closeOverLayer">×</a>
                <div class="overPad">
                    <iframe id="overFrame" name="overFrame" src="" scrolling="auto" width="1160" height="" frameborder="0" allowtransparency="true"></iframe>
                </div>
            </div>



            <div id="popLogin-dytscBir" style="display:none">
                <iframe id="popLogin-ifrWindow" src="" frameborder="0" scrolling="no" style="width:462px;height:605px;" allowTransparency="true"></iframe>
            </div>
            <div id="submitStatusTip">
                <a id="closeStatus" class="closeStatus" href="javascript:">×</a>
                <div class="tipMessage">
                    <table><tr>
                        <td class="img"><span class="tipImg"></span></td>
                        <td>
                            <h3>提交成功24小时内答复!</h3>
                            <p>答复会在【我的问题】中出现，请随时关注。</p>
                        </td></tr></table>
                </div>
            </div>

            <script src="<!--#include virtual='/n/common/a01/script.html'-->,gmlib/sea/seajs/3.0.0/sea.js,gmlib/sea/seajs-combo/1.0.0/seajs-combo.js"></script>
            <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript"></script>
            <script type="text/javascript" inbottom>
                seajs.config({base:"${storeConfiguration.stageJsServer!}"});
                seajs.use(['gmlib/ui/gload/1.0.0/gload.min.js',"gmlib/ui/getajaxprice/1.0.0/getajaxprice.min.js",'gmlib/unit/gtime/1.0.0/gtime.min.js',"gmlib/unit/g/1.0.0/g.min.js","gmlib/unit/live800/2.0.0/live800.min.js","/js/chexiancityselect","/js/page"],function(){
                    carSuperMarket.init();
                    //价格异步
                    $(".gome-tab-content,.gome-counselor,.block_content,.mod-bd").getAjaxPrice();
                    window.setTimeout(function () {
                        var editMarks = $("#editModeId").attr("editMark");
                        if (editMarks == 1) { //可视化编辑
                            seajs.use(['gmlib/unit/gedit/1.0.0/dialogs.min.js','gmlib/unit/gedit/1.0.0/editmode.min.js','gmlib/unit/gedit/1.0.0/editmodule.min.js'],function () {
                                editMode.init();
                            });
                        }
                        seajs.use(['gmlib/unit/scode/1.0.0/scode.min.js','gmlib/unit/bigdata/1.0.0/bigdata.min.js','gmlib/unit/scodecommon/1.0.0/scodecommon.min.js'],function(){
                            s.pageName="商品列表:汽车频道超市页";
                            s.channel="商品列表";
                            s.prop1="商品列表:汽车频道超市页";
                            s.prop2="商品列表:汽车频道超市页";
                            s.prop3="商品列表:汽车频道超市页";
                            s.prop4="商品列表";
                            s.eVar3="分类浏览";
                            s.eVar30="分类浏览";
                            var s_code=s.t();
                            if (s_code) {
                                document.write(s_code);
                            }
                        })
                    }, 2000);
                });
            </script>
    </body>
    </html>