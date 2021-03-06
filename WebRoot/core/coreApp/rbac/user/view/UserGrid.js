Ext.define("core.rbac.user.view.UserGrid",{
	extend:"core.app.base.BaseGrid",
	alias:"widget.rbac.usergrid",
	tbar:[
		{xtype:'button',text:'添加',ref:'gridInsert',iconCls:'table_add'},
		{xtype:'button',text:'删除',ref:'gridDelete',iconCls:'table_remove'},
		{xtype:'button',text:'保存',ref:'gridSave',iconCls:'table_save'}
	],
	columns:[{
		xtype:"rownumberer",
		width : 35,
		text :'No.',
		align : 'center'
	},{
		text:"主键",
		dataIndex:"userId",
		hidden:true
	},{
		text:"姓名",
		dataIndex:"username",
		field:{
			xtype:"textfield"
		}
	},{
		text:"编码",
		dataIndex:"userCode",
		field:{
			xtype:"textfield"
		}		
	},{
		text:"密码",
		dataIndex:"password",
		hidden:true
	},{
		text:"性别",
		dataIndex:"sex",
		width:80,
		field:{
			xtype:"textfield"
		}
	},{
		text:"出生日期",
		dataIndex:"birthday",
		width:150,
		field:{
			xtype:"datetimefield",
			dateType:"date"
		}
	}],
	store:"core.rbac.user.store.UserStore",
	bbar:{
		xtype:'pagingtoolbar',
		store:'core.rbac.user.store.UserStore',
		dock:'bottom',
		displayInfo:true
	}
});