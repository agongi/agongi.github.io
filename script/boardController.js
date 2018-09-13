jQuery(document).ready(function($){
	// function scope
	function DeleteFunc(e){
		var that = $(this);
		var board_table = $(this).parents().find('input[name="board_table"]').val();
		var name = $(this).siblings('span.name').text();
		var password = $(this).siblings('.passwordBox').find('input[name="removePassword"]').val();
		var checkPoint = eval($(this).siblings('.passwordBox').find('input[name="checkPoint"]').val());
		var date = $(this).siblings('span.date').text();
		var now = $(this).siblings('.now').text();
		var total = $(this).siblings('.total').text();
		var idx = $(this).parent().find('input[name="idx"]').val();
		if(checkPoint){
			if(password!=null && password!=''){
				$.ajax({
					url : '/admin/lib/include/boardPro.php',
					post : 'GET',
					data : {'mode':'delete','board_table':board_table,'name':name,'password':password,'date':date,'now':now,'total':total},
					success : function(data){
						result = $.parseXML(data);
						if(eval($('boolean',result).text())){
							$(".boardPagination").find('.total').text($('total',result).text());
							that.parent().remove();
							obj = eval("("+$('list',result).text()+")");
							var element = ""
										+"<li>"
										+	"<span class=\"name\">"+obj.name+"</span>	"
										+	"<span class=\"date\">"+obj.date+"</span>"
										+	"<div class=\"content\">"
										+obj.content
										+	"</div>"
										+"	<a href=\"javascript:void(0);\" class=\"articleDelete\">삭제</a>"
										+"	<div class=\"passwordBox\">"
										+"		<input type=\"hidden\" name=\"checkPoint\" value=\"false\" />"
										+"		<input type=\"hidden\" name=\"idx\" value=\""+obj.idx+"\" />"
										+"		<input type=\"password\" name=\"removePassword\" size=\"\" maxlength=\"\" />"
										+"	</div>"
										+"</li>";
							$('ul','.boardList').append(element);
							$(".boardPagination").find('.total').text($('total',result).text());
						}else{
							alert("비밀번호가 맞지 않습니다.");
							that.siblings('.passwordBox').find('input[name="removePassword"]').focus();
						}
					}
				});
			}
		}else{
			$(this).siblings('.passwordBox').show();
			checkPoint = that.siblings('.passwordBox').find('input[name="checkPoint"]').val(true);
		}
		e.preventDefault();
	}

	var $submit = $('#submit');
	$submit.on('click',function(e) {
	    e.preventDefault(); // prevent native submit

		var board_table = $(this).parents().find('input[name="board_table"]').val();
		var name = $(this).parents().find('input[name="name"]').val();
		var password = $(this).parents().find('input[name="password"]').val();
		var content = $(this).parents().find('textarea[name="content"]').val();
		var obj = write;

		if (!obj.name.value){
			alert("이름을 작성해주세요.");
			obj.name.focus();
			return false;
		} else if(!obj.password.value){
			alert("비밀번호를 입력해주세요.");
			obj.password.focus();
			return false;
		} else if(!obj.content.value){
			alert("내용을 작성해주세요.");
			obj.content.focus();
			return false;
		}

        $submit.ajaxSubmit({
			url : 'http://saebomm.com/admin/lib/include/boardPro.php',
			post : 'GET',
			data : {'mode':'write','board_table':board_table,'name':name,'password':password,'content':content},
			dataType : 'xml'
		});

        document.location.reload();
		return false;
	});


	$articleDel = $('.articleDelete');
	$articleDel.on('click', DeleteFunc);

	var $nav = $('.boardPagination a');
	$nav.on('click', listGrid);

	function listGrid(e){
        var board_table = $(this).parents().find('input[name="board_table"]').val();
        var btnType = $(this).attr('class');
        var now = $(this).siblings('.now').text();
        var total = $(this).siblings('.total').text();

        printGrid(board_table, btnType, now, total);
    }

    function printGrid(board_table, btnType, now, total) {
            $.ajax({
                url : 'http://cors-anywhere.herokuapp.com/http://saebomm.com/admin/lib/include/boardPro.php',
                post : 'GET',
                data : {'mode':'list','type':btnType,'board_table':board_table,'now':now,'total':total},
                success : function(data){
                    newNow = parseInt($('.boardPagination').find('.now').text());
                    newTotal = parseInt($('.boardPagination').find('.total').text());
                    var checkPoint;
                    switch(btnType){
                        case "prev" :
                            newNow-=1;
                            checkPoint = newNow >= 1;
                            break;
                        case "next" :
                            newNow+=1;
                            checkPoint = newNow<=newTotal;
                            break;
                    }
                    if(checkPoint){
                        $result = $.parseXML(data);
                        $row = eval($('list',$result).text());
                        var element ="";
                        for(var i=0; i < $row.length; i++){
                            if($.parseHTML($row[i].content)){
                                $row[i].content = $.parseHTML($row[i].content)[0].data;
                            }

                            element += ""
                                +"<li>"
                                +	"<span class=\"name\">"+$row[i].name+"</span>	"
                                +	"<span class=\"date\">"+$row[i].date+"</span>"
                                +	"<div class=\"content\">"
                                +$row[i].content
                                +	"</div>"
                                +"	<a href=\"javascript:void(0);\" class=\"articleDelete\">삭제</a>"
                                +"	<div class=\"passwordBox\">"
                                +"		<input type=\"hidden\" name=\"checkPoint\" value=\"false\" />"
                                +"		<input type=\"password\" name=\"removePassword\" size=\"\" maxlength=\"\" />"
                                +"	</div>"
                                +"</li>";
                        }
                        var now = $(".boardPagination a").siblings('.now').text($('page',$result).text());
                        $('ul','.boardList').html(element);
                        $('.boardList').find('.articleDelete').on('click',DeleteFunc);
                    }
                }
            });
    }

    function initGrid() {
            var board_table = $(this).parents().find('input[name="board_table"]').val();
            var btnType = $(this).attr('class');
            var now = $(this).siblings('.now').text();
            var total = $(this).siblings('.total').text();

            printGrid(board_table, btnType, 1, 2);


//        $.ajaxPrefilter('json', function(options, orig, jqXHR) {
//            return 'jsonp'
//        });

//        $.ajaxPrefilter( function (options) {
////          if (options.crossDomain && jQuery.support.cors) {
//            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
//            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
////          }
//        });


//        https://cors-anywhere.herokuapp.com/http://saebomm.com/admin/lib/include/boardPro.php?mode=list&type=prev&board_table=cstkyj0901&now=1&total=2}
    }

    initGrid();
});

