// Writing Asynchronous JavaScript
// Write a function that fetches data from an API using async/await.
// Handle errors properly with try/catch.

// Define an async function to fetch data from a given URL
async function fetchData(url) {
  try {
    // Make a network request and wait for the response
    const res = await fetch(url);

    // If the response is not OK (e.g. 404 or 500), throw an error
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Parse the response body as JSON and return it
    return await res.json();
  } catch (error) {
    // Catch and log any errors that occurred during the fetch
    console.error('Error fetching data:', error);

    // Return null so the caller knows something went wrong
    return null;
  }
}

// Immediately-invoked async function expression (IIFE) to run the fetch logic
(async () => {
  // Call fetchData and wait for the result
  const data = await fetchData('https://meowfacts.herokuapp.com/?count=5');

  // If data was returned and has a `data` field, log it
  if (data && data.data) {
    console.log('Fetched data:', data.data);
  }
})();
