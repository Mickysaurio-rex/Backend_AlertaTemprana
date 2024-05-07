const request = require('supertest');
const app = require('../app');

test('Debería responder con éxito a una solicitud GET a /api/usuarios y la respuesta está en un objeto con una propiedad "body"', async () => {
    const response = await request(app).get('/api/usuarios');
    //console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  
    // Verificar que el cuerpo de la respuesta es un objeto
    expect(typeof response.body).toBe('object');
  
    // Verificar que el objeto tiene una propiedad "body" que es un array de usuarios
    expect(response.body).toHaveProperty('body');
    expect(Array.isArray(response.body.body)).toBe(true);
  
    // Verificar que cada elemento del array es un objeto con las propiedades esperadas
    response.body.body.forEach(item => {
      expect(typeof item).toBe('object');
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('nombre');
      expect(item).toHaveProperty('apellidos');
      expect(item).toHaveProperty('telefono');
      expect(item).toHaveProperty('rol');
    });
  });
  