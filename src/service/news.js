
export async function getArticles(category, search) {
    try{
        let articles = await fetch("https://newsapi.org/v2/top-headlines?country=us&category="+ category + "&q=" + search + "&apiKey=798a15f010bf497e970bed0f4569cf17");
        let result = await articles.json();
        articles = null;
        return result.articles;

    }
    catch(error){
        throw error;
    }
    }
