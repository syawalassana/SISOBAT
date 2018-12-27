Template.penjualan.events({
	'submit form':function(e){
		e.preventDefault();//not refresh page
		var idpenjualan=e.target.idpasien.value;
		var idpasien=e.target.idpasien.value;
		var idpetugas=e.target.idpetugas.value;
		var tanggal=e.target.tanggal.value;
		//alert('Title='+title+','+'description='+description);
		var obj={
			idpenjualan:idpenjualan,
			idpasien:idpasien,
			idpetugas:idpetugas,
			tanggal:tanggal,
		}
		if(this._id){
			Meteor.call('updatePenjualan',this._id,obj);//call method from server to update
			alert('update success');
		}else{
			console.log(obj);
			Meteor.call('insertPenjualan',obj);//call method from server to insert
			
			alert('insert success');
	}
		//alert('insert success');

	},
	'click #remove':function(e){
		pasien.remove(this._id);//remove data from mongodb
		alert('delete success');
	}
});
Template.pasien.helpers({
	//get data from mongodb
	getDataPasien:function(){
		console.log(pasien.find());
		return pasien.find();
	}
})