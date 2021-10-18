# Objeto Factura

Definir la estructura de un objeto que almacena una factura.
Las facturas son documentos de la empresa. Todos los documentos de la empresa incluyen

- la información de la propia empresa (id, nombre de la empresa, dirección, teléfono, NIF),

Las facturas están formadas además por

- la información del cliente (similar a la de la empresa),
- una lista de elementos (cada uno de los cuales dispone de código, descripción, precio, cantidad) y
- otra información básica de la factura (importe total, tipo de IVA, forma de pago).

Una vez definidas las propiedades del objeto, añadir los siguientes métodos:

- un método que calcule el importe total de la factura y actualice el valor de la propiedad correspondiente.
- un método que muestre por pantalla la factura, incluido su importe total, en un formato HTML adecuado.
