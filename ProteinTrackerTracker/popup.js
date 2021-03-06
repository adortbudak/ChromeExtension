

$(function() {
    chrome.storage.sync.get(['goal','total'],function(items){
        $('#goal').text(items.goal);
        $('#total').text(items.total);
    }) 

    $('#addAmount').click(function(){
        chrome.storage.sync.get(['total','goal'],function(items){
            var newTotal = 0;
            if (items.total){
                newTotal += parseInt(items.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total':newTotal});
            $('#total').text(newTotal);
            $('#amount').val('');

            if (newTotal >= items.goal){
                var opt = {
                type: "basic",
                title: "Goal reached!",
                message: "You reached your goal of" + items.goal + "!",
                iconUrl: "icon.png"
            };

            chrome.notifications.create('goal',opt,function(){});
            }
        });
    })
});