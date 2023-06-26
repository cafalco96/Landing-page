const url =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7212328c65msh99f35d0823180efp13bad7jsnce82a0513a6e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const videosContainer = null || document.querySelector("#container-feeds");
async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
           <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
      </div>
      <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>     
    `
      )
      .slice(0, 12)
      .join("")}
          `;
    videosContainer.innerHTML = view;
  } catch (error) {
    videosContainer.innerText = "Sorry we have some problems now";
    console.log(error);
  }
})();
