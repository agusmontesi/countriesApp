const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
      it('should work when there is no area or population data', () => {
        Country.create({area:"", poblacion:""})
      });
      it('should throw an error if id have more than three characters or is null', ()=>{
        Country.create({ id: "ARGE", name: 'Argentina' })
        .then(() => done(new Error('The ID is invalid')))
        Country.create({ id: "", name: 'Argentina' })
        .then(() => done(new Error('The ID is invalid')))
      })
    });
  });
});