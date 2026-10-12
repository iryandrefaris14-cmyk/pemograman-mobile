// array object
const mahasiswa = [
  {
    NIM: 2201001,
    Nama: "Budi Santoso",
    Prodi: "Sistem Informasi",
    IPK: 3.45
  },
  {
    NIM: 2201002,
    Nama: "Siti Aminah",
    Prodi: "Teknik Informatika",
    IPK: 3.82
  },
  {
    NIM: 2201003,
    Nama: "Agus Wijaya",
    Prodi: "Informatika",
    IPK: 3.20
  },
  {
    NIM: 2201004,
    Nama: "Dewi Lestari",
    Prodi: "Rekayasa Perangkat Lunak",
    IPK: 3.61
  },
  {
    NIM: 2201005,
    Nama: "Rizky Pratama",
    Prodi: "Sistem Informasi",
    IPK: 2.95
  }
];

//function untuk memenentukan predikat berdasarkan ipk
function predikatkelulusan(IPK) { 
  if (IPK >= 2.00 && IPK <= 2.75) {
    return "memuaskan";
  } else if (IPK >= 2.75 && IPK <= 3.50) {
    return" sangat memuaskkan";
  } else if (IPK >= 3.51 && IPK <= 4.00 ){
    return"cum laude (dengan pujin)";
  } else {
    return "IPK tidak valid";
  }

}

mahasiswa.map((mhs) => {
  console.log(
    `Nama : ${mhs.Nama}
IPK : ${mhs.IPK}
Predikat : ${predikatkelulusan(mhs.IPK)}
`
  );
});

const sistemInformasi = mahasiswa.filter((mhs) => {
  return mhs.Prodi === "Sistem Informasi";
});

console.log(sistemInformasi);

/* for (let i = 0; i < mahasiswa.length; i++) {
  console.log(`Nama : ${mahasiswa[i].Nama}`);
} */

/*mahasiswa.map((mahasiswa) => {
  console.log(`Nama : ${mahasiswa.Nama} 
      IPK : ${mahasiswa.IPK}`);
});

// ambil data ipk diatas 3.5
const ipkTinggi = mahasiswa
        .filter(function(mahasiswa){
          return mahasiswa.IPK > 3.5;
        })
        .map((mahasiswa) => {
          console.log(`Nama : ${mahasiswa.Nama} 
              IPK : ${mahasiswa.IPK}`);
        });

/* const ipkTinggi = mahasiswa.filter(
    mahasiswa => mahasiswa.IPK > 3.5); */