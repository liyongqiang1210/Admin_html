  (function() {
  	var data = $.cookie("data"); // 获取cookie中保存的data
  	var courseJson = JSON.parse(data);
  	$('#exampleTableEvents').bootstrapTable({
  		data: courseJson,
  		search: true,
  		cache: false,
  		pagination: true,
  		showRefresh: true,
  		showToggle: true,
  		showColumns: true,
  		clickToSelect: true,
  		uniqueId: "course_id", //每一行的唯一标识，一般为主键列 
  		striped: true, //是否显示行间隔色 
  		sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）  
  		pageNumber: 1,
  		pageSize: 10,
  		//height: 750,//设置行高会导致表格的表头与内容对不齐
  		pageList: [10, 15, 20],
  		iconSize: 'outline',
  		toolbar: '#exampleTableEventsToolbar',
  		icons: {
  			refresh: 'glyphicon-repeat',
  			toggle: 'glyphicon-list-alt',
  			columns: 'glyphicon-list'
  		},
  		columns: [{
  				checkbox: true
  			},
  			{
  				title: '序号',
  				field: 'course_id',
  				align: 'center'
  			},
  			{
  				title: '课程名称',
  				field: 'course_title',
  				align: 'center'
  			},
  			{
  				title: '课程url',
  				field: 'course_url',
  				align: 'center'
  			},
  			{
  				title: '视频ID',
  				field: 'video_url_id',
  				align: 'center'
  			},
  			{
  				title: '操作',
  				align: 'center',
  				field: 'video_id',
  				formatter: function(value, row, index) {
  					var html = '<a href="javascript:EditCourse(' + value + ')">编辑</a>';
  					html += '　<a href="javascript:DeleteCourse(' + value + ')">删除</a>';
  					html += '   <a href="">观看课程视频</a>'

  					return html;
  				}
  			}
  		]
  	});

  })(document, window, jQuery);

  function EditVideo(str) {
  	alert("id:" + str);
  }

  function DeleteVideo(str) {
  	alert("id:" + str);
  }