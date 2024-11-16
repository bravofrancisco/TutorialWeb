const students = [
  {
    name: "Pedro",
    age: 24,
  },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(students); // Usa resolve para retornar el array después del timeout
    }, 2000);
  });
};
getDatos()
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Sintaxis Promise
 */
let Mypromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("funciono");
  } else {
    reject(" no funciono");
  }
});

//Ejemplo basico
// myPromise
//   .then((message) => {
//     console.log(message); // "¡Promesa cumplida!"
//   })
//   .catch((message) => {
//     console.error(message); // "Promesa rechazada."
//   })
//   .finally(() => {
//     console.log("Operación completa."); // Siempre se ejecuta
//   });

//Ejemplo
let anotherPromise = new Promise((resolve, reject) => {
  resolve("Primer paso completado");
});

anotherPromise
  .then((message) => {
    console.log(message);
    return "Segundo paso completado";
  })
  .then((message) => {
    console.log(message);
    return "Tercer paso completado";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Ejercicio 1: Crea una promesa que simule una operación de tiempo de espera usando setTimeout. La promesa debe resolverse después de 3 segundos con el mensaje "Operación exitosa".
 */

let MyPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operacion exitosa");
  }, 3000);
});
MyPromise2.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
});

/**
 * Ejercicio 2: Simulación de Consulta a la Base de Datos
Crea una promesa que simule una consulta a la base de datos. La promesa debe resolverse después de 2 segundos con el mensaje "Consulta a la base de datos exitosa".
 */
let MyPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Consulta a la base de datos exitos");
  }, 2000);
});
MyPromise3.then((message2) => {
  console.log(message2);
}).catch((error2) => {
  console.log(error2);
});

/**
 * Ejercicio 1: Simulación de Descarga de Archivo
Crea una promesa que simule la descarga de un archivo. La promesa debe resolverse después de 5 segundos con el mensaje "Descarga completada".
 */

let download = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Descarga completada");
  }, 5000);
});
download
  .then((meesage3) => {
    console.log(meesage3);
  })
  .catch((error3) => {
    console.log(error3);
  });

/**
   * Ejercicio 3: Simulación de Procesamiento de Datos
Crea una promesa que simule el procesamiento de un conjunto de datos. La promesa debe resolverse después de 4 segundos con el mensaje "Procesamiento de datos completado".
   */

let Mypromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Procesamiento de datos completado clase 4");
  }, 4000);
});
Mypromise4.then((message4) => {
  console.log(message4);
}).catch((erro4) => {
  console.log(erro4);
});

/**
 * Ejercicio 4: Simulación de Envío de Correo Electrónico
Crea una promesa que simule el envío de un correo electrónico. La promesa debe resolverse después de 3 segundos con el mensaje "Correo enviado".
 */

let Mypromise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("correo enviado");
  }, 3000);
});
Mypromise5.then((message5) => {
  console.log(message5);
}).catch((error5) => {
  console.log(error5);
});

/**
 * Ejercicio 5: Simulación de Conexión a un Servidor
Crea una promesa que simule la conexión a un servidor. La promesa debe resolverse después de 2 segundos con el mensaje "Conexión al servidor establecida".
 */
let serverConnectionPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Conexión al servidor establecida");
  }, 2000);
});

serverConnectionPromise
  .then((message) => {
    console.log(message); // Debería imprimir "Conexión al servidor establecida" después de 2 segundos
  })
  .catch((error) => {
    console.error(error);
  });

/**
   * Ejercicio 6: Simulación de Cálculo Matemático
Crea una promesa que simule un cálculo matemático complejo. La promesa debe resolverse después de 1 segundo con el mensaje "Cálculo matemático completado".
   */

let mathCalculationPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Cálculo matemático completado");
  }, 1000);
});

mathCalculationPromise
  .then((message) => {
    console.log(message); // Debería imprimir "Cálculo matemático completado" después de 1 segundo
  })
  .catch((error) => {
    console.error(error);
  });

/**
     * Ejercicio 7: Simulación de Carga de Página
Crea una promesa que simule la carga de una página web. La promesa debe resolverse después de 2 segundos con el mensaje "Página cargada".
     */
let pageLoadingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Página cargada");
  }, 2000);
});

pageLoadingPromise
  .then((message) => {
    console.log(message); // Debería imprimir "Página cargada" después de 2 segundos
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * El encadenamiento de promesas se basa en el hecho de que cada llamada a then también devuelve una promesa. Esto permite que puedas llamar a then de nuevo en esa promesa, y así sucesivamente, creando una cadena de operaciones.
 */
// Paso 1: Descargar datos
let downloadData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Datos descargados");
    resolve("Datos descargados");
  }, 1000);
});

// Paso 2: Procesar los datos
let processData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Datos procesados");
      resolve("Datos procesados");
    }, 1000);
  });
};

// Paso 3: Guardar los datos
let saveData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Datos guardados");
      resolve("Datos guardados");
    }, 1000);
  });
};

// Encadenar las promesas
downloadData
  .then((data) => {
    return processData(data);
  })
  .then((processedData) => {
    return saveData(processedData);
  })
  .then((savedData) => {
    console.log(savedData);
  })
  .catch((error) => {
    console.error(error);
  });

// Paso 1: Obtener usuario
let getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Usuario obtenido");
    resolve({ userId: 1, name: "John Doe" });
  }, 1000);
});

// Paso 2: Obtener los pedidos del usuario
let getUserOrders = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Pedidos obtenidos para el usuario ${user.name}`);
      resolve([
        { orderId: 101, item: "Laptop" },
        { orderId: 102, item: "Mouse" },
      ]);
    }, 1000);
  });
};

// Paso 3: Procesar los pedidos
let processOrders = (orders) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pedidos procesados");
      resolve("Procesamiento de pedidos completado");
    }, 1000);
  });
};

// Paso 4: Enviar confirmación de procesamiento
let sendProcessingConfirmation = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve("Confirmación de procesamiento enviada");
    }, 1000);
  });
};

// Encadenar las promesas
getUser
  .then((user) => {
    return getUserOrders(user);
  })
  .then((orders) => {
    return processOrders(orders);
  })
  .then((processingMessage) => {
    return sendProcessingConfirmation(processingMessage);
  })
  .then((confirmation) => {
    console.log(confirmation); // Debería imprimir "Confirmación de procesamiento enviada"
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Encadenamiento de promesas
 * para manejar pasos consecutivos y cada uno pasa resultado siguiente
 */
let promesa = new Promise(function (resolve, reject) {
  resolve(5);
});
promesa
  .then(function (valor) {
    console.log(valor);
    return valor * 2;
  })
  .then(function (valor) {
    console.log(valor);
    return valor + 3;
  })
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (error5) {
    console.log("Hubo un error:", error5);
  });
