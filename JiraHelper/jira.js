chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.action == "courseCounts"){
        var user = $('.ghx-swimlane-header');
        user = $.makeArray(user);
        alert(user[0]);
        /*var hist = {};
        authors.map(function (a){
            if (a.title in hist)
                hist[a.title]++;
                else
                hist[a.title] = 1;
        });

        for (var a in hist){
            var aName = '"' + a + '"';
            var links = $('.author a[title=' + aName + ']');
            $.each(links, function(i, v){
                v.innerText = a + ' - ' + hist[a]
            });
        }*/
    }
});

chrome.runtime.sendMessage({action:"show"});