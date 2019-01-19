var mongoose = require('mongoose').set('debug', true);
var Business = mongoose.model('Business');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.getListOfBusinesses = function(req, res) {
    Business
        .find()
        .exec(function(err, businesses){
            if(err){
                sendJsonResponse(res, 400, err);
            } else {
                sendJsonResponse(res, 200, businesses);
            }
        });
};
module.exports.getBusinessById = function(req, res) {
    let id = req.params.id;
    Business.findById(id, function(err, business){
        if(err){
            sendJsonResponse(res,400,err);
        }else{
            sendJsonResponse(res,200,business);
        }
    })
};
module.exports.createBusiness = function(req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            sendJsonResponse(res,200,"Business successfully created!");
        })
        .catch(err => {
            sendJsonResponse(res,400,"Unable to create new business.");
        })
};

module.exports.updateBusiness = function(req,res){
	var business = req.body;
    Business.findOneAndUpdate({'_id':req.params.id}, business, function(err, doc){
        if (err) sendJsonResponse(res,400, { error: err });
        sendJsonResponse(res,200,"The business has been updated successfully!");
    });
}

module.exports.deleteBusiness = function(req,res){
    let id = req.params.id;
    Business.findByIdAndRemove({_id:id}, function(err, business){
        if(err) sendJsonResponse(res,400,err);
        else sendJsonResponse(res,200,"Business successfully removed!");
    })
}