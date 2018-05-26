$(document).ready(function() {
    $.get('https://raw.githubusercontent.com/whatnowapp/whatnowapp.github.io/master/whatnow.json', function(data) {
        var weatherType = sessionStorage.getItem('weatherType');
        var moodType = sessionStorage.getItem('moodType');       
        
        var json = JSON.parse(data);
        var events = json[weatherType][moodType];
        var html = '';

        var events = events.sort(function(a, b) {
            if (!a.rating || !a.crowdedness || !a.distance) {
                return 1;
            }

            if (!b.rating || !b.crowdedness || !b.distance) {
                return -1;
            }

            return (1 + b.rating) * (1 + b.distance) / (1 + Math.sqrt(b.crowdedness)) - (1 + a.rating) * (1 + a.distance) / (1 + Math.sqrt(a.crowdedness));
        });

        for (var index in events) {
            var event = events[index];

            // Column.
            html += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" id="' + event.id + '">';
            
                // Thumbnail.
                html += '<div class="thumbnail">';

                    // Caption.
                    html += '<div class="caption">';

                        if (event.picture) {
                            html += '<img src="' + event.picture + '" class="text-left" />';
                        }

                        if (event.name) {
                            html += '<h3>' + event.name + '</h3>';
                        }

                        if (event.rating) {
                            html += '<p>';

                            if (event.rating) {
                                html += '<strong>Rating</strong>: ';

                                if (event.rating <= 0.5) {
                                    html += '<img style="width: 16px;" src="images/star-half.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 1) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 1.5) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-half.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 2) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 2.5) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-half.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 3) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-empty.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 3.5) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-half.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 4) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-empty.png" />';
                                } else if (event.rating <= 4.5) {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-half.png" />';
                                } else {
                                    html += '<img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" /><img style="width: 16px;" src="images/star-full.png" />';
                                }
                            }

                            html += '</p>';
                        }

                        if (event.crowdedness) {
                            html += '<p>';

                                html += '<strong>Crowdedness</strong>: ';

                                if (event.crowdedness >= 1) {
                                    html += '<img style="width: 16px;" src="images/dizzy.png" />';
                                }

                                if (event.crowdedness >= 10) {
                                    html += '<img style="width: 16px;" src="images/dizzy.png" />';
                                }

                                if (event.crowdedness >= 100) {
                                    html += '<img style="width: 16px;" src="images/dizzy.png" />';
                                }

                                if (event.crowdedness >= 1000) {
                                    html += '<img style="width: 16px;" src="images/dizzy.png" />';
                                }

                                if (event.crowdedness >= 10000) {
                                    html += '<img style="width: 16px;" src="images/dizzy.png" />';
                                }

                            html += '</p>';
                        }

                        if (event.distance) {
                            html += '<p>';
                            html += '<strong>Distance</strong>: ' + Math.floor(event.distance) + ' km';
                            html += '</p>';
                        }

                        if (event.description) {
                            html += '<p>' + event.description + '</p>';
                        }

                        html += '<p class="text-right"><a href="javascript:chooseEvent(' + event.id + ')" class="btn btn-warning" role="button">Pick me</a></p>';

                    // Caption.
                    html += '</div>';

                // Thumbnail.
                html += '</div>';
            
            // Column.
            html += '</div>';            
        }

        $('#events').html(html);
    });
});

function chooseEvent(eventId) {
    var chosenEvents = [];
    var storedChosenEvents = sessionStorage.getItem('chosenEvents');

    if (!storedChosenEvents) {
        sessionStorage.setItem('chosenEvents', chosenEvents);
    }

    chosenEvents.push(eventId);
    sessionStorage.setItem('chosenEvents', chosenEvents);

    document.location = 'go.html';
}