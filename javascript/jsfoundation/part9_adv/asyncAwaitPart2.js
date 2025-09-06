function fetechPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchedCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");

    const [blogData, commentData] = await Promise.all([
      fetechPostData(),
      fetchedCommentData(),
    ]);

    console.log(blogData);
    console.log(commentData);

    console.log("fetched complete");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}

getBlogData();
