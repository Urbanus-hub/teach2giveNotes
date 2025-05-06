const sendRequest = async (title) => {
  const url = new URL("http://www.omdbapi.com/");
  url.searchParams.append("s", title);
  url.searchParams.append("apikey", "YOUR_OMDB_API_KEY"); // Get from http://www.omdbapi.com/apikey.aspx

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

sendRequest("Inception");