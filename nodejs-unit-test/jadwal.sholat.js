const axios = require("axios");

function getJadwalSholat(kota) {
    const url ='https://api.aladhan.com/vl/timingsbycity';
    const params ={
        city : kota,
        country : "indonesia",
        method : 2,
    };
    return axios
    .get(url,{params})
    .then((Response) => {
        const data = Response.data;
        if(data.code !== 200) {
            console.error('kota/kabupaten `3(kota)` tidak ditemukan.');
            return null;
        }
        return data.data.timings;
    })
    .catch((error) => {
        console.error(`error: $(error)`);
        return null;
    });
}

function main() {
    if(process.argv.length !== 3) {
        console.log("usage: node jadwal.sholat.js <nama_kota>");
        process.exit(1);
    }


const kota = process.argv[2];
getJadwalSholat(kota).then((jadwalSholat) => {
    if (jadwalSholat !== null) {
        console.log("jadwal Sholat");
        console.log(`  - Fajr: ${jadwalSholat.Fajr}`);
        console.log(`  - Duhur: ${jadwalSholat.Duhur}`);
        console.log(`  - Ashr: ${jadwalSholat.Ashr}`);
        console.log(`  - Maghrib: ${jadwalSholat.Maghrib}`);
        console.log(`  - Isya: ${jadwalSholat.Isya}`);
    }
});
}

if(require.main === module) {
    main();
}