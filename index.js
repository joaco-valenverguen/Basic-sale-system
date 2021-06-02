class producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idproducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }

  toString() {
    return `idProducto: ${this._idProducto},  nombre: ${this._nombre}, precio: ${this._precio}  \n`;
  }
}

let producto1 = new producto("Pantalon", 200);
let producto2 = new producto("Camisa", 100);

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PORDUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductosAgregados;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PORDUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("No se pueden agregar más mensajes");
    }
  }

  calcularTotal() {
    let totalVenta = 0;

    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productosOrden = "";

    for (let producto of this._productos) {
      productosOrden += producto.toString() + " ";
    }
    console.log(
      `Orden: ${
        this._idOrden
      } Total: ${this.calcularTotal()}, Productos: ${productosOrden} `
    );
  }
}
