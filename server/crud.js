Meteor.methods({
	insertData:function(obj){
		crud.insert(obj);
	},
	updateData:function(id,obj){
		crud.update({_id:id},{$set:obj});
	},

	//pasien
	insertPasien:function(obj){
		console.log('obj');
		pasien.insert(obj);
	},
	updatePasien:function(id,obj){
		pasien.update({_id:id},{$set:obj});
	},
	insertPenjualan:function(obj){
		console.log('obj');
		penjualan.insert(obj);
	},
	updatePenjualan:function(id,obj){
		penjualan.update({_id:id},{$set:obj});
	}
})