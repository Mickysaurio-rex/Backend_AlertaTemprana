const request = require('supertest');
const app = require('../app'); 

describe('Pruebas de la API', () => {

  test('Debería responder con éxito a una solicitud GET a /api/alertas', async () => {
    const response = await request(app).get('/api/alertas');
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con éxito a una solicitud GET a /api/estado', async () => {
    const response = await request(app).get('/api/estado');
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con éxito a una solicitud GET a /api/tipo_alerta', async () => {
    const response = await request(app).get('/api/tipo_alerta');
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con éxito a una solicitud GET a /api/tipo_desastre', async () => {
    const response = await request(app).get('/api/tipo_desastre');
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con éxito a una solicitud GET a /api/zona', async () => {
    const response = await request(app).get('/api/zona');
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con éxito a una solicitud GET a /api/numeros_emergencia', async () => {
    const response = await request(app).get('/api/numeros_emergencia');
    expect(response.statusCode).toBe(200);
  });
});
