function Cilindro(r,h) {
    this.raioBase = r;
    this.altura = h;
    this.areaBase = function calculaAreaBase() {
        aBase = Math.PI * Math.pow(this.raioBase, 2);
        return aBase + 'cm²';
    };
    this.areaLateral = function calculaAreaLateral() {
        aLateral = 2 * Math.PI * this.raioBase * this. altura;
        return aLateral + 'cm²';
    };
    this.areaTotal = function calculaAreaTotal() {
        return 2 * aBase + aLateral + 'cm²'; 
    };
    this.volume = function calculaVolume() {
        return aBase * this.altura + 'cm³';
    }
}
cilindroDois = new Cilindro(3,10);
alert('Raio da Base: ' + cilindroDois.raioBase + 'cm' + "\nAltura: " + cilindroDois.altura + 'cm' + '\nÁrea Base: '
     + cilindroDois.areaBase() + '\nÁrea Lateral: ' + cilindroDois.areaLateral() + '\nÁrea total: ' +
    cilindroDois.areaTotal() + '\nVolume: ' + cilindroDois.volume());