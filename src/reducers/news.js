const news = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_BOOKING':
            return [
                ...state, {
                    url: action.article.url,
                    article: action.article,
                    booked: true
                }
            ]

        case 'UNSAVE_BOOKING':
            return state.map(article =>
                (article.url === action.url)
                    ? { ...article, booked: false } :
                    article)

        default:
            return state
    }
}

export default news
