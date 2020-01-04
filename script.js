// ini adalah contoh prototype dalam bentuk objek
function Mahasiswa(nama, energy){
	this.nama = nama;
	this.energy = energy;
}

Mahasiswa.prototype.makan = function(porsi){
	this.energy += porsi;
	return `Halo ${this.nama}, energy anda saat ini adalah ${this.energy}`;
}

let contoh = new Mahasiswa('Daeng', 30);


//ini adalah contoh prototype dalam bentuk class
class game{
	constructor(nama,energy){
		this.nama = nama;
		this.energy = energy;
	}

	olahraga(jam){
		this.energy += jam;
		return `Halo ${this.nama}, energy anda saat ini adalah ${this.energy}`;
	}
}

let contoh2 = new game("udin", 50);