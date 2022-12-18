export async function fetchImages(breed) {
    const response = await fetch(
      `https://random.dog/woof.json`
    );
    const data = await response.json();
    return data.message;
  }