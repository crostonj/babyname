
var babyNames = function () {
    var names = [
        {
            "rank": "1",
            "name": "Noah",
            "sex": "boy"
        },
        {
            "rank": "1",
            "name": "Emma",
            "sex": "girl"
        },
        {
            "rank": "2",
            "name": "Liam",
            "sex": "boy"
        },
        {
            "rank": "2",
            "name": "Olivia",
            "sex": "girl"
        },
        {
            "rank": "3",
            "name": "Ethan",
            "sex": "boy"
        },
        {
            "rank": "3",
            "name": "Ava",
            "sex": "girl"
        },
        {
            "rank": "4",
            "name": "Lucas",
            "sex": "boy"
        },
        {
            "rank": "4",
            "name": "Sophia",
            "sex": "girl"
        },
        {
            "rank": "5",
            "name": "Mason",
            "sex": "boy"
        },
        {
            "rank": "5",
            "name": "Isabella",
            "sex": "girl"
        }
    ];


    function getBoyName(rank) {
        //iterate through names and return all names
        if (rank == undefined || rank == "all")
            return (grep(names, function (p) { return p.sex == 'boy'; }).map(function (p) { return p.name; }));

        return grep(names, function (p) { return p.sex == 'boy' && p.rank == rank; })
            .map(function (p) { return p.name; });
    }

    function getGirlName(rank) {

        if (rank == undefined || rank == "all")
            return (grep(names, function (p) { return p.sex == 'girl'; }).map(function (p) { return p.name; }));

        return grep(names, function (p) { return p.sex == 'girl' && p.rank == rank; })
            .map(function (p) { return p.name; });;
    }
    return {
        getBoyName: getBoyName,
        getGirlName: getGirlName
    }
};

module.exports = babyNames;

var grep = function (items, callback) {
    var filtered = [],
        len = items.length,
        i = 0;
    for (i; i < len; i++) {
        var item = items[i];
        var cond = callback(item);
        if (cond) {
            filtered.push(item);
        }
    }

    return filtered;
};

