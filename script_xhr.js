var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var t = JSON.parse(this.response)
    console.log(t);
    console.log(t.length);
    console.log(t[0]);

    for (var i = 0; i < t.length; i++) {
        var dummy = t[i];
        for (var keys in dummy) {
            // if (keys = 'flag') {
            //     console.log(dummy[keys]);
            // }
            switch (keys) {
                case 'name':
                    console.log(dummy['name']);
                    break;
                case 'region':
                    console.log(dummy['region']);
                    break;
                case 'subregion':
                    console.log(dummy['subregion']);
                    break;
                case 'population':
                    console.log(dummy['population']);
                    break;
            }
        }
    }
};
xhr.onerror = function () {
    console.log(this.statusText);
}
xhr.send();
