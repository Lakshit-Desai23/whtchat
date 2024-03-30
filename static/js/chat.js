const text_box = '<div class="container darker">' +
                        '<img src="{% static 'images/user_image.jpg' %}" alt="Avatar" class="right" style="width:100%;">'
                        + '<p>{message}</p>' +
                        '<span class="time-right">{time}</span>'
                    + '</div>';

function send(sender, receiver, message, time){
    console.log("YES! WORKING")
    $.post('api/messages', '{"sender:" "' + sender + '", "receiver": "' + receiver + '", "message": "' +
            message + '"}', function(data){
            var field = text_box.replace('{message}', message);
            field.replace('{time}', time)
            $('#board').append(field);
    })
}

function receive(){
    $.get('api/messages/' + sender_id + '/' + receiver_id, function(data){
        console.log(data);
        if(data.length() !== 0){
            for(var i = 0; i < data.length; i++){
                var field = text_box.replace('{message}', message);
                $('#board').append(field);


                if (data[i].seen) {
                    markMessageStatus(data[i].id, 'Seen');
                } else if (data[i].seen) {
                    markMessageStatus(data[i].id, 'Delivered');
                }
            }
        }
    })
}
function markMessageAsSeen(messageId) {
    // Send a POST request to mark the message as seen
    $.post('/api/mark_as_seen/', { message_id: messageId }, function(response) {
        // Handle response if needed
        console.log('Message marked as seen');
    });
}