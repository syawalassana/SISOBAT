Template.pasien.events({
	'submit form':function(e){
		e.preventDefault();//not refresh page
		var idpasien=e.target.idpasien.value;
		var namapasien=e.target.namapasien.value;
		var alamat=e.target.alamat.value;
		var notelepon=e.target.notelepon.value;
		//alert('Title='+title+','+'description='+description);
		var obj={
			idpasien:idpasien,
			namapasien:namapasien,
			alamat:alamat,
			notelepon:notelepon
		}
		if(this._id){
			Meteor.call('updatePasien',this._id,obj);//call method from server to update
			alert('update success');
		}else{
			console.log(obj);
			Meteor.call('insertPasien',obj);//call method from server to insert
			
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