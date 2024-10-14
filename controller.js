
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!!");
}
// random comment to trigger ci pipeline

module.exports = print;