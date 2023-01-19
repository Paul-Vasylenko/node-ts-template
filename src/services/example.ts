import BaseService from 'services';

class ExampleService extends BaseService {
  public async exampleEntities() {
    return [
      {
        id: 1,
        name: '1',
      },
      {
        id: 2,
        name: '2',
      },
    ];
  }
}

export default new ExampleService();
