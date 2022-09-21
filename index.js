const min = 1;
const max = 100000;
const numb = Math.floor(Math.random() * (max - min));

async function getArtist() {
  try {
    const results = await fetch(`https://randomuser.me/api/`).then((res) => {
      return res;
    });

    console.log(results);
  } catch (err) {
    console.log(err);
  }
}
getArtist();
