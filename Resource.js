import Model from './Model.js';

export default class Resource extends Model {
  static createdInitialState() {
    return { loading: false, error: null, data: null };
  }

  constructor() {
    super();
    this.update(Resource.createdInitialState());
  }

  isLoading() {
    return this.get('loading');
  }

  startLoading() {
    this.update({ loading: true });
  }

  stopLoading(data) {
    this.update({ loading: false, data });
  }

  getData() {
    return this.get('data');
  }

  handleError(error) {
    this.update({ loading: false, error });
  }

  getError() {
    return this.get('error');
  }
}
