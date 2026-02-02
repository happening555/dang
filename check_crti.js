
import fetch from 'node-fetch';

async function check(username) {
    const req = await fetch("https://instagram.com/"+username+'/', {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-GPC": "1",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Priority": "u=4"
        },
        "method": "GET",
        "mode": "cors"
    });
    const res = await req.text();
    const sp =res.split('<meta property="og:description" content="');
    if (sp.length>1) {
        return sp[1].split('-')[0];
    } else {
        return 'N/A'
    }
}

check('crti').then(console.log).catch(console.error);