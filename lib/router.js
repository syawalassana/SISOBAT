Router.configure({
	layoutTemplate:'mainlayout'
});
Router.route('/',{
	name:'home'
});
Router.route('/update/:_id',{
	name:'update',
	template:'home',
	data:function(){
		return crud.findOne({_id:this.params._id});

	}

});
Router.route('/pasien',{
	name:'pasien'
});
Router.route('/updatepasien/:_id',{
	name:'updatepasien',
	template:'pasien',
	data:function(){
		return pasien.findOne({_id:this.params._id});

	}
	});
Router.route('/penjualan',{
	name:'penjualan'
});
Router.route('/updatepenjualan/:_id',{
	name:'updatepenjualan',
	template:'penjualan',
	data:function(){
		return penjualan.findOne({_id:this.params._id});

	}
	});