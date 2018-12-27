Template.home.events({
	'submit form':function(e){
		e.preventDefault();//not refresh page
		var idobat=e.target.idobat.value;
		var namaobat=e.target.namaobat.value;
		var stok=e.target.stok.value;
		var jenis=e.target.jenis_obat.value;
		var harga=e.target.harga.value;
		var description=e.target.description.value;
		//alert('Title='+title+','+'description='+description);
		var obj={
			idobat:idobat,
			namaobat:namaobat,
			stok:stok,
			jenis:jenis,
			harga:harga,
			description:description
			
		}
		if(this._id){
			Meteor.call('updateData',this._id,obj);//call method from server to update
			alert('update success');
		}else{
			Meteor.call('insertData',obj);//call method from server to insert
			
			alert('insert success');
	}
		//alert('insert success');

	},
	'click #remove':function(e){
		crud.remove(this._id);//remove data from mongodb
		alert('delete success');
	}
});
Template.home.helpers({
	//get data from mongodb
	getData:function(){
		return crud.find();
	}
})