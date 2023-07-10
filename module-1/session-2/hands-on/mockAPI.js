async function createMockApiResponse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();

      if (random <= 0.2) {
        reject(new Error("Failed to fetch track."));
      } else {
        const track = {
          title: "song title",
          artists: [{ name: "artist name 1" }],
          duration: 200,
        };
        resolve(track);
      }
    }, 2000);
  });
}

module.exports = {
  createMockApiResponse,
};
