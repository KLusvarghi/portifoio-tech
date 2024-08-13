export const useFetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.data();
  } catch (err) {
    console.log(err);
  }
};
