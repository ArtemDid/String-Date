function formatDate(date) {
    let day = date.getDate().toString();
    if (day.length == 1) {
        day = "0" + day;
    }

    let month = (date.getMonth() + 1).toString();
    if (month.length == 1) {
        month = "0" + month;
    }

    let year = date.getFullYear().toString();

    let fulldate = day + "." + month + "." + year.slice(2);

    console.log(fulldate);
}

var d = new Date(2001, 0, 1);
formatDate(d);

function ucFirst(str) {
    let str2 = "";

    str2 += String(str[0]).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        str2 += String(str[i]).toLowerCase();
    }

    console.log(str2);
}

ucFirst("вАся");

function checkSpam(str)
{
    if(str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX"))
    {
        return true;
    }
    else return false;
}

console.log(checkSpam('buy ViAgRA xxxnow'));

function extractCurrencyValue(str)
{
    return String(str).substring(1);
}

console.log(extractCurrencyValue("$120"));