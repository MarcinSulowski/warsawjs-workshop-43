export default function fetchWithServerError(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Network error occurred while fetching');
    }
    return res.json();
  });
}
