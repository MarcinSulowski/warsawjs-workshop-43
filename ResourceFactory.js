export default function ResourceFactory() {
  let loading = false;
  let error = null;
  let data = null;

  return {
    startLoading() {
      error = null;
      loading = true;
    },
    stopLoading(newData) {
      loading = false;
      data = newData;
    },
    getData() {
      return data;
    },
    isLoading() {
      return loading;
    },
    handleError(newError) {
      error = newError;
    },
    getError() {
      return error;
    },
  };
}
