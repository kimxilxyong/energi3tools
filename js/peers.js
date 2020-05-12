// Utility functions to list and remove old version peers

var currentVersion = "3.0.6";

function checkPeersByVersion(latestVersion, removePeer) {
    var invalidCount = 0;
    for (var i in admin.peers) {
        var name = String(admin.peers[i].name);
        var version = name.substring(9,14);
        if (version != latestVersion) {
            var enode = admin.peers[i].enode;
            invalidCount++;
            console.log("Old Peer " + i + " name " + name + " version " + version);
            console.log(enode); 
            if (removePeer == true) {
                admin.removePeer(enode);
                i--;
            }
        }
    }
    console.log("Total invalid Peers: " + invalidCount);
    return true;
};

function checkAllPeers() {
    return checkPeersByVersion(currentVersion, false);
}

function removeAllInvalidPeers() {
    return checkPeersByVersion(currentVersion, true);
}
