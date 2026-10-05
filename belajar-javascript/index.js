let sisaPercobaan = 3;
while (sisaPercobaan > 0) {
  console.log(`Login gagal, sisa ${sisaPercobaan} kali`);
  sisaPercobaan--;
}

const daftarNilai = [3.45, 3.82, 3.2, 3.61, 2.95];
let total = 0;
for (const nilai of daftarNilai) {
  total = total + nilai;
}
console.log(`Total IPK: ${total}`); // Total IPK: 17.03
