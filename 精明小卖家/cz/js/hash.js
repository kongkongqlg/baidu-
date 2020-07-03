function gethash(){
    let hash_now= window.location.hash || '/'
    return hash_now.slice(1)
}

function sethash(regions,products){
    if(regions.length!==0 && products.length!==0){
        var regionhash=regions.join(','),
            producthash=products.join(',');
        window.location.hash='regions='+regionhash+'&products='+producthash
    }
}