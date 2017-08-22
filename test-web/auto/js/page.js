// JavaScript Document
var carSuperMarket = {
    init: function() {
        window.signData.toSite = 'carmarket';
        this.tabswitch("#tswitch-a", "mouseover"); //推荐商品
        this.switchTag("#tswitch-b", 3); //搜索
        this.tabswitch("#tswitch-c", "mouseover"); //主题推荐
        this.tabswitch("#tswitch-d", "click"); //常见问题
        this.tabswitch(".tswitchContent", "mouseover"); //楼层
        this.expandContent("#tswitch-d"); //查看回复
        this.countTextareaVal("#countInput-a", 150); //"我要提问"输入字数统计
        this.slidePage("#slidePage01"); //"咨询师告诉你"问题列表滑动效果
        this.handleNav(); //处理频道标题最后一个的显示问题
        this.gplay("focus-play", 0, 5000); //首屏轮播
        this.operateOverlay(); //点击"咨询师告诉你"问题列表弹出层
        this.checkMyproblem(); //查看我的问题
        this.consultationQuestions(); //提交问题	
        this.rushBuy(); //抢购倒计时
        this.vehicles();
        this.floorObject = $(".gomecard");
        this.floorBind();//收藏功能
        this.setviewCount();//设置问题的浏览数
    },
    gplay: function(id, start, delay) { //ID,从第几张开始播放，播放时间间隔
        this.element = $("#" + id);
        var _this=this;
        var imgList = this.element.find(".focus-img");
        var len = imgList.length;
        this.ftimer = null;
        var fbox = $("<div class='focus-option-btn'></div>");
        var gnav = $("<div class='focus-nav'></div>");
        var fprev = $("<a href='javascript:' class='focus-btn focus-prev'><span></span><em></em></a>");
        var fnext = $("<a href='javascript:' class='focus-btn focus-next'><span></span><em></em></a>");
        var prevNum = 0;
        var startNum = start || 0;
        if (startNum >= len || startNum < 0) {
            startNum = 0
        }
        fbox.css({
            "zIndex": len + 1
        });
        for (var i = 0; i < len; i++) {
            $("<a href='javascript:'></a>").appendTo(gnav);
        }
        fnext.prependTo(fbox);
        fprev.prependTo(fbox);
        gnav.appendTo(fbox);
        fbox.appendTo(this.element);
        fprev = $(this.element).find(".focus-prev");
        if (gnav) {
            var nav = gnav.children();
            nav.eq(startNum).addClass("active").siblings().removeClass("active");
        }
        imgList.css({
            "zIndex": 0
        });
        imgList.eq(startNum).css({
            "zIndex": 1
        }).fadeIn();
        this.element.on({
            "mouseover": function() {
                clearInterval(_this.ftimer);
                //if (! (fprev.is(":animated"))) {
                    fprev.fadeIn(0);
                    fnext.fadeIn(0);
                //}
            },
            "mouseout": function() {
                //if (! (fprev.is(":animated"))) {
                    fprev.fadeOut(0);
                    fnext.fadeOut(0);
                //}
                _this.ftimer = setInterval(playNext, delay);
            }
        });

        this.ftimer = setInterval(playNext, delay); //自动播放
        nav.mouseover(function() {
            prevNum = startNum;
            startNum = $(this).index();
            nav.eq(startNum).addClass("active").siblings().removeClass("active");
			var backsrc="";
			if(imgList.eq(startNum).attr('backsrc')){
				backsrc=imgList.eq(startNum).attr('backsrc');
				imgList.eq(startNum).css({"background":"url("+backsrc+") 50% 0 no-repeat"});
			}
            imgList.eq(prevNum).css({
                "zIndex": 0
            }).stop(true,true).fadeOut();

            imgList.eq(startNum).css({
                "zIndex": 1,
            }).stop(true,true).fadeIn(function(){$(this).removeAttr("backsrc")});
        });
        fprev.on("click",
        function() {
            playPrev();
        });
        fnext.on("click",
        function() {
            playNext();
        });

        function playPrev() { //左翻页方法
            prevNum = startNum;
            if (startNum == 0) {
                startNum = len - 1
            } else {
                startNum--;
            }
            nav.eq(startNum).addClass("active").siblings().removeClass("active");
			var backsrc="";
			if(imgList.eq(startNum).attr('backsrc')){
				backsrc=imgList.eq(startNum).attr('backsrc');
				imgList.eq(startNum).css({"background":"url("+backsrc+") 50% 0 no-repeat"});
			}
            imgList.eq(prevNum).css({
                "zIndex": 0
            }).stop(true,true).fadeOut();
            imgList.eq(startNum).css({
                "zIndex": 1
            }).stop(true,true).fadeIn(function(){$(this).removeAttr("backsrc")});
        }

        function playNext() { //右翻页方法
            prevNum = startNum;
            if (startNum == len - 1) {
                startNum = 0
            } else {
                startNum++;
            }
            nav.eq(startNum).addClass("active").siblings().removeClass("active");
			var backsrc="";
			if(imgList.eq(startNum).attr('backsrc')){
				backsrc=imgList.eq(startNum).attr('backsrc');
				imgList.eq(startNum).css({"background":"url("+backsrc+") 50% 0 no-repeat"});
			}
            imgList.eq(prevNum).css({
                "zIndex": 0
            }).stop(true,true).fadeOut();
            imgList.eq(startNum).css({
                "zIndex": 1
            }).stop(true,true).fadeIn(function(){$(this).removeAttr("backsrc")});
        }

    },
    switchTag: function(id, show) {
        var obj = $(id);
        var tabTag = obj.find(".tab-tag");
        var tabCon = obj.find(".content-data");
        var len = tabTag.length;
        if (show) {
            var show = show || 1;
            if (show < 0 || show > len) {
                show = 1;
            }
        } else {
            show = 1
        }

        $(tabTag).removeClass("active");
        $(tabTag).eq(show - 1).addClass("active");
        $(tabCon).removeClass("show");
        $(tabCon).eq(show - 1).addClass("show");
        $(tabTag).eq(show - 1).parent().find(".col").css({
            "display": "none"
        });
        $(tabTag).click(function() {
            $(tabTag).removeClass("active");
            $(this).addClass("active");
            $(this).parent().siblings().find(".col").css({
                "display": "block"
            });
            $(this).parent().find(".col").css({
                "display": "none"
            });
            $(tabCon).removeClass("show");
            var roll = $(this).attr("roll");
            $(tabCon).each(function() {
                if ($(this).attr("roll") == roll) {
                    $(this).addClass("show");
                }
            });

        });
    },
    tabswitch: function(obj, ev, show) {
        var obj = $(obj);
		var _this=this;
        obj.each(function(i, items) {
            var tabTag = $(this).find(".tab-tag");
            var tabCon = $(this).find(".content-data");
            var len = tabTag.length;
            if (show) {
                var show = show || 1;
                if (show < 0 || show > len) {
                    show = 1;
                }
            } else {
                show = 1
            }

            tabTag.eq(show - 1).addClass("active").siblings().removeClass("active");
            $(tabCon).eq(show - 1).addClass("show").siblings().removeClass("show");

            $(tabTag).on(ev,
            function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(tabCon).eq($(this).index()).addClass("show").siblings().removeClass("show");
				_this.tabLazyLoad(this,$(tabCon).eq($(this).index()));
            });

        });
    },
    expandContent: function(id) {
        var check = $(id).find(".check");
        $(check).on("click",
        function() {
            $(this).parents(".problem-list").find("li").removeClass("checked");
            $(this).parents("li").addClass("checked");
            var curID=$(this).parents("li").attr("questionId");
            var count=$(this).parents("li").find(".count");
            $.ajax({//请求当前问题的浏览数
                url:imgServer+'/grey.gif',
                dataType: 'jsonp',
                type: 'get',
                data: {
                    "id": curID
                },
                jsonp: 'type',
                jsonpName: 'car',
                success: function(data){}
            });
        })

    },
    countTextareaVal: function(obj, count) { //统计输入字符数
        var obj = $(obj);
        var rest = obj.find(".nowCount");
        var total = obj.find(".totalCount");
        var tarea = obj.find(".inputText");
        var rule = /<[^<>]+>|insert|update|delete|\s{2,}|^\s+/gi; //过滤HTML SQL
        total.text(count);
        rest.text(count);
        var tarea = obj.find(".inputText");
        var defval = tarea.attr("placetext");
        tarea.focus(function() {
            if ($(this).val() == defval) {
                $(this).addClass("focus").val("");
            }
        }).blur(function() { //失去焦点
            $(this).removeClass("focus");
            if ($(this).val() == "" || $(this).val() == defval) {
                $(this).val(defval);
                $(this).parents("#countInput-a").find(".error").fadeOut();
            };

        }).bind("input propertychange keyup keydown",
        function() {
            var text = $(this).val();
            $(this).val(text.replace(rule, ""));
            var len = $(this).val().length;
            if (len > count) {
                $(this).val($(this).val().slice(0, count));
            }
            var remain = (count - len) < 0 ? 0 : (count - len);
            rest.text(remain);
            if (remain == count) {
                $(this).parents("#countInput-a").find(".error").text("请输入您的问题").fadeIn();
            } else {
                $(this).parents("#countInput-a").find(".error").fadeOut();
            }
        });

    },
    slidePage: function(id) {
        var obj = $(id);
        var list = obj.find(".slide-list");
        var Li = obj.find(".slide-list > li");
        var area = obj.find(".slide-area");
        var len = Li.length;
        var ind = 0;
        var scw = area.width();
        obj.css({
            "position": "relative"
        });
        list.css({
            "width": scw * len
        });
        if (len > 1) {
            var BL = $("<a href='javascript:' class='slideBtn slideBl noSlideBl'>&lt;</a>");
            var BR = $("<a href='javascript:' class='slideBtn slideBr'>&gt;</a>");
            BR.prependTo(obj);
            BL.prependTo(obj);
            BL = obj.find(".slideBl");
            BR = obj.find(".slideBr");
        }

        function BRautoRun() { //向右翻页
            BL.removeClass("noSlideBl");
            if (ind == len - 2) {
                BR.addClass("noSlideBr");
            }

            if (ind == len - 1) {

                return false;
            } else {
                ind++;
            };

            list.animate({
                "left": -scw * ind
            });

        }

        function BLautoRun() { //向左翻页
            BR.removeClass("noSlideBr");
            if (ind == 1) {
                BL.addClass("noSlideBl");
            }
            if (ind == 0) {

                return false;
            } else {
                ind--;

            };

            list.animate({
                "left": -scw * ind
            });

        };

        if (len > 1) {
            BR.click(function() { //点击右侧箭头向左翻页
                if (!$(list).is(":animated")) {
                    BRautoRun();
                }
            }); //END
            BL.click(function() { //点击左侧箭头向右翻页
                if (!$(list).is(":animated")) {
                    BLautoRun();
                }
            }); //END
        }

    },
    operateOverlay: function() {
        var _this = this;
        $(".list-data").click(function() { //弹出层
           // var dataScroll = $("#overFrame").contents().find("#dataScroll");
            //var dataScroll=$(window.frames["overFrame"].document).contents().find("#dataScroll");
            //dataScroll.height($(window).height() - 105);
           // alert(dataScroll.length);
            $("#overFrame").height($(window).height());
            var src = $(this).attr("frameSrc")+'?height='+($(window).height() - 105);
            //$("#overFrame").attr("src",staSite.replace(/www/g,"prom")+src);
            $("#overFrame").attr("src", src);
            pop.layerShow("nobj", "overContent");

        });
        $("#closeOverLayer").click(function() { //关闭层
            pop.closeLayer("overContent");
        });
    },
    getMyQuestion: function() {
        var _this = this;
        g.login(function(){
            if ($("#myquestion").attr("data") == "false") {
                _this.getQuestionList();
            }
        })
    },
    getQuestionList: function() {
        var _this = this;
        var userId = window.loginData.loginId;
        $.ajax({
            type: "POST",
            url: "//ss" + cookieDomain + "/ec/homeus/carPage/myProblem.jsp?t=" + new Date().getTime(),
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpName: 'getProblems',
            data: {
                "userId": userId
            },
            error: function() {
                $("#requestTip").fadeIn().text("请求失败，请重试!");
            },
            success: function(data) {
                $("#myquestion").attr("data", "true");

                if (data.problemList.length == 0) {
                    $("#requestTip").fadeIn().text("暂无相关内容，提问请在右侧【我要提问】处提问!");
                } else {
                    $("#requestTip").fadeOut(100);
                }
                $.each(data.problemList,
                function(i, items) {
                    var t = new Date(items.createDate.time);
                    var formatTime = _this.formatData(t);
                    var dataList = $('<li class="checked"><div class="probox"><div class="problem">' + items.question + '</div><div class="author"><span class="name">' + items.userName + '</span><span class="date">' + formatTime + '</span></div></div></li>');
                    var reply = null;
                    if (items.replyContent == "") {
                        reply = $('<div class="reply">暂未得到回复，可以看看其他人的<a href="javascript:" class="wonderfulReplay">精彩问题</a>。</div>');
                        $(".wonderfulReplay").live("click",
                        function() {
                            _this.tabswitch("#tswitch-d", "click"); //常见问题
                        });
                    } else {
                        reply = $('<div class="reply"><strong>回复：</strong>' + items.replyContent + '</div>');

                    }
                    reply.appendTo(dataList);
                    dataList.appendTo($("#problem-list"));

                })

            }

        });
    },
    checkMyproblem: function() {
        var _this = this;
        $("#myquestion").click(function() {
            _this.getMyQuestion(); //我的问题
        });

    },
    consultationQuestions: function() {
        var _this = this;
        var defVal = $("#inputQuestion").attr("placetext");
        var state = true;
        $("#submitQuestion").on("click",
        function() {
            g.login(function(){
                if (state) {
                    if ($("#inputQuestion").val() == defVal || $("#inputQuestion").val() == "") {
                        $("#countInput-a").find(".error").text("请输入您的问题").fadeIn(0);
                        return;
                    } else {
                        var userId = window.loginData.loginId,
                            question = $("#inputQuestion").val();
                            loginName = window.loginData.loginName||state;
                        $.ajax({
                            type: "POST",
                            url: dynSite + contextPath + "/carPage/addCarQuestion.jsp?t=" + new Date().getTime(),
                            dataType: 'jsonp',
                            jsonp: 'callback',
                            jsonpName: 'getResult',
                            data: {
                                "userId": userId,
                                "question": question,
                                "loginName": loginName
                            },
                            error: function() {
                                pop.layerShow("nobj", "submitStatusTip");
                                $("#submitStatusTip").find("h3").text("提交失败！").end().find(".tipImg").addClass("errorImg").end().find("p").text("");
                                $("#closeStatus").click(function() {
                                    pop.closeLayer("submitStatusTip");
                                });
                            },
                            success: function(res) {
                                $("#closeStatus").click(function() {
                                    pop.closeLayer("submitStatusTip");
                                });
                                switch (res.errotType) {
                                    case "isSuccess":
                                        pop.layerShow("nobj", "submitStatusTip");
                                        $("#inputQuestion").val($("#inputQuestion").attr("placetext"));
                                        $("#countInput-a").find(".nowCount").text(150);
                                        break;
                                    case "isParamError":
                                        pop.layerShow("nobj", "submitStatusTip");
                                       $("#submitStatusTip").find("h3").text("传入参数有错误！").end().find(".tipImg").addClass("errorImg").end().find("p").text("");
                                        break;
                                    case "isNoLogin":
                                        pop.layerShow("nobj", "submitStatusTip");
                                        $("#submitStatusTip").find("h3").text("用户还未登录！").end().find(".tipImg").addClass("altImg").end().find("p").text("");
                                        break;
                                    case "waitOneMinute":
                                        pop.layerShow("nobj", "submitStatusTip");
                                        $("#submitStatusTip").find("h3").text("您提交的咨询太频繁，请耐心等待一分钟！").end().find(".tipImg").addClass("altImg").end().find("p").text("");
                                        break;
                                    case "isMoreThen150":
                                        pop.layerShow("nobj", "submitStatusTip");
                                        $("#submitStatusTip").find("h3").text("内容不得多于150个字！").end().find(".tipImg").addClass("altImg").end().find("p").text("");
                                        break;
                                    default:
                                        pop.layerShow("nobj", "submitStatusTip");
                                        $("#submitStatusTip").find("h3").text("数据传输错误！").end().find(".tipImg").addClass("errorImg").end().find("p").text("");
                                        break;

                                };
                            }
                        });

                    }
                    state = false;
                } else {
                    $("#countInput-a").find(".error").text("请勿频繁提交!").fadeIn(0).fadeOut();
                    return false;
                }

                var timer = setTimeout(function() {
                        state = true;
                        $("#countInput-a").find(".error").fadeOut();
                    },
                    10000);
            })
        });
    },
	tabLazyLoad:function(obj,box){//tab切换时加载图片
		var tag=$(obj);
		var imgArr=box.find("img[gome-src]");
		imgArr.each(function(items,ind){
			if($(this).attr("gome-src")){
				$(this).attr("src",$(this).attr("gome-src"));
				$(this).removeAttr("gome-src");
				}
			});

		},
    rushBuy: function() {
        $.ajax({
            url:"//ss"+cookieDomain+ "/item/v1/currentTime/w/a/flag/item/currentTime",
            dataType: 'jsonp',
            type: 'get',
            jsonp: 'callbackparam',
            jsonpName: 'currentTime',
            success: function(res) {
                var time = res.time;
                getTime(time);
            }
        });

        function getTime(time) {

            $('.panic-goods').each(function(i, item) {
                var $cd = $(item),
                $icon = $cd.find('.time');
                var endt = $icon.attr('endtime').replace(/\,/g, ""),
                endt = parseInt(endt);
                var startt = $icon.attr('starttime').replace(/\,/g, ""),
                startt = parseInt(startt);

                var endT = new Number(endt || '0');
                var currT = time || new Number($icon.attr('curtime') || '0');
                var startT = new Number(startt || '0');

                if (currT < startT) {
                    $icon.html('即将开始');
                    return false;
                };
                $.gTimer({
                    ct: currT,
                    et: endT,
                    iEven: function() {},
                    aEven: function() {
                        //var dd=this.dt.format('$dd');
                        var hh = this.dt.format('$hh');
                        var mm = this.dt.format('$mm');
                        var ss = this.dt.format('$s');

                        if (hh == '00' && mm == '00' && ss == '00') {
                            $icon.html('已结束');
                        } else {

                            //if (Number(dd) <= 0 && Number(hh) < 3) {
                            //}
                            $icon.html(' <span class="hour">' + hh + '</span> ： <span class="minute">' + mm + '</span> ： <span class="second">' + ss + '</span>');

                        }
                    },
                    lEven: function() {
                        $icon.html('已结束');
                    }
                });

            });

        }
    },
    formatData: function(timeDate) {
        var nowTime = new Date(timeDate);
        var year = nowTime.getFullYear();
        var month = nowTime.getMonth() + 1;
        var date = nowTime.getDate();
        var hour = nowTime.getHours();
        var minute = nowTime.getMinutes();
        var second = nowTime.getSeconds();
        return year + "." + month + "." + date + "   " + hour + ":" + minute + ":" + second;
    },
    handleNav: function() {
        $(".gloadPic").gLoad({
            e: function() {
                $(this).find('img[gome-src]').each(function() {
                    $(this).attr("src", $(this).attr("gome-src"));
					$(this).removeAttr("gome-src");

                })

            }
        });
    },
    vehicles: function() {
		var _this=this;
        tab(".focus-bar-tab", ".focus-bar-navs", ".focus-contents");
        $.each($(".focus-bar-navs ul"),
        function(i, item) {
            tab(item, $('.focus-items').eq(i));
        });
        function tab(tab, content, other) {
            var tabs = $(tab).children();
            var contents = $(content).children();
            $(tabs).on("click",
            function() {
                var index = $(this).index();
                tabs.removeClass("selected");
                $(this).addClass("selected");

                contents.removeClass("selected");
                contents.eq(index).addClass("selected");
				_this.tabLazyLoad(this,contents);

                if (other) {
                    var others = $(other).children();
                    others.removeClass("selected");
                    others.eq(index).addClass("selected");
					_this.tabLazyLoad(this,others.eq(index).children('.selected'));
                }
            })
        }

		$('.tswitchContent .goods-list').on("mouseover",function(){
			$(this).addClass("selected");
            $(this).find('.collect').show();
            $(this).find('.mask').show();
		})
		$('.tswitchContent .goods-list').on("mouseout",function(){
            $(this).removeClass("selected");
            $(this).find('.collect').hide();
            $(this).find('.mask').hide();
		})
        $(".focus-list > a").on("click",
        function() {
            $(this).parent().children("a").removeClass("selected");
            $(this).addClass("selected");
            var index = $(this).index();
            var next = $(this).closest(".recommend").find(".focus-block-inner").eq(index);
            var focus = $(this).closest(".recommend").find(".focus-block").eq(0);

            focus.html(next.html());
        });

        $('.arrow-l,.arrow-r').on("click",
        function() {
            var imgs = $(this).closest(".sug").find(".focus-imgs").eq(0);
            var index = imgs.find(".selected").index();
            var s = $(this).hasClass("arrow-l") ? -1 : 1;
            var length = imgs.children().length;
            imgs.children().eq(index).removeClass("selected");
            var curIndex = index + s;
            if (curIndex < 0) {
                curIndex = length - 1
            } else if (curIndex >= length - 1) {
                curIndex = 0;
            }
            imgs.children().eq(curIndex).addClass("selected");
        })

        $('.nav_list').hover(function() {

            var nav_left = $(this).find(".nav_left");
            var nav_right = $(this).find(".nav_right");

            nav_left.addClass('hover');

            //#region 显示nav_right
            var scrollTop_view = $(window).scrollTop() + $(window).height(); //总高度scrollTop+视口
            var offsetheight = (nav_left.offset().top + nav_right.outerHeight()) - scrollTop_view;

            if (scrollTop_view < (nav_left.offset().top + nav_left.outerHeight())) { //底部对齐
                nav_right.show().offset({
                    left: nav_left.offset().left + nav_left.outerWidth() - 1,
                    top: nav_left.offset().top + nav_left.outerHeight() - nav_right.outerHeight()
                });
            } else if (scrollTop_view < (nav_left.offset().top + nav_right.outerHeight())) { //自适应
                nav_right.show().offset({
                    left: nav_left.offset().left + nav_left.outerWidth() - 1,
                    top: nav_left.offset().top - offsetheight
                });
            } else { //顶端对齐
                nav_right.show().offset({
                    left: nav_left.offset().left + nav_left.outerWidth() - 1,
                    top: $(this).find(".nav_left").offset().top
                });
            }
            //#endregion
            if (nav_right.find('li').length == 0) {
                nav_right.hide();
                $(this).find(".nav_left").css('border-right', "1px solid #c00");
                $(this).find(".nav_left").css('width', '189');

            }
        },
        function() {
            $(this).find(".nav_left").removeClass('hover');
            $(this).find(".nav_right").hide();
            $(this).find(".nav_left").css('border-right', "0");
            $(this).find(".nav_left").css('width', '190');
        });

        /*搜索分类相关*/
        function getCategory(catId, container) {
            var url = '//api.search'+cookieDomain+'/p/asynSearch';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                type: 'get',
                data: {
                    module:"catalog",
                    cateId: catId,
                    brother:0,
                    from:"autoCat"
                },
                jsonp: 'callback',
                jsonpName: 'callback_catalogChild',
                success: function(res) {
                    container.find("option[value!='']").remove();
                    var str = [];
                    if (res.response.pageJson.content.catObj.children) {
                        for (var i = 0; i <res.response.pageJson.content.catObj.children.length; i++) {
                            str.push('<option value="' + res.response.pageJson.content.catObj.children[i].catId + '">' + res.response.pageJson.content.catObj.children[i].catName + '</option>');
                        }
                    }
                    container.append(str.join(''));
                }
            });
        };
        function getCategoryType(catId, id, container, facetsId) {
            var url = '//api.search'+cookieDomain+'/p/asynSearch?from=auto&module=callFacetsValueById';
            //var url = staSite+'/p/json?module=callFacetsValueById';
            var data = {
                catId: catId,
                from: 'remote',
                id: id
            };
            if (facetsId) {
                $.extend(data, {
                    facetsId: facetsId
                })
            }
            $.ajax({
                url: url,
                dataType: 'jsonp',
                type: 'get',
                data: data,
                jsonp: 'callback',
                jsonpName: 'asynSearch',
                success: function(res) {
                    var str = [];
                    container.find("option[value!='']").remove();
                    if (!res[0]) {
                        return false;
                    }
                    for (var i = 0; i < res[0].items.length; i++) {
                        str.push('<option value="' + res[0].items[i].id + '">' + res[0].items[i].value + '</option>');
                    }
                    container.append(str.join(''));
                    //执行下一个对列
                    $(document).dequeue("myAnimation");
                }
            });
        };
        getCategory('cat18596269', $('#car-accessory select').eq(0));
        $('#car-accessory select').eq(0).on("change",
        function() {
            var carId = $(this).find("option:selected").attr("value");
            getCategory(carId, $('#car-accessory select').eq(1));
            $('#car-accessory select').eq(2).find("option").remove();
            $('#car-accessory select').eq(2).append('<option value="" selected="selected">选择品牌</option>');
        });
        $('#car-accessory select').eq(1).on("change",
        function() {
            var carId = $(this).find("option:selected").attr("value");
            getCategoryType(carId, 2, $('#car-accessory select').eq(2));
        });

        //汽车整车
        $('#car-carload select').eq(0).on("change",
        function() {
            var carId = $(this).find("option:selected").attr("value");
            getCategoryType('cat32897453', 10584, $('#car-carload select').eq(1), carId);
            $('#car-carload select').eq(2).find("option").remove();
            $('#car-carload select').eq(2).append('<option value="" selected="selected">选择车型</option>');
        });
        $('#car-carload select').eq(1).on("change",
        function() {
            var carId = $(this).find("option:selected").attr("value");
            getCategoryType('cat32897453', 10652, $('#car-carload select').eq(2), carId);
        });
        //汽车维护
        $('#driving-school select').eq(0).on("change",
            function() {
                var carId = $(this).find("option:selected").attr("value");
                getCategoryType('cat32897465',30548, $('#driving-school select').eq(1), carId);
            });
        //查看按钮是否可用
        $.each($('#car-carload,#car-accessory,#driving-school'),
        function(i, items) {

            $(items).find("select").on('change',
            function() {
                setTimeout(function() {

                    var show = false;
                    var selects = $(items).find("select");
                    var cate = '';
                    if ($(items).attr("id") == "car-accessory") {
                        cate = selects.eq(1).val();
                    } else if ($(items).attr("id") == "car-carload") {
                        cate = 'cat32897453';
                    } else if ($(items).attr("id") == "driving-school") {
                        cate = 'cat32897465';
                    }

                    //判断按钮是否可用
                    if ($(items).attr("id") == "driving-school") {

                        if (selects.eq(0).find("option:selected").attr("value") != '' || selects.eq(1).find("option:selected").attr("value") != '' || selects.eq(2).find("option:selected").attr("value") != '') {
                            show = true;
                        } else {
                            show = false;
                        }
                    } else if ($(items).attr("id") == "car-carload") {
                        if (selects.eq(0).find("option:selected").attr("value") != '') {
                            show = true;
                        } else {
                            show = false;
                        }
                    } else if ($(items).attr("id") == "car-accessory") {
                        if (selects.eq(0).find("option:selected").attr("value") != '' && selects.eq(1).find("option:selected").attr("value") != '') {
                            show = true;
                        } else {
                            show = false;
                        }
                    }

                    if (show) {

                        if ($(items).attr("id") == "car-accessory") {
                            var val0 = selects.eq(0).val() != "" ? selects.eq(0).val() : '';
                            var val1 = selects.eq(1).val() != "" ? selects.eq(1).val() : '';
                            var val2 = selects.eq(2).val() != "" ? selects.eq(2).val() : '';
                            if (val2) {
                                var url = '//list'+cookieDomain+'/'+ cate + '-00-0-48-1-0-0-0-1-' + selects.eq(2).val() + '-0-0-0-0-0-0-0-0.html';
                            } else {
                                var url = '//list'+cookieDomain+'/'+ cate + '.html';
                            }
                        } else if ($(items).attr("id") == "driving-school") {
                            var val0 = selects.eq(0).val() != "" ? selects.eq(0).val() : '';
                            var val1 = selects.eq(1).val() != "" ? selects.eq(1).val() : '';
                            //var val2 = selects.eq(2).val() != "" ? selects.eq(2).val() : '';
                           // var url = '//list'+cookieDomain+'/' + cate + '-00-0-48-1-0-0-0-1-' + val0 + val1 + val2 + '-0-0-0-0-0-0-0-0.html';
                            var url = '//list'+cookieDomain+'/' + cate + '-00-0-48-1-0-0-0-1-' + val0 + val1 + '-0-0-0-0-0-0-0-0.html';
                        } else {
                            var url = '//list'+cookieDomain+'/' + cate + '-00-0-48-1-0-0-0-1-' + selects.eq(0).val() + selects.eq(1).val() + selects.eq(2).val() + '-0-0-0-0-0-0-0-0.html';
                        }
                        $(items).find(".confirm").removeClass("disabled").attr({
                            "href": url,
                            "target": "_blank"
                        });
                    } else {
                        $(items).find(".confirm").addClass("disabled").attr("href", "javascript:;").removeAttr("target");
                    }
                },
                50)
            })
        })
        //驾校
        var selectDom = $('#driving-school select');

        //搜索数据队列
        var getCateQueue = [function() {
            getCategoryType("cat32897453", 2, $('#car-carload select').eq(0));
        },
        function() {
            getCategoryType("cat32897465", 30549, selectDom.eq(0));
        }];
        $(document).queue("myAnimation", getCateQueue);
        $(document).dequeue("myAnimation");

        //锚点到常见问题
        $("#commquestion").click(function() {
            var top = $('#tswitch-d').offset().top;
            $('html,body').animate({
                scrollTop: top
            },
            800);
        });

    },
    /* 楼层点击事件处理 收藏按钮 */
    floorBind:function(){
        var _this = this;
        this.floorObject.on({
            click:function(){
                var icon = $(this);
                if(icon.hasClass("floor_collect")){
                    if(!loginData.isTransient && loginData.isTransient!="true"){
                        _this.getCollect(icon,"click");
                    }else{
                        window.popGetCollect = function(){_this.getCollect(icon,"click");}
                        signData.loginPop("popGetCollect()");
                    }
                }
            },
            mouseenter:function(){
                _this.changeLayer($(this),true);

                /* 收藏按钮 */
                var icon = $(this).find(".floor_collect");
                /* 登录成功触发事件 */
                if(!loginData.isTransient && loginData.isTransient!="true"){
                    if(icon.length>0)_this.getCollect(icon,"mouse");
                }if(icon.length>0){
                    if(icon.hasClass("floor_collect_have"))icon.addClass("floor_collect_click");
                    icon.show();
                }

            },
            mouseleave:function(){
                _this.changeLayer($(this),false);

                /* 收藏按钮 */
                var icon = $(this).find(".floor_collect");
                    icon.removeClass("floor_collect_click");
                if(icon.length>0 && !icon.hasClass("floor_collect_have"))icon.hide();
            }
        },".floor_collect,.goods-list,.qr_default_img");
        //二维码mouse事件
        /*
        this.floorObject.children('.qr_default_img').on({
            mouseenter:function(){

            }
        });*/
    },
    /* 收藏商品 */
    getCollect:function(obj,type){
        var _this = this;
        if(!obj.hasClass("floor_collect_have")){
            var fnCall = null,
                prdID = obj.attr("data-pid"),
                skuID = obj.attr("data-sku");
            if(type=="click"){_this.clickIcon = obj;fnCall = function(data){_this.floorcollect(data)};}
            if(type=="mouse")fnCall = function(data){
                if(data){
                    for(var chk in data){
                        if(data[chk].productId==prdID && data[chk].skuId==skuID){
                            obj.addClass("floor_collect_have floor_collect_click").attr("title","已收藏");
                        }
                    }
                }
            };
            gomeLib.fxCollect.getCollect({productId:prdID,skuId:skuID,siteId:"homeCard"},fnCall,type);
        }
    },
    /* 点击收藏商品回调事件 */
    floorcollect:function(data){
        var icon = this.clickIcon;
        if(data && data.errotType=="isSuccess"){
            if(!icon.hasClass("floor_collect_have")){
                icon.attr("title","已收藏");
                var addData = {
                    "img": icon.attr("data-image").replace("_160","_100"),
                    "href": icon.attr("data-href"),
                    "p": icon.attr("data-price"),
                    "t": icon.attr("data-name"),
                    "productId":icon.attr("data-pid"),
                    "skuId":icon.attr("data-sku")
                };
                gomeLib.fxCollect.totality.unshift(addData);
                $.fn.p2pZoom({
                    startID:icon.find("i"),
                    targetID:"#fx-collect",
                    bE:function(){
                        icon.addClass("floor_collect_have floor_collect_click");
                    },
                    aE:function(){
                        var collect = $("#fx-collect .fx-mycollect");
                            collect.addClass("myc-active");
                            window.setTimeout(function(){
                                collect.removeClass("myc-active");
                            },600);
                    }
                });
            }else{
                //alert("已经收藏过了！");
            }
        }
    },
    /* hover效果 */
    changeLayer:function(obj,hover){
        var _width  = (obj.width()-1)+"px";
        var _height = "auto";
        var _qrwidth = 0,_qrheight = "auto";
            if(hover){
                _height = obj.find(".floor_layer_cnt").height()+10+"px";
                if(obj.hasClass("floorBox_scare"))_height=obj.find(".floor_layer_cnt").height()+4+"px";
                if(obj.is('span')){//二维码
                    obj.next().css("display","block");
                    _qrwidth = (obj.parent().parent().width()-10)+"px";
                    _qrheight = obj.parent().parent().find("dd:eq(0)").find("img").attr("height")+"px";//取图片的高度
                    obj.prev().css({"height":_qrheight,"width":_qrwidth});
                    obj.css("display","inline");
                }
            }else{
                _height = 0;
                if(obj.hasClass("floorBox_scare"))_height=obj.find(".floor_layer_cnt").height()+4+"px";
                _width = 0;
                /*if(obj.is('span')){//二维码
                    obj.next().css("display","none");
                    obj.prev().css({"height":_height,"width":_width});
                }*/
                obj.find(".qr_default_img").css("display","inline-block");
            }
            obj.find(".floor_layer_bmg").css({"height":_height,"width":_width});
            //二维码
            obj.find(".floor_qrcode_bg").css({"height":_qrheight,"width":_qrwidth});
            obj.find(".floor_qrcode_img").css("display","none");

            if(obj.hasClass("floorBox_scare")){
                obj.find("dt").css("bottom",_height);
            }
    },
    setviewCount:function(){//统计问题的浏览数
        $("#tswitch-d").gLoad({
            e: function() {
                var quesList=$(this).find(".problem-list").eq(0).find("li[questionId]");
                var checkBtn=$(this).find(".check");
                var quesArr=[];
                var quesID="";
                quesList.each(function(i,items){
                    var quesId=$(this).attr("questionId");
                    if(quesId!="" && quesId!=undefined){
                        quesArr.push(quesId);
                    }
                });
                quesID=quesArr.join("_");
                $.ajax({//请求全部浏览数
                    url:"//ss"+cookieDomain+'/ec/homeus/carPage/browseNumberAjax.jsp',
                    dataType: 'jsonp',
                    type: 'get',
                    data: {
                        "id": quesID
                    },
                    jsonp: 'callback',
                    jsonpName: 'getBrowse',
                    success: function(data) {
                        if(data.browseNumber.length>0){
                            $.each(data.browseNumber,function(i,datas){
                                var did=datas.id;
                                quesList.each(function(n,nodes){
                                    var qid=$(this).attr("questionId");
                                    if(qid==did){
                                        $(this).find(".count").text("浏览数："+datas.browse)
                                    }
                                })
                            })
                        }
                    }
                });
            }
        });
    }
}