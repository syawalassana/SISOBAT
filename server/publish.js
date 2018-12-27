Meteor.publish('crud', function (){
	return crud.find({});
});
Meteor.publish('pasien', function (){
	return pasien.find({});
});