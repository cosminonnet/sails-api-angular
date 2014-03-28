/**
 * Allow only request originated from the server.
 */
module.exports = function (req, res, ok) {

    var host = req.rawHost;

    if (host === "localhost" || host === "127.0.0.1") {
        return ok();
    } else {
        return res.send("Permission denied.", 403);
    }

};